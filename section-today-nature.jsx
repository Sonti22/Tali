/* global React */

function TodaySection() {
  const stats = [
    { num: '1 674', label: 'жителя', sub: 'перепись 2010' },
    { num: '11 240', label: 'га пашни', sub: 'колхоз «Победа»' },
    { num: '350', label: 'учеников', sub: 'средняя школа' },
    { num: '9', label: 'улиц', sub: 'центр сельского поселения' },
  ];
  const streets = [
    'Большевик', 'Луговая', 'Октябрьская', 'Победы',
    'Российская', 'Степная', 'Страна Советов', 'Центральная',
  ];
  return (
    <section id="today" style={{ padding: '120px 60px', background: 'var(--paper)' }} data-screen-label="Сегодня">
      <SectionHeader
        eyebrow="Раздел II"
        title="Талы сегодня"
        sub="Административный центр Таловского сельского поселения. Кроме самого села в поселение входят Чехуровка и Бугаевка."
      />
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0, marginBottom: 80, borderTop: '2px solid var(--moss-2)', borderBottom: '2px solid var(--moss-2)' }}>
          {stats.map((s, i) => (
            <div key={i} style={{
              padding: '40px 28px',
              borderRight: i < stats.length - 1 ? '1px solid var(--hairline)' : 'none',
              textAlign: 'center',
            }}>
              <div style={{ fontFamily: 'var(--serif-display)', fontSize: 56, lineHeight: 1, color: 'var(--moss-2)', fontWeight: 500, fontStyle: 'italic' }}>
                {s.num}
              </div>
              <div style={{ fontFamily: 'var(--serif-text)', fontSize: 16, color: 'var(--ink-2)', marginTop: 8 }}>
                {s.label}
              </div>
              <div className="eyebrow" style={{ marginTop: 8, fontSize: 10 }}>{s.sub}</div>
            </div>
          ))}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 60, alignItems: 'start' }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: 16 }}>что есть в селе</div>
            <h3 className="h-display" style={{ fontSize: 38, margin: '0 0 24px', fontStyle: 'italic', fontWeight: 500, color: 'var(--wood-4)' }}>
              Жизнь современной слободы
            </h3>
            <p className="dropcap" style={{ fontFamily: 'var(--serif-text)', fontSize: 16, lineHeight: 1.75, color: 'var(--ink-2)', marginBottom: 18 }}>
              По данным районной администрации, центральная усадьба колхоза «Победа» обрабатывает свыше одиннадцати тысяч гектаров пашни. В селе — средняя школа на триста пятьдесят учащихся, детский сад на пятьдесят мест, больница на пятьдесят коек, Дом культуры, столовая и магазины.
            </p>
            <p style={{ fontFamily: 'var(--serif-text)', fontSize: 16, lineHeight: 1.75, color: 'var(--ink-2)' }}>
              Глава Таловского сельского поселения — Александр Андреевич Ковалёв. Администрация находится по адресу: ул. Центральная, 163. Сюда приходят за справками, регистрацией прав на землю и за решением каждодневных деревенских вопросов.
            </p>
            <div style={{ marginTop: 30, padding: 24, background: 'var(--paper-2)', borderLeft: '3px solid var(--moss-2)' }}>
              <div className="eyebrow" style={{ marginBottom: 8 }}>улицы села</div>
              <div style={{ fontFamily: 'var(--serif-display)', fontSize: 18, lineHeight: 1.7, color: 'var(--ink)' }}>
                {streets.map((s, i) => (
                  <span key={s}>
                    <span style={{ fontStyle: 'italic' }}>{s}</span>
                    {i < streets.length - 1 && <span style={{ color: 'var(--moss-3)', margin: '0 8px' }}>·</span>}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateRows: '280px 200px', gap: 16 }}>
            <PhotoPlaceholder label="Центральная улица села, лето" />
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              <PhotoPlaceholder label="Школа" height={200} />
              <PhotoPlaceholder label="Дом культуры" height={200} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function NatureSection() {
  const items = [
    { title: 'Река Богучарка', text: 'Правый приток Дона. По её излукам и рос тот самый тальник, давший имя селу.', label: 'Излучина Богучарки на закате' },
    { title: 'Богучарская степь', text: 'Зона расселения скифо-сарматских племён. Курганы — обычный элемент пейзажа вокруг села.', label: 'Степь и курган весной' },
    { title: 'Меловые холмы', text: 'Пологие холмы над поймой — те самые, что Никитенко в 1811 году называл «живописной рамкой».', label: 'Меловые склоны' },
    { title: 'Старый сад', text: 'Остатки колхозного фруктового сада на южной околице села.', label: 'Цветение яблонь, май' },
    { title: 'Тальник', text: 'Кустарниковая ива по берегам — растение-патроним. Цветёт в апреле серёжками.', label: 'Заросли тальника' },
    { title: 'Балки и овраги', text: 'Эрозионная сеть притоков. По дну балок — чернозём, по склонам — ковыль и типчак.', label: 'Балка летом, разнотравье' },
    { title: 'Дубняк', text: 'Восточная лесополоса — старые дубы, которые выходят из всех зимних бурь нетронутыми.', label: 'Дубовая роща, осень' },
  ];
  return (
    <section id="nature" style={{ padding: '120px 60px', background: 'var(--moss-1)', color: 'var(--paper)' }} data-screen-label="Природа">
      <div style={{ textAlign: 'center', marginBottom: 60 }}>
        <div className="eyebrow" style={{ marginBottom: 14, color: 'var(--moss-5)' }}>Раздел III</div>
        <h2 className="h-display" style={{ fontSize: 'clamp(36px, 4.4vw, 64px)', margin: '0 0 18px', fontStyle: 'italic', color: 'var(--paper)' }}>
          Природа и окрестности
        </h2>
        <Ornament color="var(--moss-5)" />
        <p style={{ fontFamily: 'var(--serif-text)', fontStyle: 'italic', fontSize: 16, color: 'var(--paper-2)', maxWidth: 620, margin: '20px auto 0', lineHeight: 1.6 }}>
          Степь, балки, меловые склоны и тихая Богучарка — пейзаж, мало изменившийся со времён Острогожского полка.
        </p>
      </div>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <Carousel
          items={items}
          itemWidth={340}
          itemHeight={420}
          renderItem={(it) => (
            <div style={{ width: '100%', height: '100%', background: 'var(--paper)', color: 'var(--ink)', display: 'flex', flexDirection: 'column', borderTop: '3px solid var(--moss-3)' }}>
              <PhotoPlaceholder label={it.label} height={240} />
              <div style={{ padding: '20px 22px', flex: 1 }}>
                <div className="eyebrow" style={{ marginBottom: 8 }}>окрестности</div>
                <h4 style={{ fontFamily: 'var(--serif-display)', fontStyle: 'italic', fontSize: 24, margin: '0 0 10px', color: 'var(--wood-4)' }}>
                  {it.title}
                </h4>
                <p style={{ fontFamily: 'var(--serif-text)', fontSize: 14, lineHeight: 1.55, color: 'var(--ink-2)', margin: 0 }}>
                  {it.text}
                </p>
              </div>
            </div>
          )}
        />
      </div>
    </section>
  );
}

Object.assign(window, { TodaySection, NatureSection });
