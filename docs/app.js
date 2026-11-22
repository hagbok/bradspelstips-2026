(function () {
  const $ = (s) => document.querySelector(s);
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const state = { cat: "", q: "", players: "", onlyNew: false };

  // "2-5" -> [2,5], "2" -> [2,2]
  function range(p) {
    const n = String(p).match(/\d+/g).map(Number);
    return [n[0], n[n.length - 1]];
  }

  function fits(g) {
    if (state.cat && g.cat !== state.cat) return false;
    if (state.onlyNew && !g.isNew) return false;
    if (state.players) {
      const want = Number(state.players);
      const [lo, hi] = range(g.players);
      if (want >= 6 ? hi < 6 : want < lo || want > hi) return false;
    }
    if (state.q) {
      const hay = (g.name + " " + (g.alt || "") + " " + g.text).toLowerCase();
      if (!hay.includes(state.q.toLowerCase())) return false;
    }
    return true;
  }

  function card(g) {
    const paras = g.text.trim()
      ? g.text.split(/\n\n/).map((p) => `<p>${esc(p)}</p>`).join("")
      : `<p class="todo">Text kommer snart…</p>`;
    const extra = (g.extra || []).map((e) => `<a href="${esc(e.url)}" target="_blank" rel="noopener">${esc(e.label)} ↗</a>`).join("");
    const stat = (icon, val, label) => (val ? `<li title="${label}"><span aria-hidden="true">${icon}</span> ${esc(val)}</li>` : "");
    return `
      <article class="game${g.isNew ? " is-new" : ""}">
        <div class="game-head">
          <div>
            <h3><a href="${esc(g.bgg)}" target="_blank" rel="noopener">${esc(g.name)}</a>${g.isNew ? ' <span class="badge">Nytt 2026</span>' : ""}</h3>
            ${g.alt ? `<p class="alt">${esc(g.alt)}</p>` : ""}
          </div>
        </div>
        <ul class="stats">
          ${stat("👥", g.players, "Antal spelare")}
          ${stat("⏱", g.time, "Speltid")}
        </ul>
        <div class="text">${paras}</div>
        <div class="links"><a href="${esc(g.bgg)}" target="_blank" rel="noopener">BoardGameGeek ↗</a>${extra}</div>
      </article>`;
  }

  function render() {
    let html = "", total = 0;
    for (const c of CATEGORIES) {
      const games = GAMES.filter((g) => g.cat === c.id && fits(g))
        .sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
      if (!games.length) continue;
      total += games.length;
      html += `<section class="cat" id="${c.id}"><h2><span class="cat-icon" aria-hidden="true">${c.icon}</span>${esc(c.name)}</h2><div class="grid">${games.map(card).join("")}</div></section>`;
    }
    $("#list").innerHTML = html;
    $("#nohits").hidden = total > 0;
  }

  function renderCats() {
    const all = [{ id: "", name: "Alla" }, ...CATEGORIES];
    $("#cats").innerHTML = all
      .map((c) => `<button type="button" data-cat="${c.id}" aria-pressed="${state.cat === c.id}">${esc(c.name)}</button>`)
      .join("");
  }

  function renderShops() {
    const block = (title, items) =>
      `<div class="shopbox"><h3>${title}</h3><ul>${items
        .map((s) => `<li><a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.name)}</a>${s.info ? `<br><small>${esc(s.info)}</small>` : ""}</li>`)
        .join("")}</ul></div>`;
    $("#shops").innerHTML =
      block("Fysiska butiker i Stockholm", SHOPS.physical) +
      block("Webbutiker", SHOPS.online) +
      block("Jämför priser", SHOPS.prices) +
      block("Utomlands (EU)", SHOPS.abroad);
  }

  $("#cats").addEventListener("click", (e) => {
    const b = e.target.closest("button");
    if (!b) return;
    state.cat = b.dataset.cat;
    renderCats();
    render();
  });
  $("#q").addEventListener("input", (e) => { state.q = e.target.value.trim(); render(); });
  $("#players").addEventListener("change", (e) => { state.players = e.target.value; render(); });
  $("#onlyNew").addEventListener("change", (e) => { state.onlyNew = e.target.checked; render(); });

  // Show "Nytt 2026 (n)" toggle only when there are new games
  const newCount = GAMES.filter((g) => g.isNew).length;
  const newLabel = $("#onlyNew").closest("label");
  if (!newCount) newLabel.hidden = true;
  else newLabel.lastChild.textContent = ` Bara nytt 2026 (${newCount})`;

  renderCats();
  renderShops();
  render();
})();
