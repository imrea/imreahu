import clsx from 'clsx';
import { PropsWithChildren } from 'react';
import { Accent } from 'common/accent';
import { Icon, IconName } from 'atoms/icon';

type ContactLinkProps = PropsWithChildren<{
  accent: Accent;
  href?: string;
  icon: IconName;
}>;

const ACCENT_COLOR_MAP = {
  [Accent.PINK]: 'text-hearts',
  [Accent.ORANGE]: 'text-cocktail',
  [Accent.YELLOW]: 'text-euphoria',
  [Accent.GREEN]: 'text-balloon',
  [Accent.BLUE]: 'text-pacifica',
};

export function ContactLink({
  icon,
  children,
  accent,
  href,
}: ContactLinkProps) {
  return (
    <a
      href={href}
      className={clsx(
        'relative flex justify-center group',
        ACCENT_COLOR_MAP[accent]
      )}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon icon={icon} className="text-2xl" />
      <span
        className={clsx(
          'pointer-events-none',
          'text-xs font-bold absolute opacity-0 translate-y-10 transition-all',
          'group-hover:translate-y-8 group-hover:opacity-100'
        )}
      >
        {children}
      </span>
    </a>
  );
}
