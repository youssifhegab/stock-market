import { cn } from '@/common/utils/cn';
import React, { PropsWithChildren } from 'react';

type TypographyProps = Omit<
  React.HTMLAttributes<HTMLSpanElement>,
  'className'
> &
  PropsWithChildren<{
    as?: React.ElementType;
    children: React.ReactNode;
    variant?:
      | 'heading4Xl'
      | 'heading3Xl'
      | 'heading2Xl'
      | 'headingXl'
      | 'headingLg'
      | 'body5Xl'
      | 'body4Xl'
      | 'body3Xl'
      | 'body2Xl'
      | 'bodyXl'
      | 'bodyLg'
      | 'bodyMd'
      | 'bodySm'
      | 'bodyXSm'
      | 'body2XSm'
      | 'body3XSm'
      | 'buttonLg'
      | 'buttonMd'
      | 'buttonSm'
      | 'buttonXSm';
    cursor?: 'pointer' | 'not-allowed' | 'default';
    className?: string;
  }>;

const Typography: React.FC<TypographyProps> = ({
  as = 'span',
  variant = 'bodyMd',
  cursor = '',
  children = '',
  className,
  ...restProps
}) => {
  const Tag = as;

  const variantStyles = {
    heading4Xl: 'font-semibold text-3xl',
    heading3Xl: 'font-bold text-2xl',
    heading2Xl: 'font-semibold text-lg',
    headingXl: 'font-bold text-base',
    headingLg: 'font-bold text-sm',
    body5Xl: 'font-medium text-lg',
    body4Xl: 'font-semibold text-base',
    body3Xl: 'font-medium text-base',
    body2Xl: 'font-normal text-base',
    bodyXl: 'font-semibold text-sm',
    bodyLg: 'font-medium text-sm',
    bodyMd: 'font-normal text-sm',
    bodySm: 'font-semibold text-xs',
    bodyXSm: 'font-medium text-xs',
    body2XSm: 'font-normal text-xs',
    body3XSm: 'font-medium text-[10px]',
    buttonLg: 'font-semibold text-base',
    buttonMd: 'font-bold text-sm',
    buttonSm: 'font-semibold text-sm',
    buttonXSm: 'font-medium text-sm',
  }[variant];

  return (
    <Tag
      className={cn(
        variantStyles,
        cursor ? `cursor-${cursor}` : '',
        className || '',
      )}
      {...restProps}
    >
      {children}
    </Tag>
  );
};

export default Typography;
