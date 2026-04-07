export function Logo({ className = '', width = 280 }: { className?: string; width?: number }) {
  const height = (width / 700) * 380
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 700 380"
      width={width}
      height={height}
      className={className}
    >
      <defs>
        <linearGradient id="bt1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: '#6B7F5E' }} />
          <stop offset="50%" style={{ stopColor: '#7A8E6C' }} />
          <stop offset="100%" style={{ stopColor: '#8B9E7C' }} />
        </linearGradient>
        <linearGradient id="bm1" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#8B9E7C' }} />
          <stop offset="40%" style={{ stopColor: '#A3B18A' }} />
          <stop offset="70%" style={{ stopColor: '#C2C9A7' }} />
          <stop offset="100%" style={{ stopColor: '#E8DABB' }} />
        </linearGradient>
        <linearGradient id="bl1" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#D4C9A8', stopOpacity: 0.5 }} />
          <stop offset="100%" style={{ stopColor: '#E8DABB', stopOpacity: 0.8 }} />
        </linearGradient>
        <linearGradient id="ff1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#9E8B6E', stopOpacity: 0.65 }} />
          <stop offset="100%" style={{ stopColor: '#B5A48A', stopOpacity: 0.45 }} />
        </linearGradient>
        <linearGradient id="tf1" x1="100%" y1="0%" x2="0%" y2="0%">
          <stop offset="0%" style={{ stopColor: '#8B9E7C', stopOpacity: 0.7 }} />
          <stop offset="100%" style={{ stopColor: '#9E8B6E', stopOpacity: 0.5 }} />
        </linearGradient>
      </defs>
      <g transform="translate(60, 12)">
        <path d="M 72 108 Q 48 85 22 52 Q 38 72 48 88 Q 30 58 12 28 Q 35 65 52 95" fill="url(#tf1)" stroke="#5C6B4E" strokeWidth="1.8" strokeLinecap="round" opacity="0.8" />
        <path d="M 72 128 Q 48 150 22 182 Q 38 162 48 148 Q 30 175 12 205 Q 35 170 52 142" fill="url(#tf1)" stroke="#5C6B4E" strokeWidth="1.8" strokeLinecap="round" opacity="0.8" />
        <path d="M 70 115 C 95 108,130 82,180 68 C 220 58,270 48,320 44 C 370 40,420 42,460 50 C 490 56,510 65,530 80 C 542 90,548 100,550 112 L 548 118 C 546 130,540 140,530 148 C 515 162,495 170,470 176 C 430 186,380 190,330 190 C 270 190,210 185,165 175 C 130 167,100 155,80 142 C 72 136,70 125,70 120 Z" fill="url(#bm1)" stroke="#5C6B4E" strokeWidth="2" strokeLinejoin="round" />
        <path d="M 70 115 C 95 108,130 82,180 68 C 220 58,270 48,320 44 C 370 40,420 42,460 50 C 490 56,510 65,530 80 C 542 90,548 100,550 112 L 548 114 C 500 100,440 82,370 76 C 300 70,220 78,160 92 C 120 102,90 112,70 118 Z" fill="url(#bt1)" opacity="0.6" />
        <path d="M 100 155 C 140 170,200 180,280 185 C 340 188,400 186,450 178 C 470 174,490 168,505 160 C 490 172,460 182,430 188 C 380 196,310 198,250 194 C 190 189,140 178,105 162 Z" fill="url(#bl1)" opacity="0.6" />
        <path d="M 280 50 Q 295 18 310 8 Q 318 12 322 22 Q 332 10 342 8 Q 348 14 350 24 Q 358 16 365 18 Q 362 32 358 46 Q 330 38 300 42 Z" fill="url(#ff1)" stroke="#6B7F5E" strokeWidth="1.4" strokeLinejoin="round" opacity="0.8" />
        <path d="M 430 54 Q 440 38 452 44 Q 450 54 442 60 Z" fill="#9E8B6E" stroke="#6B7F5E" strokeWidth="1" opacity="0.55" />
        <path d="M 460 148 Q 478 168 475 195 Q 468 188 460 178 Q 455 190 448 200 Q 450 180 455 160 Z" fill="url(#ff1)" stroke="#6B7F5E" strokeWidth="1.3" strokeLinejoin="round" opacity="0.7" />
        <path d="M 310 186 Q 320 206 316 225 Q 310 218 305 210 Q 300 220 295 228 Q 298 210 305 192 Z" fill="url(#ff1)" stroke="#6B7F5E" strokeWidth="1.2" strokeLinejoin="round" opacity="0.65" />
        <path d="M 310 186 Q 308 192 305 196" fill="none" stroke="#F0EBD8" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
        <path d="M 195 178 Q 202 198 198 215 Q 194 210 190 204 Q 186 212 182 218 Q 185 200 190 184 Z" fill="url(#ff1)" stroke="#6B7F5E" strokeWidth="1.2" strokeLinejoin="round" opacity="0.65" />
        <path d="M 195 178 Q 193 184 190 188" fill="none" stroke="#F0EBD8" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
        <path d="M 520 112 Q 440 108 350 112 Q 260 116 170 128 Q 120 135 85 140" fill="none" stroke="#5C6B4E" strokeWidth="0.8" strokeDasharray="5 7" opacity="0.3" />
        {/* vermiculation */}
        <path d="M 180 72 Q 186 66 192 72 Q 198 78 204 72" fill="none" stroke="#4A5A3C" strokeWidth="1.4" opacity="0.35" />
        <path d="M 220 64 Q 226 58 232 64 Q 238 70 244 64" fill="none" stroke="#4A5A3C" strokeWidth="1.4" opacity="0.35" />
        <path d="M 260 58 Q 266 52 272 58 Q 278 64 284 58" fill="none" stroke="#4A5A3C" strokeWidth="1.4" opacity="0.3" />
        <path d="M 310 52 Q 316 46 322 52 Q 328 58 334 52" fill="none" stroke="#4A5A3C" strokeWidth="1.3" opacity="0.3" />
        <path d="M 355 50 Q 361 44 367 50 Q 373 56 379 50" fill="none" stroke="#4A5A3C" strokeWidth="1.3" opacity="0.28" />
        <path d="M 400 52 Q 406 46 412 52 Q 418 58 424 52" fill="none" stroke="#4A5A3C" strokeWidth="1.2" opacity="0.25" />
        <path d="M 150 88 Q 156 82 162 88 Q 168 94 174 88" fill="none" stroke="#4A5A3C" strokeWidth="1.3" opacity="0.3" />
        <path d="M 200 80 Q 206 74 212 80 Q 218 86 224 80" fill="none" stroke="#4A5A3C" strokeWidth="1.3" opacity="0.28" />
        <path d="M 250 74 Q 256 68 262 74 Q 268 80 274 74" fill="none" stroke="#4A5A3C" strokeWidth="1.2" opacity="0.25" />
        {/* halos */}
        <circle cx="200" cy="115" r="5.5" fill="#7A9AAE" opacity="0.2" />
        <circle cx="250" cy="105" r="5.5" fill="#7A9AAE" opacity="0.2" />
        <circle cx="300" cy="110" r="5.5" fill="#7A9AAE" opacity="0.2" />
        <circle cx="350" cy="100" r="5.5" fill="#7A9AAE" opacity="0.2" />
        <circle cx="400" cy="105" r="5" fill="#7A9AAE" opacity="0.18" />
        <circle cx="220" cy="140" r="5" fill="#7A9AAE" opacity="0.18" />
        <circle cx="280" cy="135" r="5.5" fill="#7A9AAE" opacity="0.2" />
        <circle cx="340" cy="130" r="5" fill="#7A9AAE" opacity="0.18" />
        <circle cx="175" cy="135" r="5" fill="#7A9AAE" opacity="0.18" />
        <circle cx="440" cy="95" r="4.5" fill="#7A9AAE" opacity="0.16" />
        <circle cx="390" cy="130" r="4.5" fill="#7A9AAE" opacity="0.16" />
        <circle cx="150" cy="155" r="4.5" fill="#7A9AAE" opacity="0.15" />
        {/* red spots */}
        <circle cx="200" cy="115" r="3.5" fill="#C4704B" opacity="0.7" /><circle cx="200" cy="115" r="2" fill="#D4856A" opacity="0.9" />
        <circle cx="250" cy="105" r="3.5" fill="#C4704B" opacity="0.7" /><circle cx="250" cy="105" r="2" fill="#D4856A" opacity="0.9" />
        <circle cx="300" cy="110" r="3.5" fill="#C4704B" opacity="0.7" /><circle cx="300" cy="110" r="2" fill="#D4856A" opacity="0.9" />
        <circle cx="350" cy="100" r="3.5" fill="#C4704B" opacity="0.68" /><circle cx="350" cy="100" r="2" fill="#D4856A" opacity="0.88" />
        <circle cx="400" cy="105" r="3" fill="#C4704B" opacity="0.65" /><circle cx="400" cy="105" r="1.8" fill="#D4856A" opacity="0.85" />
        <circle cx="220" cy="140" r="3" fill="#C4704B" opacity="0.65" /><circle cx="220" cy="140" r="1.8" fill="#D4856A" opacity="0.85" />
        <circle cx="280" cy="135" r="3.5" fill="#C4704B" opacity="0.68" /><circle cx="280" cy="135" r="2" fill="#D4856A" opacity="0.88" />
        <circle cx="340" cy="130" r="3" fill="#C4704B" opacity="0.65" /><circle cx="340" cy="130" r="1.8" fill="#D4856A" opacity="0.85" />
        <circle cx="175" cy="135" r="3" fill="#C4704B" opacity="0.6" /><circle cx="175" cy="135" r="1.8" fill="#D4856A" opacity="0.82" />
        <circle cx="440" cy="95" r="2.8" fill="#C4704B" opacity="0.55" /><circle cx="440" cy="95" r="1.6" fill="#D4856A" opacity="0.78" />
        <circle cx="390" cy="130" r="2.8" fill="#C4704B" opacity="0.55" /><circle cx="390" cy="130" r="1.6" fill="#D4856A" opacity="0.78" />
        <circle cx="150" cy="155" r="2.8" fill="#C4704B" opacity="0.5" /><circle cx="150" cy="155" r="1.6" fill="#D4856A" opacity="0.75" />
        {/* cream spots */}
        <circle cx="230" cy="90" r="2" fill="#E8DABB" opacity="0.4" />
        <circle cx="280" cy="82" r="1.8" fill="#E8DABB" opacity="0.35" />
        <circle cx="330" cy="78" r="1.8" fill="#E8DABB" opacity="0.35" />
        <circle cx="380" cy="80" r="1.8" fill="#E8DABB" opacity="0.3" />
        <circle cx="420" cy="78" r="1.5" fill="#E8DABB" opacity="0.28" />
        <circle cx="170" cy="105" r="2" fill="#E8DABB" opacity="0.35" />
        {/* gill */}
        <path d="M 490 82 Q 495 105 492 135" fill="none" stroke="#5C6B4E" strokeWidth="1.8" opacity="0.45" strokeLinecap="round" />
        {/* eye */}
        <circle cx="520" cy="100" r="7.5" fill="#2D3424" /><circle cx="520" cy="100" r="5" fill="#3D4A30" /><circle cx="522" cy="98" r="2" fill="#E8DABB" opacity="0.75" />
        {/* mouth */}
        <path d="M 548 118 Q 555 114 558 108" fill="none" stroke="#5C6B4E" strokeWidth="2" strokeLinecap="round" />
        <path d="M 548 112 Q 554 110 558 108" fill="none" stroke="#5C6B4E" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
        <path d="M 548 118 Q 552 122 548 126" fill="none" stroke="#5C6B4E" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      </g>
      <text x="350" y="310" textAnchor="middle" fontFamily="'Dancing Script', cursive" fontSize="72" fontWeight="600" fill="#5C6B4E" letterSpacing="4">
        trout trek
      </text>
      <path d="M 175 328 Q 260 340 350 332 Q 440 324 525 335" fill="none" stroke="#8B9E7C" strokeWidth="1.5" strokeLinecap="round" opacity="0.45" />
    </svg>
  )
}

export function LogoMark({ className = '', size = 48 }: { className?: string; size?: number }) {
  const h = (size / 560) * 200
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="60 12 560 200"
      width={size}
      height={h}
      className={className}
    >
      <defs>
        <linearGradient id="bm1m" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#8B9E7C' }} />
          <stop offset="40%" style={{ stopColor: '#A3B18A' }} />
          <stop offset="70%" style={{ stopColor: '#C2C9A7' }} />
          <stop offset="100%" style={{ stopColor: '#E8DABB' }} />
        </linearGradient>
      </defs>
      <g transform="translate(60, 12)">
        <path d="M 70 115 C 95 108,130 82,180 68 C 220 58,270 48,320 44 C 370 40,420 42,460 50 C 490 56,510 65,530 80 C 542 90,548 100,550 112 L 548 118 C 546 130,540 140,530 148 C 515 162,495 170,470 176 C 430 186,380 190,330 190 C 270 190,210 185,165 175 C 130 167,100 155,80 142 C 72 136,70 125,70 120 Z" fill="url(#bm1m)" stroke="#5C6B4E" strokeWidth="2" strokeLinejoin="round" />
        <circle cx="200" cy="115" r="3.5" fill="#C4704B" opacity="0.7" />
        <circle cx="300" cy="110" r="3.5" fill="#C4704B" opacity="0.7" />
        <circle cx="400" cy="105" r="3" fill="#C4704B" opacity="0.65" />
        <circle cx="520" cy="100" r="7.5" fill="#2D3424" /><circle cx="522" cy="98" r="2" fill="#E8DABB" opacity="0.75" />
        <path d="M 548 118 Q 555 114 558 108" fill="none" stroke="#5C6B4E" strokeWidth="2" strokeLinecap="round" />
      </g>
    </svg>
  )
}
