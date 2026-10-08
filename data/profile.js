// Данные о себе: шапка, опыт, образование, контакты.

export const profile = {
  name: { ru: 'Максим Морозов', en: 'Maxim Morozov' },
  role: { ru: 'Системный архитектор', en: 'Systems architect' },
  lede: {
    ru: 'Проектирую ИТ-системы и двигаюсь к архитектуре физических систем: интернет вещей, связь, робототехника. Эта карта показывает, что я уже знаю, что изучаю сейчас и куда иду.',
    en: 'I design IT systems and I am moving towards the architecture of physical systems: IoT, connectivity, robotics. This map shows what I already know, what I am learning now and where I am heading.',
  },
  goal: {
    ru: 'Цель: стать инженером, который берёт задачу из физического мира и проектирует систему целиком: от датчика и канала связи до облачной платформы и процессов заказчика.',
    en: 'The goal: to become an engineer who takes a problem from the physical world and designs the whole system, from the sensor and the radio link to the cloud platform and the customer’s processes.',
  },
  location: { ru: 'Москва', en: 'Moscow' },
  photo: 'images/portrait.jpg',
  contacts: [
    { label: 'GitHub', href: 'https://github.com/phogramz' },
    // Добавьте сюда другие контакты, например:
    // { label: 'Telegram', href: 'https://t.me/...' },
    // { label: 'Email', href: 'mailto:...' },
  ],
  languages: {
    ru: ['Русский, родной', 'Английский, B1'],
    en: ['Russian, native', 'English, B1'],
  },
  domains: { ru: ['Финтех', 'Телеком и IoT', 'Ритейл'], en: ['Fintech', 'Telecom and IoT', 'Retail'] },
  tools: [
    'C4', 'UML', 'ADR', 'DDD', 'BPMN', 'Camunda', 'Enterprise Architect',
    'REST', 'Apache Kafka', 'Debezium', 'PostgreSQL', 'Redis', 'MongoDB',
    'Kubernetes', 'Grafana', 'Jaeger', 'Python', 'SQL', 'C++', 'LLM, RAG, MCP',
  ],
};

export const experience = [
  {
    period: { ru: '2025 — сейчас', en: '2025 — now' },
    company: 'YOTA (MegaFon)',
    role: { ru: 'Системный архитектор', en: 'Systems architect' },
    about: {
      ru: 'Архитектура финансовых сервисов и CRM-системы.',
      en: 'Architecture of financial services and the CRM system.',
    },
    points: { ru: [], en: [] },
    stack: [],
  },
  {
    period: { ru: '2024 — 2025', en: '2024 — 2025' },
    company: { ru: 'Axenix (ранее Accenture)', en: 'Axenix (formerly Accenture)' },
    role: { ru: 'Старший системный аналитик', en: 'Senior systems analyst' },
    about: {
      ru: 'Полный цикл аналитики и запуск нового сервиса.',
      en: 'End-to-end analysis and launch of a new service.',
    },
    points: {
      ru: [
        'Вёл аналитику нового сервиса от требований до реализации и регулярно отчитывался перед заказчиком.',
        'Планировал загрузку команды из 10 человек: аналитиков, разработчиков и тестировщиков.',
        'Согласовывал функциональные и нефункциональные требования с архитекторами и командой безопасности.',
        'Разработал методологию ведения документации системы и проекта.',
        'Был ментором младших аналитиков и проводил ревью их работы.',
      ],
      en: [
        'Led analysis for a new service from requirements to delivery and reported to the customer regularly.',
        'Planned the workload of a 10-person team of analysts, developers and testers.',
        'Agreed functional and non-functional requirements with architects and the security team.',
        'Designed the documentation methodology for the system and the project.',
        'Mentored junior analysts and reviewed their work.',
      ],
    },
    stack: ['Camunda', 'C4', 'Apache Kafka', 'Debezium', 'REST'],
  },
  {
    period: { ru: '2023 — 2024', en: '2023 — 2024' },
    company: { ru: 'Axenix (ранее Accenture)', en: 'Axenix (formerly Accenture)' },
    role: { ru: 'Системный аналитик', en: 'Systems analyst' },
    about: {
      ru: 'Микросервисы управления товарными данными крупнейшего DIY-ритейлера России.',
      en: 'Product data management microservices for the largest DIY retailer in Russia.',
    },
    points: {
      ru: [
        'Провёл более 15 релизов и довёл до приёмки более 150 пользовательских историй.',
        'Подготовил новую систему к миграции из legacy и перенёс данные всего товарного ассортимента компании.',
        'Предложил новый подход к версионированию документации: обновлять её и вводить в проект новых людей стало в разы быстрее.',
        'Оценил трудозатраты на дополнительный функционал объёмом более 700 человеко-часов.',
      ],
      en: [
        'Shipped more than 15 releases and took more than 150 user stories through acceptance.',
        'Prepared the new system for migration from legacy and moved the data for the company’s entire product range.',
        'Proposed a new approach to documentation versioning that made updates and onboarding several times faster.',
        'Estimated more than 700 person-hours of additional functionality.',
      ],
    },
    stack: ['REST', 'Apache Kafka', 'PostgreSQL', 'Redis', 'BPMN', 'Swagger', 'Grafana', 'Jaeger'],
  },
  {
    period: { ru: '2023', en: '2023' },
    company: { ru: 'Axenix (ранее Accenture)', en: 'Axenix (formerly Accenture)' },
    role: { ru: 'Аналитик-стажёр', en: 'Analyst intern' },
    about: {
      ru: 'Анализ ИТ-ландшафта продуктового ритейлера из топ-10 России.',
      en: 'IT landscape analysis for a top-10 Russian grocery retailer.',
    },
    points: {
      ru: [
        'Проанализировал замену более 50 систем ИТ-ландшафта.',
        'Собирал требования, организовывал демонстрации решений экспертам и готовил отчёты с рекомендациями.',
      ],
      en: [
        'Analysed the replacement of more than 50 systems in the IT landscape.',
        'Gathered requirements, organised solution demos for experts and prepared reports with recommendations.',
      ],
    },
    stack: [],
  },
];

export const education = [
  {
    period: '2023 — 2025',
    place: { ru: 'НИУ ВШЭ, МИЭМ', en: 'HSE University, MIEM' },
    degree: { ru: 'Магистр', en: 'Master’s degree' },
    programme: { ru: 'Интернет вещей и киберфизические системы', en: 'Internet of Things and Cyber-Physical Systems' },
    note: {
      ru: 'Магистерская диссертация по видеоаналитике городского дорожного движения защищена на отлично.',
      en: 'Master’s thesis on video analytics of urban road traffic, defended with the top grade.',
    },
  },
  {
    period: '2019 — 2023',
    place: { ru: 'НИУ МГСУ', en: 'Moscow State University of Civil Engineering' },
    degree: { ru: 'Бакалавр, диплом с отличием', en: 'Bachelor’s degree with honours' },
    programme: { ru: 'Информационные системы и технологии', en: 'Information Systems and Technologies' },
    note: null,
  },
];
