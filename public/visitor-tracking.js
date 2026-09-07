(() => {
  // Local previews must not create production visits.
  if (window.location.origin !== "https://yuchanahn.github.io") return;

  let recorded = false;

  function recordVisit() {
    if (recorded || document.visibilityState !== "visible" || document.prerendering) return;
    recorded = true;

    // Keep portfolio selections, excluding arbitrary query strings and fragments.
    const url = new URL(window.location.href);
    const selection = new URLSearchParams();
    for (const key of ["tags", "project", "lang"]) {
      const value = url.searchParams.get(key);
      if (value) selection.set(key, value);
    }
    const query = selection.toString();
    const path = `${url.pathname}${query ? `?${query}` : ""}`;

    // No retries: a lost response can still mean the Worker recorded the visit.
    void fetch("https://portfolio-visitor-worker.ultrauc123.workers.dev/visit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: path.slice(0, 300) }),
      credentials: "omit",
      keepalive: true,
      referrerPolicy: "no-referrer",
    }).catch(() => {
      // Analytics availability must not interrupt the portfolio.
    });
  }

  document.addEventListener("visibilitychange", recordVisit);
  document.addEventListener("prerenderingchange", recordVisit);
  recordVisit();
})();
