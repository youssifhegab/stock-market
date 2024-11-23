'use client';
import { useCookies } from 'next-client-cookies';
import { COOKIES } from '../constants/cookies';
import { MODE } from '../constants/mode';

export const getMode = (): MODE => {
  const cookieStore = useCookies();

  const locale = cookieStore.get(COOKIES.MODE) || MODE.LIGHT;

  return locale as MODE;
};
