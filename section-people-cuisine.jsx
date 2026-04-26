/* global React */

/* ============================================================
   ИЗВЕСТНЫЕ ЛЮДИ — расширенный список
   ============================================================ */
function PeopleSection() {
  const people = [
    {
      name: 'Авксентий Городнянский',
      years: '1896 — 1942',
      role: 'Генерал-лейтенант',
      img: 'Портрет генерала Городнянского в форме РККА',
      text: 'Уроженец слободы Талы, родился 1 марта 1896 г. От рядового РИА (1915) до командующего 6-й армией Юго-Западного фронта. Прошёл Смоленское сражение, командовал 129-й стрелковой дивизией. В мае 1942 г. при окружении армии под Харьковом погиб (по другой версии — застрелился, чтобы не попасть в плен). Перезахоронен на 13-м городском кладбище Харькова.',
    },
    {
      name: 'Дмитрий Сверчков',
      years: '1882 — 1938',
      role: 'Революционер, литератор',
      img: 'Дмитрий Сверчков, фото 1905 года',
      text: 'Родился 7 марта 1882 г. в Талах, где квартировал Ахтырский гусарский полк его отца. Депутат Петроградского совета 1905 г., член Исполкома и Президиума. Автор книги «На заре революции» (1922-25). Репрессирован и расстрелян в 1938 г. за лестные упоминания Троцкого.',
    },
    {
      name: 'Захар Клодов',
      years: '1881 — 1927',
      role: 'Делегат, член ВЦИК СССР',
      img: 'Захар Клодов, делегатское фото',
      text: 'Таловский крестьянин-самородок. В 1922 г. избран на Всероссийский съезд Советов от Богучарского уезда, вскоре — член ВЦИК СССР. Один из «выдвиженцев» новой власти из крестьянской среды. Умер до начала массовых чисток.',
    },
    {
      name: 'Захар Соломахин',
      years: 'род. 1912',
      role: 'Майор НКВД',
      img: 'Удостоверение военнослужащего НКВД',
      text: 'Уроженец тогдашнего Писаревского района. Капитан интендантской службы, заместитель начальника особых отделов 50-й армии в годы Великой Отечественной.',
    },
    {
      name: 'Пётр Куликов',
      years: 'род. 1952',
      role: 'Профессор экономики',
      img: 'Портрет профессора Куликова в кабинете',
      text: 'Кандидат экономических наук, профессор. Заместитель министра образования. Один из «новых» уроженцев села, чья карьера сложилась в позднесоветское и постсоветское время.',
    },
    {
      name: 'Лев Валуйский',
      years: 'XX в.',
      role: 'Художник',
      img: 'Картина с пейзажем донской степи',
      text: 'Уроженец Талов, упоминается в Воронежской энциклопедии. Местный живописец советской эпохи, работавший в реалистической манере. Писал степные пейзажи, портреты односельчан, виды Богучарки.',
    },
    {
      name: 'Священник Никольской церкви',
      years: 'XIX — нач. XX в.',
      role: 'Духовенство',
      img: 'Священники Воронежской епархии, групповой снимок',
      text: 'При каменном Никольском храме (1783) служили несколько поколений священников. По ведомостям Воронежской епархии — на пике в приходе числилось около 6 тыс. душ.',
    },
    {
      name: 'Воины Освобождения',
      years: '18-19 декабря 1942',
      role: '67-я танковая, 31-я мстр.',
      img: 'Танкисты 17-го корпуса у Т-34, 1942',
      text: 'Бойцы 67-й танковой и 31-й мотострелковой бригад 17-го танкового корпуса (после декабря 1942 — 4-й гвардейский Кантемировский корпус). 937 из них покоятся в братской могиле в центре села; имена 110 до сих пор неизвестны.',
    },
  ];
  return (
    <section id="people" style={{ padding: '120px 60px', background: 'var(--paper)' }} data-screen-label="Люди">
      <SectionHeader
        eyebrow="Раздел IV"
        title="Известные люди села"
        sub="Восемь судеб — от полууставного помещичьего XVIII века до Великой Отечественной и наших дней."
      />
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <Carousel
          items={people}
          itemWidth={360}
          itemHeight={560}
          renderItem={(p) => (
            <article style={{
              width: '100%', height: '100%',
              background: 'var(--paper-2)',
              border: '1px solid var(--hairline)',
              display: 'flex', flexDirection: 'column',
              borderTop: '3px solid var(--moss-2)',
            }}>
              <PhotoPlaceholder label={p.img} height={280} />
              <div style={{ padding: '24px 26px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div className="eyebrow" style={{ marginBottom: 6, color: 'var(--moss-2)' }}>{p.role}</div>
                <h3 style={{ fontFamily: 'var(--serif-display)', fontSize: 24, fontStyle: 'italic', fontWeight: 500, margin: '0 0 4px', color: 'var(--wood-4)' }}>
                  {p.name}
                </h3>
                <div style={{ fontFamily: 'var(--serif-text)', fontSize: 13, color: 'var(--ink-soft)', marginBottom: 14, fontStyle: 'italic' }}>
                  {p.years}
                </div>
                <p style={{ fontFamily: 'var(--serif-text)', fontSize: 13.5, lineHeight: 1.55, color: 'var(--ink-2)', margin: 0 }}>
                  {p.text}
                </p>
              </div>
            </article>
          )}
        />
      </div>
    </section>
  );
}

/* ============================================================
   КУХНЯ И ТРАДИЦИИ — без изменений по структуре, тёмно-зелёные акценты
   ============================================================ */
function CuisineSection() {
  const dishes = [
    { name: 'Узвар', sub: 'из сушёных груш и яблок', text: 'Самый ходовой напиток к рождественским столам — компот на сухофруктах с ложкой мёда.' },
    { name: 'Борщ с пампушками', sub: 'на свином окороке', text: 'Малороссийский след в кухне Кантемировского района — густой борщ с буряком, томлёной свининой и чесночными пампушками.' },
    { name: 'Вареники с вишней', sub: 'тесто на сметане', text: 'Лето в Талах — вёдра вишни и вареники, политые мёдом или сметаной. Готовят и солёные — с картошкой, творогом, капустой.' },
    { name: 'Сало с чесноком', sub: 'засолка по-казацки', text: 'Толстое сало на чёрном хлебе — самый известный знак воронежско-украинского пограничья.' },
    { name: 'Пшённая каша на молоке', sub: 'в чугунке', text: 'Утренняя каша из пшена, томлённая в печи на молоке — еда полевых артелей.' },
    { name: 'Холодец', sub: 'свиные ножки и говядина', text: 'Зимний праздничный холодец — медленно варили почти целые сутки. Подавали с хреном и горчицей.' },
    { name: 'Полевая каша', sub: 'на День села', text: 'Гречневая или пшённая каша из походной кухни — традиционно варится на главном празднике у Дома культуры в октябре.' },
  ];
  const traditions = [
    'Колядование на Рождество — ходили по дворам с «звездой»',
    'Масленичные катания с ледяных горок над Богучаркой',
    'Купальские венки и костры на Ивана Купалу',
    'Престольный праздник Никольской церкви — 19 декабря',
    'Покровская ярмарка — главная из четырёх годовых',
    'Рождество Богородицы — престольный для соседнего прихода',
  ];
  return (
    <section id="cuisine" style={{ padding: '120px 60px', background: 'var(--paper-2)' }} className="paper-tex" data-screen-label="Кухня">
      <SectionHeader
        eyebrow="Раздел V"
        title="Кухня и традиции"
        sub="Малороссийская основа с воронежским говором — рецепты и обычаи, что переходят от бабушек к внукам."
      />

      <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 60, alignItems: 'start' }}>
        <div>
          <div className="eyebrow" style={{ marginBottom: 16, color: 'var(--moss-2)' }}>что на столе</div>
          <Carousel
            items={dishes}
            itemWidth={280}
            itemHeight={380}
            gap={14}
            renderItem={(d) => (
              <div style={{ width: '100%', height: '100%', background: 'var(--paper)', display: 'flex', flexDirection: 'column', border: '1px solid var(--hairline)', borderBottom: '3px solid var(--moss-3)' }}>
                <PhotoPlaceholder label={`Фото блюда:\n${d.name}`} height={200} />
                <div style={{ padding: '18px 20px', flex: 1 }}>
                  <h4 style={{ fontFamily: 'var(--serif-display)', fontStyle: 'italic', fontSize: 22, margin: '0 0 4px', color: 'var(--wood-4)' }}>{d.name}</h4>
                  <div className="eyebrow" style={{ marginBottom: 12, fontSize: 10, color: 'var(--moss-2)' }}>{d.sub}</div>
                  <p style={{ fontFamily: 'var(--serif-text)', fontSize: 13.5, lineHeight: 1.55, color: 'var(--ink-2)', margin: 0 }}>{d.text}</p>
                </div>
              </div>
            )}
          />
        </div>

        <div style={{ background: 'var(--moss-1)', color: 'var(--paper)', padding: '36px 32px', position: 'relative' }}>
          <div style={{ position: 'absolute', top: 16, right: 16, color: 'var(--moss-5)', opacity: 0.5 }}>
            <CornerOrnament size={50} />
          </div>
          <div className="eyebrow" style={{ marginBottom: 12, color: 'var(--moss-5)' }}>годовой круг</div>
          <h3 style={{ fontFamily: 'var(--serif-display)', fontStyle: 'italic', fontSize: 30, margin: '0 0 24px', color: 'var(--paper)', fontWeight: 500 }}>
            Праздники и обычаи
          </h3>
          <ol style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {traditions.map((t, i) => (
              <li key={i} style={{
                padding: '14px 0',
                borderBottom: i < traditions.length - 1 ? '1px solid rgba(244,234,213,0.2)' : 'none',
                display: 'flex', gap: 18, alignItems: 'baseline',
              }}>
                <span style={{ fontFamily: 'var(--serif-display)', fontStyle: 'italic', fontSize: 22, color: 'var(--accent-soft)', flex: '0 0 28px' }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span style={{ fontFamily: 'var(--serif-text)', fontSize: 14.5, lineHeight: 1.5, color: 'var(--paper-2)' }}>
                  {t}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { PeopleSection, CuisineSection });
