import 'next-auth';
import '@auth/core/jwt';

declare module 'next-auth' {
  interface User {
    user: {
      id: number;
      name: string;
      email: string;
    };
  }
  interface Session {
    user: {
      id: number;
      name: string;
      email: string;
    };
  }
}

declare module '@auth/core/jwt' {
  interface JWT {
    user: {
      id: number;
      name: string;
      email: string;
    };
  }
}