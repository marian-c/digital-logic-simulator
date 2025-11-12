export default function PageStrangeScrollingVirtuaReactEcoPg() {
  const pages = 100;

  const width = 50;
  return (
    <div
      style={{
        display: 'inline-block',
        overflowX: 'auto',
        contain: 'strict',
        width: 400,
        height: 400,
        scrollSnapType: 'x mandatory',
      }}
    >
      <div
        style={{
          overflowAnchor: 'none',
          flex: '0 0 auto',
          position: 'relative',
          visibility: 'hidden',
          width: pages * width,
          height: ' 100%',
        }}
      >
        {Array.from({ length: pages }).map((_, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              height: '100%',
              top: '0px',
              left: i * width,
              visibility: 'visible',
              display: 'flex',
            }}
          >
            <div
              style={{
                scrollSnapAlign: 'start',
                width: '50px',
                borderRight: '1px solid gray',
                background: 'pink',
              }}
            >
              {i}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
