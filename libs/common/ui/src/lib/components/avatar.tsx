import { Button as HeadlessButton, type ButtonProps as HeadlessButtonProps } from '@headlessui/react'
import React, { ComponentPropsWithoutRef, forwardRef } from 'react';
import { TouchTarget } from './button'
import { Link } from './link'
import { classNames } from '@nx-base/helpers';

type AvatarProps = {
  src?: string | null
  square?: boolean
  initials?: string
  alt?: string
  className?: string
}

export function Avatar(props: AvatarProps & ComponentPropsWithoutRef<'span'> ) {
  return (
    <span
      data-slot="avatar"
      className={classNames(
        props.className,
        'inline-grid align-middle *:col-start-1 *:row-start-1',
        props.square ? 'rounded-[20%] *:rounded-[20%]' : 'rounded-full *:rounded-full'
      )}
      {...props}
    >
      {props.initials && (
        <svg
          className="select-none fill-current text-[48px] font-medium uppercase"
          viewBox="0 0 100 100"
          aria-hidden={props.alt ? undefined : 'true'}
        >
          {props.alt && <title>{props.alt}</title>}
          <text x="50%" y="50%" alignmentBaseline="middle" dominantBaseline="middle" textAnchor="middle" dy=".125em">
            {props.initials}
          </text>
        </svg>
      )}
      {props.src && <img src={props.src} alt={props.alt} />}
      <span className="ring-1 ring-inset ring-black/5 dark:ring-white/5 forced-colors:outline" aria-hidden="true" />
    </span>
  )
}

export const AvatarButton = forwardRef(function AvatarButton(props: AvatarProps & (HeadlessButtonProps | React.ComponentPropsWithoutRef<typeof Link>),
  ref: React.ForwardedRef<HTMLElement>
) {
  const classes = classNames(
    props.className,
    props.square ? 'rounded-lg' : 'rounded-full',
    'relative focus:outline-none data-[focus]:outline data-[focus]:outline-2 data-[focus]:outline-offset-2 data-[focus]:outline-blue-500'
  )

  return 'href' in props ? (
    <Link {...props} className={classes} ref={ref as React.ForwardedRef<HTMLAnchorElement>}>
      <TouchTarget>
        <Avatar src={props.src} square={props.square} initials={props.initials} alt={props.alt} />
      </TouchTarget>
    </Link>
  ) : (
    <HeadlessButton {...props} className={classes} ref={ref}>
      <TouchTarget>
        <Avatar src={props.src} square={props.square} initials={props.initials} alt={props.alt} />
      </TouchTarget>
    </HeadlessButton>
  )
})
