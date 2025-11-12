import { VList } from 'virtua';

export default function PageVirtuaReactEcoPg() {
  return (
    <div>
      <h2>VList simple</h2>

      <VList style={{ height: 400 }} horizontal>
        {Array.from({ length: 1000 }).map((_, i) => (
          <div
            key={i}
            style={{
              width: Math.floor(Math.random() * 10) * 10 + 10,
              borderRight: 'solid 1px gray',
              background: 'white',
            }}
          >
            {i}
          </div>
        ))}
      </VList>
    </div>
  );
}
