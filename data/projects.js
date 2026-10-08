// Проекты, исследования, статьи и заметки. Каждая запись появляется
// на страницах узлов, перечисленных в поле nodes.
//
// kind:   'research' | 'pet' | 'study' | 'article' | 'note'
// nodes:  id узлов из data/map.js
// images: пути к картинкам, например 'images/robot-1.jpg'
// links:  [{ label: '...', href: '...' }]
// body:   текст. Пустая строка разделяет абзацы, строки с "- " дают список,
//         **жирный** и [текст](ссылка) тоже работают.

export const projects = [
  {
    id: 'traffic-video-analytics',
    kind: 'research',
    year: '2025',
    nodes: ['edge-ai'],
    title: {
      ru: 'Видеоаналитика городского дорожного движения',
      en: 'Video analytics of urban road traffic',
    },
    summary: {
      ru: 'Магистерская диссертация в НИУ ВШЭ: новый подход к автоматизированной видеоаналитике дорожного движения на основе компьютерного зрения.',
      en: 'Master’s thesis at HSE University: a new approach to automated road traffic video analytics based on computer vision.',
    },
    body: {
      ru: 'Предложил, реализовал и защитил на отлично подход к автоматизированной видеоаналитике городского дорожного движения с использованием компьютерного зрения.',
      en: 'Proposed, implemented and defended with the top grade an approach to automated video analytics of urban road traffic using computer vision.',
    },
    images: [],
    links: [],
  },
  {
    id: 'lte-scheduler-research',
    kind: 'research',
    year: '',
    nodes: ['cellular'],
    title: {
      ru: 'Алгоритмы планировщиков базовых станций LTE',
      en: 'LTE base station scheduling algorithms',
    },
    summary: {
      ru: 'Научный проект в лаборатории компании YADRO, стипендиат лаборатории.',
      en: 'A research project at the YADRO laboratory, as a laboratory scholarship holder.',
    },
    body: {
      ru: 'Исследовал алгоритмы планировщиков базовых станций LTE в рамках научного проекта лаборатории YADRO.',
      en: 'Studied LTE base station scheduling algorithms as part of a research project at the YADRO laboratory.',
    },
    images: [],
    links: [],
  },
  {
    id: 'hand-kinematics',
    kind: 'study',
    year: '',
    nodes: ['it-systems'],
    title: {
      ru: 'Система анализа кинематики кисти человека',
      en: 'Human hand kinematics analysis system',
    },
    summary: {
      ru: 'Тимлид команды, которая разработала и запустила систему для научной лаборатории НИУ ВШЭ.',
      en: 'Team lead of the team that built and launched the system for a research laboratory at HSE University.',
    },
    body: {
      ru: 'В роли тимлида разработал и запустил с командой систему анализа кинематики кисти человека для научной лаборатории НИУ ВШЭ.',
      en: 'As team lead, built and launched with the team a system for analysing human hand kinematics for a research laboratory at HSE University.',
    },
    images: [],
    links: [],
  },
  {
    id: 'mcp-agents',
    kind: 'pet',
    year: '',
    nodes: ['it-systems'],
    title: {
      ru: 'ИИ-агенты с интеграцией по MCP',
      en: 'AI agents integrated over MCP',
    },
    summary: {
      ru: 'Разработка агентов и их интеграция по MCP, чтобы LLM работала в заданном контексте данных.',
      en: 'Building agents and integrating them over MCP so that an LLM works within a given data context.',
    },
    body: {
      ru: 'Разрабатываю ИИ-агентов и их интеграцию по MCP для работы LLM в заданном контексте данных.',
      en: 'I am building AI agents and their MCP integration so that an LLM works within a given data context.',
    },
    images: [],
    links: [],
  },
];
