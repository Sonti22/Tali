/* global React */

/* ============================================================
   КАРТА СЕЛА — детальная иллюстративная карта
   ============================================================ */
function MapSection() {
  return (
    <section id="map" style={{ padding: '120px 60px', background: 'var(--paper-2)' }} className="paper-tex" data-screen-label="Карта">
      <SectionHeader
        eyebrow="Раздел IX"
        title="Карта села"
        sub="Девять улиц, Богучарка с южной стороны, дубняк на востоке, поля колхоза «Победа» по периметру. Координаты — 49°51′ с.ш., 40°04′ в.д., высота над уровнем моря — 132 м."
      />

      <div style={{ maxWidth: 1320, margin: '0 auto' }}>
        <div style={{ background: '#f6efde', border: '1px solid var(--hairline-2)', position: 'relative', boxShadow: 'inset 0 0 80px rgba(60,40,20,0.08)' }}>
          <svg viewBox="0 0 1200 720" width="100%" style={{ display: 'block' }}>
            <defs>
              <pattern id="field-tex" patternUnits="userSpaceOnUse" width="16" height="16" patternTransform="rotate(20)">
                <line x1="0" y1="0" x2="0" y2="16" stroke="#c9a875" strokeWidth="0.6" opacity="0.45"/>
                <line x1="8" y1="0" x2="8" y2="16" stroke="#c9a875" strokeWidth="0.4" opacity="0.25"/>
              </pattern>
              <pattern id="field-tex-2" patternUnits="userSpaceOnUse" width="16" height="16" patternTransform="rotate(-30)">
                <line x1="0" y1="0" x2="0" y2="16" stroke="#a08560" strokeWidth="0.5" opacity="0.4"/>
              </pattern>
              <pattern id="forest-tex" patternUnits="userSpaceOnUse" width="14" height="14">
                <circle cx="3" cy="3" r="2.2" fill="#3d4f30" opacity="0.55"/>
                <circle cx="10" cy="9" r="2.4" fill="#56683f" opacity="0.55"/>
                <circle cx="6" cy="11" r="1.6" fill="#2d3a24" opacity="0.5"/>
              </pattern>
              <pattern id="meadow-tex" patternUnits="userSpaceOnUse" width="12" height="12">
                <path d="M 2 10 L 2 7 M 5 10 L 5 8 M 8 10 L 8 6 M 10 10 L 10 8" stroke="#7a8a5a" strokeWidth="0.6" opacity="0.5"/>
              </pattern>
              <pattern id="garden-tex" patternUnits="userSpaceOnUse" width="14" height="14">
                <circle cx="7" cy="7" r="2" fill="#56683f" opacity="0.5" stroke="#3d4f30" strokeWidth="0.4"/>
              </pattern>
              <pattern id="house-row" patternUnits="userSpaceOnUse" width="22" height="14">
                <rect x="2" y="3" width="14" height="9" fill="#c9a875" stroke="#5c4527" strokeWidth="0.5" opacity="0.85"/>
                <path d="M 2 3 L 9 -1 L 16 3" stroke="#5c4527" strokeWidth="0.5" fill="#8b6f47" opacity="0.85"/>
              </pattern>
              <linearGradient id="riverGrad" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#7a8a5a" stopOpacity="0.7"/>
                <stop offset="100%" stopColor="#3d4f30" stopOpacity="0.85"/>
              </linearGradient>
            </defs>

            {/* Подложка — пашни и луга */}
            <rect x="0" y="0" width="1200" height="720" fill="url(#field-tex)"/>

            {/* Северные поля колхоза «Победа» */}
            <g>
              <path d="M 0 0 L 1200 0 L 1200 130 L 900 140 L 600 120 L 300 140 L 0 130 Z" fill="url(#field-tex-2)" opacity="0.6"/>
              <text x="600" y="60" fontFamily="var(--serif-display)" fontStyle="italic" fontSize="22" fill="#5c4527" textAnchor="middle" opacity="0.6">поля колхоза «Победа»</text>
              <text x="600" y="86" fontFamily="var(--serif-text)" fontSize="11" fill="#5c4527" textAnchor="middle" opacity="0.5" letterSpacing="2">11 240 ГА · озимая пшеница, подсолнечник, ячмень</text>
            </g>

            {/* Восточный дубняк / лесополоса */}
            <path d="M 980 180 L 1180 200 L 1190 460 L 990 440 Z" fill="url(#forest-tex)" stroke="#3d4f30" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.9"/>
            <text x="1085" y="320" fontFamily="var(--serif-display)" fontStyle="italic" fontSize="18" fill="#2d3a24" textAnchor="middle">дубняк</text>
            <text x="1085" y="340" fontFamily="var(--serif-text)" fontSize="10" fill="#2d3a24" textAnchor="middle" opacity="0.7">лесополоса</text>

            {/* Северо-западный лес */}
            <path d="M 60 80 L 250 90 L 240 200 L 50 195 Z" fill="url(#forest-tex)" stroke="#3d4f30" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.9"/>
            <text x="150" y="145" fontFamily="var(--serif-display)" fontStyle="italic" fontSize="14" fill="#2d3a24" textAnchor="middle">балка</text>
            <text x="150" y="162" fontFamily="var(--serif-text)" fontSize="10" fill="#2d3a24" textAnchor="middle" opacity="0.7">«Кантемировская»</text>

            {/* Луга в пойме на юге */}
            <rect x="0" y="560" width="1200" height="160" fill="url(#meadow-tex)" opacity="0.6"/>

            {/* Богучарка с притоком */}
            <path d="M 0 600 C 200 580, 320 620, 480 600 S 760 580, 920 600 S 1100 620, 1200 590"
                  stroke="url(#riverGrad)" strokeWidth="22" fill="none" opacity="0.75"/>
            <path d="M 0 600 C 200 580, 320 620, 480 600 S 760 580, 920 600 S 1100 620, 1200 590"
                  stroke="#a08560" strokeWidth="1" fill="none" strokeDasharray="2 4" opacity="0.5"/>
            {/* Приток справа */}
            <path d="M 920 600 Q 940 540 960 460 Q 970 400 990 360" stroke="url(#riverGrad)" strokeWidth="8" fill="none" opacity="0.7"/>

            {/* Тальник по берегам */}
            {Array.from({ length: 50 }).map((_, i) => (
              <g key={i}>
                <circle cx={20 + i * 24} cy={590 + Math.sin(i * 0.7) * 10} r="3" fill="#3d4f30" opacity="0.5"/>
                <circle cx={26 + i * 24} cy={612 + Math.cos(i * 0.5) * 8} r="2.5" fill="#56683f" opacity="0.55"/>
              </g>
            ))}

            {/* Подпись реки */}
            <text x="180" y="650" fontFamily="var(--serif-display)" fontStyle="italic" fontSize="22" fill="#2d3a24">р. Богучарка</text>
            <text x="180" y="672" fontFamily="var(--serif-text)" fontSize="11" fill="#2d3a24" opacity="0.7" letterSpacing="2">правый приток Дона</text>
            <text x="970" y="500" fontFamily="var(--serif-display)" fontStyle="italic" fontSize="13" fill="#2d3a24">руч. Грушевый</text>

            {/* СЕТКА УЛИЦ села — центральная зона */}
            <g>
              {/* Центральная — главная горизонталь */}
              <line x1="180" y1="380" x2="1020" y2="370" stroke="#5c4527" strokeWidth="3.5"/>
              {/* Российская */}
              <line x1="220" y1="280" x2="980" y2="275" stroke="#8b6f47" strokeWidth="2.5"/>
              {/* Октябрьская */}
              <line x1="220" y1="460" x2="960" y2="465" stroke="#8b6f47" strokeWidth="2.5"/>
              {/* Победы */}
              <line x1="280" y1="530" x2="900" y2="535" stroke="#8b6f47" strokeWidth="2.5"/>
              {/* Луговая (ближе к реке) */}
              <line x1="320" y1="565" x2="860" y2="568" stroke="#8b6f47" strokeWidth="2"/>
              {/* Степная */}
              <line x1="240" y1="220" x2="940" y2="218" stroke="#8b6f47" strokeWidth="2"/>
              {/* Большевик */}
              <line x1="260" y1="335" x2="980" y2="332" stroke="#8b6f47" strokeWidth="2"/>
              {/* Страна Советов */}
              <line x1="260" y1="410" x2="940" y2="412" stroke="#8b6f47" strokeWidth="2"/>

              {/* Поперечные */}
              <line x1="320" y1="180" x2="325" y2="560" stroke="#8b6f47" strokeWidth="2"/>
              <line x1="480" y1="160" x2="488" y2="570" stroke="#8b6f47" strokeWidth="2.5"/>
              <line x1="640" y1="160" x2="648" y2="570" stroke="#8b6f47" strokeWidth="3"/>
              <line x1="800" y1="180" x2="808" y2="565" stroke="#8b6f47" strokeWidth="2"/>
              <line x1="900" y1="200" x2="906" y2="555" stroke="#8b6f47" strokeWidth="2"/>

              {/* Переулки */}
              <line x1="400" y1="240" x2="404" y2="500" stroke="#a08560" strokeWidth="1" strokeDasharray="3 3"/>
              <line x1="560" y1="240" x2="564" y2="500" stroke="#a08560" strokeWidth="1" strokeDasharray="3 3"/>
              <line x1="720" y1="240" x2="724" y2="500" stroke="#a08560" strokeWidth="1" strokeDasharray="3 3"/>
            </g>

            {/* Дома — паттернами вдоль улиц */}
            <g opacity="0.85">
              {/* по обеим сторонам Центральной */}
              <rect x="200" y="354" width="800" height="14" fill="url(#house-row)"/>
              <rect x="200" y="382" width="800" height="14" fill="url(#house-row)"/>
              {/* по Российской */}
              <rect x="240" y="252" width="720" height="13" fill="url(#house-row)" opacity="0.8"/>
              <rect x="240" y="285" width="720" height="13" fill="url(#house-row)" opacity="0.8"/>
              {/* по Октябрьской */}
              <rect x="240" y="436" width="720" height="13" fill="url(#house-row)" opacity="0.8"/>
              <rect x="240" y="471" width="720" height="13" fill="url(#house-row)" opacity="0.8"/>
              {/* по Победы */}
              <rect x="300" y="510" width="600" height="12" fill="url(#house-row)" opacity="0.75"/>
              <rect x="300" y="542" width="580" height="12" fill="url(#house-row)" opacity="0.7"/>
            </g>

            {/* Огороды — между улицами */}
            <rect x="240" y="295" width="720" height="38" fill="url(#garden-tex)" opacity="0.5"/>
            <rect x="240" y="395" width="720" height="40" fill="url(#garden-tex)" opacity="0.45"/>

            {/* Названия улиц */}
            <g fontFamily="var(--serif-display)" fontStyle="italic" fontSize="13" fill="#2d3a24">
              <text x="600" y="372" fontSize="15" textAnchor="middle" fontWeight="600">ул. Центральная</text>
              <text x="600" y="270" fontSize="12" textAnchor="middle">ул. Российская</text>
              <text x="600" y="455" fontSize="12" textAnchor="middle">ул. Октябрьская</text>
              <text x="600" y="525" fontSize="12" textAnchor="middle">ул. Победы</text>
              <text x="600" y="560" fontSize="11" textAnchor="middle" opacity="0.8">ул. Луговая</text>
              <text x="600" y="213" fontSize="11" textAnchor="middle" opacity="0.8">ул. Степная</text>
              <text x="600" y="328" fontSize="10" textAnchor="middle" opacity="0.7">ул. Большевик</text>
              <text x="600" y="406" fontSize="10" textAnchor="middle" opacity="0.7">ул. Страна Советов</text>
            </g>

            {/* ОБЪЕКТЫ */}
            {/* 1 — Никольская церковь (исторически, на главной площади) */}
            <g>
              <circle cx="600" cy="375" r="14" fill="#8b4a2b" stroke="#3d2f1f" strokeWidth="1.5"/>
              <path d="M 600 365 L 600 360 M 596 360 L 604 360 M 600 360 L 600 357 L 597 357 M 600 360 L 600 357 L 603 357" stroke="#f4ead5" strokeWidth="1.5"/>
              <circle cx="600" cy="375" r="3" fill="#f4ead5"/>
              <text x="600" y="402" fontFamily="var(--serif-display)" fontStyle="italic" fontSize="14" fill="#8b4a2b" textAnchor="middle" fontWeight="600">Никольская церковь</text>
              <text x="600" y="416" fontFamily="var(--serif-text)" fontSize="10" fill="#8b4a2b" textAnchor="middle">1783 г. (утрач.)</text>
            </g>

            {/* 2 — Школа (Центральная) */}
            <g>
              <rect x="438" y="364" width="22" height="22" fill="#3d4f30" stroke="#2d3a24" strokeWidth="1"/>
              <text x="449" y="380" fontFamily="var(--sans)" fontSize="13" fill="#f4ead5" textAnchor="middle" fontWeight="600">Ш</text>
              <text x="449" y="408" fontFamily="var(--serif-text)" fontSize="11" fill="#2d3a24" textAnchor="middle">МКОУ Таловская СОШ</text>
              <text x="449" y="421" fontFamily="var(--serif-text)" fontSize="10" fill="#2d3a24" textAnchor="middle" opacity="0.7">350 учеников</text>
            </g>

            {/* 3 — Дом культуры */}
            <g>
              <rect x="752" y="362" width="26" height="26" fill="#3d4f30" stroke="#2d3a24" strokeWidth="1"/>
              <path d="M 752 362 L 765 354 L 778 362 Z" fill="#56683f" stroke="#2d3a24" strokeWidth="1"/>
              <text x="765" y="383" fontFamily="var(--sans)" fontSize="11" fill="#f4ead5" textAnchor="middle" fontWeight="600">ДК</text>
              <text x="765" y="408" fontFamily="var(--serif-text)" fontSize="11" fill="#2d3a24" textAnchor="middle">Таловский ЦКД</text>
              <text x="765" y="421" fontFamily="var(--serif-text)" fontSize="10" fill="#2d3a24" textAnchor="middle" opacity="0.7">Центральная, 166</text>
            </g>

            {/* 4 — Администрация */}
            <g>
              <rect x="894" y="362" width="22" height="22" fill="#5c4527" stroke="#3d2f1f" strokeWidth="1"/>
              <text x="905" y="378" fontFamily="var(--sans)" fontSize="13" fill="#f4ead5" textAnchor="middle" fontWeight="600">А</text>
              <text x="905" y="406" fontFamily="var(--serif-text)" fontSize="11" fill="#2d3a24" textAnchor="middle">администрация</text>
              <text x="905" y="419" fontFamily="var(--serif-text)" fontSize="10" fill="#2d3a24" textAnchor="middle" opacity="0.7">Центральная, 163</text>
            </g>

            {/* 5 — Братская могила */}
            <g>
              <path d="M 580 370 L 584 374 L 580 378 L 576 374 Z" fill="#8b4a2b"/>
              <path d="M 552 358 L 556 354 L 560 358 L 556 362 Z" fill="#8b4a2b" stroke="#3d2f1f" strokeWidth="0.6"/>
              <line x1="556" y1="354" x2="556" y2="368" stroke="#3d2f1f" strokeWidth="1"/>
              <line x1="552" y1="358" x2="560" y2="358" stroke="#3d2f1f" strokeWidth="1"/>
              <text x="510" y="338" fontFamily="var(--serif-display)" fontStyle="italic" fontSize="12" fill="#8b4a2b" textAnchor="end" fontWeight="600">братская могила</text>
              <text x="510" y="350" fontFamily="var(--serif-text)" fontSize="10" fill="#8b4a2b" textAnchor="end">937 бойцов</text>
              <line x1="514" y1="345" x2="552" y2="358" stroke="#8b4a2b" strokeWidth="0.6" strokeDasharray="2 2"/>
            </g>

            {/* 6 — Больница */}
            <g>
              <rect x="338" y="364" width="20" height="20" fill="#a04545" stroke="#3d2f1f" strokeWidth="0.8"/>
              <line x1="348" y1="368" x2="348" y2="380" stroke="#f4ead5" strokeWidth="2.5"/>
              <line x1="342" y1="374" x2="354" y2="374" stroke="#f4ead5" strokeWidth="2.5"/>
              <text x="348" y="406" fontFamily="var(--serif-text)" fontSize="11" fill="#2d3a24" textAnchor="middle">больница</text>
              <text x="348" y="418" fontFamily="var(--serif-text)" fontSize="10" fill="#2d3a24" textAnchor="middle" opacity="0.7">50 коек</text>
            </g>

            {/* 7 — Детский сад */}
            <g>
              <circle cx="675" cy="465" r="11" fill="#d9a44a" stroke="#5c4527" strokeWidth="1"/>
              <text x="675" y="469" fontFamily="var(--sans)" fontSize="11" fill="#3d2f1f" textAnchor="middle" fontWeight="600">Д</text>
              <text x="675" y="492" fontFamily="var(--serif-text)" fontSize="11" fill="#2d3a24" textAnchor="middle">детский сад</text>
              <text x="675" y="504" fontFamily="var(--serif-text)" fontSize="10" fill="#2d3a24" textAnchor="middle" opacity="0.7">50 мест</text>
            </g>

            {/* 8 — Магазины */}
            <g>
              <rect x="490" y="455" width="14" height="14" fill="#56683f"/>
              <rect x="540" y="455" width="14" height="14" fill="#56683f"/>
              <text x="497" y="490" fontFamily="var(--serif-text)" fontSize="10" fill="#2d3a24" textAnchor="middle">маг.</text>
              <text x="547" y="490" fontFamily="var(--serif-text)" fontSize="10" fill="#2d3a24" textAnchor="middle">маг.</text>
            </g>

            {/* 9 — Водонапорная башня (новая, ТОС "Пионер") */}
            <g>
              <rect x="828" y="335" width="8" height="20" fill="#56683f" stroke="#2d3a24" strokeWidth="0.6"/>
              <rect x="826" y="328" width="12" height="8" fill="#7a8a5a" stroke="#2d3a24" strokeWidth="0.6"/>
              <line x1="832" y1="328" x2="832" y2="320" stroke="#2d3a24" strokeWidth="0.8"/>
              <circle cx="832" cy="318" r="1.5" fill="#a04545"/>
              <text x="832" y="370" fontFamily="var(--serif-text)" fontSize="9" fill="#2d3a24" textAnchor="middle" opacity="0.85">водонап. башня</text>
              <text x="832" y="381" fontFamily="var(--serif-text)" fontSize="8" fill="#2d3a24" textAnchor="middle" opacity="0.6">ТОС «Пионер», 2024</text>
            </g>

            {/* 10 — Кладбище (на окраине) */}
            <g>
              <rect x="80" y="400" width="100" height="80" fill="#3d4f30" opacity="0.25" stroke="#2d3a24" strokeDasharray="2 2"/>
              {[0,1,2,3,4,5].map(i => (
                <g key={i} transform={`translate(${100 + (i % 3) * 30}, ${418 + Math.floor(i/3) * 32})`}>
                  <line x1="0" y1="0" x2="0" y2="14" stroke="#3d2f1f" strokeWidth="1.2"/>
                  <line x1="-3" y1="4" x2="3" y2="4" stroke="#3d2f1f" strokeWidth="1.2"/>
                </g>
              ))}
              <text x="130" y="498" fontFamily="var(--serif-text)" fontSize="11" fill="#2d3a24" textAnchor="middle" fontStyle="italic">кладбище</text>
            </g>

            {/* Дороги */}
            <g>
              {/* На Кантемировку */}
              <path d="M 600 130 Q 580 80 560 0" stroke="#5c4527" strokeWidth="6" fill="none" opacity="0.6"/>
              <path d="M 600 130 Q 580 80 560 0" stroke="#f4ead5" strokeWidth="1.5" fill="none" strokeDasharray="6 6"/>
              <text x="540" y="50" fontFamily="var(--serif-display)" fontStyle="italic" fontSize="14" fill="#3d2f1f" textAnchor="end">→ Кантемировка</text>
              <text x="540" y="66" fontFamily="var(--serif-text)" fontSize="11" fill="#3d2f1f" textAnchor="end" opacity="0.7">24 км</text>

              {/* На Бугаевку */}
              <path d="M 1020 370 Q 1110 380 1200 400" stroke="#5c4527" strokeWidth="4" fill="none" opacity="0.6"/>
              <text x="1170" y="395" fontFamily="var(--serif-display)" fontStyle="italic" fontSize="13" fill="#3d2f1f" textAnchor="end">→ Бугаевка</text>

              {/* На Чехуровку (юг) */}
              <path d="M 320 565 Q 280 640 240 720" stroke="#5c4527" strokeWidth="3" fill="none" opacity="0.55"/>
              <text x="200" y="700" fontFamily="var(--serif-display)" fontStyle="italic" fontSize="12" fill="#3d2f1f">→ Чехуровка</text>

              {/* На Митрофановку (восток) */}
              <path d="M 1000 460 Q 1120 480 1200 500" stroke="#5c4527" strokeWidth="3" fill="none" opacity="0.55"/>
              <text x="1170" y="475" fontFamily="var(--serif-display)" fontStyle="italic" fontSize="12" fill="#3d2f1f" textAnchor="end">→ Митрофановка</text>
            </g>

            {/* Курган в степи */}
            <g>
              <ellipse cx="220" cy="170" rx="18" ry="6" fill="#a08560" stroke="#5c4527" strokeWidth="0.8" opacity="0.85"/>
              <ellipse cx="220" cy="167" rx="10" ry="3.5" fill="#c9a875" stroke="#5c4527" strokeWidth="0.5" opacity="0.85"/>
              <text x="220" y="195" fontFamily="var(--serif-display)" fontStyle="italic" fontSize="11" fill="#5c4527" textAnchor="middle">курган</text>
            </g>
            <g>
              <ellipse cx="950" cy="160" rx="20" ry="7" fill="#a08560" stroke="#5c4527" strokeWidth="0.8" opacity="0.85"/>
              <ellipse cx="950" cy="156" rx="11" ry="4" fill="#c9a875" stroke="#5c4527" strokeWidth="0.5" opacity="0.85"/>
              <text x="950" y="186" fontFamily="var(--serif-display)" fontStyle="italic" fontSize="11" fill="#5c4527" textAnchor="middle">курган сарм.</text>
            </g>

            {/* Брод через Богучарку */}
            <g>
              <line x1="640" y1="592" x2="640" y2="612" stroke="#a04545" strokeWidth="2"/>
              <text x="640" y="588" fontFamily="var(--serif-text)" fontSize="10" fill="#3d2f1f" textAnchor="middle" fontStyle="italic">брод</text>
            </g>

            {/* Компас */}
            <g transform="translate(1110, 100)">
              <circle r="38" fill="#f6efde" stroke="#3d2f1f" strokeWidth="1.2"/>
              <circle r="34" fill="none" stroke="#5c4527" strokeWidth="0.4"/>
              <path d="M 0 -28 L 6 0 L 0 28 L -6 0 Z" fill="#3d4f30"/>
              <path d="M 0 -28 L 6 0 L -6 0 Z" fill="#8b4a2b"/>
              <text y="-44" fontFamily="var(--serif-display)" fontStyle="italic" fontSize="13" fill="#2d3a24" textAnchor="middle" fontWeight="600">С</text>
              <text y="50" fontFamily="var(--serif-display)" fontStyle="italic" fontSize="12" fill="#2d3a24" textAnchor="middle">Ю</text>
              <text x="-44" y="4" fontFamily="var(--serif-display)" fontStyle="italic" fontSize="12" fill="#2d3a24" textAnchor="middle">З</text>
              <text x="44" y="4" fontFamily="var(--serif-display)" fontStyle="italic" fontSize="12" fill="#2d3a24" textAnchor="middle">В</text>
            </g>

            {/* Масштабная линейка */}
            <g transform="translate(60, 690)">
              <line x1="0" y1="0" x2="160" y2="0" stroke="#3d2f1f" strokeWidth="1.5"/>
              <line x1="0" y1="-5" x2="0" y2="5" stroke="#3d2f1f" strokeWidth="1.5"/>
              <line x1="80" y1="-3" x2="80" y2="3" stroke="#3d2f1f" strokeWidth="1"/>
              <line x1="160" y1="-5" x2="160" y2="5" stroke="#3d2f1f" strokeWidth="1.5"/>
              <text x="0" y="-10" fontFamily="var(--sans)" fontSize="9" fill="#2d3a24">0</text>
              <text x="80" y="-10" fontFamily="var(--sans)" fontSize="9" fill="#2d3a24" textAnchor="middle">250</text>
              <text x="160" y="-10" fontFamily="var(--sans)" fontSize="9" fill="#2d3a24" textAnchor="middle">500 м</text>
            </g>

            {/* Координаты */}
            <text x="1140" y="700" fontFamily="var(--sans)" fontSize="10" fill="#2d3a24" textAnchor="end" letterSpacing="2">49°51′ С.Ш. · 40°04′ В.Д. · ВЫС. 132 М</text>

            {/* Картуш-заглавие */}
            <g transform="translate(60, 60)">
              <rect width="240" height="56" fill="#f4ead5" stroke="#3d2f1f" strokeWidth="1"/>
              <rect x="4" y="4" width="232" height="48" fill="none" stroke="#5c4527" strokeWidth="0.4"/>
              <text x="120" y="25" fontFamily="var(--serif-display)" fontStyle="italic" fontSize="16" fill="#2d3a24" textAnchor="middle" fontWeight="600">с. Талы</text>
              <text x="120" y="42" fontFamily="var(--serif-text)" fontSize="9" fill="#2d3a24" textAnchor="middle" letterSpacing="2" opacity="0.8">КАНТЕМИРОВСКИЙ Р-Н · ВОРОНЕЖ. ОБЛ.</text>
            </g>
          </svg>
        </div>

        {/* Легенда */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 18, marginTop: 30 }}>
          {[
            { color: '#8b4a2b', shape: 'circle', t: 'Никольская церковь (1783, утрачена)' },
            { color: '#3d4f30', shape: 'square', t: 'Школа · 350 учеников' },
            { color: '#3d4f30', shape: 'house', t: 'Дом культуры' },
            { color: '#5c4527', shape: 'square', t: 'Администрация' },
            { color: '#a04545', shape: 'square', t: 'Больница на 50 коек' },
            { color: '#d9a44a', shape: 'circle', t: 'Детский сад' },
            { color: '#56683f', shape: 'small', t: 'Магазины' },
            { color: '#3d4f30', shape: 'forest', t: 'Лесополосы и балки' },
            { color: '#7a8a5a', shape: 'meadow', t: 'Пойменные луга' },
            { color: '#a08560', shape: 'kurgan', t: 'Курганы скифо-сарматские' },
            { color: '#3d2f1f', shape: 'cross', t: 'Кладбище' },
            { color: '#8b4a2b', shape: 'diamond', t: 'Братская могила, 937 бойцов' },
          ].map((row, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 12px', background: 'var(--paper)', border: '1px solid var(--hairline)' }}>
              <div style={{ width: 22, height: 22, display: 'flex', alignItems: 'center', justifyContent: 'center', flex: '0 0 22px' }}>
                {row.shape === 'circle' && <span style={{ width: 14, height: 14, background: row.color, borderRadius: '50%', border: '1.5px solid #3d2f1f' }}/>}
                {row.shape === 'square' && <span style={{ width: 14, height: 14, background: row.color, border: '1.5px solid #3d2f1f' }}/>}
                {row.shape === 'small' && <span style={{ width: 10, height: 10, background: row.color }}/>}
                {row.shape === 'house' && <svg width="22" height="18" viewBox="0 0 22 18"><path d="M 2 16 L 2 8 L 11 2 L 20 8 L 20 16 Z" fill={row.color} stroke="#3d2f1f" strokeWidth="0.8"/></svg>}
                {row.shape === 'forest' && <svg width="22" height="14" viewBox="0 0 22 14"><circle cx="6" cy="7" r="3.5" fill={row.color}/><circle cx="13" cy="9" r="3" fill={row.color}/><circle cx="18" cy="6" r="3" fill={row.color}/></svg>}
                {row.shape === 'meadow' && <svg width="22" height="12" viewBox="0 0 22 12"><path d="M 2 10 V 5 M 6 10 V 4 M 10 10 V 6 M 14 10 V 3 M 18 10 V 5" stroke={row.color} strokeWidth="1.2"/></svg>}
                {row.shape === 'kurgan' && <svg width="22" height="12" viewBox="0 0 22 12"><ellipse cx="11" cy="9" rx="9" ry="3" fill={row.color}/><ellipse cx="11" cy="7" rx="5" ry="2" fill="#c9a875"/></svg>}
                {row.shape === 'cross' && <svg width="14" height="16" viewBox="0 0 14 16"><line x1="7" y1="2" x2="7" y2="14" stroke={row.color} strokeWidth="1.5"/><line x1="3" y1="6" x2="11" y2="6" stroke={row.color} strokeWidth="1.5"/></svg>}
                {row.shape === 'diamond' && <span style={{ width: 12, height: 12, background: row.color, transform: 'rotate(45deg)', border: '1px solid #3d2f1f' }}/>}
              </div>
              <div style={{ fontFamily: 'var(--serif-text)', fontSize: 13, color: 'var(--ink-2)', lineHeight: 1.3 }}>{row.t}</div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 30, padding: 28, background: 'var(--moss-1)', color: 'var(--paper)', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 30 }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: 8, color: 'var(--moss-5)' }}>как добраться</div>
            <div style={{ fontFamily: 'var(--serif-text)', fontSize: 14, lineHeight: 1.65 }}>
              От райцентра <b>Кантемировка — 24 км</b> на северо-восток. Ближайшая ж/д станция — Кантемировка, ветка Москва — Ростов-на-Дону.
            </div>
          </div>
          <div>
            <div className="eyebrow" style={{ marginBottom: 8, color: 'var(--moss-5)' }}>от Воронежа</div>
            <div style={{ fontFamily: 'var(--serif-text)', fontSize: 14, lineHeight: 1.65 }}>
              <b>≈ 300 км</b> на юг по трассе М-4 «Дон» до Богучара, далее через Кантемировку.
            </div>
          </div>
          <div>
            <div className="eyebrow" style={{ marginBottom: 8, color: 'var(--moss-5)' }}>соседи</div>
            <div style={{ fontFamily: 'var(--serif-text)', fontSize: 14, lineHeight: 1.65 }}>
              Бугаевка, Чехуровка (входят в Таловское с/п), Митрофановка, Писаревка.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   КОНТАКТЫ
   ============================================================ */
function ContactsSection() {
  return (
    <section id="contacts" style={{ padding: '120px 60px 80px', background: 'var(--moss-1)', color: 'var(--paper)' }}
             data-screen-label="Контакты">
      <div style={{ maxWidth: 1180, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <div className="eyebrow" style={{ marginBottom: 14, color: 'var(--moss-5)' }}>Раздел XII</div>
          <h2 className="h-display" style={{ fontSize: 'clamp(36px, 4.4vw, 64px)', margin: '0 0 18px', fontStyle: 'italic', color: 'var(--paper)' }}>
            Администрация и контакты
          </h2>
          <Ornament color="var(--moss-5)" />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0, border: '1px solid rgba(244,234,213,0.3)' }}>
          <div style={{ padding: '36px 32px', borderRight: '1px solid rgba(244,234,213,0.3)' }}>
            <div className="eyebrow" style={{ color: 'var(--moss-5)', marginBottom: 14 }}>Глава поселения</div>
            <h3 style={{ fontFamily: 'var(--serif-display)', fontStyle: 'italic', fontSize: 28, margin: '0 0 8px', color: 'var(--paper)', fontWeight: 500 }}>
              Александр Андреевич<br/>Ковалёв
            </h3>
            <div style={{ fontFamily: 'var(--serif-text)', fontSize: 14, color: 'var(--paper-2)', marginTop: 16 }}>
              Приём граждан — вторник, четверг<br/>с 10:00 до 13:00
            </div>
          </div>
          <div style={{ padding: '36px 32px', borderRight: '1px solid rgba(244,234,213,0.3)' }}>
            <div className="eyebrow" style={{ color: 'var(--moss-5)', marginBottom: 14 }}>Адрес</div>
            <div style={{ fontFamily: 'var(--serif-display)', fontStyle: 'italic', fontSize: 22, color: 'var(--paper)', lineHeight: 1.4 }}>
              Воронежская обл.<br/>
              Кантемировский р-н<br/>
              с. Талы, ул. Центральная, 163
            </div>
            <div style={{ fontFamily: 'var(--sans)', fontSize: 12, color: 'var(--moss-5)', letterSpacing: '0.12em', marginTop: 16 }}>
              индекс 396737
            </div>
          </div>
          <div style={{ padding: '36px 32px' }}>
            <div className="eyebrow" style={{ color: 'var(--moss-5)', marginBottom: 14 }}>Связь</div>
            <div style={{ fontFamily: 'var(--serif-display)', fontStyle: 'italic', fontSize: 22, color: 'var(--paper)', lineHeight: 1.6 }}>
              <div>+7 (47367) 5-63-43</div>
              <div style={{ fontSize: 16 }}>talov.kantem@govvrn.ru</div>
            </div>
            <div style={{ fontFamily: 'var(--serif-text)', fontSize: 13, color: 'var(--paper-2)', marginTop: 16, fontStyle: 'italic' }}>
              Рабочие дни: пн–пт, 8:00 — 17:00<br/>
              Обед: 12:00 — 13:00
            </div>
          </div>
        </div>

        <div style={{ marginTop: 30, padding: '24px 32px', background: 'rgba(244,234,213,0.06)', border: '1px solid rgba(244,234,213,0.18)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 20 }}>
          <div>
            <div className="eyebrow" style={{ color: 'var(--moss-5)', marginBottom: 6 }}>Дом культуры</div>
            <div style={{ fontFamily: 'var(--serif-display)', fontStyle: 'italic', fontSize: 20, color: 'var(--paper)' }}>
              Таловский ЦКД · ул. Центральная, 166
            </div>
            <div style={{ fontFamily: 'var(--serif-text)', fontSize: 13, color: 'var(--paper-2)', marginTop: 4 }}>
              директор — Лариса Ивановна Мишина
            </div>
          </div>
          <div>
            <div className="eyebrow" style={{ color: 'var(--moss-5)', marginBottom: 6 }}>Школа</div>
            <div style={{ fontFamily: 'var(--serif-display)', fontStyle: 'italic', fontSize: 20, color: 'var(--paper)' }}>
              МКОУ «Таловская СОШ»
            </div>
            <div style={{ fontFamily: 'var(--serif-text)', fontSize: 13, color: 'var(--paper-2)', marginTop: 4 }}>
              350 учеников, ул. Центральная
            </div>
          </div>
        </div>

        <div style={{ marginTop: 80, paddingTop: 40, borderTop: '1px solid rgba(244,234,213,0.3)', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 24 }}>
          <div>
            <div style={{ fontFamily: 'var(--serif-display)', fontStyle: 'italic', fontSize: 32, color: 'var(--paper)', fontWeight: 500 }}>
              Талы
            </div>
            <div style={{ fontFamily: 'var(--serif-text)', fontSize: 14, color: 'var(--paper-2)', marginTop: 4 }}>
              село на правом берегу Богучарки. Основано в 1747 году.
            </div>
          </div>
          <div style={{ fontFamily: 'var(--sans)', fontSize: 11, color: 'var(--moss-5)', letterSpacing: '0.16em', textTransform: 'uppercase' }}>
            © {new Date().getFullYear()} · информационный портал жителей села
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { MapSection, ContactsSection });
