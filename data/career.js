// Основной трек: системная архитектура. Это первое, что видит посетитель.
// Solution-архитектура здесь не вершина, а следующая точка: выше неё
// стоят направления, куда можно расти дальше.
//
// status:   'solid'    — уверенно владею, есть рабочий опыт
//           'learning' — есть база, развиваю сейчас
//           'planned'  — в планах
// depth:    целевая глубина от 1 до 10, можно не указывать
// next:     true — узел отмечается как следующая точка
// needs:    id узлов, на которые опирается этот узел
// x, y:     положение центра узла на карте

export const levels = [
  { y: 700, ru: 'Учёба', en: 'Study' },
  { y: 580, ru: 'Основа', en: 'Ground' },
  { y: 455, ru: 'Ремесло', en: 'Craft' },
  { y: 325, ru: 'Практика архитектора', en: 'Architecture practice' },
  { y: 195, ru: 'Следующая точка', en: 'Next point' },
  { y: 70, ru: 'Дальше', en: 'Beyond' },
];

export const nodes = [
  {
    id: 'enterprise',
    x: 420, y: 70, status: 'planned',
    title: { ru: 'Enterprise-архитектура', en: 'Enterprise architecture' },
    label: { ru: ['Enterprise-', 'архитектура'], en: ['Enterprise', 'architecture'] },
    needs: ['solution-architecture'],
    summary: {
      ru: 'Архитектура на уровне ландшафта компании: как множество систем вместе поддерживают бизнес-стратегию, где дублируются функции и в каком порядке их менять.',
      en: 'Architecture at the level of the company landscape: how many systems together support the business strategy, where functions overlap and in what order to change them.',
    },
    theory: {
      ru: ['Карты возможностей и ИТ-ландшафт', 'Целевая архитектура и дорожные карты перехода', 'Архитектурное управление и стандарты', 'TOGAF как словарь, а не как процесс'],
      en: ['Capability maps and the IT landscape', 'Target architecture and transition roadmaps', 'Architecture governance and standards', 'TOGAF as a vocabulary, not a process'],
    },
    practice: {
      ru: ['Опыт анализа ландшафта из 50+ систем у ритейлера', 'Описать ландшафт своего домена как карту возможностей'],
      en: ['Experience analysing a landscape of 50+ systems at a retailer', 'Describe my own domain’s landscape as a capability map'],
    },
  },
  {
    id: 'tech-leadership',
    x: 780, y: 70, status: 'planned',
    title: { ru: 'Техническое лидерство', en: 'Technical leadership' },
    label: { ru: ['Техническое', 'лидерство'], en: ['Technical', 'leadership'] },
    needs: ['solution-architecture'],
    summary: {
      ru: 'Отвечать не только за решение, но и за то, как его делают: стандарты, ревью, развитие команды, разговор с бизнесом на языке денег и рисков.',
      en: 'Owning not only the solution but how it is built: standards, reviews, growing the team, and talking to the business in terms of money and risk.',
    },
    theory: {
      ru: ['Архитектурные ревью и стандарты', 'Оценка и управление техническим долгом', 'Наставничество и развитие команды', 'Переговоры и защита решений'],
      en: ['Architecture reviews and standards', 'Assessing and managing technical debt', 'Mentoring and growing a team', 'Negotiating and defending decisions'],
    },
    practice: {
      ru: ['Опыт: планирование команды из 10 человек, наставничество младших аналитиков', 'Публичные статьи о практике архитектора'],
      en: ['Experience: planning a 10-person team, mentoring junior analysts', 'Public articles about architecture practice'],
    },
  },
  {
    id: 'solution-architecture',
    x: 600, y: 195, status: 'learning', depth: 9, next: true,
    title: { ru: 'Solution-архитектура', en: 'Solution architecture' },
    label: { ru: ['Solution-', 'архитектура'], en: ['Solution', 'architecture'] },
    needs: ['domain-arch', 'ai-engineering'],
    summary: {
      ru: 'Следующая точка: отвечать за решение целиком, от бизнес-задачи и требований до выбора технологий, интеграций, стоимости владения и защиты решения перед заказчиком. Не финиш, а уровень, с которого видно, куда расти дальше.',
      en: 'The next point: owning the whole solution, from the business problem and requirements to technology choice, integrations, cost of ownership and defending the design in front of stakeholders. Not a finish line, but a level from which the next steps become visible.',
    },
    theory: {
      ru: ['Функциональные и нефункциональные требования', 'HLD и LLD, интерфейсы, потоки данных', 'ADR и анализ компромиссов', 'Надёжность, доступность, масштабирование', 'Безопасность и соответствие требованиям', 'CAPEX, OPEX, TCO, выбор вендоров', 'Техническое предложение и защита решения'],
      en: ['Functional and non-functional requirements', 'HLD and LLD, interfaces, data flows', 'ADRs and trade-off analysis', 'Reliability, availability, scaling', 'Security and compliance', 'CAPEX, OPEX, TCO, vendor selection', 'Technical proposals and defending a design'],
    },
    practice: {
      ru: ['Оформлять каждое значимое изменение как архитектурное решение: контекст, варианты, выбор, последствия', 'Вести решения своего домена от бизнес-запроса до запуска', 'Писать о решениях в блоге'],
      en: ['Write up every significant change as an architecture decision: context, options, choice, consequences', 'Take solutions in my domain from business request to launch', 'Write about the decisions on the blog'],
    },
  },
  {
    id: 'domain-arch',
    x: 420, y: 325, status: 'learning', depth: 8,
    title: { ru: 'Архитектура систем телекома и финтеха', en: 'Telecom and fintech systems architecture' },
    label: { ru: ['Архитектура систем', 'телекома и финтеха'], en: ['Telecom and fintech', 'architecture'] },
    needs: ['integration', 'modeling'],
    summary: {
      ru: 'Моя текущая работа: архитектура систем в телекоме и финтехе. Здесь знания об интеграциях и моделировании превращаются в решения для высоконагруженных сервисов.',
      en: 'My current work: architecture of systems in telecom and fintech. This is where integration and modelling knowledge turns into decisions for high-load services.',
    },
    theory: {
      ru: ['Предметная область: абонент, тариф, услуга, платёж', 'Высоконагруженные и критичные к доступности сервисы', 'Платёжные сценарии и согласованность данных', 'Требования регуляторов и информационной безопасности'],
      en: ['Domain: subscriber, tariff, service, payment', 'High-load, availability-critical services', 'Payment flows and data consistency', 'Regulatory and information security requirements'],
    },
    practice: {
      ru: ['Архитектура и документация сервисов в промышленной эксплуатации', 'Мониторинг нагрузки и поиск точек оптимизации'],
      en: ['Architecture and documentation of services in production', 'Load monitoring and finding optimisation points'],
    },
  },
  {
    id: 'ai-engineering',
    x: 780, y: 325, status: 'learning', depth: 8,
    title: { ru: 'ИИ в инженерной практике', en: 'AI in engineering practice' },
    label: { ru: ['ИИ в инженерной', 'практике'], en: ['AI in engineering', 'practice'] },
    needs: ['modeling', 'observability'],
    summary: {
      ru: 'Как LLM и агенты меняют работу архитектора: документация, которая генерируется из кода, аналитика нагрузки за часы вместо недель, агенты с доступом к контексту компании.',
      en: 'How LLMs and agents change an architect’s work: documentation generated from code, load analytics in hours instead of weeks, agents with access to company context.',
    },
    theory: {
      ru: ['Claude Code и агентная разработка', 'LLM, RAG, MCP', 'Проектирование инструкций и контекста для агентов', 'Проверка результата: где модели ошибаются', 'Безопасность данных при работе с моделями'],
      en: ['Claude Code and agentic development', 'LLMs, RAG, MCP', 'Designing instructions and context for agents', 'Verifying output: where models go wrong', 'Data security when working with models'],
    },
    practice: {
      ru: ['Автогенерация sequence-диаграмм из кода', 'Дашборд мониторинга нагрузки, собранный с Claude', 'Агенты с интеграцией по MCP'],
      en: ['Generating sequence diagrams from code', 'A load monitoring dashboard built with Claude', 'Agents integrated over MCP'],
    },
  },
  {
    id: 'integration',
    x: 300, y: 455, status: 'solid', depth: 9,
    title: { ru: 'Интеграционная архитектура', en: 'Integration architecture' },
    label: { ru: ['Интеграционная', 'архитектура'], en: ['Integration', 'architecture'] },
    needs: ['it-systems'],
    summary: {
      ru: 'Как сервисы договариваются друг с другом: синхронные и асинхронные вызовы, события, контракты, и что происходит, когда одна из сторон отвечает медленно или не отвечает вовсе.',
      en: 'How services agree with each other: synchronous and asynchronous calls, events, contracts, and what happens when one side is slow or does not answer at all.',
    },
    theory: {
      ru: ['REST и API-first', 'Apache Kafka и событийная архитектура', 'CDC на Debezium', 'Идемпотентность, повторы, outbox, saga', 'Версионирование контрактов'],
      en: ['REST and API-first', 'Apache Kafka and event-driven architecture', 'CDC with Debezium', 'Idempotency, retries, outbox, saga', 'Contract versioning'],
    },
    practice: {
      ru: ['Микросервисы товарных данных крупнейшего DIY-ритейлера: REST, Kafka, миграция из legacy', 'Запуск нового сервиса на Camunda с интеграциями через Kafka и Debezium'],
      en: ['Product data microservices for the largest DIY retailer: REST, Kafka, migration from legacy', 'Launching a new Camunda-based service integrated through Kafka and Debezium'],
    },
  },
  {
    id: 'modeling',
    x: 600, y: 455, status: 'solid', depth: 9,
    title: { ru: 'Моделирование и документация', en: 'Modelling and documentation' },
    label: { ru: ['Моделирование', 'и документация'], en: ['Modelling and', 'documentation'] },
    needs: ['it-systems'],
    summary: {
      ru: 'Архитектура, которую нельзя прочитать, не работает. Диаграммы, решения и документация как часть системы, которая живёт вместе с кодом.',
      en: 'Architecture that cannot be read does not work. Diagrams, decisions and documentation as part of the system, living alongside the code.',
    },
    theory: {
      ru: ['C4 и UML, sequence-диаграммы', 'ADR', 'BPMN', 'Docs-as-code', 'DDD: ограниченные контексты и язык предметной области'],
      en: ['C4 and UML, sequence diagrams', 'ADRs', 'BPMN', 'Docs-as-code', 'DDD: bounded contexts and ubiquitous language'],
    },
    practice: {
      ru: ['Методология документации системы и проекта в консалтинге', 'Версионирование документации, ускорившее обновление и онбординг в разы', 'Автогенерация sequence-диаграмм из кода'],
      en: ['A documentation methodology for a system and a project in consulting', 'Documentation versioning that made updates and onboarding several times faster', 'Generating sequence diagrams from code'],
    },
  },
  {
    id: 'observability',
    x: 900, y: 455, status: 'learning', depth: 7,
    title: { ru: 'Нагрузка и наблюдаемость', en: 'Load and observability' },
    label: { ru: ['Нагрузка и', 'наблюдаемость'], en: ['Load and', 'observability'] },
    needs: ['it-systems'],
    summary: {
      ru: 'Видеть, как система ведёт себя под реальной нагрузкой: где она тратит время, где копятся ошибки и что станет узким местом при росте.',
      en: 'Seeing how a system behaves under real load: where it spends time, where errors pile up, and what becomes the bottleneck as it grows.',
    },
    theory: {
      ru: ['Метрики, логи, трассировки', 'Перцентили задержки и пропускная способность', 'SLI, SLO и бюджет ошибок', 'Планирование мощностей', 'Grafana, Jaeger'],
      en: ['Metrics, logs, traces', 'Latency percentiles and throughput', 'SLIs, SLOs and error budgets', 'Capacity planning', 'Grafana, Jaeger'],
    },
    practice: {
      ru: ['Дашборд мониторинга нагрузки высоконагруженной системы, собранный с Claude'],
      en: ['A load monitoring dashboard for a high-load system, built with Claude'],
    },
  },
  {
    id: 'it-systems',
    x: 600, y: 580, status: 'solid', depth: 9,
    title: { ru: 'Системный анализ и интеграция ИТ-систем', en: 'Systems analysis and IT integration' },
    label: { ru: ['Системный анализ', 'и интеграция'], en: ['Systems analysis', 'and integration'] },
    needs: ['education'],
    summary: {
      ru: 'Мой действующий практический фундамент: три года проектов для крупнейших российских компаний в ритейле, финтехе и телекоме. Требования, микросервисы, интеграции, запуск систем с нуля и миграции.',
      en: 'The practical ground I already stand on: three years of projects for some of the largest Russian companies in retail, fintech and telecom. Requirements, microservices, integrations, greenfield launches and migrations.',
    },
    theory: {
      ru: ['Сбор и управление требованиями', 'Микросервисы и интеграции: REST, Apache Kafka, CDC на Debezium', 'API-first и событийная архитектура', 'BPMN и Camunda', 'UML, C4, ADR, DDD', 'PostgreSQL, Redis, MongoDB'],
      en: ['Requirements elicitation and management', 'Microservices and integration: REST, Apache Kafka, CDC with Debezium', 'API-first and event-driven architecture', 'BPMN and Camunda', 'UML, C4, ADR, DDD', 'PostgreSQL, Redis, MongoDB'],
    },
    practice: {
      ru: ['Три года проектов в ритейле, финтехе и телекоме, подробности на странице «Опыт»'],
      en: ['Three years of projects in retail, fintech and telecom, with details on the Experience page'],
    },
  },
  {
    id: 'education',
    x: 600, y: 700, status: 'solid',
    title: { ru: 'Образование: теоретический фундамент', en: 'Education: the theoretical foundation' },
    label: { ru: ['Образование'], en: ['Education'] },
    needs: [],
    summary: {
      ru: 'Мой теоретический фундамент: бакалавриат по информационным системам и магистратура по интернету вещей и киберфизическим системам. Из бакалавриата выросла работа с ИТ-системами, из магистратуры интерес к физическим системам, связи и компьютерному зрению.',
      en: 'My theoretical foundation: a bachelor’s degree in information systems and a master’s degree in the Internet of Things and cyber-physical systems. The bachelor’s led to my work with IT systems; the master’s led to my interest in physical systems, connectivity and computer vision.',
    },
    theory: {
      ru: ['Магистратура, НИУ ВШЭ, МИЭМ, 2023–2025: «Интернет вещей и киберфизические системы», направление «Инфокоммуникационные технологии и системы связи»', 'Бакалавриат, НИУ МГСУ, 2019–2023: «Информационные системы и технологии», диплом с отличием'],
      en: ['Master’s degree, HSE University, MIEM, 2023–2025: Internet of Things and Cyber-Physical Systems, in the field of Infocommunication Technologies and Communication Systems', 'Bachelor’s degree, Moscow State University of Civil Engineering, 2019–2023: Information Systems and Technologies, with honours'],
    },
    practice: {
      ru: ['Магистерская диссертация по видеоаналитике дорожного движения', 'Проект для Института когнитивных нейронаук НИУ ВШЭ', 'Научный проект в лаборатории YADRO по планировщикам LTE'],
      en: ['Master’s thesis on road traffic video analytics', 'A project for the HSE Institute for Cognitive Neuroscience', 'A research project at the YADRO laboratory on LTE schedulers'],
    },
  },
];
