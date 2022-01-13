import clsx from 'clsx';
import Sprite from './sprite.svg';

export type IconName =
  | 'chevron-down'
  | 'chevron-left'
  | 'chevron-right'
  | 'chevron-up'
  | 'facebook'
  | 'instagram'
  | 'linkedin'
  | 'spinner-solid'
  | 'stackoverflow'
  | 'twitter';

type IconProps = {
  className?: string;
  icon: IconName;
};

export const Icon = ({ className, icon }: IconProps) => {
  return (
    <svg className={clsx('sprite-icon', className)}>
      <use xlinkHref={`${Sprite.src}#${icon}`}></use>
    </svg>
  );
};
