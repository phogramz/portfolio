import * as career from '../data/career.js';
import * as lab from '../data/map.js';
import { profile, experience, education } from '../data/profile.js';
import { projects } from '../data/projects.js';
import { posts } from '../data/posts.js';

/* ---------- язык ---------- */

const ui = {
  ru: {
    home: 'Архитектура', lab: 'Лаборатория', blog: 'Блог', about: 'Опыт', skip: 'К содержимому',
    nav: 'Разделы', langLabel: 'Язык сайта',
    legend: 'Как читать карту',
    solid: 'Уверенно владею', learning: 'Развиваю сейчас', planned: 'В планах',
    nextPoint: 'Следующая точка',
    mainMap: 'Траектория',
    mainHint: 'Снизу вверх: от образования и практики к solution-архитектуре. Это следующая точка, а не финиш: выше неё направления, куда расти дальше. Нажмите на узел, чтобы увидеть детали.',
    labMap: 'Карта лаборатории',
    labHint: 'Дерево растёт снизу вверх: от основы к архитектуре физических систем. Пунктирные узлы внизу взяты из основного трека.',
    mapAria: 'Карта развития. Узлы расположены снизу вверх.',
    fromMain: 'Из основного трека',
    works: 'Проекты',
    labWorks: 'Проекты лаборатории',
    worksLead: 'Каждая работа привязана к узлу карты.',
    latest: 'Из блога', allPosts: 'Все статьи',
    backTo: { main: 'К траектории', lab: 'К лаборатории' },
    track: { main: 'Архитектура', lab: 'Лаборатория' },
    depth: 'Целевая глубина', of: 'из',
    theory: 'Теория', practice: 'Практика',
    done: 'Что сделано',
    empty: 'Здесь пока пусто. Проекты и статьи появятся по мере работы.',
    needs: 'Опирается на', leads: 'Ведёт к',
    root: 'Это корень дерева, он ни на что не опирается.',
    top: 'Дальше этого узла карта пока не прорисована.',
    experience: 'Опыт работы', education: 'Образование',
    tools: 'Инструменты и подходы', domains: 'Домены', languages: 'Языки',
    aboutLead: 'Три года в консалтинге и системной интеграции, сейчас проектирую архитектуру в телекоме.',
    seeMap: 'Смотреть траекторию',
    seeAbout: 'Опыт и образование',
    labTeaserTitle: 'Лаборатория',
    labTeaser: 'Отдельный трек вне основной работы: интернет вещей, связь, компьютерное зрение, робототехника. Учебные исследования, эксперименты и план изучения.',
    openLab: 'Открыть лабораторию',
    labTitle: 'Лаборатория',
    labLede: 'Мой исследовательский трек вне основной работы. Здесь физические системы: устройства, радиосвязь, компьютерное зрение, робототехника. Учебные проекты, эксперименты и план того, что изучаю дальше.',
    blogTitle: 'Технический блог',
    blogLede: 'Пишу о практике системного архитектора: интеграции, документация, нагрузка и то, как ИИ-инструменты меняют инженерную работу. Эксперименты из лаборатории тоже попадают сюда, с отдельной меткой.',
    allTags: 'Все', filter: 'Фильтр по темам',
    noPosts: 'Первые статьи уже в работе и скоро появятся здесь.',
    noPostsTag: 'По этой теме статей пока нет.',
    draft: 'Черновик',
    draftNote: 'Это черновик: он не показывается в списках и открыт только по прямой ссылке. Пометки «дописать» выделены цветом.',
    drafts: 'Черновики',
    minRead: 'мин чтения',
    loading: 'Загружаю статью…',
    loadError: 'Не удалось загрузить текст статьи. Обновите страницу.',
    backToBlog: 'Ко всем статьям',
    notFound: 'Такой страницы нет', notFoundText: 'Возможно, адрес изменился.',
    kind: { research: 'Исследование', pet: 'Pet-проект', study: 'Учебный проект', article: 'Статья', note: 'Заметка' },
    inNode: 'Узел',
    titleSuffix: 'системный архитектор',
    monthNames: ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'],
  },
  en: {
    home: 'Architecture', lab: 'Lab', blog: 'Blog', about: 'Experience', skip: 'Skip to content',
    nav: 'Sections', langLabel: 'Site language',
    legend: 'How to read the map',
    solid: 'Confident', learning: 'Developing now', planned: 'Planned',
    nextPoint: 'Next point',
    mainMap: 'Trajectory',
    mainHint: 'From the bottom up: from education and practice to solution architecture. It is the next point, not the finish: above it are the directions to grow into next. Select a node for details.',
    labMap: 'Lab map',
    labHint: 'The tree grows from the bottom up: from the ground to the architecture of physical systems. The dashed nodes at the bottom come from the main track.',
    mapAria: 'Development map. Nodes run from the bottom up.',
    fromMain: 'From the main track',
    works: 'Projects',
    labWorks: 'Lab projects',
    worksLead: 'Each piece of work is attached to a node on the map.',
    latest: 'From the blog', allPosts: 'All articles',
    backTo: { main: 'Back to the trajectory', lab: 'Back to the lab' },
    track: { main: 'Architecture', lab: 'Lab' },
    depth: 'Target depth', of: 'of',
    theory: 'Theory', practice: 'Practice',
    done: 'What is done',
    empty: 'Nothing here yet. Projects and articles will appear as the work goes on.',
    needs: 'Builds on', leads: 'Leads to',
    root: 'This is a root of the tree; it builds on nothing.',
    top: 'The map is not drawn beyond this node yet.',
    experience: 'Work experience', education: 'Education',
    tools: 'Tools and methods', domains: 'Domains', languages: 'Languages',
    aboutLead: 'Three years in consulting and systems integration; now designing architecture in telecom.',
    seeMap: 'See the trajectory',
    seeAbout: 'Experience and education',
    labTeaserTitle: 'Lab',
    labTeaser: 'A separate track outside my main work: IoT, connectivity, computer vision, robotics. Study research, experiments and a learning plan.',
    openLab: 'Open the lab',
    labTitle: 'Lab',
    labLede: 'My research track outside my main work. It is about physical systems: devices, radio, computer vision, robotics. Study projects, experiments and a plan of what I am learning next.',
    blogTitle: 'Engineering blog',
    blogLede: 'I write about the practice of a systems architect: integrations, documentation, load, and how AI tools change engineering work. Lab experiments end up here too, with their own tag.',
    allTags: 'All', filter: 'Filter by topic',
    noPosts: 'The first articles are in progress and will appear here soon.',
    noPostsTag: 'No articles on this topic yet.',
    draft: 'Draft',
    draftNote: 'This is a draft: it is hidden from lists and only opens by direct link. Notes still to be written are highlighted.',
    drafts: 'Drafts',
    minRead: 'min read',
    loading: 'Loading the article…',
    loadError: 'Could not load the article text. Reload the page.',
    backToBlog: 'All articles',
    notFound: 'No such page', notFoundText: 'The address may have changed.',
    kind: { research: 'Research', pet: 'Pet project', study: 'Study project', article: 'Article', note: 'Note' },
    inNode: 'Node',
    titleSuffix: 'systems architect',
    monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
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

/* ---------- разборщик текста ---------- */

function inline(text) {
  const codes = [];
  let out = esc(text).replace(/`([^`]+)`/g, (_, c) => { codes.push(c); return `\u0000${codes.length - 1}\u0000`; });
  out = out
    .replace(/\[\[(.+?)\]\]/g, '<mark class="todo">$1</mark>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\[([^\]]+)\]\(((?:https?:\/\/|\.{0,2}\/|#|mailto:)[^)\s]*)\)/g, '<a href="$2">$1</a>');
  return out.replace(/\u0000(\d+)\u0000/g, (_, i) => `<code>${codes[i]}</code>`);
}

function richBlocks(text) {
  return text.trim().split(/\n\s*\n/).map((block) => {
    const lines = block.split('\n').map((l) => l.trim()).filter(Boolean);
    if (!lines.length) return '';
    if (lines.length === 1 && /^###\s/.test(lines[0])) return `<h3>${inline(lines[0].slice(4))}</h3>`;
    if (lines.length === 1 && /^##\s/.test(lines[0])) return `<h2>${inline(lines[0].slice(3))}</h2>`;
    if (lines.every((l) => l.startsWith('- '))) return `<ul>${lines.map((l) => `<li>${inline(l.slice(2))}</li>`).join('')}</ul>`;
    if (lines.every((l) => /^\d+\.\s/.test(l))) return `<ol>${lines.map((l) => `<li>${inline(l.replace(/^\d+\.\s/, ''))}</li>`).join('')}</ol>`;
    if (lines.every((l) => l.startsWith('>'))) return `<blockquote><p>${inline(lines.map((l) => l.replace(/^>\s?/, '')).join(' '))}</p></blockquote>`;
    return `<p>${inline(lines.join(' '))}</p>`;
  }).join('');
}

function rich(text) {
  const parts = String(text ?? '').replace(/\r/g, '').split(/^```[^\n]*\n([\s\S]*?)^```[ \t]*$/m);
  return parts.map((part, i) => (i % 2 ? `<pre><code>${esc(part.replace(/\n$/, ''))}</code></pre>` : richBlocks(part))).join('');
}

/* ---------- треки и узлы ---------- */

const canonical = {};
const tracks = {};
for (const [key, data] of [['main', career], ['lab', lab]]) {
  for (const n of data.nodes) if (!n.ref) canonical[n.id] = { ...n, track: key };
}
for (const [key, data] of [['main', career], ['lab', lab]]) {
  const placed = data.nodes.map((n) => (n.ref ? { ...canonical[n.id], x: n.x, y: n.y, needs: [], ref: true } : canonical[n.id]));
  tracks[key] = { key, levels: data.levels, nodes: placed, byId: Object.fromEntries(placed.map((n) => [n.id, n])) };
}

const NODE_W = 176;
const NODE_H = 54;

const published = posts.filter((p) => !p.draft).sort((a, b) => String(b.date).localeCompare(String(a.date)));
const trackOfWork = (w) => w.track ?? canonical[w.nodes[0]]?.track ?? 'main';

function ancestors(track, id, acc = new Set()) {
  for (const need of track.byId[id]?.needs ?? []) {
    if (!acc.has(need)) { acc.add(need); ancestors(track, need, acc); }
  }
  return acc;
}

const leadsTo = (n) => Object.values(canonical).filter((m) => m.needs.includes(n.id) && (n.track === 'lab' || m.track === n.track));
const projectsOf = (id) => projects.filter((p) => p.nodes.includes(id));
const postsOf = (id) => published.filter((p) => (p.nodes ?? []).includes(id));

function statusMark(status, cx, cy) {
  if (status === 'solid') return `<circle class="mark mark-solid" cx="${cx}" cy="${cy}" r="6"/>`;
  if (status === 'learning') {
    return `<circle class="mark mark-ring" cx="${cx}" cy="${cy}" r="6"/>`
      + `<path class="mark mark-half" d="M${cx} ${cy - 6}a6 6 0 0 0 0 12z"/>`;
  }
  return `<circle class="mark mark-empty" cx="${cx}" cy="${cy}" r="6"/>`;
}

function treeSvg(track) {
  const { nodes, byId, levels } = track;
  const edges = nodes.flatMap((n) => n.needs.filter((from) => byId[from]).map((from) => {
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
    const count = n.ref ? 0 : projectsOf(n.id).length + postsOf(n.id).length;
    const startY = n.y - (lines.length - 1) * 9 + 5;
    const text = lines.map((line, i) => (
      `<tspan x="${n.x + 10}" y="${startY + i * 18}">${esc(line)}</tspan>`
    )).join('');
    const badge = count
      ? `<g class="badge"><circle cx="${x0 + NODE_W - 4}" cy="${y0 + 4}" r="10"/><text x="${x0 + NODE_W - 4}" y="${y0 + 8}">${count}</text></g>`
      : '';
    const cls = ['node', `node-${n.status}`, n.ref ? 'node-ref' : '', n.next ? 'node-next' : ''].filter(Boolean).join(' ');
    const label = `${t(n.title)}. ${n.ref ? s().fromMain : s()[n.status]}`;
    return `<a class="${cls}" href="#/node/${n.id}" data-id="${n.id}" aria-label="${esc(label)}">`
      + `<rect x="${x0}" y="${y0}" width="${NODE_W}" height="${NODE_H}" rx="10"/>`
      + statusMark(n.status, x0 + 20, n.y)
      + `<text class="node-text">${text}</text>${badge}</a>`;
  }).join('');

  const ys = levels.map((l) => l.y);
  const top = Math.min(...ys) - 55;
  const height = Math.max(...ys) - top + 45;
  return `<svg class="tree" viewBox="-150 ${top} 1250 ${height}" role="group" aria-label="${esc(s().mapAria)}">`
    + `<g>${guides}</g><g>${edges}</g><g>${boxes}</g></svg>`;
}

function treeList(track) {
  const rows = [...track.levels].sort((a, b) => a.y - b.y).map((l) => {
    const items = track.nodes.filter((n) => n.y === l.y).map((n) => (
      `<li><a class="row row-${n.status}${n.next ? ' row-next' : ''}${n.ref ? ' row-ref' : ''}" href="#/node/${n.id}">`
      + `<span class="dot dot-${n.status}" aria-hidden="true"></span>`
      + `<span>${esc(t(n.title))}</span>`
      + `<span class="row-status">${esc(n.ref ? s().fromMain : n.next ? `${s().nextPoint}. ${s()[n.status]}` : s()[n.status])}</span></a></li>`
    )).join('');
    return `<li class="tier"><h3>${esc(t(l))}</h3><ul>${items}</ul></li>`;
  }).join('');
  return `<ol class="tree-list">${rows}</ol>`;
}

function bindTree(root) {
  root.querySelectorAll('.tree').forEach((svg) => {
    const track = tracks[svg.closest('[data-track]')?.dataset.track ?? 'main'];
    const clear = () => {
      svg.classList.remove('is-tracing');
      svg.querySelectorAll('.on').forEach((el) => el.classList.remove('on'));
    };
    const trace = (id) => {
      clear();
      const chain = ancestors(track, id);
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
  });
}

function mapSection(track, title, hint) {
  return `<section class="map" data-track="${track.key}" aria-labelledby="map-${track.key}">
      <div class="map-head">
        <h2 id="map-${track.key}">${esc(title)}</h2>
        <p>${esc(hint)}</p>
        ${legend()}
      </div>
      <div class="map-canvas">${treeSvg(track)}</div>
      ${treeList(track)}
    </section>`;
}

/* ---------- общие куски ---------- */

function legend() {
  return `<ul class="legend" aria-label="${esc(s().legend)}">`
    + ['solid', 'learning', 'planned'].map((k) => (
      `<li><span class="dot dot-${k}" aria-hidden="true"></span>${esc(s()[k])}</li>`
    )).join('') + '</ul>';
}

function trackChip(key) {
  return `<span class="track-chip track-${key}">${esc(s().track[key])}</span>`;
}

function formatDate(iso) {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso ?? '');
  if (!m) return '';
  const month = s().monthNames[Number(m[2]) - 1];
  return lang === 'ru' ? `${Number(m[3])} ${month} ${m[1]}` : `${month} ${Number(m[3])}, ${m[1]}`;
}

const tagHref = (tag) => `#/blog/tag/${encodeURIComponent(tag)}`;

function postCard(p) {
  const date = formatDate(p.date);
  return `<article class="post-card">
      <p class="post-meta">${trackChip(p.track)}${date ? `<span>${esc(date)}</span>` : ''}${p.draft ? `<span class="draft-mark">${esc(s().draft)}</span>` : ''}</p>
      <h3><a href="#/blog/${esc(p.slug)}">${esc(t(p.title))}</a></h3>
      <p>${esc(t(p.summary))}</p>
      <p class="tags">${p.tags.map((tag) => `<a href="${tagHref(tag)}">${esc(tag)}</a>`).join('')}</p>
    </article>`;
}

function workCard(p, withNode) {
  const node = canonical[p.nodes[0]];
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
      : `<div class="work-body prose">${rich(t(p.body))}</div>`)
    + (images && !withNode ? `<div class="work-images">${images}</div>` : '')
    + (links && !withNode ? `<p class="work-links">${links}</p>` : '')
    + '</article>';
}

/* ---------- страницы ---------- */

function home() {
  const mainWorks = projects.filter((p) => trackOfWork(p) === 'main');
  const mainPosts = published.filter((p) => p.track === 'main').slice(0, 3);
  return `<section class="hero${profile.photo ? ' hero-with-photo' : ''}">
      <div class="hero-text">
        <h1>${esc(t(profile.name))}</h1>
        <p class="hero-role">${esc(t(profile.role))}, ${esc(t(profile.location))}</p>
        <p class="hero-lede">${esc(t(profile.lede))}</p>
      </div>
      ${profile.photo ? `<img class="hero-photo" src="${esc(profile.photo)}" alt="${esc(t(profile.name))}" width="800" height="800">` : ''}
    </section>
    ${mapSection(tracks.main, s().mainMap, s().mainHint)}
    <section class="goal"><p>${esc(t(profile.goal))}</p>
      <p><a class="plain-link" href="#/about">${esc(s().seeAbout)}</a></p></section>
    ${mainPosts.length ? `<section class="posts-strip" aria-labelledby="latest-title">
      <h2 id="latest-title">${esc(s().latest)}</h2>
      <div class="post-grid">${mainPosts.map(postCard).join('')}</div>
      <p><a class="plain-link" href="#/blog">${esc(s().allPosts)}</a></p>
    </section>` : ''}
    ${mainWorks.length ? `<section class="works" aria-labelledby="works-title">
      <h2 id="works-title">${esc(s().works)}</h2>
      <p class="section-lead">${esc(s().worksLead)}</p>
      <div class="work-grid">${mainWorks.map((p) => workCard(p, true)).join('')}</div>
    </section>` : ''}
    <section class="lab-teaser">
      <h2>${esc(s().labTeaserTitle)}</h2>
      <p>${esc(s().labTeaser)}</p>
      <p><a class="plain-link" href="#/lab">${esc(s().openLab)}</a></p>
    </section>`;
}

function labPage() {
  const works = projects.filter((p) => trackOfWork(p) === 'lab');
  const labPosts = published.filter((p) => p.track === 'lab');
  return `<section class="lab-hero">
      <h1>${esc(s().labTitle)}</h1>
      <p class="hero-lede">${esc(s().labLede)}</p>
    </section>
    ${mapSection(tracks.lab, s().labMap, s().labHint)}
    ${labPosts.length ? `<section class="posts-strip"><h2>${esc(s().latest)}</h2>
      <div class="post-grid">${labPosts.map(postCard).join('')}</div></section>` : ''}
    <section class="works" aria-labelledby="lab-works-title">
      <h2 id="lab-works-title">${esc(s().labWorks)}</h2>
      <p class="section-lead">${esc(s().worksLead)}</p>
      <div class="work-grid">${works.map((p) => workCard(p, true)).join('')}</div>
    </section>`;
}

function blogPage(tag, showDrafts) {
  const pool = showDrafts ? posts.filter((p) => p.draft) : published;
  const allTags = [...new Set(published.flatMap((p) => p.tags))].sort((a, b) => a.localeCompare(b));
  const list = tag ? pool.filter((p) => p.tags.includes(tag) || p.track === tag) : pool;
  const chip = (label, href, active) => `<a href="${href}"${active ? ' aria-current="true"' : ''}>${esc(label)}</a>`;
  const filters = published.length ? `<nav class="tag-filter" aria-label="${esc(s().filter)}">
      ${chip(s().allTags, '#/blog', !tag)}
      ${['main', 'lab'].filter((k) => published.some((p) => p.track === k)).map((k) => chip(s().track[k], tagHref(k), tag === k)).join('')}
      ${allTags.map((x) => chip(x, tagHref(x), tag === x)).join('')}
    </nav>` : '';
  const empty = tag ? s().noPostsTag : s().noPosts;
  return `<article class="blog">
      <header class="blog-head">
        <h1>${esc(showDrafts ? s().drafts : s().blogTitle)}</h1>
        <p class="hero-lede">${esc(s().blogLede)}</p>
      </header>
      ${showDrafts ? '' : filters}
      <div class="post-list">${list.length ? list.map(postCard).join('') : `<p class="empty">${esc(empty)}</p>`}</div>
    </article>`;
}

const postCache = {};

async function loadPostText(slug) {
  const key = `${slug}.${lang}`;
  if (postCache[key]) return postCache[key];
  for (const variant of [lang, 'ru']) {
    const res = await fetch(`posts/${slug}.${variant}.md`, { cache: 'no-cache' });
    if (res.ok) { postCache[key] = await res.text(); return postCache[key]; }
  }
  throw new Error('not found');
}

function postPage(p) {
  const date = formatDate(p.date);
  return `<article class="post${p.draft ? ' is-draft' : ''}">
      <p class="back"><a class="plain-link" href="#/blog">${esc(s().backToBlog)}</a></p>
      <header class="post-head">
        <p class="post-meta">${trackChip(p.track)}${date ? `<span>${esc(date)}</span>` : ''}<span class="read-time"></span></p>
        <h1>${esc(t(p.title))}</h1>
        <p class="post-lede">${esc(t(p.summary))}</p>
        <p class="tags">${p.tags.map((tag) => `<a href="${tagHref(tag)}">${esc(tag)}</a>`).join('')}</p>
        ${p.draft ? `<p class="draft-note">${esc(s().draftNote)}</p>` : ''}
      </header>
      <div class="prose post-body" aria-live="polite"><p class="muted">${esc(s().loading)}</p></div>
    </article>`;
}

async function fillPost(p, main) {
  const body = main.querySelector('.post-body');
  try {
    const text = await loadPostText(p.slug);
    if (!body.isConnected) return;
    body.innerHTML = rich(p.draft ? text : text.replace(/\[\[(.+?)\]\]/g, '$1'));
    const words = text.split(/\s+/).length;
    main.querySelector('.read-time').textContent = `${Math.max(1, Math.round(words / 180))} ${s().minRead}`;
  } catch (e) {
    body.innerHTML = `<p class="empty">${esc(s().loadError)}</p>`;
  }
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
  const n = canonical[id];
  if (!n) return notFound();
  const works = projectsOf(id);
  const nodePosts = postsOf(id);
  const needs = n.needs.map((x) => canonical[x]).filter(Boolean);
  const next = leadsTo(n);
  const list = (items) => `<ul class="plain-list">${t(items).map((i) => `<li>${esc(i)}</li>`).join('')}</ul>`;
  const back = n.track === 'lab' ? '#/lab' : '#/';
  return `<article class="node-page">
      <p class="back"><a class="plain-link" href="${back}">${esc(s().backTo[n.track])}</a></p>
      <header class="node-head">
        <h1>${esc(t(n.title))}</h1>
        <div class="node-state">
          ${trackChip(n.track)}
          <span class="chip"><span class="dot dot-${n.status}" aria-hidden="true"></span>${esc(n.next ? `${s().nextPoint}. ${s()[n.status]}` : s()[n.status])}</span>
          ${n.depth ? depthMeter(n) : ''}
        </div>
        <p class="node-summary">${esc(t(n.summary))}</p>
      </header>
      <div class="two-col">
        <section><h2>${esc(s().theory)}</h2>${list(n.theory)}</section>
        <section><h2>${esc(s().practice)}</h2>${list(n.practice)}</section>
      </div>
      <section class="done">
        <h2>${esc(s().done)}</h2>
        ${nodePosts.length ? `<div class="post-grid">${nodePosts.map(postCard).join('')}</div>` : ''}
        ${works.map((p) => workCard(p, false)).join('')}
        ${!works.length && !nodePosts.length ? `<p class="empty">${esc(s().empty)}</p>` : ''}
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
    <p><a class="plain-link" href="#/">${esc(s().seeMap)}</a></p></article>`;
}

/* ---------- каркас и маршруты ---------- */

function route() {
  const parts = location.hash.replace(/^#\/?/, '').split('/').filter(Boolean).map(decodeURIComponent);
  if (!parts.length) return { name: 'home', track: 'main' };
  if (parts[0] === 'node' && parts[1]) return { name: 'node', id: parts[1], track: canonical[parts[1]]?.track ?? 'main' };
  if (parts[0] === 'lab') return { name: 'lab', track: 'lab' };
  if (parts[0] === 'about') return { name: 'about', track: 'main' };
  if (parts[0] === 'blog') {
    if (parts[1] === 'tag' && parts[2]) return { name: 'blog', tag: parts[2], track: 'main' };
    if (parts[1] === 'drafts') return { name: 'blog', drafts: true, track: 'main' };
    if (parts[1]) {
      const post = posts.find((p) => p.slug === parts[1]);
      return post ? { name: 'post', post, track: post.track } : { name: 'missing', track: 'main' };
    }
    return { name: 'blog', track: 'main' };
  }
  return { name: 'missing', track: 'main' };
}

function renderChrome(r) {
  const section = r.name === 'node' ? (r.track === 'lab' ? 'lab' : 'home') : r.name === 'post' ? 'blog' : r.name;
  const cur = (name) => (section === name ? ' aria-current="page"' : '');
  document.getElementById('header').innerHTML = `
    <a class="brand" href="#/">${esc(t(profile.name))}</a>
    <nav aria-label="${esc(s().nav)}">
      <a href="#/"${cur('home')}>${esc(s().home)}</a>
      <a href="#/blog"${cur('blog')}>${esc(s().blog)}</a>
      <a href="#/about"${cur('about')}>${esc(s().about)}</a>
      <a class="nav-lab" href="#/lab"${cur('lab')}>${esc(s().lab)}</a>
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
  document.body.dataset.theme = r.track === 'lab' ? 'lab' : 'main';
  renderChrome(r);
  let title = s().titleSuffix;
  if (r.name === 'home') main.innerHTML = home();
  else if (r.name === 'lab') { main.innerHTML = labPage(); title = s().labTitle; }
  else if (r.name === 'blog') { main.innerHTML = blogPage(r.tag, r.drafts); title = s().blogTitle; }
  else if (r.name === 'post') { main.innerHTML = postPage(r.post); title = t(r.post.title); fillPost(r.post, main); }
  else if (r.name === 'node') { main.innerHTML = nodePage(r.id); title = canonical[r.id] ? t(canonical[r.id].title) : s().notFound; }
  else if (r.name === 'about') { main.innerHTML = aboutPage(); title = s().about; }
  else { main.innerHTML = notFound(); title = s().notFound; }
  document.title = `${t(profile.name)} — ${title}`;
  bindTree(main);
  if (resetScroll) window.scrollTo(0, 0);
}

window.addEventListener('hashchange', () => render(true));
render(false);
