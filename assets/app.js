import { nodes, levels } from '../data/map.js';
import { profile, experience, education } from '../data/profile.js';
import { projects } from '../data/projects.js';

/* ---------- язык ---------- */

const ui = {
  ru: {
    map: 'Карта', about: 'Опыт', skip: 'К содержимому',
    langLabel: 'Язык сайта',
    legend: 'Как читать карту',
    solid: 'Уверенно владею', learning: 'Изучаю, есть база', planned: 'В планах',
    mapHint: 'Дерево растёт снизу вверх: от основы к архитектуре. Нажмите на узел, чтобы увидеть теорию, практику и сделанные работы.',
    mapAria: 'Карта развития. Узлы расположены снизу вверх, от основы к архитектуре.',
    works: 'Проекты и исследования',
    worksLead: 'Каждая работа привязана к узлу карты.',
    backToMap: 'К карте',
    depth: 'Целевая глубина', of: 'из',
    theory: 'Теория', practice: 'Практика',
    done: 'Что сделано',
    empty: 'Здесь пока пусто. Проекты, статьи и заметки появятся по мере изучения.',
    needs: 'Опирается на', leads: 'Ведёт к',
    root: 'Это корень дерева, он ни на что не опирается.',
    top: 'Это вершина дерева.',
    experience: 'Опыт работы', education: 'Образование',
    tools: 'Инструменты и подходы', domains: 'Домены', languages: 'Языки',
    aboutLead: 'Три года в консалтинге и системной интеграции, сейчас проектирую архитектуру в телекоме.',
    seeMap: 'Смотреть карту развития',
    seeAbout: 'Опыт и образование',
    notFound: 'Такой страницы нет', notFoundText: 'Возможно, узел переименован.',
    kind: { research: 'Исследование', pet: 'Pet-проект', study: 'Учебный проект', article: 'Статья', note: 'Заметка' },
    inNode: 'Узел',
    titleSuffix: 'карта развития',
  },
  en: {
    map: 'Map', about: 'Experience', skip: 'Skip to content',
    langLabel: 'Site language',
    legend: 'How to read the map',
    solid: 'Confident', learning: 'Learning, have the basics', planned: 'Planned',
    mapHint: 'The tree grows from the bottom up: from the ground to architecture. Select a node to see its theory, practice and finished work.',
    mapAria: 'Development map. Nodes run from the bottom up, from the ground to architecture.',
    works: 'Projects and research',
    worksLead: 'Each piece of work is attached to a node on the map.',
    backToMap: 'Back to the map',
    depth: 'Target depth', of: 'of',
    theory: 'Theory', practice: 'Practice',
    done: 'What is done',
    empty: 'Nothing here yet. Projects, articles and notes will appear as I learn.',
    needs: 'Builds on', leads: 'Leads to',
    root: 'This is a root of the tree; it builds on nothing.',
    top: 'This is the top of the tree.',
    experience: 'Work experience', education: 'Education',
    tools: 'Tools and methods', domains: 'Domains', languages: 'Languages',
    aboutLead: 'Three years in consulting and systems integration; now designing architecture in telecom.',
    seeMap: 'See the development map',
    seeAbout: 'Experience and education',
    notFound: 'No such page', notFoundText: 'The node may have been renamed.',
    kind: { research: 'Research', pet: 'Pet project', study: 'Study project', article: 'Article', note: 'Note' },
    inNode: 'Node',
    titleSuffix: 'development map',
  },
};

function readLang() {
  try {
    const saved = localStorage.getItem('lang');
    if (saved === 'ru' || saved === 'en') return saved;
  } catch (e) { /* хранилище недоступно */ }
  return (navigator.language || 'ru').toLowerCase().startsWith('ru') ? 'ru' : 'en';
}

let lang = readLang();
const s = () => ui[lang];
const t = (v) => (v && typeof v === 'object' && !Array.isArray(v) ? (v[lang] ?? v.ru) : v);

const esc = (str) => String(str ?? '').replace(/[&<>"']/g, (c) => (
  { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]
));

/* ---------- маленький разборщик текста ---------- */

function inline(text) {
  return esc(text)
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\[([^\]]+)\]\(((?:https?:\/\/|\.{0,2}\/|#|mailto:)[^)\s]*)\)/g, '<a href="$2">$1</a>');
}

function rich(text) {
  return String(text ?? '').trim().split(/\n\s*\n/).map((block) => {
    const lines = block.split('\n').map((l) => l.trim()).filter(Boolean);
    if (lines.length && lines.every((l) => l.startsWith('- '))) {
      return `<ul>${lines.map((l) => `<li>${inline(l.slice(2))}</li>`).join('')}</ul>`;
    }
    return `<p>${inline(lines.join(' '))}</p>`;
  }).join('');
}

/* ---------- граф ---------- */

const byId = Object.fromEntries(nodes.map((n) => [n.id, n]));
const NODE_W = 176;
const NODE_H = 54;

function ancestors(id, acc = new Set()) {
  for (const need of byId[id].needs) {
    if (!acc.has(need)) { acc.add(need); ancestors(need, acc); }
  }
  return acc;
}

const leadsTo = (id) => nodes.filter((n) => n.needs.includes(id));
const worksOf = (id) => projects.filter((p) => p.nodes.includes(id));

function statusMark(status, cx, cy) {
  if (status === 'solid') return `<circle class="mark mark-solid" cx="${cx}" cy="${cy}" r="6"/>`;
  if (status === 'learning') {
    return `<circle class="mark mark-ring" cx="${cx}" cy="${cy}" r="6"/>`
      + `<path class="mark mark-half" d="M${cx} ${cy - 6}a6 6 0 0 0 0 12z"/>`;
  }
  return `<circle class="mark mark-empty" cx="${cx}" cy="${cy}" r="6"/>`;
}

function treeSvg() {
  const edges = nodes.flatMap((n) => n.needs.map((from) => {
    const a = byId[from];
    const y1 = a.y - NODE_H / 2;
    const y2 = n.y + NODE_H / 2;
    const mid = (y1 + y2) / 2;
    return `<path class="edge" data-from="${a.id}" data-to="${n.id}" d="M${a.x} ${y1}C${a.x} ${mid} ${n.x} ${mid} ${n.x} ${y2}"/>`;
  })).join('');

  const guides = levels.map((l) => (
    `<line class="guide" x1="-150" x2="1090" y1="${l.y}" y2="${l.y}"/>`
    + `<text class="level" x="-150" y="${l.y - 8}">${esc(t(l))}</text>`
  )).join('');

  const boxes = nodes.map((n) => {
    const lines = t(n.label);
    const x0 = n.x - NODE_W / 2;
    const y0 = n.y - NODE_H / 2;
    const count = worksOf(n.id).length;
    const startY = n.y - (lines.length - 1) * 9 + 5;
    const text = lines.map((line, i) => (
      `<tspan x="${n.x + 10}" y="${startY + i * 18}">${esc(line)}</tspan>`
    )).join('');
    const badge = count
      ? `<g class="badge"><circle cx="${x0 + NODE_W - 4}" cy="${y0 + 4}" r="10"/><text x="${x0 + NODE_W - 4}" y="${y0 + 8}">${count}</text></g>`
      : '';
    return `<a class="node node-${n.status}" href="#/node/${n.id}" data-id="${n.id}" aria-label="${esc(t(n.title))}. ${esc(s()[n.status])}">`
      + `<rect x="${x0}" y="${y0}" width="${NODE_W}" height="${NODE_H}" rx="10"/>`
      + statusMark(n.status, x0 + 20, n.y)
      + `<text class="node-text">${text}</text>${badge}</a>`;
  }).join('');

  return `<svg class="tree" viewBox="-150 25 1250 835" role="group" aria-label="${esc(s().mapAria)}">`
    + `<g>${guides}</g><g>${edges}</g><g>${boxes}</g></svg>`;
}

function treeList() {
  const rows = [...levels].reverse().map((l) => {
    const items = nodes.filter((n) => n.y === l.y).map((n) => (
      `<li><a class="row row-${n.status}" href="#/node/${n.id}">`
      + `<span class="dot dot-${n.status}" aria-hidden="true"></span>`
      + `<span>${esc(t(n.title))}</span>`
      + `<span class="row-status">${esc(s()[n.status])}</span></a></li>`
    )).join('');
    return `<li class="tier"><h3>${esc(t(l))}</h3><ul>${items}</ul></li>`;
  }).join('');
  return `<ol class="tree-list">${rows}</ol>`;
}

function bindTree(root) {
  const svg = root.querySelector('.tree');
  if (!svg) return;
  const clear = () => {
    svg.classList.remove('is-tracing');
    svg.querySelectorAll('.on').forEach((el) => el.classList.remove('on'));
  };
  const trace = (id) => {
    clear();
    const chain = ancestors(id);
    chain.add(id);
    svg.classList.add('is-tracing');
    svg.querySelectorAll('.node').forEach((el) => el.classList.toggle('on', chain.has(el.dataset.id)));
    svg.querySelectorAll('.edge').forEach((el) => (
      el.classList.toggle('on', chain.has(el.dataset.from) && chain.has(el.dataset.to))
    ));
  };
  svg.querySelectorAll('.node').forEach((el) => {
    el.addEventListener('mouseenter', () => trace(el.dataset.id));
    el.addEventListener('focus', () => trace(el.dataset.id));
    el.addEventListener('mouseleave', clear);
    el.addEventListener('blur', clear);
  });
}

/* ---------- страницы ---------- */

function legend() {
  return `<ul class="legend" aria-label="${esc(s().legend)}">`
    + ['solid', 'learning', 'planned'].map((k) => (
      `<li><span class="dot dot-${k}" aria-hidden="true"></span>${esc(s()[k])}</li>`
    )).join('') + '</ul>';
}

function workCard(p, withNode) {
  const node = byId[p.nodes[0]];
  const meta = [s().kind[p.kind] ?? p.kind, p.year].filter(Boolean).map(esc).join(', ');
  const images = (p.images ?? []).map((src) => `<img src="${esc(src)}" alt="" loading="lazy">`).join('');
  const links = (p.links ?? []).map((l) => `<a href="${esc(l.href)}">${esc(t(l.label))}</a>`).join('');
  return `<article class="work" id="work-${esc(p.id)}">`
    + `<p class="work-meta">${meta}</p>`
    + `<h3>${withNode ? `<a href="#/node/${node.id}">${esc(t(p.title))}</a>` : esc(t(p.title))}</h3>`
    + (withNode && p.images?.length
      ? `<a class="work-thumb" href="#/node/${node.id}" tabindex="-1" aria-hidden="true"><img src="${esc(p.images[0])}" alt="" loading="lazy"></a>` : '')
    + (withNode
      ? `<p>${esc(t(p.summary))}</p><p class="work-node">${esc(s().inNode)}: ${esc(t(node.title))}</p>`
      : `<div class="work-body">${rich(t(p.body))}</div>`)
    + (images && !withNode ? `<div class="work-images">${images}</div>` : '')
    + (links && !withNode ? `<p class="work-links">${links}</p>` : '')
    + '</article>';
}

function home() {
  return `<section class="hero">
      <h1>${esc(t(profile.name))}</h1>
      <p class="hero-role">${esc(t(profile.role))}, ${esc(t(profile.location))}</p>
      <p class="hero-lede">${esc(t(profile.lede))}</p>
    </section>
    <section class="map" aria-labelledby="map-title">
      <div class="map-head">
        <h2 id="map-title">${esc(s().map)}</h2>
        <p>${esc(s().mapHint)}</p>
        ${legend()}
      </div>
      <div class="map-canvas">${treeSvg()}</div>
      ${treeList()}
    </section>
    <section class="goal"><p>${esc(t(profile.goal))}</p>
      <p><a class="plain-link" href="#/about">${esc(s().seeAbout)}</a></p></section>
    <section class="works" aria-labelledby="works-title">
      <h2 id="works-title">${esc(s().works)}</h2>
      <p class="section-lead">${esc(s().worksLead)}</p>
      <div class="work-grid">${projects.map((p) => workCard(p, true)).join('')}</div>
    </section>`;
}

function depthMeter(n) {
  const ticks = Array.from({ length: 10 }, (_, i) => `<i class="${i < n.depth ? 'full' : ''}"></i>`).join('');
  return `<div class="depth"><span>${esc(s().depth)}: ${n.depth} ${esc(s().of)} 10</span>`
    + `<span class="ticks" aria-hidden="true">${ticks}</span></div>`;
}

function nodeLinks(list) {
  return `<ul class="node-links">${list.map((n) => (
    `<li><a href="#/node/${n.id}"><span class="dot dot-${n.status}" aria-hidden="true"></span>${esc(t(n.title))}</a></li>`
  )).join('')}</ul>`;
}

function nodePage(id) {
  const n = byId[id];
  if (!n) return notFound();
  const works = worksOf(id);
  const needs = n.needs.map((x) => byId[x]);
  const next = leadsTo(id);
  const list = (items) => `<ul class="plain-list">${t(items).map((i) => `<li>${esc(i)}</li>`).join('')}</ul>`;
  return `<article class="node-page">
      <p class="back"><a class="plain-link" href="#/">${esc(s().backToMap)}</a></p>
      <header class="node-head">
        <h1>${esc(t(n.title))}</h1>
        <div class="node-state">
          <span class="chip"><span class="dot dot-${n.status}" aria-hidden="true"></span>${esc(s()[n.status])}</span>
          ${depthMeter(n)}
        </div>
        <p class="node-summary">${esc(t(n.summary))}</p>
      </header>
      <div class="two-col">
        <section><h2>${esc(s().theory)}</h2>${list(n.theory)}</section>
        <section><h2>${esc(s().practice)}</h2>${list(n.practice)}</section>
      </div>
      <section class="done">
        <h2>${esc(s().done)}</h2>
        ${works.length ? works.map((p) => workCard(p, false)).join('') : `<p class="empty">${esc(s().empty)}</p>`}
      </section>
      <div class="two-col relations">
        <section><h2>${esc(s().needs)}</h2>${needs.length ? nodeLinks(needs) : `<p class="muted">${esc(s().root)}</p>`}</section>
        <section><h2>${esc(s().leads)}</h2>${next.length ? nodeLinks(next) : `<p class="muted">${esc(s().top)}</p>`}</section>
      </div>
    </article>`;
}

function aboutPage() {
  const jobs = experience.map((e) => `<li class="entry">
      <p class="entry-period">${esc(t(e.period))}</p>
      <div>
        <h3>${esc(t(e.role))}</h3>
        <p class="entry-place">${esc(t(e.company))}</p>
        <p>${esc(t(e.about))}</p>
        ${t(e.points).length ? `<ul class="plain-list">${t(e.points).map((p) => `<li>${esc(p)}</li>`).join('')}</ul>` : ''}
        ${e.stack.length ? `<p class="stack">${e.stack.map(esc).join(', ')}</p>` : ''}
      </div></li>`).join('');
  const schools = education.map((e) => `<li class="entry">
      <p class="entry-period">${esc(e.period)}</p>
      <div>
        <h3>${esc(t(e.programme))}</h3>
        <p class="entry-place">${esc(t(e.place))}. ${esc(t(e.degree))}</p>
        ${e.note ? `<p>${esc(t(e.note))}</p>` : ''}
      </div></li>`).join('');
  return `<article class="about">
      <header class="about-head">
        <h1>${esc(s().about)}</h1>
        <p class="hero-lede">${esc(s().aboutLead)}</p>
        <p><a class="plain-link" href="#/">${esc(s().seeMap)}</a></p>
      </header>
      <section><h2>${esc(s().experience)}</h2><ol class="entries">${jobs}</ol></section>
      <section><h2>${esc(s().education)}</h2><ol class="entries">${schools}</ol></section>
      <section class="facts">
        <div><h2>${esc(s().tools)}</h2><p>${profile.tools.map(esc).join(', ')}</p></div>
        <div><h2>${esc(s().domains)}</h2><p>${t(profile.domains).map(esc).join(', ')}</p>
          <h2>${esc(s().languages)}</h2><p>${t(profile.languages).map(esc).join('. ')}</p></div>
      </section>
    </article>`;
}

function notFound() {
  return `<article class="node-page"><h1>${esc(s().notFound)}</h1><p>${esc(s().notFoundText)}</p>
    <p><a class="plain-link" href="#/">${esc(s().backToMap)}</a></p></article>`;
}

/* ---------- каркас и маршруты ---------- */

function route() {
  const parts = location.hash.replace(/^#\/?/, '').split('/').filter(Boolean);
  if (!parts.length) return { name: 'home' };
  if (parts[0] === 'node' && parts[1]) return { name: 'node', id: decodeURIComponent(parts[1]) };
  if (parts[0] === 'about') return { name: 'about' };
  return { name: 'missing' };
}

function renderChrome(r) {
  const cur = (name) => (r.name === name ? ' aria-current="page"' : '');
  document.getElementById('header').innerHTML = `
    <a class="brand" href="#/">${esc(t(profile.name))}</a>
    <nav aria-label="${lang === 'ru' ? 'Разделы' : 'Sections'}">
      <a href="#/"${cur('home')}>${esc(s().map)}</a>
      <a href="#/about"${cur('about')}>${esc(s().about)}</a>
    </nav>
    <div class="lang" role="group" aria-label="${esc(s().langLabel)}">
      <button type="button" data-lang="ru" aria-pressed="${lang === 'ru'}">RU</button>
      <button type="button" data-lang="en" aria-pressed="${lang === 'en'}">EN</button>
    </div>`;
  document.getElementById('footer').innerHTML = `
    <p>${esc(t(profile.name))}, ${new Date().getFullYear()}</p>
    <p>${profile.contacts.map((c) => `<a href="${esc(c.href)}">${esc(c.label)}</a>`).join('')}</p>`;
  document.querySelector('.skip').textContent = s().skip;
  document.querySelectorAll('.lang button').forEach((b) => b.addEventListener('click', () => {
    lang = b.dataset.lang;
    try { localStorage.setItem('lang', lang); } catch (e) { /* не страшно */ }
    render(false);
  }));
}

function render(resetScroll = true) {
  const r = route();
  const main = document.getElementById('main');
  document.documentElement.lang = lang;
  renderChrome(r);
  let title = s().titleSuffix;
  if (r.name === 'home') main.innerHTML = home();
  else if (r.name === 'node') { main.innerHTML = nodePage(r.id); title = byId[r.id] ? t(byId[r.id].title) : s().notFound; }
  else if (r.name === 'about') { main.innerHTML = aboutPage(); title = s().about; }
  else { main.innerHTML = notFound(); title = s().notFound; }
  document.title = `${t(profile.name)} — ${title}`;
  bindTree(main);
  if (resetScroll) window.scrollTo(0, 0);
}

window.addEventListener('hashchange', () => render(true));
render(false);
