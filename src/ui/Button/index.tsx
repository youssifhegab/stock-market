import { cn } from '@/common/utils/cn';
import React, { MouseEventHandler, PropsWithChildren } from 'react';
import Typography from '../Typography';
import './style.css';

type ButtonProps = Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  'disabled' | ''
> &
  PropsWithChildren<{
    variant?: 'primary' | 'secondary' | 'ghost' | 'link';
    size?: 'xs' | 'sm' | 'md' | 'lg';
    isFluid?: boolean;
    isDisabled?: boolean;
    isLoading?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    dataCy?: string;
  }>;

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  isFluid = false,
  isDisabled = false,
  isLoading = false,
  onClick = () => ({}),
  startIcon,
  dataCy,
  endIcon,
  ...restProps
}) => {
  const variantStyle = {
    primary: 'text-white bg-primary hover:bg-primary/90 disabled:bg-gray-300',
    secondary:
      'bg-white text-primary border border-primary-5 hover:bg-primary-50 disabled:bg-grey-75',
    ghost: 'bg-white text-primary hover:bg-primary-50 disabled:bg-grey-75',
    link: 'transparent text-primary hover:bg-primary-50 disabled:bg-grey-100 ',
  }[variant];

  const sizeStyle = {
    xs: 'px-[5px] py-1',
    sm: 'px-[14px] py-2',
    md: 'px-[18px] py-[10px]',
    lg: 'px-[18px] py-[10px]',
  }[size];

  const textStyle: Record<string, 'buttonSm' | 'buttonMd' | 'buttonLg'> = {
    sm: 'buttonSm',
    md: 'buttonMd',
    lg: 'buttonLg',
  };

  return (
    <button
      onClick={onClick}
      disabled={isDisabled || isLoading}
      className={cn(
        'adjust-icons flex items-center justify-center rounded-lg text-center transition-all duration-300 ease-in-out',
        variantStyle,
        variant === 'link' ? '' : sizeStyle,
        isFluid ? 'w-full' : 'w-fit',
        'disabled:cursor-not-allowed',
      )}
      data-cy={`${dataCy}-button`}
      {...restProps}
    >
      {isLoading ? (
        <span className="loading loading-spinner" />
      ) : (
        <>
          <div className="flex flex-1 justify-start">{startIcon}</div>
          <Typography
            variant={textStyle[size]}
            className={cn(
              isFluid
                ? 'mx-auto'
                : `${startIcon ? 'ms-2' : ''} ${endIcon ? 'me-2' : ''}`,
            )}
          >
            {children}
          </Typography>
          <div className="flex flex-1 justify-end">{endIcon}</div>
        </>
      )}
    </button>
  );
};

export default Button;
