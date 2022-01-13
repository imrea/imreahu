import clsx from 'clsx';
import { useRef } from 'react';
import { Accent } from 'common/accent';
import { ContactLink } from 'atoms/contact-link';
import { IconName } from 'atoms/icon';
import PatternImg from './pattern.png';
import { useTiltEffect } from './use-tilt-effect';

export interface Contact {
  accent: Accent;
  icon: IconName;
  label: string;
  href: string;
}

type CardProps = {
  name: string;
  position: string;
  company: string;
  profile: string;
  contacts: Contact[];
};

// README (Paper SVG effect):
// https://tympanus.net/codrops/2019/02/19/svg-filter-effects-creating-texture-with-feturbulence/
export function Card({
  profile,
  name,
  position,
  company,
  contacts,
}: CardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useTiltEffect(containerRef, cardRef, true);

  return (
    <div
      ref={containerRef}
      className="h-full min-h-[500px] flex items-center justify-center"
      style={{
        perspective: '200px',
      }}
    >
      <div
        ref={cardRef}
        className={clsx(
          'relative flex flex-col items-center',
          'text-gray-800  tracking-wide',
          'bg-repeat',
          'w-72',
          'shadow-card rounded',
          'transition-transform duration-100',
          'p-8'
        )}
      >
        <img
          src={profile}
          alt="profile"
          className="grayscale brightness-125 w-40 rounded-full mb-4 pointer-events-none select-none"
        />
        <h1 className="font-bold text-4xl mb-4">{name}</h1>
        <hr />
        <h2 className="text-xl mb-2">{position}</h2>
        <h3 className="text-base mb-10">@ {company}</h3>

        <ul className="flex gap-4 w-full">
          {contacts.map((c) => (
            <li key={c.href} className="flex-grow justify-center">
              <ContactLink icon={c.icon} accent={c.accent} href={c.href}>
                {c.label}
              </ContactLink>
            </li>
          ))}
        </ul>

        <div
          aria-hidden
          className="absolute inset-0 rounded opacity-70 pointer-events-none"
          style={{
            backgroundImage: `url(${PatternImg.src})`,
            backgroundSize: '140px',
          }}
        />
      </div>
    </div>
  );
}
