'use client';

import { useState } from 'react';
import { IoMoon, IoSunny } from 'react-icons/io5';

const ChangeMode = () => {
  const [dark, setDark] = useState(false);

  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle('dark');
  };

  return (
    <button onClick={() => darkModeHandler()}>
      {dark ? <IoSunny /> : <IoMoon />}
    </button>
  );
};

export default ChangeMode;
