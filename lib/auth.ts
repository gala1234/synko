// Stub para autenticación con NextAuth.js
// TODO: Instalar y configurar next-auth cuando sea necesario

export interface User {
  id: string;
  email: string;
  name?: string;
  image?: string;
  role?: 'admin' | 'user' | 'client';
}

export interface Session {
  user: User;
  expires: string;
}

// Mock de funciones de autenticación para desarrollo
export async function getServerSession(): Promise<Session | null> {
  // TODO: Implementar con next-auth/next
  console.log('getServerSession: Función stub - implementar con NextAuth');
  return null;
}

export async function signIn(provider: string, options?: any): Promise<void> {
  // TODO: Implementar con next-auth/react
  console.log(`signIn: Proveedor ${provider}`, options);
  alert('Función de login en desarrollo');
}

export async function signOut(): Promise<void> {
  // TODO: Implementar con next-auth/react
  console.log('signOut: Función stub');
  alert('Función de logout en desarrollo');
}

// Hook mock para usar en componentes cliente
export function useSession() {
  // TODO: Implementar con next-auth/react
  return {
    data: null as Session | null,
    status: 'unauthenticated' as 'loading' | 'authenticated' | 'unauthenticated',
    update: async () => {
      console.log('useSession.update: Función stub');
    }
  };
}

// Configuración de proveedores (para referencia futura)
export const authConfig = {
  providers: [
    // TODO: Configurar proveedores reales
    {
      id: 'google',
      name: 'Google',
      type: 'oauth',
      // clientId: process.env.GOOGLE_CLIENT_ID,
      // clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    },
    {
      id: 'github',
      name: 'GitHub', 
      type: 'oauth',
      // clientId: process.env.GITHUB_CLIENT_ID,
      // clientSecret: process.env.GITHUB_CLIENT_SECRET,
    },
    {
      id: 'credentials',
      name: 'Email y contraseña',
      type: 'credentials',
      // TODO: Implementar validación de credenciales
    }
  ],
  pages: {
    signIn: '/auth/signin',
    signOut: '/auth/signout',
    error: '/auth/error',
  },
  callbacks: {
    // TODO: Implementar callbacks de sesión y JWT
  }
};

// Middleware de protección de rutas
export function withAuth(handler: any) {
  return async (req: any, res: any) => {
    // TODO: Implementar verificación de autenticación
    console.log('withAuth: Middleware stub - verificar autenticación');
    return handler(req, res);
  };
}

// Utilidades de roles
export function hasRole(user: User | null, role: string): boolean {
  if (!user) return false;
  return user.role === role || user.role === 'admin';
}

export function requireAuth(allowedRoles: string[] = []) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    // TODO: Implementar decorador de autenticación
    console.log(`requireAuth: Decorador stub para ${propertyKey}`, allowedRoles);
  };
}