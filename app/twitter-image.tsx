import { ImageResponse } from 'next/og';

// Route segment config
export const runtime = 'edge';

// Image metadata
export const alt = "Maintafox - Algeria's First Local CMMS";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          background: 'linear-gradient(to bottom right, #0b1e35, #071427)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        {/* Background Accents */}
        <div
          style={{
            position: 'absolute',
            top: '-100px',
            left: '-100px',
            width: '400px',
            height: '400px',
            background: '#ff7a19',
            opacity: '0.1',
            filter: 'blur(100px)',
            borderRadius: '50%',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-100px',
            right: '-100px',
            width: '400px',
            height: '400px',
            background: '#1e90ff',
            opacity: '0.1',
            filter: 'blur(100px)',
            borderRadius: '50%',
          }}
        />

        {/* Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10,
          }}
        >
          {/* Logo / Brand */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '20px',
            }}
          >
            <div
              style={{
                fontSize: 80,
                fontWeight: 900,
                color: 'white',
                letterSpacing: '-0.02em',
              }}
            >
              Maintafox
            </div>
            <div
              style={{
                width: '20px',
                height: '20px',
                background: '#ff7a19',
                borderRadius: '50%',
                marginLeft: '10px',
                marginTop: '20px',
              }}
            />
          </div>

          {/* Tagline */}
          <div
            style={{
              fontSize: 32,
              color: '#e5e7eb',
              textAlign: 'center',
              maxWidth: '800px',
              lineHeight: 1.4,
              fontWeight: 500,
            }}
          >
            Algeria&apos;s First Local CMMS
          </div>

          {/* Sub-tagline */}
          <div
            style={{
              marginTop: '30px',
              padding: '12px 24px',
              background: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '50px',
              fontSize: 20,
              color: '#ff7a19',
              fontWeight: 600,
              border: '1px solid rgba(255, 255, 255, 0.2)',
            }}
          >
            Proactive Maintenance Software
          </div>
        </div>
      </div>
    ),
    // ImageResponse options
    {
      ...size,
    }
  );
}
