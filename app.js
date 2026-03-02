/* global marked */
(function () {
  function setStatus(text) {
    var el = document.querySelector(".loading");
    if (el) el.textContent = text;
  }

  async function load() {
    try {
      if (!window.marked || !window.marked.parse) {
        setStatus("Markdown renderer failed to load.");
        return;
      }

      window.marked.setOptions({
        headerIds: false,
        mangle: false,
      });

      var res = await fetch("./content.md", { cache: "no-cache" });
      if (!res.ok) {
        setStatus("Could not load content.md (" + res.status + ").");
        return;
      }

      var md = await res.text();
      var html = window.marked.parse(md);

      var root = document.getElementById("cv");
      root.innerHTML = html;

      var title = root.querySelector("h1");
      if (title && title.textContent) {
        document.title = title.textContent.trim() + " — CV";
      }
    } catch (_err) {
      setStatus("Something went wrong loading the CV.");
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", load);
  } else {
    load();
  }
})();
