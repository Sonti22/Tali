/* global React */
const { useState: useStateHero, useEffect: useEffectHero } = React;

function Hero({ variant = 'book' }) {
  const [scrolled, setScrolled] = useStateHero(false);
  useEffectHero(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <section style={{ minHeight: '100vh', position: 'relative', background: 'var(--paper)', borderBottom: '4px double var(--moss-2)' }} data-screen-label="Hero">
      <Nav scrolled={scrolled} />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', minHeight: '100vh', alignItems: 'stretch' }}>
        <div style={{ padding: '140px 80px 80px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative' }} className="paper-tex">
          <div style={{ position: 'absolute', top: 100, left: 60, color: 'var(--moss-2)', opacity: 0.5 }}>
            <CornerOrnament size={80} />
          </div>
          <div style={{ position: 'absolute', top: 100, right: 30, color: 'var(--moss-2)', opacity: 0.5 }}>
            <CornerOrnament size={80} rotate={90} />
          </div>
          <div style={{ marginTop: 40 }} className="fade-up">
            <div className="eyebrow" style={{ marginBottom: 24, color: 'var(--moss-2)' }}>
              Воронежская обл. · Кантемировский р-н
            </div>
            <div style={{ fontFamily: 'var(--serif-display)', fontSize: 22, fontStyle: 'italic', color: 'var(--moss-2)', marginBottom: 14, letterSpacing: '0.04em' }}>
              село
            </div>
            <div style={{ margin: '0 0 8px', maxWidth: 560 }}>
              <SlavTitle height={210} color="var(--wood-4)" accent="var(--accent)" />
            </div>
            <div style={{ marginTop: 28, display: 'flex', alignItems: 'center', gap: 16, color: 'var(--moss-2)' }}>
              <div style={{ height: 1, width: 60, background: 'currentColor' }}/>
              <div style={{ fontFamily: 'var(--serif-display)', fontStyle: 'italic', fontSize: 24 }}>
                основано в 1747 году
              </div>
            </div>
            <p style={{ marginTop: 40, fontFamily: 'var(--serif-text)', fontSize: 17, lineHeight: 1.65, color: 'var(--ink-2)', maxWidth: 480 }}>
              Слобода войсковых казаков на правом берегу Богучарки. Имя — от тальника, кустарниковой ивы по речным излукам. Здесь стояла Никольская церковь, шумели четыре ярмарки, горело пламя крестьянских восстаний.
            </p>
            <div style={{ marginTop: 36, display: 'flex', gap: 14, alignItems: 'center' }}>
              <a href="#history" className="btn-wood">Открыть летопись</a>
              <a href="#today" className="btn-ghost">Талы сегодня</a>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: 60 }}>
            <div style={{ fontFamily: 'var(--sans)', fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--ink-soft)' }}>
              49°51′ с.ш. · 40°04′ в.д.
            </div>
            <div style={{ fontFamily: 'var(--serif-display)', fontStyle: 'italic', fontSize: 16, color: 'var(--ink-soft)' }}>
              — том первый —
            </div>
          </div>
        </div>
        <div style={{ position: 'relative', overflow: 'hidden', background: 'var(--moss-1)' }}>
          <div className="img-placeholder" style={{ width: '100%', height: '100%', minHeight: 600 }}>
            <span>Главное фото:{'\n'}панорама села Талы{'\n'}с холма над Богучаркой</span>
          </div>
          <div style={{ position: 'absolute', bottom: 40, right: 40, background: 'rgba(244, 234, 213, 0.94)', padding: '18px 24px', maxWidth: 320, borderTop: '2px solid var(--moss-2)' }}>
            <div className="eyebrow" style={{ marginBottom: 6 }}>фронтиспис</div>
            <div style={{ fontFamily: 'var(--serif-display)', fontStyle: 'italic', fontSize: 18, color: 'var(--ink)' }}>
              «Опрятные малороссийские хаты средь пологих холмов»
            </div>
            <div style={{ fontFamily: 'var(--serif-text)', fontSize: 13, color: 'var(--ink-soft)', marginTop: 8 }}>
              А. Никитенко, 1811
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Nav({ scrolled }) {
  const links = [
    { href: '#history', label: 'История' },
    { href: '#today', label: 'Сегодня' },
    { href: '#nature', label: 'Природа' },
    { href: '#people', label: 'Люди' },
    { href: '#cuisine', label: 'Кухня' },
    { href: '#gallery', label: 'Фото' },
    { href: '#events', label: 'События' },
    { href: '#news', label: 'Новости' },
    { href: '#map', label: 'Карта' },
    { href: '#contacts', label: 'Контакты' },
  ];
  return (
    <nav style={{
      position: 'absolute', top: 0, left: 0, right: 0,
      padding: '24px 60px', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      zIndex: 50,
      background: scrolled ? 'rgba(244, 234, 213, 0.96)' : 'transparent',
      borderBottom: scrolled ? '1px solid var(--moss-2)' : '1px solid transparent',
      transition: 'all 0.3s',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <svg width="28" height="28" viewBox="0 0 28 28" aria-hidden="true">
          <circle cx="14" cy="14" r="13" fill="none" stroke="var(--moss-2)" strokeWidth="1"/>
          <text x="14" y="18" textAnchor="middle" fontFamily="var(--serif-display)" fontSize="14" fontStyle="italic" fill="var(--moss-2)">Т</text>
        </svg>
        <div style={{ fontFamily: 'var(--serif-display)', fontSize: 20, fontStyle: 'italic', color: 'var(--wood-4)' }}>
          Талы
        </div>
      </div>
      <div style={{ display: 'flex', gap: 24, fontFamily: 'var(--sans)', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
        {links.map(l => (
          <a key={l.href} href={l.href} style={{ color: 'var(--ink-2)', textDecoration: 'none', transition: 'color 0.2s' }}
             onMouseEnter={e => e.target.style.color = 'var(--moss-2)'}
             onMouseLeave={e => e.target.style.color = 'var(--ink-2)'}
          >{l.label}</a>
        ))}
      </div>
    </nav>
  );
}

Object.assign(window, { Hero, Nav });
