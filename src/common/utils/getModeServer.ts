import { cookies } from 'next/headers';
import { COOKIES } from '../constants/cookies';
import { MODE } from '../constants/mode';

export const getModeServer = (): MODE => {
  const cookieStore = cookies();
  const locale = cookieStore.get(COOKIES.MODE)?.value || MODE.LIGHT;

  return locale as MODE;
};
