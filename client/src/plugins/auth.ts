import { AuthStateSymbol, useAuth } from './useAuth';

export const auth = {
  install(app: any) {
    const auth = useAuth();
    app.provide(AuthStateSymbol, auth);
  },
};
