import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

// Configuración del runtime edge para mejor performance
export const runtime = 'edge';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    
    // Parámetros de la imagen OG
    const title = searchParams.get('title') || 'Synko - IA y Automatización';
    const description = searchParams.get('description') || 'Orquestamos IA y automatización para crecer sin fricción';
    const type = searchParams.get('type') || 'default'; // default, blog, product, case
    
    // TODO: Cargar fuentes personalizadas cuando sea necesario
    // const interSemiBold = fetch(
    //   new URL('./Inter-SemiBold.ttf', import.meta.url),
    // ).then((res) => res.arrayBuffer());
    
    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#ffffff',
            backgroundImage: 'linear-gradient(135deg, #0369a1 0%, #22c55e 100%)',
          }}
        >
          {/* Contenedor principal */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              borderRadius: '24px',
              padding: '60px',
              margin: '40px',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
              maxWidth: '1000px',
              textAlign: 'center',
            }}
          >
            {/* Logo/Marca */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '40px',
              }}
            >
              <div
                style={{
                  width: '60px',
                  height: '60px',
                  backgroundColor: '#0369a1',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: '20px',
                }}
              >
                <span style={{ color: 'white', fontSize: '32px', fontWeight: 'bold' }}>S</span>
              </div>
              <span
                style={{
                  fontSize: '48px',
                  fontWeight: 'bold',
                  color: '#0f172a',
                  fontFamily: 'system-ui, sans-serif',
                }}
              >
                Synko
              </span>
            </div>
            
            {/* Título */}
            <h1
              style={{
                fontSize: type === 'blog' ? '56px' : '64px',
                fontWeight: 'bold',
                color: '#0f172a',
                lineHeight: 1.2,
                marginBottom: '24px',
                fontFamily: 'system-ui, sans-serif',
                maxWidth: '900px',
              }}
            >
              {title}
            </h1>
            
            {/* Descripción */}
            <p
              style={{
                fontSize: '28px',
                color: '#64748b',
                lineHeight: 1.4,
                marginBottom: '40px',
                fontFamily: 'system-ui, sans-serif',
                maxWidth: '800px',
              }}
            >
              {description}
            </p>
            
            {/* Badge de tipo */}
            {type !== 'default' && (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  backgroundColor: type === 'blog' ? '#22c55e' : '#c026d3',
                  color: 'white',
                  padding: '12px 24px',
                  borderRadius: '999px',
                  fontSize: '20px',
                  fontWeight: '600',
                  fontFamily: 'system-ui, sans-serif',
                }}
              >
                {type === 'blog' && '📝 Blog'}
                {type === 'product' && '🚀 Producto'}
                {type === 'case' && '💼 Caso de Estudio'}
              </div>
            )}
          </div>
          
          {/* Footer con URL */}
          <div
            style={{
              position: 'absolute',
              bottom: '40px',
              right: '40px',
              fontSize: '20px',
              color: 'rgba(255, 255, 255, 0.8)',
              fontFamily: 'system-ui, sans-serif',
            }}
          >
            synko.dev
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        // TODO: Añadir fuentes personalizadas
        // fonts: [
        //   {
        //     name: 'Inter',
        //     data: await interSemiBold,
        //     style: 'normal',
        //     weight: 600,
        //   },
        // ],
      },
    );
  } catch (e: any) {
    console.log(`Error generando OG image: ${e.message}`);
    return new Response(`Error generando imagen`, {
      status: 500,
    });
  }
}

// Función helper para generar URLs de OG images
export function generateOGImageUrl(params: {
  title?: string;
  description?: string;
  type?: 'default' | 'blog' | 'product' | 'case';
}): string {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const searchParams = new URLSearchParams();
  
  if (params.title) searchParams.set('title', params.title);
  if (params.description) searchParams.set('description', params.description);
  if (params.type) searchParams.set('type', params.type);
  
  return `${baseUrl}/api/og?${searchParams.toString()}`;
}