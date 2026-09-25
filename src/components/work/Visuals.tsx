import React from "react";
import type { ProjectVisual } from "@/data/projects";

/*
 * Small drawings for the project viewer. They are decorative sketches of what
 * each project is about, not data: colours come from theme classes so they
 * follow dark mode.
 */

const ACCENT_FILL = "fill-accent dark:fill-accent-dark";
const ACCENT_STROKE = "stroke-accent dark:stroke-accent-dark";
const MARK_FILL = "fill-mark dark:fill-mark-dark";
const MARK_STROKE = "stroke-mark dark:stroke-mark-dark";
const INK_STROKE = "stroke-ink dark:stroke-ink-dark";
const CARD_FILL = "fill-card dark:fill-card-dark";

// Relative monthly rainfall, used only for the shape of the drawing.
const RAIN = [250, 190, 190, 140, 110, 120, 140, 190, 250, 260, 270, 270];

const RainDrawing: React.FC = () => {
  const max = Math.max(...RAIN);
  const total = RAIN.reduce((a, b) => a + b, 0);
  let running = 0;
  const points = RAIN.map((v, i) => {
    running += v;
    return `${118 + i * 92},${360 - (running / total) * 260}`;
  }).join(" ");

  return (
    <svg viewBox="0 0 1180 420" className="h-auto w-full max-w-[40rem]" aria-hidden="true">
      <line x1="80" y1="360" x2="1180" y2="360" className={INK_STROKE} strokeWidth="2" />
      {RAIN.map((v, i) => {
        const h = (v / max) * 260;
        return <rect key={i} x={90 + i * 92} y={360 - h} width="56" height={h} className={ACCENT_FILL} />;
      })}
      <polyline
        points={points}
        fill="none"
        className={MARK_STROKE}
        strokeWidth="6"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <circle cx="1130" cy="100" r="12" className={MARK_FILL} />
    </svg>
  );
};

const RecipesDrawing: React.FC = () => (
  <svg viewBox="0 0 360 220" className="h-auto w-full max-w-[30rem]" aria-hidden="true">
    <rect x="70" y="40" width="210" height="150" rx="4" className={`${CARD_FILL} ${INK_STROKE}`} transform="rotate(-7 175 115)" />
    <rect x="80" y="36" width="210" height="150" rx="4" className={`${CARD_FILL} ${INK_STROKE}`} transform="rotate(4 185 111)" />
    <rect x="75" y="34" width="210" height="150" rx="4" className={`${CARD_FILL} ${INK_STROKE}`} />
    <rect x="97" y="56" width="90" height="14" className={ACCENT_FILL} />
    {[92, 110, 128].map((y, i) => (
      <line key={y} x1="97" y1={y} x2={[262, 240, 252][i]} y2={y} className={INK_STROKE} strokeOpacity="0.45" />
    ))}
    <circle cx="255" cy="160" r="10" className={MARK_FILL} />
  </svg>
);

const TREND =
  "10,150 30,138 50,152 70,140 90,146 110,128 130,139 150,124 170,133 190,118 210,126 230,108 250,117 270,100 290,109 310,90 330,97 350,78 370,86 390,66 410,60";

const TrendDrawing: React.FC = () => (
  <svg viewBox="0 0 420 200" className="h-auto w-full max-w-[38rem]" aria-hidden="true">
    <line x1="10" y1="170" x2="410" y2="170" className={INK_STROKE} />
    <line x1="10" y1="120" x2="410" y2="120" className={INK_STROKE} strokeOpacity="0.4" strokeDasharray="4 6" />
    <polyline points={TREND} fill="none" className={ACCENT_STROKE} strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" />
    <circle cx="410" cy="60" r="7" className={MARK_FILL} />
  </svg>
);

// A 14 × 7 map: the enemy path winds from left to right.
const COLS = 14;
const ROWS = 7;
const CELL = 38;
const PATH = new Set<string>();
const addPath = (c: number, r: number) => PATH.add(`${c},${r}`);
for (let c = 0; c <= 4; c++) addPath(c, 1);
for (let r = 1; r <= 5; r++) addPath(4, r);
for (let c = 4; c <= 9; c++) addPath(c, 5);
for (let r = 2; r <= 5; r++) addPath(9, r);
for (let c = 9; c < COLS; c++) addPath(c, 2);
const TOWERS: [number, number][] = [[2, 3], [6, 3], [7, 6], [11, 4]];
const ENEMIES: [number, number][] = [[1, 1], [4, 3], [7, 5], [9, 3]];
const centre = (n: number) => 2 + n * CELL + 17;

const TowersDrawing: React.FC = () => (
  <svg viewBox="0 0 536 270" className="h-auto w-full max-w-[36rem]" aria-hidden="true">
    {Array.from({ length: ROWS * COLS }, (_, i) => {
      const c = i % COLS;
      const r = Math.floor(i / COLS);
      const onPath = PATH.has(`${c},${r}`);
      return (
        <rect
          key={i}
          x={2 + c * CELL}
          y={2 + r * CELL}
          width="34"
          height="34"
          className={onPath ? ACCENT_FILL : `${CARD_FILL} ${INK_STROKE}`}
          strokeOpacity={onPath ? 0 : 0.15}
        />
      );
    })}
    {TOWERS.map(([c, r]) => (
      <g key={`${c}-${r}`}>
        <circle cx={centre(c)} cy={centre(r)} r="46" fill="none" className={MARK_STROKE} strokeOpacity="0.4" strokeDasharray="3 4" />
        <circle cx={centre(c)} cy={centre(r)} r="11" className={MARK_FILL} />
      </g>
    ))}
    {ENEMIES.map(([c, r]) => (
      <rect key={`${c}-${r}`} x={2 + c * CELL + 11} y={2 + r * CELL + 11} width="12" height="12" className="fill-paper dark:fill-paper-dark" />
    ))}
  </svg>
);

export const ProjectDrawing: React.FC<{ visual: ProjectVisual }> = ({ visual }) => {
  switch (visual) {
    case "rain":
      return <RainDrawing />;
    case "recipes":
      return <RecipesDrawing />;
    case "trend":
      return <TrendDrawing />;
    case "towers":
      return <TowersDrawing />;
  }
};
