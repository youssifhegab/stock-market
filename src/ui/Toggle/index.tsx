import { useState } from 'react';

function Toggle({
  isDisabled = false,
  label,
  hintMessage,
  onChange,
  value = false,
}: {
  onChange?: (value: boolean) => void;
  value: boolean;
  isDisabled?: boolean;
  label?: string;
  hintMessage?: string;
}): JSX.Element {
  const [isChecked, setIsChecked] = useState<boolean>(value);

  return (
    <label
      className={`inline-flex ${isDisabled ? 'cursor-not-allowed' : 'cursor-pointer'}`}
      // style={{ direction: 'ltr' }}
    >
      <input
        type="checkbox"
        checked={isChecked}
        onChange={(e) => {
          setIsChecked(e.target.checked);
          onChange?.(e.target.checked);
        }}
        className="peer sr-only"
        disabled={isDisabled}
      />
      <div className="bg-gray-200 peer-checked:bg-primary peer-focus:peer-checked:after:ring-primary/25 peer-focus:after:ring-gray-200/25 peer-hover:peer-checked:after:ring-primary/15 peer-hover:after:ring-gray-200/15 peer-disabled:bg-gray-100 peer-disabled:peer-checked:bg-light-50 peer relative h-5 w-9 flex-shrink-0 rounded-full after:absolute after:start-0.5 after:top-0.5 after:z-40 after:h-4 after:w-4 after:rounded-full after:bg-white after:transition-all after:content-[''] ltr:peer-checked:after:translate-x-full peer-hover:after:ring-[6px] peer-focus:outline-none peer-focus:after:ring-[6px] rtl:peer-checked:after:-translate-x-full" />
      <div className="ms-2 flex flex-col gap-0.5">
        <span className="text-sm font-medium text-primary-gray">{label}</span>
        {hintMessage && <p className="text-xs text-gray-700">{hintMessage}</p>}
      </div>
    </label>
  );
}

export default Toggle;
