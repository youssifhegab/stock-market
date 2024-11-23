'use client';
import { COOKIES } from '@/common/constants/cookies';
import { MODE } from '@/common/constants/mode';
import { useCookies } from 'next-client-cookies';
import { createContext, useEffect, useState, type ReactNode } from 'react';

export const ModeContext = createContext<{
  mode: MODE;
  setMode: (mode: MODE) => void;
}>({
  mode: MODE.LIGHT,
  setMode: () => ({}),
});

export function ModeProvider({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  const cookieStore = useCookies();
  const mode = (cookieStore.get(COOKIES.MODE) || MODE.LIGHT) as MODE;
  const [modeState, setModeState] = useState<MODE>(mode);

  useEffect(() => {
    if (modeState === MODE.DARK) document.body.classList.add('dark');
    else document.body.classList.remove('dark');
  }, [modeState]);

  const setMode = (mode: MODE) => {
    setModeState(mode);
    cookieStore.set(COOKIES.MODE, mode);
  };

  return (
    <ModeContext.Provider value={{ mode: modeState, setMode }}>
      {children}
    </ModeContext.Provider>
  );
}
