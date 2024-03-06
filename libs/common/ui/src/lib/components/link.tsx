import { DataInteractive as HeadlessDataInteractive } from '@headlessui/react'
import React, { ForwardedRef } from 'react';
import { Link as ReactLink } from 'react-router-dom'

export const Link = React.forwardRef(function Link(
  props: { href: string } & React.ComponentPropsWithoutRef<'a'>,
  ref: ForwardedRef<HTMLAnchorElement>
) {
  return (
    <HeadlessDataInteractive>
      <ReactLink {...props} to={props.href} ref={ref} />
    </HeadlessDataInteractive>
  )
})
