/* global React */

/* ============================================================
   ФОТОГАЛЕРЕЯ + МЕРОПРИЯТИЯ + НОВОСТИ — расширенные
   ============================================================ */
function GallerySection() {
  const photos = [
    { label: 'Найти в Яндексе: «Талы Кантемировский район панорама»', cat: 'панорама' },
    { label: 'Найти: «братская могила Талы Кантемировский»', cat: 'память' },
    { label: 'Найти: «Дом культуры Талы Воронежская»', cat: 'современность' },
    { label: 'Найти: «Таловская школа Кантемировский район»', cat: 'современность' },
    { label: 'Найти: «река Богучарка фото»', cat: 'природа' },
    { label: 'Найти: «День села Талы 2024»', cat: 'праздники' },
    { label: 'Найти: «Никольская церковь старое фото Воронежская»', cat: 'архив' },
    { label: 'Найти: «Кантемировский корпус танки 1942»', cat: 'архив' },
    { label: 'Найти: «поля Кантемировского района»', cat: 'природа' },
    { label: 'Найти: «зима в воронежской деревне»', cat: 'современность' },
    { label: 'Найти: «водонапорная башня село 2024»', cat: 'современность' },
    { label: 'Найти: «казачья слобода XIX в. фото»', cat: 'архив' },
  ];
  return (
    <section id="gallery" style={{ padding: '120px 60px', background: 'var(--paper)' }} data-screen-label="Фотогалерея">
      <SectionHeader
        eyebrow="Раздел VI"
        title="Фотогалерея"
        sub="Подписи к каждому кадру содержат поисковый запрос для Яндекс.Картинок — администратор подменит плейсхолдер реальной фотографией."
      />
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <Carousel
          items={photos}
          itemWidth={420}
          itemHeight={340}
          renderItem={(p) => (
            <figure style={{ margin: 0, width: '100%', height: '100%', position: 'relative', background: 'var(--paper-2)', border: '1px solid var(--hairline)', borderTop: '3px solid var(--moss-2)' }}>
              <PhotoPlaceholder label={p.label} height={260} />
              <figcaption style={{
                padding: '12px 18px', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                fontFamily: 'var(--serif-text)', fontSize: 12, color: 'var(--ink-2)', borderTop: '1px solid var(--hairline)',
              }}>
                <span style={{ fontStyle: 'italic' }}>{p.label.replace('Найти в Яндексе: ', '').replace('Найти: ', '')}</span>
                <span className="eyebrow" style={{ fontSize: 10, color: 'var(--moss-2)' }}>{p.cat}</span>
              </figcaption>
            </figure>
          )}
        />
        <div style={{ marginTop: 30, padding: '20px 28px', background: 'var(--moss-1)', color: 'var(--paper-2)', fontFamily: 'var(--serif-text)', fontSize: 13.5, lineHeight: 1.6, fontStyle: 'italic' }}>
          ↳ Администрации поселения: для замены плейсхолдеров на реальные фотографии достаточно скопировать поисковый запрос из подписи в Яндекс.Картинки или Яндекс.Поиск, выбрать кадр и заменить через CMS.
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   МЕРОПРИЯТИЯ — детальные с программой
   ============================================================ */
function EventsSection() {
  const events = [
    {
      date: '18 окт 2025', day: 'суббота', time: '14:00',
      title: 'День села Талы',
      place: 'Площадь у Дома культуры, ул. Центральная, 166',
      tag: 'главный праздник',
      description: 'Основной осенний праздник — концерт творческих коллективов района, ярмарка, угощение полевой кашей, ростовые куклы для детей.',
      program: [
        '14:00 — Торжественное открытие. Поздравление главы поселения А. А. Ковалёва',
        '14:30 — Концерт Таловского ЦКД и хора «Калинушка»',
        '15:15 — Выступление Смаглеевского сельского ДК',
        '16:00 — Концертная программа Кантемировского досугового центра',
        '16:45 — Ростовые куклы и игры для детей',
        '17:30 — Полевая каша и чай у солдатской кухни',
        '18:30 — Дискотека для молодёжи',
      ],
    },
    {
      date: '19 дек', time: '10:00',
      title: 'Освобождение Талов',
      place: 'Братская могила в центре села',
      tag: 'память',
      description: 'Памятная дата — годовщина боёв 67-й танковой и 31-й мотострелковой бригад 17-го танкового корпуса в декабре 1942 г. Митинг с участием школьников и ветеранов.',
      program: [
        '10:00 — Возложение венков к братской могиле',
        '10:20 — Выступление главы поселения и директора школы',
        '10:40 — Концерт военно-патриотической песни',
        '11:20 — Урок мужества в Таловской СОШ для учащихся 5-11 классов',
      ],
    },
    {
      date: '09 мая', time: '09:30',
      title: 'День Победы',
      place: 'Центр села, братская могила',
      tag: 'память',
      description: 'Шествие «Бессмертного полка» от школы к братской могиле. 937 бойцов покоятся в селе; 110 имён до сих пор неизвестны.',
      program: [
        '09:30 — Сбор у Таловской СОШ',
        '10:00 — Шествие «Бессмертного полка» по ул. Центральной',
        '10:30 — Митинг у братской могилы. Минута молчания',
        '11:15 — Концерт у Дома культуры',
        '12:30 — Полевая кухня, чай, фронтовые песни',
      ],
    },
    {
      date: '14 окт', time: 'весь день',
      title: 'Покров — осенняя ярмарка',
      place: 'Площадь у магазинов, ул. Центральная',
      tag: 'традиция',
      description: 'Престольный праздник, сохранённый как осенний базар. Соленья, варенья, мёд с местных пасек, рыба с Богучарки, домашняя выпечка.',
      program: [
        '08:00 — Открытие торговых рядов',
        '11:00 — Конкурс «Хозяйка Талов» на лучшую заготовку',
        '13:00 — Выступление детского фольклорного ансамбля',
        '15:00 — Сворачивание ярмарки',
      ],
    },
    {
      date: '07 янв', time: 'с утра',
      title: 'Рождественские колядки',
      place: 'Все улицы села',
      tag: 'традиция',
      description: 'Детские группы со «звездой» обходят дворы. Кто принимает — выносит сладости, копейку «на счастье», пироги.',
      program: [
        '09:00 — Сбор детей у Дома культуры, выдача костюмов',
        '10:00 — Обход ул. Центральной и ул. Российской',
        '12:00 — Привал у ДК с горячим чаем',
        '13:30 — Обход ул. Победы и ул. Октябрьской',
      ],
    },
    {
      date: '01 сен', time: '08:30',
      title: 'День знаний',
      place: 'МКОУ «Таловская СОШ»',
      tag: 'будни',
      description: 'Линейка в средней школе на 350 учащихся. Школа — самое крупное учреждение села после колхоза.',
      program: [
        '08:30 — Сбор учащихся',
        '09:00 — Торжественная линейка',
        '09:30 — Первый звонок — первоклассники',
        '10:00 — Классный час, единый урок «Россия — мои горизонты»',
      ],
    },
    {
      date: '16 окт', time: '11:00',
      title: 'Международный день хлеба',
      place: 'Таловский ЦКД',
      tag: 'традиция',
      description: 'Ежегодная программа Дома культуры — рассказ о хлебе как символе земли, мастер-класс по выпечке от пекарни и дегустация.',
      program: [
        '11:00 — Беседа «Хлеб — всему голова»',
        '11:30 — Мастер-класс «Замес и выпечка»',
        '12:30 — Дегустация и чаепитие',
      ],
    },
    {
      date: '21 сен', time: '10:30',
      title: 'Рождество Пресвятой Богородицы',
      place: 'Таловский ЦКД',
      tag: 'традиция',
      description: 'Тематическая программа Дома культуры в день престольного праздника соседнего прихода — рассказ для детей, выставка икон, концерт духовных песнопений.',
      program: [
        '10:30 — Открытие выставки прикладного искусства',
        '11:00 — Беседа для младших школьников',
        '12:00 — Концерт духовной музыки',
      ],
    },
    {
      date: '01 июн', time: '11:00',
      title: 'День защиты детей',
      place: 'Площадь у Дома культуры',
      tag: 'праздник',
      description: 'Уличная игровая программа от ЦКД и детского сада. Раскраски, эстафеты, мыльные пузыри, мороженое.',
      program: [
        '11:00 — Открытие, флешмоб',
        '11:30 — Эстафеты и подвижные игры',
        '12:30 — Конкурс рисунков на асфальте',
        '13:30 — Сладкий стол',
      ],
    },
  ];
  const [openIdx, setOpenIdx] = React.useState(0);
  return (
    <section id="events" style={{ padding: '120px 60px', background: 'var(--moss-2)', color: 'var(--paper)' }}
             data-screen-label="Мероприятия">
      <div style={{ textAlign: 'center', marginBottom: 60 }}>
        <div className="eyebrow" style={{ marginBottom: 14, color: 'var(--moss-5)' }}>Раздел VII</div>
        <h2 className="h-display" style={{ fontSize: 'clamp(36px, 4.4vw, 64px)', margin: '0 0 18px', fontStyle: 'italic', color: 'var(--paper)' }}>
          Мероприятия в Талах
        </h2>
        <Ornament color="var(--moss-5)" />
        <p style={{ fontFamily: 'var(--serif-text)', fontStyle: 'italic', fontSize: 16, color: 'var(--paper-2)', maxWidth: 720, margin: '20px auto 0', lineHeight: 1.6 }}>
          Девять дат, по которым держится годовой круг сельской жизни. Программа Таловского ЦКД и поселения — с детальным расписанием.
        </p>
      </div>

      <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '0.8fr 1.2fr', gap: 30, alignItems: 'start' }}>
        {/* Список дат */}
        <div style={{ background: 'var(--moss-1)', border: '1px solid rgba(244,234,213,0.18)' }}>
          {events.map((e, i) => (
            <button key={i} onClick={() => setOpenIdx(i)}
              style={{
                display: 'block', width: '100%', textAlign: 'left',
                padding: '20px 24px',
                background: openIdx === i ? 'var(--accent)' : 'transparent',
                color: 'var(--paper)',
                border: 'none',
                borderBottom: i < events.length - 1 ? '1px solid rgba(244,234,213,0.18)' : 'none',
                cursor: 'pointer',
                fontFamily: 'var(--serif-text)',
                transition: 'background 0.2s',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 4 }}>
                <span style={{ fontFamily: 'var(--serif-display)', fontStyle: 'italic', fontSize: 18, fontWeight: 500 }}>{e.date}</span>
                <span className="eyebrow" style={{ fontSize: 9, color: openIdx === i ? 'var(--paper-2)' : 'var(--moss-5)' }}>{e.tag}</span>
              </div>
              <div style={{ fontSize: 15, fontStyle: 'italic', fontFamily: 'var(--serif-display)' }}>{e.title}</div>
            </button>
          ))}
        </div>

        {/* Деталь выбранного события */}
        <article style={{ background: 'var(--paper)', color: 'var(--ink)', padding: '40px 44px', borderTop: '4px solid var(--accent)', minHeight: 540 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 14 }}>
            <div className="eyebrow" style={{ color: 'var(--accent)' }}>{events[openIdx].tag}</div>
            <div style={{ fontFamily: 'var(--serif-display)', fontStyle: 'italic', fontSize: 24, color: 'var(--moss-2)', fontWeight: 600 }}>
              {events[openIdx].date}{events[openIdx].time && <span style={{ color: 'var(--ink-soft)', fontSize: 16, marginLeft: 12 }}>· {events[openIdx].time}</span>}
            </div>
          </div>
          <h3 style={{ fontFamily: 'var(--serif-display)', fontStyle: 'italic', fontSize: 42, margin: '0 0 8px', color: 'var(--wood-4)', fontWeight: 500, lineHeight: 1.05 }}>
            {events[openIdx].title}
          </h3>
          <div style={{ fontFamily: 'var(--serif-text)', fontSize: 14, color: 'var(--ink-soft)', fontStyle: 'italic', marginBottom: 22 }}>
            ↳ {events[openIdx].place}
          </div>
          <p style={{ fontFamily: 'var(--serif-text)', fontSize: 16, lineHeight: 1.65, color: 'var(--ink-2)', margin: '0 0 28px' }}>
            {events[openIdx].description}
          </p>
          <div className="eyebrow" style={{ marginBottom: 12, color: 'var(--moss-2)' }}>программа</div>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {events[openIdx].program.map((p, i) => {
              const m = p.match(/^([^\u2014]+)\u2014\s*(.+)$/);
              return (
                <li key={i} style={{ padding: '12px 0', borderTop: '1px solid var(--hairline)', display: 'grid', gridTemplateColumns: '120px 1fr', gap: 16 }}>
                  {m ? (
                    <>
                      <span style={{ fontFamily: 'var(--serif-display)', fontStyle: 'italic', fontSize: 16, color: 'var(--moss-2)', fontWeight: 500 }}>{m[1].trim()}</span>
                      <span style={{ fontFamily: 'var(--serif-text)', fontSize: 14.5, color: 'var(--ink-2)', lineHeight: 1.5 }}>{m[2]}</span>
                    </>
                  ) : (
                    <span style={{ gridColumn: '1 / -1', fontFamily: 'var(--serif-text)', fontSize: 14.5, color: 'var(--ink-2)' }}>{p}</span>
                  )}
                </li>
              );
            })}
          </ul>
        </article>
      </div>
    </section>
  );
}

/* ============================================================
   НОВОСТИ — обновлённые
   ============================================================ */
function NewsSection() {
  const news = [
    { date: '21 апр 2026', title: 'Подготовка ко Дню Победы — репетиции «Бессмертного полка»', text: 'Школа и Дом культуры начали репетиции к шествию 9 мая. По данным администрации, в этом году ожидается участие более 200 жителей, включая учеников всех классов.' },
    { date: '12 апр 2026', title: 'Школа Талов выиграла районную олимпиаду по литературе', text: 'Команда таловской средней школы заняла первое место среди десяти школ Кантемировского района. Учеников готовила Е. Н. Литвинова.' },
    { date: '04 апр 2026', title: 'Капитальный ремонт Дома культуры', text: 'Начались работы по обновлению зрительного зала на 200 мест — крыша, окна, отопительная система. Работы финансируются по программе «Развитие культуры села», окончание — к осеннему Дню села.' },
    { date: '15 мар 2026', title: 'ТОС «Пионер» — новая водонапорная башня', text: 'По итогам конкурса грантов ТОС в селе установили новую водонапорную башню. Сумма гранта — 1,1 млн рублей. Башня уже подключена к сети ул. Российской и ул. Степной.' },
    { date: '10 мар 2026', title: 'Колхоз «Победа» начал посевную', text: 'Озимые выходят из зимовки в хорошем состоянии. На полях работают 15 тракторов; засевается яровая пшеница и подсолнечник. Общая площадь — 11 240 га.' },
    { date: '28 фев 2026', title: 'Сход жителей: ремонт ул. Победы и автобусный маршрут', text: 'На сходе обсуждали ремонт улицы Победы и установку новой остановки автобусного маршрута Талы — Кантемировка. Глава А. А. Ковалёв пообещал внести вопрос в районный бюджет.' },
  ];
  return (
    <section id="news" style={{ padding: '120px 60px', background: 'var(--paper)' }} data-screen-label="Новости">
      <SectionHeader
        eyebrow="Раздел VIII"
        title="Новости"
        sub="Что происходит в Талах прямо сейчас."
      />
      <div style={{ maxWidth: 980, margin: '0 auto' }}>
        {news.map((n, i) => (
          <article key={i} style={{
            display: 'grid',
            gridTemplateColumns: '160px 1fr auto',
            gap: 32,
            padding: '32px 0',
            borderTop: '1px solid var(--hairline-2)',
            alignItems: 'start',
          }}>
            <div className="eyebrow" style={{ paddingTop: 4, color: 'var(--moss-2)' }}>{n.date}</div>
            <div>
              <h3 style={{ fontFamily: 'var(--serif-display)', fontStyle: 'italic', fontSize: 26, margin: '0 0 8px', fontWeight: 500, color: 'var(--ink)' }}>
                {n.title}
              </h3>
              <p style={{ fontFamily: 'var(--serif-text)', fontSize: 15, lineHeight: 1.65, color: 'var(--ink-2)', margin: 0, maxWidth: 620 }}>
                {n.text}
              </p>
            </div>
            <a href="#" style={{ fontFamily: 'var(--sans)', fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--moss-2)', textDecoration: 'none', whiteSpace: 'nowrap', paddingTop: 6 }}>
              Читать →
            </a>
          </article>
        ))}
        <div style={{ borderTop: '1px solid var(--hairline-2)' }}/>
      </div>

      {/* ВКонтакте блок */}
      <div style={{ maxWidth: 980, margin: '60px auto 0', padding: '32px 36px', background: 'var(--moss-1)', color: 'var(--paper)', display: 'grid', gridTemplateColumns: 'auto 1fr', gap: 28, alignItems: 'center' }}>
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
          <rect width="64" height="64" rx="12" fill="#2787F5"/>
          <path d="M 34 42 c -10 0 -16 -7 -16 -19 h 5 c 0 8 4 12 7 13 v -13 h 5 v 7 c 3 0 6 -3 7 -7 h 5 c -1 4 -4 8 -6 9 c 3 1 5 3 7 9 h -5 c -1 -3 -3 -6 -8 -6 v 6 z" fill="#fff"/>
        </svg>
        <div>
          <div className="eyebrow" style={{ color: 'var(--moss-5)', marginBottom: 6 }}>группа села</div>
          <div style={{ fontFamily: 'var(--serif-display)', fontStyle: 'italic', fontSize: 22, color: 'var(--paper)', marginBottom: 4 }}>
            Подписывайтесь на ВКонтакте
          </div>
          <div style={{ fontFamily: 'var(--serif-text)', fontSize: 14, color: 'var(--paper-2)', lineHeight: 1.55 }}>
            Все актуальные новости села, объявления администрации и фоторепортажи с мероприятий публикуются в группе ВКонтакте. Ссылка появится после регистрации сообщества; пока что искать: <i>vk.com/search?q=Талы Кантемировский район</i>.
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { GallerySection, EventsSection, NewsSection });
