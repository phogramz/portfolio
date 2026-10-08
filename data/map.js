// Карта развития: узлы дерева и связи между ними.
// Чтобы изменить статус, глубину или текст узла, правьте этот файл.
//
// status:   'solid'    — уверенно владею, есть рабочий опыт
//           'learning' — есть база, изучаю сейчас
//           'planned'  — в планах
// depth:    целевая глубина от 1 до 10
// needs:    id узлов, на которые опирается этот узел
// x, y:     положение центра узла на карте (поле 1180 × 880)

export const levels = [
  { y: 815, ru: 'Основа', en: 'Ground' },
  { y: 700, ru: 'Устройство и сигнал', en: 'Device and signal' },
  { y: 580, ru: 'Сеть и система', en: 'Network and OS' },
  { y: 455, ru: 'Специализации', en: 'Specialisations' },
  { y: 325, ru: 'Системы', en: 'Systems' },
  { y: 195, ru: 'Платформа', en: 'Platform' },
  { y: 70, ru: 'Архитектура', en: 'Architecture' },
];

export const nodes = [
  {
    id: 'architecture',
    x: 600, y: 70, status: 'learning', depth: 9,
    title: { ru: 'Архитектура решений', en: 'Solution architecture' },
    label: { ru: ['Архитектура', 'решений'], en: ['Solution', 'architecture'] },
    needs: ['distributed', 'cellular', 'iot'],
    summary: {
      ru: 'Вершина дерева: взять задачу физического мира и спроектировать полную систему, от сенсора и радиоканала до платформы и бизнес-системы. Требования, компромиссы, стоимость, надёжность и защита решения перед заказчиком и инженерами.',
      en: 'The top of the tree: take a physical-world problem and design the whole system, from sensor and radio link to platform and business system. Requirements, trade-offs, cost, reliability, and defending the design in front of customers and engineers.',
    },
    theory: {
      ru: ['Функциональные и нефункциональные требования', 'HLD и LLD, интерфейсы, потоки данных', 'ADR и анализ компромиссов', 'Надёжность, доступность, резервирование', 'Безопасность и наблюдаемость', 'CAPEX, OPEX, TCO, выбор вендоров', 'PoC, RFP и техническое предложение'],
      en: ['Functional and non-functional requirements', 'HLD and LLD, interfaces, data flows', 'ADRs and trade-off analysis', 'Reliability, availability, redundancy', 'Security and observability', 'CAPEX, OPEX, TCO, vendor selection', 'PoC, RFP and technical proposals'],
    },
    practice: {
      ru: ['Оформлять каждый серьёзный проект как архитектурное решение: требования, ограничения, выбор технологий, компромиссы', 'Спроектировать Private 5G для завода: RAN, ядро, транспорт, edge, IoT, безопасность', 'Матрица выбора связи для удалённого промышленного датчика'],
      en: ['Write up every serious project as an architecture decision: requirements, constraints, technology choice, trade-offs', 'Design a private 5G network for a factory: RAN, core, transport, edge, IoT, security', 'A connectivity decision matrix for a remote industrial sensor'],
    },
  },
  {
    id: 'distributed',
    x: 800, y: 195, status: 'planned', depth: 6,
    title: { ru: 'Флот и распределённые системы', en: 'Fleet and distributed systems' },
    label: { ru: ['Флот и распре-', 'делённые системы'], en: ['Fleet and', 'distributed systems'] },
    needs: ['iot', 'industrial', 'robotics', 'it-systems'],
    summary: {
      ru: 'Как отдельные устройства и роботы превращаются в масштабируемую систему: брокеры сообщений, обработка событий, распределение задач, телеметрия, удалённое управление и обновления.',
      en: 'How individual devices and robots become a system that scales: message brokers, event processing, task allocation, telemetry, remote management and updates.',
    },
    theory: {
      ru: ['Событийная архитектура и брокеры сообщений', 'Распределение задач и планирование', 'Конечные автоматы', 'Идемпотентность и повторы', 'Телеметрия и наблюдаемость', 'Сценарии отказов', 'OTA и удалённое управление'],
      en: ['Event-driven architecture and message brokers', 'Task allocation and scheduling', 'State machines', 'Idempotency and retries', 'Telemetry and observability', 'Failure modes', 'OTA and remote management'],
    },
    practice: {
      ru: ['Fleet manager для трёх роботов: очередь задач, выбор робота, контроль батареи, обработка отказов', 'Сто симулированных роботов через MQTT, PostgreSQL и Grafana', 'Искусственно ломать систему: потеря сети, дубли и задержки сообщений, отказ сенсора'],
      en: ['A fleet manager for three robots: task queue, robot selection, battery checks, failure handling', 'A hundred simulated robots over MQTT, PostgreSQL and Grafana', 'Break the system on purpose: network loss, duplicate and delayed messages, sensor faults'],
    },
  },
  {
    id: 'cellular',
    x: 160, y: 325, status: 'learning', depth: 7,
    title: { ru: 'Сотовая связь: GSM, LTE, 5G', en: 'Cellular: GSM, LTE, 5G' },
    label: { ru: ['Сотовая связь', 'GSM, LTE, 5G'], en: ['Cellular', 'GSM, LTE, 5G'] },
    needs: ['rf', 'networking'],
    summary: {
      ru: 'Не история поколений, а система: абонентское устройство, радиосеть, транспорт, ядро. Зачем существует каждый слой, чем control plane отличается от user plane и почему LTE быстрее 3G.',
      en: 'Not a history of generations but a system: user equipment, radio access, transport, core. Why each layer exists, how the control plane differs from the user plane, and why LTE is faster than 3G.',
    },
    theory: {
      ru: ['GSM: регистрация, аутентификация, хэндовер, роуминг', 'LTE: eNodeB, EPC, MME, SGW, PGW, HSS', 'Control plane и user plane', 'OFDMA, ресурсные блоки, QAM, MIMO, HARQ', 'Планировщик базовой станции', '5G NR, 5GC, NSA и SA', 'Network slicing, Private 5G, URLLC, mMTC'],
      en: ['GSM: registration, authentication, handover, roaming', 'LTE: eNodeB, EPC, MME, SGW, PGW, HSS', 'Control plane and user plane', 'OFDMA, resource blocks, QAM, MIMO, HARQ', 'Base station scheduling', '5G NR, 5GC, NSA and SA', 'Network slicing, private 5G, URLLC, mMTC'],
    },
    practice: {
      ru: ['LTE-модем на Raspberry Pi: AT-команды, IP-соединение, MQTT до бэкенда', 'Снять реальные RSRP, RSRQ, SINR, band и cell ID', 'Читать архитектурные спецификации 3GPP TS 23.501 и 23.502 выборочно'],
      en: ['An LTE modem on a Raspberry Pi: AT commands, IP connection, MQTT to a backend', 'Read real RSRP, RSRQ, SINR, band and cell ID values', 'Read the 3GPP architecture specs TS 23.501 and 23.502 selectively'],
    },
  },
  {
    id: 'iot',
    x: 450, y: 325, status: 'learning', depth: 9,
    title: { ru: 'Архитектура IoT', en: 'IoT architecture' },
    label: { ru: ['Архитектура', 'IoT'], en: ['IoT', 'architecture'] },
    needs: ['networking', 'rf'],
    summary: {
      ru: 'Путь данных от датчика до бизнес-системы и осознанный выбор связи. Для каждой технологии понимать дальность, полосу, задержку, энергопотребление и стоимость, чтобы выбирать инженерно, а не по привычке.',
      en: 'The path of data from a sensor to a business system, and a deliberate choice of connectivity. For each technology, know its range, bandwidth, latency, power draw and cost, so the choice is engineering and not habit.',
    },
    theory: {
      ru: ['MQTT, HTTP, CoAP', 'Wi-Fi, BLE, LoRaWAN, NB-IoT, LTE-M', 'Шлюзы и edge', 'Управление устройствами и OTA', 'Безопасность устройств', 'IoT-платформы и облако'],
      en: ['MQTT, HTTP, CoAP', 'Wi-Fi, BLE, LoRaWAN, NB-IoT, LTE-M', 'Gateways and edge', 'Device management and OTA', 'Device security', 'IoT platforms and cloud'],
    },
    practice: {
      ru: ['Один датчик температуры через Wi-Fi, BLE, LoRa и LTE: сравнить энергию, задержку, дальность, надёжность и стоимость', 'Сквозная IoT-платформа: устройство, брокер, сервис, база, дашборд', 'Умная парковка: камера или датчик, edge или облако, какая связь'],
      en: ['One temperature sensor over Wi-Fi, BLE, LoRa and LTE: compare power, latency, range, reliability and cost', 'An end-to-end IoT platform: device, broker, service, database, dashboard', 'Smart parking: camera or sensor, edge or cloud, which link'],
    },
  },
  {
    id: 'industrial',
    x: 700, y: 325, status: 'planned', depth: 7,
    title: { ru: 'Промышленные системы', en: 'Industrial systems' },
    label: { ru: ['Промышленные', 'системы'], en: ['Industrial', 'systems'] },
    needs: ['networking'],
    summary: {
      ru: 'Как устроено производство с точки зрения автоматизации: от контроллера до ERP. Промышленные протоколы, разница между OT и IT, детерминированная связь и безопасность.',
      en: 'How a plant is organised from an automation point of view: from controller to ERP. Industrial protocols, the difference between OT and IT, deterministic communication and safety.',
    },
    theory: {
      ru: ['PLC, SCADA, MES, WMS, ERP', 'OPC UA, Modbus, CAN', 'BACnet, KNX', 'Промышленный Ethernet', 'OT и IT', 'Функциональная безопасность'],
      en: ['PLC, SCADA, MES, WMS, ERP', 'OPC UA, Modbus, CAN', 'BACnet, KNX', 'Industrial Ethernet', 'OT versus IT', 'Functional safety'],
    },
    practice: {
      ru: ['Мини-завод: симулятор PLC на ESP32, конвейер, датчик, исполнительный механизм, MQTT, SCADA, база данных', 'Напечатать маленький конвейер на 3D-принтере'],
      en: ['A mini factory: a PLC simulator on ESP32, conveyor, sensor, actuator, MQTT, SCADA, database', 'Print a small conveyor on a 3D printer'],
    },
  },
  {
    id: 'robotics',
    x: 990, y: 325, status: 'planned', depth: 7,
    title: { ru: 'Робототехника: SLAM, навигация, управление', en: 'Robotics: SLAM, navigation, control' },
    label: { ru: ['Робототехника', 'SLAM, навигация'], en: ['Robotics', 'SLAM, navigation'] },
    needs: ['ros2', 'edge-ai'],
    summary: {
      ru: 'Робот понимает, где он находится, строит маршрут и едет по нему. Здесь сходятся сенсоры, оценка состояния, планирование и управление моторами.',
      en: 'A robot knows where it is, plans a route and follows it. Sensors, state estimation, planning and motor control all meet here.',
    },
    theory: {
      ru: ['Системы координат, преобразования, кватернионы', 'Фильтр Калмана, EKF, фильтр частиц', 'Объединение данных сенсоров', 'Локализация и SLAM', 'A*, Dijkstra, sampling-based планирование', 'ПИД-регулятор, кинематика дифференциального привода'],
      en: ['Coordinate frames, transforms, quaternions', 'Kalman filter, EKF, particle filter', 'Sensor fusion', 'Localisation and SLAM', 'A*, Dijkstra, sampling-based planning', 'PID control, differential drive kinematics'],
    },
    practice: {
      ru: ['Сначала симуляция: робот на виртуальном складе', 'Свой робот: Raspberry Pi, лидар, IMU, энкодеры, ESP32 на моторах', 'Добиться, чтобы робот уверенно определял своё положение'],
      en: ['Simulation first: a robot in a virtual warehouse', 'A robot of my own: Raspberry Pi, lidar, IMU, encoders, ESP32 on the motors', 'Get the robot to localise itself reliably'],
    },
  },
  {
    id: 'rf',
    x: 180, y: 455, status: 'learning', depth: 7,
    title: { ru: 'Радио и беспроводная связь', en: 'RF and wireless' },
    label: { ru: ['Радио и беспро-', 'водная связь'], en: ['RF and', 'wireless'] },
    needs: ['signals'],
    summary: {
      ru: 'Что происходит с сигналом в воздухе. Цель: по условиям задачи посчитать бюджет линии и объяснить, почему устройство перестало работать на расстоянии двух километров.',
      en: 'What happens to a signal in the air. The goal: work out a link budget from the problem statement and explain why a device stopped working two kilometres away.',
    },
    theory: {
      ru: ['Частота, длина волны, антенны', 'dB, dBm, RSSI, SNR, SINR', 'Потери в свободном пространстве', 'Многолучёвость, замирания, эффект Доплера', 'Помехи и шум', 'Бюджет линии'],
      en: ['Frequency, wavelength, antennas', 'dB, dBm, RSSI, SNR, SINR', 'Free-space path loss', 'Multipath, fading, Doppler', 'Interference and noise', 'Link budget'],
    },
    practice: {
      ru: ['Посчитать реальный бюджет линии для LoRa, LTE и Wi-Fi', 'Записать радиоэфир на SDR, найти сигналы, измерить полосу'],
      en: ['Work out a real link budget for LoRa, LTE and Wi-Fi', 'Record the air with an SDR, find signals, measure bandwidth'],
    },
  },
  {
    id: 'edge-ai',
    x: 730, y: 455, status: 'learning', depth: 6,
    title: { ru: 'Компьютерное зрение и Edge AI', en: 'Computer vision and edge AI' },
    label: { ru: ['Компьютерное', 'зрение, Edge AI'], en: ['Computer vision', 'and edge AI'] },
    needs: ['linux'],
    summary: {
      ru: 'ИИ как часть физической системы, а не отдельный ML-проект: что считать на устройстве, что отправлять в облако, какая нужна задержка и что делать при потере связи.',
      en: 'AI as part of a physical system, not a separate ML project: what to compute on the device, what to send to the cloud, what latency is needed and what to do when the link drops.',
    },
    theory: {
      ru: ['Модель камеры, разрешение, FPS, задержка', 'Детекция, трекинг, сегментация', 'Инференс на CPU и GPU', 'Квантизация и оптимизация моделей', 'Обновление моделей на устройствах'],
      en: ['Camera model, resolution, FPS, latency', 'Detection, tracking, segmentation', 'Inference on CPU and GPU', 'Quantisation and model optimisation', 'Updating models on devices'],
    },
    practice: {
      ru: ['Камера, YOLO, трекер, событие, MQTT, реакция контроллера', 'Человек вошёл в опасную зону: обнаружение на edge и локальное решение без облака'],
      en: ['Camera, YOLO, tracker, event, MQTT, controller reaction', 'A person enters a danger zone: detection at the edge and a local decision without the cloud'],
    },
  },
  {
    id: 'ros2',
    x: 990, y: 455, status: 'planned', depth: 7,
    title: { ru: 'ROS 2', en: 'ROS 2' },
    label: { ru: ['ROS 2'], en: ['ROS 2'] },
    needs: ['linux'],
    summary: {
      ru: 'Стандартная программная основа роботов: узлы, обмен сообщениями и готовые пакеты для восприятия, локализации и навигации.',
      en: 'The standard software base for robots: nodes, message passing, and ready-made packages for perception, localisation and navigation.',
    },
    theory: {
      ru: ['Узлы, топики, сервисы, действия', 'Сообщения, издатель и подписчик', 'TF и системы координат', 'QoS и DDS', 'Launch-файлы и параметры', 'Жизненный цикл узлов'],
      en: ['Nodes, topics, services, actions', 'Messages, publisher and subscriber', 'TF and coordinate frames', 'QoS and DDS', 'Launch files and parameters', 'Node lifecycle'],
    },
    practice: {
      ru: ['На Raspberry Pi: узлы камеры, лидара, IMU, локализации, навигации и моторов', 'Сначала в симуляции, потом на реальном роботе'],
      en: ['On a Raspberry Pi: camera, lidar, IMU, localisation, navigation and motor nodes', 'Simulation first, then a real robot'],
    },
  },
  {
    id: 'networking',
    x: 480, y: 580, status: 'planned', depth: 8,
    title: { ru: 'Сети', en: 'Networking' },
    label: { ru: ['Сети'], en: ['Networking'] },
    needs: ['embedded'],
    summary: {
      ru: 'Обязательный ствол: через сети сходятся IoT, робототехника, edge и телеком. Уверенно понимать путь пакета от Ethernet до прикладного протокола и видеть его в Wireshark.',
      en: 'The trunk everything passes through: IoT, robotics, edge and telecom all meet at the network. Follow a packet from Ethernet up to the application protocol, and see it in Wireshark.',
    },
    theory: {
      ru: ['L2: Ethernet, MAC, ARP, VLAN', 'L3: IP, подсети, маршрутизация, NAT, ICMP', 'L4: TCP, UDP, порты, повторные передачи', 'DNS, DHCP, HTTP, WebSocket, MQTT', 'TLS, сертификаты, аутентификация'],
      en: ['L2: Ethernet, MAC, ARP, VLAN', 'L3: IP, subnets, routing, NAT, ICMP', 'L4: TCP, UDP, ports, retransmission', 'DNS, DHCP, HTTP, WebSocket, MQTT', 'TLS, certificates, authentication'],
    },
    practice: {
      ru: ['ESP32 публикует по Wi-Fi и MQTT в Mosquitto на Raspberry Pi, дальше Python, база и Grafana', 'Разобрать в Wireshark: DHCP, ARP, DNS, рукопожатия TCP и TLS, MQTT CONNECT и PUBLISH'],
      en: ['An ESP32 publishes over Wi-Fi and MQTT to Mosquitto on a Raspberry Pi, then Python, a database and Grafana', 'Take apart in Wireshark: DHCP, ARP, DNS, the TCP and TLS handshakes, MQTT CONNECT and PUBLISH'],
    },
  },
  {
    id: 'linux',
    x: 760, y: 580, status: 'planned', depth: 6,
    title: { ru: 'Linux и edge-устройства', en: 'Linux and edge devices' },
    label: { ru: ['Linux и', 'edge-устройства'], en: ['Linux and', 'edge devices'] },
    needs: ['embedded', 'it-systems'],
    summary: {
      ru: 'Слой, который связывает IoT с робототехникой. Не ядро Linux, а уверенная работа с системой: процессы, сеть, сервисы, логи, контейнеры.',
      en: 'The layer that connects IoT to robotics. Not the kernel, but confident work with the system: processes, networking, services, logs, containers.',
    },
    theory: {
      ru: ['Процессы, потоки, IPC, сокеты', 'Файловая система и права', 'systemd и логи', 'Сеть и SSH', 'Docker', 'Основы shell'],
      en: ['Processes, threads, IPC, sockets', 'Filesystem and permissions', 'systemd and logs', 'Networking and SSH', 'Docker', 'Shell basics'],
    },
    practice: {
      ru: ['Raspberry Pi 5 как edge-узел: в Docker брокер MQTT, база, API, Grafana и сервис с моделью'],
      en: ['A Raspberry Pi 5 as an edge node: an MQTT broker, database, API, Grafana and a model service in Docker'],
    },
  },
  {
    id: 'signals',
    x: 240, y: 700, status: 'planned', depth: 7,
    title: { ru: 'Сигналы и цифровая связь', en: 'Signals and digital communications' },
    label: { ru: ['Сигналы и', 'цифровая связь'], en: ['Signals and', 'digital comms'] },
    needs: ['electronics'],
    summary: {
      ru: 'Как последовательность 101101 превращается в электромагнитную волну и обратно. Математика изучается по требованию физики, а не отдельным годом.',
      en: 'How the sequence 101101 becomes an electromagnetic wave and comes back. The mathematics is learned when the physics calls for it, not as a separate year.',
    },
    theory: {
      ru: ['Синусоида, частота, фаза, амплитуда', 'Дискретизация и наложение спектров', 'Преобразование Фурье, свёртка, фильтрация', 'Шум, SNR, BER', 'ASK, FSK, PSK, QPSK, QAM, OFDM', 'I/Q-представление', 'Канальное кодирование и синхронизация'],
      en: ['Sine wave, frequency, phase, amplitude', 'Sampling and aliasing', 'Fourier transform, convolution, filtering', 'Noise, SNR, BER', 'ASK, FSK, PSK, QPSK, QAM, OFDM', 'I/Q representation', 'Channel coding and synchronisation'],
    },
    practice: {
      ru: ['SDR и GNU Radio: увидеть сигнал во времени и в частоте', 'Простая цифровая связь на Python: биты, QPSK, канал с шумом, приёмник, BER'],
      en: ['SDR and GNU Radio: see a signal in time and in frequency', 'A simple digital link in Python: bits, QPSK, a noisy channel, a receiver, BER'],
    },
  },
  {
    id: 'embedded',
    x: 500, y: 700, status: 'learning', depth: 5,
    title: { ru: 'Встраиваемые системы', en: 'Embedded systems' },
    label: { ru: ['Встраиваемые', 'системы'], en: ['Embedded', 'systems'] },
    needs: ['electronics'],
    summary: {
      ru: 'Не профессия, а слой понимания: как устроен микроконтроллер и его периферия. Достаточно, чтобы прочитать прошивку, написать небольшую свою и собрать PoC.',
      en: 'Not a profession but a layer of understanding: how a microcontroller and its peripherals work. Enough to read firmware, write a small one, and build a PoC.',
    },
    theory: {
      ru: ['GPIO, таймеры, прерывания, DMA', 'UART, SPI, I2C, CAN', 'Стек и куча, карта памяти', 'Watchdog и конечные автоматы', 'Загрузчик и OTA', 'Энергопотребление и режимы сна', 'Основы RTOS'],
      en: ['GPIO, timers, interrupts, DMA', 'UART, SPI, I2C, CAN', 'Stack and heap, memory map', 'Watchdog and state machines', 'Bootloader and OTA', 'Power management and sleep modes', 'RTOS basics'],
    },
    practice: {
      ru: ['Сенсорный узел на ESP32: BME280, MPU6050, VL53L0X, Wi-Fi и UART, с watchdog, сном, OTA и логами', 'Контроллер мотора: энкодер, ШИМ, драйвер, датчик тока, аварийная остановка'],
      en: ['A sensor node on ESP32: BME280, MPU6050, VL53L0X, Wi-Fi and UART, with watchdog, sleep, OTA and logging', 'A motor controller: encoder, PWM, driver, current sensor, emergency stop'],
    },
  },
  {
    id: 'electronics',
    x: 370, y: 815, status: 'learning', depth: 5,
    title: { ru: 'Электроника и сенсоры', en: 'Electronics and sensors' },
    label: { ru: ['Электроника', 'и сенсоры'], en: ['Electronics', 'and sensors'] },
    needs: [],
    summary: {
      ru: 'Корень дерева: как физическая величина становится электрическим сигналом, а сигнал превращается в данные. Не стать электронщиком, а понять физический смысл.',
      en: 'The root of the tree: how a physical quantity becomes an electrical signal, and the signal becomes data. Not to become an electronics engineer, but to understand the physics.',
    },
    theory: {
      ru: ['Напряжение, ток, сопротивление, мощность', 'Постоянный и переменный ток', 'Аналоговый и цифровой сигнал', 'АЦП и ЦАП, дискретизация, шум', 'Подтяжки, уровни логики 3,3 и 5 В', 'Питание и земля'],
      en: ['Voltage, current, resistance, power', 'DC and AC', 'Analogue and digital signals', 'ADC and DAC, sampling, noise', 'Pull-ups, 3.3 V and 5 V logic levels', 'Power and ground'],
    },
    practice: {
      ru: ['Датчик температуры на ESP32: АЦП, обработка, отправка по MQTT', 'IMU, GPS и ToF на одном узле', 'Мультиметр и логический анализатор, позже осциллограф'],
      en: ['A temperature sensor on ESP32: ADC, processing, publishing over MQTT', 'IMU, GPS and ToF on one node', 'A multimeter and a logic analyser, later an oscilloscope'],
    },
  },
  {
    id: 'it-systems',
    x: 930, y: 815, status: 'solid', depth: 9,
    title: { ru: 'Системный анализ и интеграция ИТ-систем', en: 'Systems analysis and IT integration' },
    label: { ru: ['Системный анализ', 'и интеграция'], en: ['Systems analysis', 'and integration'] },
    needs: [],
    summary: {
      ru: 'Мой действующий фундамент: три года проектов для крупнейших российских компаний в ритейле, финтехе и телекоме. Требования, микросервисы, интеграции, запуск систем с нуля и миграции.',
      en: 'The ground I already stand on: three years of projects for some of the largest Russian companies in retail, fintech and telecom. Requirements, microservices, integrations, greenfield launches and migrations.',
    },
    theory: {
      ru: ['Сбор и управление требованиями', 'Микросервисы и интеграции: REST, Apache Kafka, CDC на Debezium', 'API-first и событийная архитектура', 'BPMN и Camunda', 'UML, C4, ADR, DDD', 'PostgreSQL, Redis, MongoDB'],
      en: ['Requirements elicitation and management', 'Microservices and integration: REST, Apache Kafka, CDC with Debezium', 'API-first and event-driven architecture', 'BPMN and Camunda', 'UML, C4, ADR, DDD', 'PostgreSQL, Redis, MongoDB'],
    },
    practice: {
      ru: ['Рабочие проекты описаны на странице «Опыт»'],
      en: ['Work projects are described on the Experience page'],
    },
  },
];
