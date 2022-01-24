import { inject, InjectionKey, readonly, ref } from 'vue';

export const useAuth = () => {
  const accessToken = ref('');
  const refreshToken = ref('');

  const hasToken = () => accessToken.value !== '';

  const setToken = (newAccessToken: string, newRefreshToken: string) => {
    accessToken.value = newAccessToken;
    refreshToken.value = newRefreshToken;
  };

  return readonly({
    accessToken: accessToken,
    refreshToken: refreshToken,
    hasToken,
    setToken,
  });
};

export type useAuth = ReturnType<typeof useAuth>;
export const AuthStateSymbol: InjectionKey<useAuth> = Symbol('AuthState');
export const injectAuth = (): useAuth => {
  const auth = inject(AuthStateSymbol);
  if (auth === undefined) {
    throw new Error('auth は provide されていません。');
  }

  return auth;
};
