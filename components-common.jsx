/* global React */
const { useState, useEffect, useRef, useCallback } = React;

/* ============================================================
   Общие компоненты сайта Талы
   ============================================================ */

// Тонкий линейный орнамент-разделитель
function Ornament({ color = 'currentColor', width = 240 }) {
  return (
    <svg className="ornament-line" viewBox="0 0 240 16" style={{ width, color }} aria-hidden="true">
      <line x1="0" y1="8" x2="92" y2="8" stroke="currentColor" strokeWidth="0.6" opacity="0.5"/>
      <line x1="148" y1="8" x2="240" y2="8" stroke="currentColor" strokeWidth="0.6" opacity="0.5"/>
      <circle cx="120" cy="8" r="2.5" fill="currentColor"/>
      <circle cx="104" cy="8" r="1" fill="currentColor"/>
      <circle cx="136" cy="8" r="1" fill="currentColor"/>
      <path d="M 100 8 Q 110 2 120 8 Q 130 14 140 8" stroke="currentColor" strokeWidth="0.6" fill="none" opacity="0.6"/>
    </svg>
  );
}

// Орнаментальный угловой узор
function CornerOrnament({ size = 60, rotate = 0 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 60 60" style={{ transform: `rotate(${rotate}deg)` }} aria-hidden="true">
      <path d="M 4 4 L 56 4 L 56 56 L 4 56 Z" stroke="currentColor" strokeWidth="0.6" fill="none" opacity="0.5"/>
      <path d="M 10 10 L 50 10 L 50 50 L 10 50 Z" stroke="currentColor" strokeWidth="0.4" fill="none" opacity="0.35"/>
      <circle cx="30" cy="30" r="3" stroke="currentColor" strokeWidth="0.5" fill="none"/>
      <circle cx="30" cy="30" r="0.8" fill="currentColor"/>
      <line x1="30" y1="14" x2="30" y2="22" stroke="currentColor" strokeWidth="0.5"/>
      <line x1="30" y1="38" x2="30" y2="46" stroke="currentColor" strokeWidth="0.5"/>
      <line x1="14" y1="30" x2="22" y2="30" stroke="currentColor" strokeWidth="0.5"/>
      <line x1="38" y1="30" x2="46" y2="30" stroke="currentColor" strokeWidth="0.5"/>
    </svg>
  );
}

// Заголовок раздела с надбровьем и орнаментом
function SectionHeader({ eyebrow, title, sub, align = 'center' }) {
  return (
    <div style={{ textAlign: align, marginBottom: 48 }}>
      <div className="eyebrow" style={{ marginBottom: 14 }}>{eyebrow}</div>
      <h2 className="h-display" style={{ fontSize: 'clamp(36px, 4.4vw, 64px)', margin: '0 0 18px', fontStyle: 'italic', fontWeight: 500 }}>
        {title}
      </h2>
      {align === 'center' && <Ornament />}
      {sub && (
        <p style={{ fontFamily: 'var(--serif-text)', fontSize: 16, color: 'var(--ink-2)', maxWidth: 620, margin: '20px auto 0', lineHeight: 1.6, fontStyle: 'italic' }}>
          {sub}
        </p>
      )}
    </div>
  );
}

// Плейсхолдер фото с подписью что должно быть
function PhotoPlaceholder({ label, height = 280, ratio }) {
  const style = ratio
    ? { aspectRatio: ratio, width: '100%' }
    : { height, width: '100%' };
  return (
    <div className="img-placeholder" style={style}>
      <span>{label}</span>
    </div>
  );
}

// ===========================================================
//  Горизонтальная карусель со стрелками
// ===========================================================
function Carousel({ items, itemWidth = 380, itemHeight = 280, gap = 18, renderItem, ariaLabel = 'Галерея' }) {
  const trackRef = useRef(null);
  const [index, setIndex] = useState(0);
  const [perView, setPerView] = useState(3);

  useEffect(() => {
    const update = () => {
      if (!trackRef.current) return;
      const w = trackRef.current.parentElement.clientWidth;
      const v = Math.max(1, Math.floor((w + gap) / (itemWidth + gap)));
      setPerView(v);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, [itemWidth, gap]);

  const max = Math.max(0, items.length - perView);
  const clampedIndex = Math.min(index, max);

  const prev = () => setIndex(i => Math.max(0, i - 1));
  const next = () => setIndex(i => Math.min(max, i + 1));

  return (
    <div className="carousel-frame" aria-label={ariaLabel}>
      <div style={{ overflow: 'hidden', padding: '4px 0' }}>
        <div
          ref={trackRef}
          className="carousel-track"
          style={{
            transform: `translateX(calc(-${clampedIndex} * (${itemWidth}px + ${gap}px)))`,
            gap: `${gap}px`,
          }}
        >
          {items.map((it, i) => (
            <div key={i} style={{ flex: `0 0 ${itemWidth}px`, height: itemHeight }}>
              {renderItem(it, i)}
            </div>
          ))}
        </div>
      </div>
      <button className="carousel-arrow left" onClick={prev} disabled={clampedIndex === 0} aria-label="Назад">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M15 18l-6-6 6-6"/>
        </svg>
      </button>
      <button className="carousel-arrow right" onClick={next} disabled={clampedIndex >= max} aria-label="Вперёд">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M9 18l6-6-6-6"/>
        </svg>
      </button>
      {/* Прогресс */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: 6, marginTop: 18 }}>
        {Array.from({ length: max + 1 }).map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Слайд ${i + 1}`}
            style={{
              width: i === clampedIndex ? 24 : 8,
              height: 2,
              background: i === clampedIndex ? 'var(--wood-3)' : 'var(--hairline-2)',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
              transition: 'all 0.3s',
            }}
          />
        ))}
      </div>
    </div>
  );
}

Object.assign(window, {
  Ornament, CornerOrnament, SectionHeader, PhotoPlaceholder, Carousel,
});
