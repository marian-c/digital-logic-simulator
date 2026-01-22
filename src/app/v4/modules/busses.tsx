export function Busses() {
  return (
    <div
      className="absolute top-2 w-auto z-20 select-none overflow-y-auto border border-gray-300 bg-amber-50 bg-opacity-75 p-2"
      style={{ left: '50%', transform: 'translateX(-50%)' }}
    >
      <svg style={{ height: 50, width: 170 }}>
        <g transform="scale(0.5)">
          <rect width={50} height={30} rx={5} ry={5} fill="black" />
          <rect width={40} height={12} rx={3} ry={3} x={5} y={5} fill="white" />
          <circle r={5} fill="white" stroke="black" strokeWidth={3} cx={10} cy={30} />
          <circle r={5} fill="white" stroke="black" strokeWidth={3} cx={40} cy={30} />
        </g>
        <g transform="translate(60, 0)">
          <rect width={50} height={30} rx={5} ry={5} fill="black" />
          <rect width={40} height={12} rx={3} ry={3} x={5} y={5} fill="white" />
          <circle r={5} fill="white" stroke="black" strokeWidth={3} cx={10} cy={30} />
          <circle r={5} fill="white" stroke="black" strokeWidth={3} cx={40} cy={30} />
        </g>
        <g transform="translate(120, 0)">
          <rect width={50} height={30} rx={5} ry={5} fill="black" />
          <rect width={40} height={12} rx={3} ry={3} x={5} y={5} fill="white" />
          <circle r={5} fill="white" stroke="black" strokeWidth={3} cx={10} cy={30} />
          <circle r={5} fill="white" stroke="black" strokeWidth={3} cx={40} cy={30} />
        </g>
      </svg>
    </div>
  );
}
