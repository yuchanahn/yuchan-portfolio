(() => {
  const list = document.getElementById("visitor-feed-list");
  const status = document.getElementById("visitor-feed-status");
  const refresh = document.getElementById("refresh-visitors");
  if (!list || !status || !refresh) return;
  let loading = false;
  let reloadPending = false;
  let hasData = false;

  function describePath(path) {
    try {
      const url = new URL(path || "/", window.location.origin);
      const projectId = url.searchParams.get("project");
      const project = window.PORTFOLIO_DATA?.projects?.[projectId];
      if (projectId) return (typeof project?.name === "string" ? project.name : project?.name?.ko) || project?.title?.ko || projectId;
      const tags = url.searchParams.get("tags");
      if (tags) return `태그 · ${tags.split(",").join(" · ")}`;
      return "포트폴리오 홈";
    } catch { return "포트폴리오"; }
  }

  function render(visitors) {
    const fragment = document.createDocumentFragment();
    for (const visitor of visitors.slice(0, 30)) {
      const row = document.createElement("li");
      const identity = document.createElement("div");
      const name = document.createElement("strong");
      name.textContent = typeof visitor.name === "string" ? visitor.name : "익명 방문";
      const detail = document.createElement("span");
      detail.textContent = `${describePath(visitor.path)} · 이 접속 기준 누적 ${Number(visitor.visitCount) || 1}회`;
      identity.append(name, detail);
      const time = document.createElement("time");
      const date = new Date(visitor.visitedAt);
      if (Number.isFinite(date.getTime())) {
        time.dateTime = date.toISOString();
        time.textContent = new Intl.DateTimeFormat("ko-KR", {
          timeZone: "Asia/Seoul", month: "2-digit", day: "2-digit",
          hour: "2-digit", minute: "2-digit", hour12: false,
        }).format(date);
        time.title = `${date.toLocaleString("ko-KR", { timeZone: "Asia/Seoul" })} (한국 시간)`;
      }
      row.append(identity, time);
      fragment.append(row);
    }
    list.replaceChildren(fragment);
  }

  async function load() {
    if (document.visibilityState !== "visible") return;
    if (loading) { reloadPending = true; return; }
    loading = true;
    refresh.disabled = true;
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10000);
    try {
      const response = await fetch("https://portfolio-visitor-worker.ultrauc123.workers.dev/visitors", {
        credentials: "omit", cache: "no-store", signal: controller.signal,
        referrerPolicy: "no-referrer",
      });
      if (!response.ok) throw new Error("Failed to load visits");
      const data = await response.json();
      if (!Array.isArray(data.visitors)) throw new Error("Invalid visits");
      render(data.visitors);
      hasData = true;
      status.textContent = data.visitors.length ? "최근 방문 순 · 한국 시간" : "아직 방문 기록이 없습니다.";
    } catch {
      status.textContent = hasData ? "갱신하지 못했습니다. 이전 기록을 표시합니다." : "방문 기록을 불러오지 못했습니다. 잠시 후 다시 시도합니다.";
    } finally {
      clearTimeout(timeout);
      loading = false;
      refresh.disabled = false;
      if (reloadPending) { reloadPending = false; void load(); }
    }
  }
  refresh.addEventListener("click", load);
  document.addEventListener("portfolio:visit-recorded", load);
  document.addEventListener("visibilitychange", load);
  setInterval(load, 30000);
  void load();
})();
