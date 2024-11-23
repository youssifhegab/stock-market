'use client';
import { ModeContext } from '@/providers/ModeProvider';
import Toggle from '@/ui/Toggle';
import { useContext } from 'react';
import { IoMoon, IoSunny } from 'react-icons/io5';
import { MODE } from '../constants/mode';

const ChangeMode = () => {
  const { mode, setMode } = useContext(ModeContext);

  const darkModeHandler = (value: boolean) => {
    document.body.classList.toggle('dark');
    setMode(value ? MODE.DARK : MODE.LIGHT);
  };

  return (
    <div className="flex gap-1 items-center">
      <IoSunny />
      <Toggle
        value={mode === MODE.DARK ? true : false}
        onChange={(value) => darkModeHandler(value)}
      />
      <IoMoon />
    </div>
  );
};

export default ChangeMode;
