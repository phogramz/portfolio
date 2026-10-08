// Проекты, исследования, статьи и заметки. Каждая запись появляется
// на страницах узлов, перечисленных в поле nodes. Первый узел в списке
// считается основным: на него ведёт ссылка с главной страницы.
//
// kind:   'research' | 'pet' | 'study' | 'article' | 'note'
// nodes:  id узлов из data/map.js
// images: пути к картинкам, например 'images/robot-1.jpg'
// links:  [{ label: '...', href: '...' }]
// body:   текст. Пустая строка разделяет абзацы, строки с "- " дают список,
//         **жирный** и [текст](ссылка) тоже работают.

export const projects = [
  {
    id: 'pedestrian-crossing-analytics',
    kind: 'research',
    year: '2025',
    nodes: ['edge-ai'],
    title: {
      ru: 'Анализ поведения пешеходов на переходах',
      en: 'Pedestrian behaviour analysis at crossings',
    },
    summary: {
      ru: 'Магистерская диссертация: система видеоаналитики находит переходы на красный свет и оценивает, какие факторы на них влияют. 5817 переходов за двое суток записи с городской камеры.',
      en: 'Master’s thesis: a video analytics system detects red-light crossings and estimates which factors drive them. 5,817 crossings over two days of footage from a city camera.',
    },
    body: {
      ru: `Пешеходы составляют большую долю пострадавших в ДТП, а нарушения на регулируемых переходах обычно изучают вручную по видеозаписям. Я проверил, можно ли делать это автоматически на существующей городской инфраструктуре.

**Что сделал**

- Собрал датасет: двое суток записи с публичной городской камеры, с 06:00 до 19:00.
- Разработал программу видеоаналитики: YOLOv8n находит пешеходов и автомобили, SORT отслеживает их между кадрами, зоны перехода и сигнал светофора задаются разметкой кадра.
- Для каждого перехода система фиксирует факт нарушения и значения факторов: наличие транспорта, час пик и другие.
- Оценил влияние факторов методом логистической регрессии и сравнил отношения шансов с зарубежным исследованием.

**Результат**

- В выборку вошло 5817 переходов, из них 895 на красный свет, это 15,4 %.
- Подтвердил, что фиксацию и анализ таких нарушений можно вести без участия человека.
- Предложил сценарии применения: поиск самых опасных участков и настройка мер профилактики по статистике нарушений.

Диссертация защищена на отлично в НИУ ВШЭ. Стек: Python, OpenCV, YOLOv8, SORT, pandas, statsmodels.`,
      en: `Pedestrians make up a large share of road casualties, and violations at signalised crossings are usually studied by hand from video. I tested whether this can be done automatically on existing city infrastructure.

**What I did**

- Collected a dataset: two days of footage from a public city camera, 06:00 to 19:00.
- Built a video analytics program: YOLOv8n detects pedestrians and cars, SORT tracks them between frames, and the crossing zones and the traffic light are set by frame markup.
- For each crossing the system records whether it was a violation and the values of the factors: vehicles present, rush hour and others.
- Estimated the effect of the factors with logistic regression and compared the odds ratios with a foreign study.

**Result**

- The sample contains 5,817 crossings, 895 of them on red, which is 15.4%.
- Confirmed that such violations can be recorded and analysed without a human in the loop.
- Proposed use cases: finding the most dangerous spots and tuning prevention measures from violation statistics.

The thesis was defended with the top grade at HSE University. Stack: Python, OpenCV, YOLOv8, SORT, pandas, statsmodels.`,
    },
    images: ['images/pedestrian-crossing-detection.jpg'],
    links: [],
  },
  {
    id: 'kinematic-4',
    kind: 'study',
    year: '2024–2025',
    nodes: ['it-systems', 'signals'],
    title: {
      ru: 'Kinematic 4: анализ кинематики движения кисти',
      en: 'Kinematic 4: hand movement kinematics analysis',
    },
    summary: {
      ru: 'Приложение для Института когнитивных нейронаук НИУ ВШЭ: по координатам семи трекеров находит ключевые моменты движения руки и считает метрики. Тимлид и аналитик-разработчик.',
      en: 'An application for the HSE Institute for Cognitive Neuroscience: from the coordinates of seven trackers it finds the key moments of a hand movement and computes metrics. Team lead and analyst-developer.',
    },
    body: {
      ru: `Лаборатория изучает, как мозг планирует движения. В эксперименте человек берёт предмет и ставит его в заданное место, а система захвата движения записывает трёхмерные координаты семи трекеров на руке, очках и предмете с частотой 250 Гц. Раньше эти данные обрабатывали наполовину вручную.

**Моя роль**

Тимлид и аналитик-разработчик в команде из двух разработчиков: собрал и согласовал требования с заказчиком, написал техническое задание, реализовал алгоритмы обработки и вёл документацию.

**Что делает приложение**

- Загружает записи экспериментов в формате .mat.
- Фильтрует сырые данные и находит ключевые моменты: начало движения, раскрытие пальцев, максимальную апертуру захвата, подъём и опускание предмета.
- Считает временные метрики: время реакции, время до захвата, общее время движения и другие.
- Строит графики с настраиваемыми параметрами и выгружает результаты в Excel.

**Результат**

- Самостоятельное приложение на Python и PyQt6, которое могут использовать другие лаборатории.
- Точность на уровне полуручной обработки специалистами, подтверждена пользовательским тестированием на экспериментальных данных.
- Руководства пользователя и разработчика.
- Благодарственный отзыв заказчика.`,
      en: `The laboratory studies how the brain plans movement. In the experiment a person picks up an object and puts it in a given place, while a motion capture system records the 3D coordinates of seven trackers on the hand, the glasses and the object at 250 Hz. Before this project the data was processed half by hand.

**My role**

Team lead and analyst-developer in a team of two developers: gathered and agreed the requirements with the customer, wrote the specification, implemented the processing algorithms and kept the documentation.

**What the application does**

- Loads experiment recordings in .mat format.
- Filters the raw data and finds the key moments: movement onset, finger opening, maximum grip aperture, object lift and object placement.
- Computes timing metrics: reaction time, time to reach, total movement time and others.
- Draws configurable charts and exports the results to Excel.

**Result**

- A standalone application in Python and PyQt6 that other laboratories can use.
- Accuracy on par with semi-manual processing by specialists, confirmed by user acceptance testing on experimental data.
- User and developer guides.
- A letter of thanks from the customer.`,
    },
    images: ['images/kinematic4-ui.png'],
    links: [],
  },
  {
    id: 'lte-scheduler-research',
    kind: 'research',
    year: '2024',
    nodes: ['cellular'],
    title: {
      ru: 'Планировщики базовых станций LTE: Proportional Fair',
      en: 'LTE base station schedulers: Proportional Fair',
    },
    summary: {
      ru: 'Научный проект в лаборатории YADRO, стипендиат лаборатории. Изучал, как планировщик MAC-уровня делит радиоресурсы между абонентами и чем алгоритмы отличаются друг от друга.',
      en: 'A research project at the YADRO laboratory, as a laboratory scholarship holder. I studied how the MAC scheduler shares radio resources between users and how the algorithms differ.',
    },
    body: {
      ru: `Планировщик базовой станции каждую миллисекунду решает, кому из абонентов отдать радиоресурсы. Proportional Fair ищет компромисс: поднять общую пропускную способность соты и при этом не оставить без обслуживания абонентов с плохим сигналом.

**Что сделал**

- Разобрал принцип работы Proportional Fair: приоритет абонента равен отношению его текущей достижимой скорости к средней скорости за прошедший период.
- Сравнил основные алгоритмы планирования LTE: Proportional Fair, Round Robin и Max C/I, их сильные и слабые стороны.
- Выбрал метрики для оценки: пропускная способность, индекс справедливости Джейна, средняя задержка обслуживания пакетов.
- Описал варианты модификаций алгоритмов и составил план исследования: моделирование, анализ производительности, поиск ограничений и улучшений.

На этом проекте я изучал, как устроен LTE на уровне MAC.`,
      en: `Every millisecond the base station scheduler decides which users get radio resources. Proportional Fair looks for a compromise: raise the total cell throughput while still serving users with a poor signal.

**What I did**

- Worked through how Proportional Fair operates: a user’s priority is the ratio of the rate it can achieve right now to its average rate over the recent period.
- Compared the main LTE scheduling algorithms: Proportional Fair, Round Robin and Max C/I, with their strengths and weaknesses.
- Chose the evaluation metrics: throughput, Jain’s fairness index, and average packet service delay.
- Described possible modifications of the algorithms and drew up the research plan: simulation, performance analysis, finding limitations and improvements.

On this project I studied how LTE works at the MAC level.`,
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
