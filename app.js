const currentSituations = [
  {id:'similar',title:'Компании, похожие на вашу, выбирают',subtitle:'',accent:'#6A5AE0',groups:[],special:true},
  {id:'daily',title:'Наладить ежедневную работу',subtitle:'Пакеты услуг, интеграции и сервисы для регулярных задач',accent:'#0A67E8',groups:['Продукты и сервисы']},
  {id:'money',title:'Управлять деньгами',subtitle:'Счета, карты, наличные и управление ликвидностью',accent:'#3261C8',groups:['Продукты и сервисы']},
  {id:'sales',title:'Начать или увеличить продажи',subtitle:'Приём оплаты, кассы, продвижение и клиентские сервисы',accent:'#7A55E7',groups:['Продукты и сервисы']},
  {id:'accounting',title:'Вести учет, налоги и документы',subtitle:'Бухгалтерия, отчётность, документооборот и электронная подпись',accent:'#119F87',groups:['Продукты и сервисы']},
  {id:'growth',title:'Расширить бизнес',subtitle:'Закупки, развитие, доставка и интеллектуальная собственность',accent:'#E0527D',groups:['Продукты и сервисы']},
  {id:'foreign',title:'Начать работать за рубежом',subtitle:'Партнёры, контракты, валютные риски, таможня и логистика',accent:'#167FA4',groups:['Продукты и сервисы']},
  {id:'funding',title:'Получить финансирование на развитие',subtitle:'Кредиты и гарантии для текущих задач и роста',accent:'#2067B8',groups:['Продукты и сервисы']},
  {id:'savings',title:'Сохранить и приумножить деньги',subtitle:'Депозиты, остатки, резервы и инвестиционные решения',accent:'#3261C8',groups:['Продукты и сервисы']},
  {id:'team',title:'Сформировать команду',subtitle:'Сотрудники, исполнители, зарплата, здоровье и командировки',accent:'#E6822D',groups:['Продукты и сервисы']},
  {id:'protect',title:'Защитить бизнес',subtitle:'Проверки, риски, страхование и правовая поддержка',accent:'#5A6477',groups:['Продукты и сервисы']},
  {id:'change',title:'Начать или изменить бизнес',subtitle:'Счёт, регистрационные изменения и новый формат работы',accent:'#9A5CDA',groups:['Продукты и сервисы']}
];

const newSituations = [
  {id:'similar',title:'Компании, похожие на вашу, выбирают',subtitle:'',accent:'#6A5AE0',groups:[],special:true},
  {id:'daily',title:'Наладить ежедневную работу',subtitle:'Пакеты услуг, интеграции и сервисы для регулярных задач',accent:'#0A67E8',groups:['Продукты и сервисы'],changeType:'changed',changeNote:'<strong>Название:</strong> без изменений.<br><strong>Состав:</strong> «Самозанятость»: «Начать или изменить бизнес» → «Наладить ежедневную работу»; «Мультиконтроль»: «Управлять деньгами» → «Наладить ежедневную работу»; «Корпоративное управление»: «Управлять деньгами» → «Наладить ежедневную работу».'},
  {id:'sales',title:'Начать и увеличить продажи',subtitle:'Приём оплаты, кассы, продвижение и клиентские сервисы',accent:'#7A55E7',groups:['Продукты и сервисы'],changeType:'changed',changeNote:'<strong>Название:</strong> «Начать или увеличить продажи» → «Начать и увеличить продажи».<br><strong>Состав:</strong> без изменений.'},
  {id:'savings',title:'Сохранить и приумножить деньги',subtitle:'Депозиты, остатки, резервы и инвестиционные решения',accent:'#3261C8',groups:['Продукты и сервисы']},
  {id:'money',title:'Управлять деньгами',subtitle:'Счета, карты, наличные и управление ликвидностью',accent:'#3261C8',groups:['Продукты и сервисы'],changeType:'changed',changeNote:'<strong>Название:</strong> без изменений.<br><strong>Состав:</strong> «Новый счёт»: «Начать или изменить бизнес» → «Управлять деньгами»; «Мультиконтроль»: «Управлять деньгами» → «Наладить ежедневную работу»; «Корпоративное управление»: «Управлять деньгами» → «Наладить ежедневную работу».'},
  {id:'growth',title:'Расширить бизнес',subtitle:'Закупки, развитие, доставка и интеллектуальная собственность',accent:'#E0527D',groups:['Продукты и сервисы']},
  {id:'accounting',title:'Вести учёт и платить налоги',subtitle:'Бухгалтерия, налоговые режимы, отчётность и консультации',accent:'#119F87',groups:['Продукты и сервисы'],changeType:'changed',changeNote:'<strong>Название:</strong> «Вести учет, налоги и документы» → «Вести учёт и платить налоги».<br><strong>Состав:</strong> «Конструктор документов», «Электронный документооборот», «Счета-фактуры», «КЭП от УЦ ВТБ», «КЭП ФЛ и МЧД», «Получить КЭП от ФНС России»: «Вести учет, налоги и документы» → «Работать с документами и электронной подписью».'},
  {id:'funding',title:'Получить финансирование на развитие',subtitle:'Кредиты и гарантии для текущих задач и роста',accent:'#2067B8',groups:['Продукты и сервисы']},
  {id:'documents',title:'Работать с документами и электронной подписью',subtitle:'Документооборот, счета-фактуры, регистрационные сведения и КЭП',accent:'#168C78',groups:['Продукты и сервисы'],changeType:'new',changeNote:'<strong>Название:</strong> новая категория.<br><strong>Состав:</strong> шесть продуктов документов и КЭП: «Вести учет, налоги и документы» → «Работать с документами и электронной подписью»; «Внесение изменений в ЕГРИП и ЕГРЮЛ»: «Начать или изменить бизнес» → «Работать с документами и электронной подписью».'},
  {id:'foreign',title:'Работа с зарубежными партнёрами',subtitle:'Партнёры, контракты, валютные риски, таможня и логистика',accent:'#167FA4',groups:['Продукты и сервисы'],changeType:'changed',changeNote:'<strong>Название:</strong> «Начать работать за рубежом» → «Работа с зарубежными партнёрами».<br><strong>Состав:</strong> без изменений.'},
  {id:'team',title:'Забота о команде',subtitle:'Сотрудники, исполнители, зарплата, здоровье и командировки',accent:'#E6822D',groups:['Продукты и сервисы'],changeType:'changed',changeNote:'<strong>Название:</strong> «Сформировать команду» → «Забота о команде».<br><strong>Состав:</strong> без изменений.'},
  {id:'protect',title:'Защитить бизнес',subtitle:'Проверки, риски, страхование и правовая поддержка',accent:'#5A6477',groups:['Продукты и сервисы']}
];

const situationIcons = {
  similar:'assets/icons/new-categories/01-similar-companies-v3-cartoon.png',
  daily:'assets/icons/new-categories/02-daily-work.png',
  sales:'assets/icons/new-categories/03-grow-sales.png',
  savings:'assets/icons/new-categories/04-grow-savings.png',
  money:'assets/icons/new-categories/05-manage-money.png',
  growth:'assets/icons/new-categories/06-expand-business-v3-cartoon.png',
  accounting:'assets/icons/new-categories/07-accounting-taxes.png',
  funding:'assets/icons/new-categories/09-documents-signature.png',
  documents:'assets/icons/new-categories/08-development-financing.png',
  change:'assets/icons/new-categories/13-start-or-change-business.png',
  foreign:'assets/icons/new-categories/10-foreign-partners.png',
  team:'assets/icons/new-categories/11-team-care.png',
  protect:'assets/icons/new-categories/12-business-protection.png'
};

function situationIcon(situation){
  const src=situationIcons[situation.id];
  return src?`<img class="situation-icon" src="${src}" alt="" aria-hidden="true">`:'';
}

const raw = `
1С:Директ-Банк|Интеграционные сервисы|1
1С:Касса|Продажи|0|Учёт товаров и рабочие места кассиров для малой розничной торговли
Мультиконтроль|Группам компаний|1|Акцепт распоряжений и мониторинг счетов подконтрольных компаний
Интернет-эквайринг|Продажи|1|Приём платежей на своей цифровой платформе
SoftPos|Продажи|1
Торговый эквайринг|Продажи|1|Приём платежей банковскими картами
ВТБ-касса|Продажи|1
Автоматическая депозитная машина|Финансовые услуги|1
Онлайн-налог для АУСН|Бухгалтерия и учёт|1|Сервис для работы на налоговом режиме АУСН
Бивалютный депозит|Инструменты ВЭД|0|Повышенная ставка с выбором валюты возврата банком
Брокерский счет|Счета и карты|0
Бизнес-карта|Счета и карты|1|Карта для оплаты расходов и самоинкассации
Корпоративные закупки|Закупки|1|Онлайн-платформа для закупок малой формы
Бизнес-планы|В помощь бизнесу|0
Кэш-пулинг|Группам компаний|1|Централизованное управление внутригрупповой ликвидностью
Инкассация|Финансовые услуги|1|Перевозка наличных и зачисление на расчётный счёт
Согласие на показ счетов контрагентам|Ежедневные операции|1
Конструктор документов|Юридические услуги|1|Создание типовых документов для бизнеса
Проверка зарубежного партнера|ВЭД|1|Оценка надёжности зарубежного контрагента
Экспертиза контракта ВЭД|ВЭД|1|Проверка контракта и рекомендации
Монитор ВЭД|ВЭД|1|Оповещения о значимых событиях ВЭД
Постановка контракта ВЭД на учет|ВЭД|1
СПД по декларациям на товары|ВЭД|1|Оформление справок о подтверждающих документах
SOS.ВЭД|ВЭД|0|Защита от нарушений валютного законодательства
Корпоративное управление|Группам компаний|1|Передача прав на управление счётом
Экспресс-кредит|Финансовые услуги|1|Кредитное решение за 5 минут
Сертификация|Таможенные сервисы|1|Разрешительные документы для поставок
Таможенные карты|Таможенные сервисы|1|Оплата таможенных платежей онлайн
Таможенное сопровождение|Таможенные сервисы|1|Оформление внешнеторговых поставок
Международная логистика|Таможенные сервисы|1|Доставка груза до места назначения
Валютный коридор|Инструменты ВЭД|0|Фиксация диапазона курса валюты
Валютный форвард|Инструменты ВЭД|0|Фиксация курса на будущую дату
Валютный опцион|Инструменты ВЭД|0|Право зафиксировать курс на будущую дату
Консультация бухгалтера|Бухгалтерия и учёт|1|Консультация по отчётности, налогам и аудиту
Бухгалтерия ВТБ для бизнеса|Бухгалтерия и учёт|1
Депозиты|Финансовые услуги|1|Доход от размещения свободных средств
Неснижаемые остатки|Финансовые услуги|1|Доход при фиксации остатков на счетах
Кабинет застройщика|Ежедневные операции|1
Цифровая бухгалтерия ВТБ|Бухгалтерия и учёт|0|Расчёт налогов и подготовка документов для ФНС
Цифровой рубль|Счета и карты|1
Проверка сотрудников|Бизнес без рисков|1
Электронный документооборот|Бухгалтерия и учёт|1|Обмен электронными документами с контрагентами
Раздел Помощь|Помощь|0|Справочник по работе с интернет-банком
Коммерческие гарантии|Закупки|0|Обеспечение обязательств по коммерческим контрактам
Экспресс-гарантии|Закупки|1|Обеспечение для государственных закупок
Гарантии|Закупки|1|Гарантии для закупок, тендеров, налогов и таможни
Интеграционный Банк-Клиент|Интеграционные сервисы|1
1С:БизнесСтарт|Бухгалтерия и учёт|0|Онлайн-бухгалтерия и электронная отчётность
Интернет-бухгалтерия «Моё дело»|Бухгалтерия и учёт|0|Самостоятельное ведение бухгалтерии
Инвестиции|Ежедневные операции|0|Размещение свободных средств
Счета-фактуры|Интеграционные сервисы|1
Конструктор сайтов|В помощь бизнесу|1|Создание сайтов и интернет-магазинов
Копилка для бизнеса|Финансовые услуги|1|Резервы на налоги и регулярные платежи
Правовая поддержка сайта|Юридические услуги|0|Правовые документы для сайта и бизнеса
Правовое сопровождение ВЭД|ВЭД|0
Маркетинговые исследования|В помощь бизнесу|0
База поставщиков КНР|ВЭД|1|Поиск потенциальных поставщиков в Китае
Страхование от несчастных случаев|Персонал|1
Пакет СМС «Безопасность и контроль»|Ежедневные операции|1
Облачная касса|Продажи|1|Отправка чеков при дистанционных расчётах
Отчетность в госорганы|Бухгалтерия и учёт|1
Новый счёт|Счета и карты|1
Развитие бизнеса|В помощь бизнесу|1
Патентование изобретений|Интеллектуальная собственность|0|Защита прав на изобретения и полезные модели
Бизнес-доставка|В помощь бизнесу|1|Доставка посылок Почтой России
Корпоративная подписка на консультации психологов и специалистов ЗОЖ|Персонал|0
Регистрация ПО в Роспатенте|Интеллектуальная собственность|0|Оформление исключительных прав на ПО
Регистрация товарного знака|Интеллектуальная собственность|1|Регистрация прав онлайн
Продвижение в интернете|В помощь бизнесу|1
Управляйте рисками|Бизнес без рисков|1
Зарплатный проект|Финансовые услуги|1|Перечисление заработной платы онлайн
Самоинкассация|Финансовые услуги|0
Расчёты с самозанятыми|Финансовые услуги|1|Расчёты с исполнителями за оказанные услуги
Биржа фриланса FL.ru|Ежедневные операции|1
Самозанятость|Самозанятым|1|Регистрация в качестве самозанятого ИП
Спутник здоровья от СОГАЗ|Персонал|1|Программа добровольного медицинского страхования
Внесение изменений в ЕГРИП и ЕГРЮЛ|Госсервисы для бизнеса|1|Подготовка документов для ФНС
Страхование ответственности|В помощь бизнесу|1
Проверки надзорных органов|Бизнес без рисков|1
Сопровождение контрактов|Ежедневные операции|1|Контроль расходования средств по контрактам
Проверка контрагентов|Бизнес без рисков|1
Проверка контрагента|Ежедневные операции|1|Онлайн-проверка благонадёжности партнёров
Пакеты услуг|Счета и карты|1|Экономия на обслуживании счёта и операциях
Цифровая медицина|Персонал|1
Онлайн-медицина|Персонал|0|Телемедицинское обслуживание сотрудников
Перевод документов на другие языки|ВЭД|0
Автоматизация командировок|Персонал|1|Управление деловыми поездками
КЭП от УЦ ВТБ|Госсервисы для бизнеса|1
КЭП ФЛ и МЧД|Госсервисы для бизнеса|1
Получить КЭП от ФНС России|Госсервисы для бизнеса|1|Для банка, госорганов, отчётности и госуслуг
МойСклад|Продажи|0|Торговля, склад и CRM в облаке
Сервис доставки|Самозанятым|0
Защита профессиональной ответственности|Самозанятым|0
Продвижение от Ярмарки Мастеров|Самозанятым|0
Сервис онлайн-записи клиентов|Самозанятым|0
Внесение в реестр Минцифры|Интеллектуальная собственность|0|Регистрация российского программного обеспечения
Юрист 24|Юридические услуги|1|Круглосуточная правовая поддержка`;

const products = raw.trim().split('\n').map((line,index)=>{const [name,sourceCategory,available,description='']=line.split('|');return{id:index+1,name,sourceCategory,available:available==='1',description}});


const modelAssignments = new Map([
  ["1С:Директ-Банк", {situation:"daily", available:true}],
  ["Мультиконтроль", {situation:"money", available:true}],
  ["Интернет-эквайринг", {situation:"sales", available:true}],
  ["SoftPos", {situation:"sales", available:true}],
  ["Торговый эквайринг", {situation:"sales", available:true}],
  ["ВТБ-касса", {situation:"sales", available:true}],
  ["Автоматическая депозитная машина", {situation:"money", available:true}],
  ["Онлайн-налог для АУСН", {situation:"accounting", available:true}],
  ["Бизнес-карта", {situation:"money", available:true}],
  ["Корпоративные закупки", {situation:"growth", available:true}],
  ["Кэш-пулинг", {situation:"money", available:true}],
  ["Инкассация", {situation:"money", available:true}],
  ["Согласие на показ счетов контрагентам", {situation:"daily", available:true}],
  ["Конструктор документов", {situation:"accounting", available:true}],
  ["Проверка зарубежного партнера", {situation:"foreign", available:true}],
  ["Экспертиза контракта ВЭД", {situation:"foreign", available:true}],
  ["Монитор ВЭД", {situation:"foreign", available:true}],
  ["Постановка контракта ВЭД на учет", {situation:"foreign", available:true}],
  ["СПД по декларациям на товары", {situation:"foreign", available:true}],
  ["Корпоративное управление", {situation:"money", available:true}],
  ["Экспресс-кредит", {situation:"funding", available:true}],
  ["Сертификация", {situation:"foreign", available:true}],
  ["Таможенные карты", {situation:"foreign", available:true}],
  ["Таможенное сопровождение", {situation:"foreign", available:true}],
  ["Международная логистика", {situation:"foreign", available:true}],
  ["Консультация бухгалтера", {situation:"accounting", available:true}],
  ["Бухгалтерия ВТБ для бизнеса", {situation:"accounting", available:true}],
  ["Депозиты", {situation:"savings", available:true}],
  ["Неснижаемые остатки", {situation:"savings", available:true}],
  ["Кабинет застройщика", {situation:"growth", available:true}],
  ["Цифровой рубль", {situation:"money", available:true}],
  ["Проверка сотрудников", {situation:"team", available:true}],
  ["Электронный документооборот", {situation:"accounting", available:true}],
  ["Экспресс-гарантии", {situation:"funding", available:true}],
  ["Гарантии", {situation:"funding", available:true}],
  ["Интеграционный Банк-Клиент", {situation:"daily", available:true}],
  ["Счета-фактуры", {situation:"accounting", available:true}],
  ["Конструктор сайтов", {situation:"sales", available:true}],
  ["Копилка для бизнеса", {situation:"savings", available:true}],
  ["База поставщиков КНР", {situation:"foreign", available:true}],
  ["Страхование от несчастных случаев", {situation:"team", available:true}],
  ["Пакет СМС «Безопасность и контроль»", {situation:"protect", available:true}],
  ["Облачная касса", {situation:"sales", available:true}],
  ["Отчетность в госорганы", {situation:"accounting", available:true}],
  ["Новый счёт", {situation:"change", available:true}],
  ["Развитие бизнеса", {situation:"growth", available:true}],
  ["Бизнес-доставка", {situation:"growth", available:true}],
  ["Регистрация товарного знака", {situation:"growth", available:true}],
  ["Продвижение в интернете", {situation:"growth", available:true}],
  ["Управляйте рисками", {situation:"protect", available:true}],
  ["Зарплатный проект", {situation:"team", available:true}],
  ["Расчёты с самозанятыми", {situation:"team", available:false}],
  ["Биржа фриланса FL.ru", {situation:"team", available:false}],
  ["Самозанятость", {situation:"change", available:true}],
  ["Спутник здоровья от СОГАЗ", {situation:"team", available:true}],
  ["Внесение изменений в ЕГРИП и ЕГРЮЛ", {situation:"change", available:true}],
  ["Страхование ответственности", {situation:"protect", available:true}],
  ["Проверки надзорных органов", {situation:"protect", available:true}],
  ["Сопровождение контрактов", {situation:"growth", available:true}],
  ["Проверка контрагентов", {situation:"protect", available:true}],
  ["Проверка контрагента", {situation:"protect", available:true}],
  ["Пакеты услуг", {situation:"daily", available:true}],
  ["Цифровая медицина", {situation:"team", available:true}],
  ["Автоматизация командировок", {situation:"team", available:true}],
  ["КЭП от УЦ ВТБ", {situation:"accounting", available:true}],
  ["КЭП ФЛ и МЧД", {situation:"accounting", available:true}],
  ["Получить КЭП от ФНС России", {situation:"accounting", available:true}],
  ["Юрист 24", {situation:"protect", available:true}],
  ["1С:Касса", {situation:"sales", available:false}],
  ["Бивалютный депозит", {situation:"savings", available:false}],
  ["Брокерский счет", {situation:"savings", available:false}],
  ["Бизнес-планы", {situation:"growth", available:false}],
  ["SOS.ВЭД", {situation:"foreign", available:false}],
  ["Валютный коридор", {situation:"foreign", available:false}],
  ["Валютный форвард", {situation:"foreign", available:false}],
  ["Валютный опцион", {situation:"foreign", available:false}],
  ["Цифровая бухгалтерия ВТБ", {situation:"accounting", available:false}],
  ["Раздел Помощь", {situation:"daily", available:false}],
  ["Коммерческие гарантии", {situation:"funding", available:false}],
  ["1С:БизнесСтарт", {situation:"accounting", available:false}],
  ["Интернет-бухгалтерия «Моё дело»", {situation:"accounting", available:false}],
  ["Инвестиции", {situation:"savings", available:false}],
  ["Правовая поддержка сайта", {situation:"protect", available:false}],
  ["Правовое сопровождение ВЭД", {situation:"foreign", available:false}],
  ["Маркетинговые исследования", {situation:"sales", available:false}],
  ["Патентование изобретений", {situation:"growth", available:false}],
  ["Корпоративная подписка на консультации психологов и специалистов ЗОЖ", {situation:"team", available:false}],
  ["Регистрация ПО в Роспатенте", {situation:"growth", available:false}],
  ["Самоинкассация", {situation:"money", available:false}],
  ["Онлайн-медицина", {situation:"team", available:false}],
  ["Перевод документов на другие языки", {situation:"foreign", available:false}],
  ["МойСклад", {situation:"daily", available:false}],
  ["Сервис доставки", {situation:"sales", available:false}],
  ["Защита профессиональной ответственности", {situation:"protect", available:false}],
  ["Продвижение от Ярмарки Мастеров", {situation:"sales", available:false}],
  ["Сервис онлайн-записи клиентов", {situation:"sales", available:false}],
  ["Внесение в реестр Минцифры", {situation:"growth", available:false}]
]);

const newModelAssignments=new Map([...modelAssignments].map(([name,assignment])=>[name,{...assignment}]));
[
  ['Новый счёт','money'],
  ['Самозанятость','daily'],
  ['Мультиконтроль','daily'],
  ['Корпоративное управление','daily'],
  ['Конструктор документов','documents'],
  ['Электронный документооборот','documents'],
  ['Счета-фактуры','documents'],
  ['КЭП от УЦ ВТБ','documents'],
  ['КЭП ФЛ и МЧД','documents'],
  ['Получить КЭП от ФНС России','documents'],
  ['Внесение изменений в ЕГРИП и ЕГРЮЛ','documents']
].forEach(([name,situation])=>newModelAssignments.get(name).situation=situation);

let situations=currentSituations;
let activeAssignments=modelAssignments;

products.forEach(product=>{
  const assignment=modelAssignments.get(product.name);
  if(!assignment)throw new Error(`Для продукта «${product.name}» не задана категория`);
  product.available=assignment.available;
});

function classify(p){
  const assignment=activeAssignments.get(p.name);
  return assignment?[{situation:assignment.situation,group:'Продукты и сервисы'}]:[];
}

products.forEach(p=>p.placements=classify(p));
const grid=document.querySelector('#situationGrid');
const backdrop=document.querySelector('#backdrop'), drawer=document.querySelector('#drawer'), drawerBody=document.querySelector('#drawerBody');
const groupingVersionControl=document.querySelector('#groupingVersion');
const changeLegend=document.querySelector('#changeLegend');
const removedCategoryNote=document.querySelector('#removedCategoryNote');
const showChangesWrapper=document.querySelector('#showChangesWrapper');
const showChangesControl=document.querySelector('#showChanges');
const showDisabledControl=document.querySelector('#showDisabledProducts');
const showImagesControl=document.querySelector('#showImages');
const catalogSearch=document.querySelector('#catalogSearch');
const catalogViewButton=document.querySelector('#catalogViewButton');
const settingsButton=document.querySelector('#settingsButton');
const catalogSettings=document.querySelector('#catalogSettings');
const catalogScroll=document.querySelector('#catalogScroll');
const catalogTopActions=document.querySelector('#catalogTopActions');
const catalogBottomActions=document.querySelector('#catalogBottomActions');
const categoryFilterRow=document.querySelector('#categoryFilterRow');
const categoryPrimary=document.querySelector('#categoryPrimary');
const categoryOverflow=document.querySelector('#categoryOverflow');
const categoryMore=document.querySelector('#categoryMore');
const categoryMeasure=document.querySelector('#categoryMeasure');
const legacyProductCategories=window.legacyProductCategories||[];
let activeSituation=null,showDisabled=showDisabledControl.checked,showChanges=showChangesControl.checked;
let catalogMode='situations',searchQuery='';
let productSection='all';
// Demo connections are independent of whether a service is available in the catalog.
const connectedProductNames=new Set(['Торговый эквайринг','SoftPos','Инкассация']);
let activeCategory='all',categoriesExpanded=false,visibleCategoryIndices=[];

function categoryButton(category){
  const button=document.createElement('button');
  button.type='button';
  button.className='category-filter';
  button.dataset.category=category.id;
  button.textContent=category.label;
  button.setAttribute('aria-pressed','false');
  return button;
}
const categoryButtons=legacyProductCategories.map(categoryButton);
legacyProductCategories.forEach(category=>categoryMeasure.appendChild(categoryButton(category)));

function updateCategorySelection(){
  document.querySelectorAll('[data-category]').forEach(button=>{
    const selected=button.dataset.category===activeCategory;
    button.classList.toggle('selected',selected);
    button.setAttribute('aria-pressed',String(selected));
  });
  const selectedInOverflow=categoryButtons.some(button=>button.dataset.category===activeCategory&&button.parentElement===categoryOverflow);
  categoryMore.classList.toggle('has-selection',selectedInOverflow);
}
function layoutCategoryFilters(){
  const widths=Array.from(categoryMeasure.children,button=>button.getBoundingClientRect().width);
  const allButton=categoryFilterRow.querySelector('[data-category="all"]');
  const gap=10;
  const returnButtonWidth=catalogTopActions.hidden?0:catalogViewButton.getBoundingClientRect().width+gap;
  const available=categoryFilterRow.clientWidth-allButton.getBoundingClientRect().width-returnButtonWidth;
  const total=widths.reduce((sum,width)=>sum+width+gap,0);
  const needsMore=total>available;
  categoryMore.hidden=!needsMore;
  const limit=available-(needsMore?categoryMore.getBoundingClientRect().width+gap:0);
  let used=0;
  const nextVisible=[];
  widths.forEach((width,index)=>{
    // Keep scanning after a wide category: a later, shorter one may still fit.
    if(!needsMore||used+width+gap<=limit){used+=width+gap;nextVisible.push(index)}
  });
  if(nextVisible.join(',')!==visibleCategoryIndices.join(',')){
    visibleCategoryIndices=nextVisible;
    const visible=new Set(nextVisible);
    categoryPrimary.replaceChildren(...categoryButtons.filter((_,index)=>visible.has(index)));
    categoryOverflow.replaceChildren(...categoryButtons.filter((_,index)=>!visible.has(index)));
  }
  categoryOverflow.hidden=!needsMore||!categoriesExpanded;
  categoryMore.setAttribute('aria-expanded',String(needsMore&&categoriesExpanded));
  updateCategorySelection();
}
function setCatalogMode(mode){
  catalogMode=mode;
  const productsVisible=mode==='products';
  catalogTopActions.hidden=!productsVisible;
  catalogBottomActions.hidden=productsVisible;
  (productsVisible?catalogTopActions:catalogBottomActions).appendChild(catalogViewButton);
  catalogViewButton.textContent=productsVisible?'По жизненным ситуациям':'Все продукты';
  catalogViewButton.setAttribute('aria-pressed',String(productsVisible));
  layoutCategoryFilters();
  if(drawer.classList.contains('open'))closeDrawer();
  renderCards();
  catalogScroll.scrollTo({top:0,behavior:'auto'});
}
function selectCategory(id){
  if(id!=='all'&&!legacyProductCategories.some(category=>category.id===id))return;
  activeCategory=id;
  updateCategorySelection();
  if(id!=='all')setCatalogMode('products');
  else{renderCards();catalogScroll.scrollTo({top:0,behavior:'auto'});}
}
function matchesCategory(product){
  if(activeCategory==='all')return true;
  const category=legacyProductCategories.find(item=>item.id===activeCategory);
  return Boolean(category&&category.productNames.includes(product.name));
}

try{
  const savedVisibility=localStorage.getItem('vtb-show-images');
  if(savedVisibility!==null)showImagesControl.checked=savedVisibility!=='false';
}catch{}
function applyImageVisibility(){
  document.body.classList.toggle('no-illustrations',!showImagesControl.checked);
  try{localStorage.setItem('vtb-show-images',String(showImagesControl.checked))}catch{}
}
applyImageVisibility();

function productsFor(id){return products.filter(p=>p.placements.some(x=>x.situation===id))}
function statusMatch(p){return p.available||showDisabled}
function applyGroupingVersion(version){
  const isNew=version==='new';
  situations=isNew?newSituations:currentSituations;
  activeAssignments=isNew?newModelAssignments:modelAssignments;
  showChangesWrapper.hidden=!isNew;
  changeLegend.hidden=!isNew||!showChanges;
  removedCategoryNote.hidden=!isNew||!showChanges;
  products.forEach(p=>p.placements=classify(p));
  if(drawer.classList.contains('open'))closeDrawer();
  activeSituation=null;
  renderCards();
}
function normalized(value){return String(value||'').toLocaleLowerCase('ru-RU')}
function matchesSearch(...values){
  if(searchQuery.length<3)return true;
  return values.some(value=>normalized(value).includes(searchQuery));
}
function productIcon(product){
  const id=String(product.id).padStart(3,"0");
  return `<img class="product-illustration" src="assets/icons/products-blue-v1/${id}.png?v=20261015-flags" alt="" aria-hidden="true" loading="lazy" decoding="async" width="64" height="64">`;
}
function renderProductCards(){
  grid.classList.add('product-grid');
  const mine=productSection==='mine';
  const visibleProducts=products.filter(product=>(mine?connectedProductNames.has(product.name):statusMatch(product)&&matchesCategory(product))&&matchesSearch(product.name,product.description,product.sourceCategory));
  grid.innerHTML=visibleProducts.map(product=>`<a href="product.html?product=${product.id}" class="catalog-product-card${mine?' connected-product':''}"><span class="product-icon">${productIcon(product)}</span><div class="catalog-product-copy"><h3>${product.name}</h3><p>${product.description||product.sourceCategory}</p></div>${mine?'<span class="connected-check" role="img" aria-label="Подключён" title="Подключён">✓</span>':`<span class="badge ${product.available?'':'planned'}">${product.available?'Доступна':'Выключена'}</span>`}</a>`).join('');
  if(!visibleProducts.length)grid.innerHTML='<div class="empty-state"><strong>Ничего не найдено</strong><span>Попробуйте изменить запрос или показать выключенные продукты.</span></div>';
}
function renderCards(){
  const mine=productSection==='mine';
  document.body.classList.toggle('my-products-view',mine);
  catalogTopActions.hidden=mine||catalogMode!=='products';
  catalogBottomActions.hidden=mine||catalogMode==='products';
  const isNew=groupingVersionControl.value==='new';
  changeLegend.hidden=mine||!isNew||!showChanges;
  removedCategoryNote.hidden=mine||!isNew||!showChanges;
  if(mine||catalogMode==='products'){renderProductCards();return}
  grid.classList.remove('product-grid');
  grid.innerHTML='';
  situations.forEach((s,i)=>{
    if(s.special){
      if(!matchesSearch(s.title,s.subtitle))return;
      const el=document.createElement('article');el.className='situation-card special-card';el.style.setProperty('--accent',s.accent);
      el.innerHTML=`<div class="situation-card-copy"><h3>${s.title}</h3></div>${situationIcon(s)}`;
      grid.appendChild(el);return;
    }
    const all=productsFor(s.id);
    if(!all.length)return;
    const situationMatches=matchesSearch(s.title,s.subtitle);
    const productMatches=all.some(product=>matchesSearch(product.name,product.description,product.sourceCategory));
    if(searchQuery.length>=3&&!situationMatches&&!productMatches)return;
    const showCardChange=showChanges&&Boolean(s.changeNote);
    const changeClass=showCardChange?(s.changeType==='new'?' new-card':' changed-card'):'';
    const changeLabel=s.changeType==='new'?'Новая карточка':'Изменено';
    const el=document.createElement('button');el.className=`situation-card${changeClass}`;el.style.setProperty('--accent',s.accent);el.dataset.open=s.id;
    el.innerHTML=`<div class="situation-card-copy"><h3>${s.title}${showCardChange?`<span class="change-marker">${changeLabel}</span>`:''}</h3><p>${s.subtitle}</p></div>${situationIcon(s)}${showCardChange?`<div class="change-note">${s.changeNote}</div>`:''}`;
    grid.appendChild(el);
  });
  if(!grid.children.length)grid.innerHTML='<div class="empty-state"><strong>Ничего не найдено</strong><span>Введите другой запрос.</span></div>';
}

let drawerTrigger=null;
function openDrawer(id){
  activeSituation=situations.find(s=>s.id===id);if(!activeSituation||activeSituation.special)return;
  drawerTrigger=document.activeElement;
  document.querySelector('#drawerTitle').textContent=activeSituation.title;
  document.querySelector('#drawerSubtitle').textContent=activeSituation.subtitle;
  document.querySelector('#drawerHeroImage').src=`assets/banners/situations-v1/${activeSituation.id}.webp`;
  renderDrawer();
  document.querySelector('#drawerScroll').scrollTop=0;
  backdrop.hidden=false;drawer.inert=false;
  drawer.setAttribute('aria-hidden','false');drawer.classList.add('open');
  document.body.classList.add('no-scroll');
  document.querySelector('.cards-only').inert=true;
  document.querySelector('#closeDrawer').focus();
}
function closeDrawer(){
  drawer.classList.remove('open');backdrop.hidden=true;
  document.body.classList.remove('no-scroll');document.querySelector('.cards-only').inert=false;
  if(drawerTrigger?.isConnected)drawerTrigger.focus();
  drawer.setAttribute('aria-hidden','true');drawer.inert=true;
}
function renderDrawer(){
  const all=productsFor(activeSituation.id).filter(statusMatch);drawerBody.innerHTML='';
  activeSituation.groups.forEach(group=>{const items=all.filter(p=>p.placements.some(x=>x.situation===activeSituation.id&&x.group===group));if(!items.length)return;const section=document.createElement('section');section.className='product-group';section.innerHTML=`<div class="product-list">${items.map(p=>`<a href="product.html?product=${p.id}" class="product"><span class="product-icon">${productIcon(p)}</span><div><h4>${p.name}</h4><p>${p.description||p.sourceCategory}</p></div><span class="badge ${p.available?'':'planned'}">${p.available?'Доступна':'Выключена'}</span></a>`).join('')}</div>`;drawerBody.appendChild(section)});
  if(!drawerBody.children.length)drawerBody.innerHTML='<div class="no-products">В этой группе пока нет продуктов с выбранным статусом.</div>';
}

function setSettingsOpen(open){catalogSettings.hidden=!open;settingsButton.setAttribute('aria-expanded',String(open))}
document.querySelectorAll('[data-section]').forEach(button=>button.addEventListener('click',()=>{
  productSection=button.dataset.section;
  document.querySelectorAll('[data-section]').forEach(item=>{const selected=item===button;item.classList.toggle('selected',selected);item.setAttribute('aria-pressed',String(selected))});
  if(drawer.classList.contains('open'))closeDrawer();
  renderCards();
  if(productSection==='all')layoutCategoryFilters();
  catalogScroll.scrollTo({top:0,behavior:'auto'});
}));
settingsButton.addEventListener('click',()=>setSettingsOpen(catalogSettings.hidden));
document.addEventListener('click',e=>{if(!catalogSettings.hidden&&!e.target.closest('#catalogSettings')&&!e.target.closest('#settingsButton'))setSettingsOpen(false);const category=e.target.closest('[data-category]');if(category&&!category.closest('#categoryMeasure'))selectCategory(category.dataset.category);const open=e.target.closest('[data-open]');if(open)openDrawer(open.dataset.open)});
groupingVersionControl.addEventListener('change',()=>applyGroupingVersion(groupingVersionControl.value));
showChangesControl.addEventListener('change',()=>{showChanges=showChangesControl.checked;changeLegend.hidden=!showChanges;removedCategoryNote.hidden=!showChanges;renderCards()});
showDisabledControl.addEventListener('change',()=>{showDisabled=showDisabledControl.checked;if(activeSituation&&drawer.classList.contains('open'))renderDrawer();if(catalogMode==='products')renderCards()});
showImagesControl.addEventListener('change',applyImageVisibility);
catalogSearch.addEventListener('input',()=>{searchQuery=normalized(catalogSearch.value.trim());renderCards();catalogScroll.scrollTo({top:0,behavior:'auto'})});
catalogViewButton.addEventListener('click',()=>{
  const mode=catalogMode==='situations'?'products':'situations';
  activeCategory='all';
  updateCategorySelection();
  setCatalogMode(mode);
});
categoryMore.addEventListener('click',()=>{categoriesExpanded=!categoriesExpanded;layoutCategoryFilters()});
if(typeof ResizeObserver!=='undefined')new ResizeObserver(layoutCategoryFilters).observe(categoryFilterRow);
else window.addEventListener('resize',layoutCategoryFilters);
if(document.fonts)document.fonts.ready.then(layoutCategoryFilters);
layoutCategoryFilters();
document.querySelector('#closeDrawer').addEventListener('click',closeDrawer);backdrop.addEventListener('click',closeDrawer);document.addEventListener('keydown',e=>{if(e.key==='Escape'){if(!catalogSettings.hidden){setSettingsOpen(false);settingsButton.focus()}if(drawer.classList.contains('open'))closeDrawer()}if(e.key==='Tab'&&drawer.classList.contains('open')){const controls=[...drawer.querySelectorAll('button,a[href],input,select,[tabindex="0"]')].filter(el=>!el.disabled);const first=controls[0],last=controls.at(-1);if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus()}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus()}}});
renderCards();
