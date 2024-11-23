import { cn } from '@/common/utils/cn';
import React from 'react';
import Typography from '../Typography';
import './style.css';

export interface TextInputProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    | 'disabled'
    | 'suffix'
    | 'prefix'
    | 'label'
    | 'helperText'
    | 'fullWidth'
    | 'errorMessage'
    | 'size'
    | 'height'
  > {
  label?: string;
  fullWidth?: boolean;
  isDisabled?: boolean;
  size?: 'sm' | 'md' | 'lg';
  dataCy?: string;
}

const TextInput: React.FC<TextInputProps> = ({
  label,
  size = 'md',
  fullWidth = true,
  isDisabled = false,
  dataCy,
  ...restProps
}) => {
  const inputSize = {
    sm: 'h-10',
    md: 'h-11',
    lg: 'h-14',
  }[size];

  return (
    <div
      className={cn('flex flex-col gap-1.5', fullWidth ? 'w-full' : 'w-fit')}
    >
      <Typography variant="bodyLg" as="label">
        {label}
      </Typography>
      <div
        className={cn(
          'flex items-center justify-between bg-white rounded-lg border px-[14px] py-[10px] transition-all duration-300 ease-in-out',
          'has-[:disabled]:border-gray-300 has-[:disabled]:bg-gray-50 border-grey-200 focus-within:border-primary/40 focus-within:shadow-input-focus',
          inputSize,
        )}
      >
        <div className="flex w-full items-center gap-2">
          <input
            className={cn(
              'w-full border-none p-0 text-black focus:outline-none focus:ring-0 disabled:bg-gray-50',
            )}
            data-cy={`${dataCy}-input-field`}
            disabled={isDisabled}
            {...restProps}
          />
        </div>
      </div>
    </div>
  );
};

export default TextInput;
