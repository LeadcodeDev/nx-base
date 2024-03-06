import {
  Description as HeadlessDescription,
  Dialog as HeadlessDialog,
  DialogPanel as HeadlessDialogPanel,
  DialogTitle as HeadlessDialogTitle,
  Transition as HeadlessTransition,
  TransitionChild as HeadlessTransitionChild,
  type DialogProps as HeadlessDialogProps,
} from '@headlessui/react'
import { ComponentPropsWithoutRef, PropsWithChildren } from 'react';
import { Fragment } from 'react'
import { Text } from './text'
import { classNames } from '@nx-base/helpers';

const sizes: { [key: string]: string} = {
  xs: 'sm:max-w-xs',
  sm: 'sm:max-w-sm',
  md: 'sm:max-w-md',
  lg: 'sm:max-w-lg',
  xl: 'sm:max-w-xl',
  '2xl': 'sm:max-w-2xl',
  '3xl': 'sm:max-w-3xl',
  '4xl': 'sm:max-w-4xl',
  '5xl': 'sm:max-w-5xl',
}

type AlertProps = HeadlessDialogProps & {
  size?: keyof typeof sizes
}

export function Alert(props: PropsWithChildren<AlertProps>) {
  return (
    <HeadlessTransition appear as={Fragment} show={props.open} {...props}>
      <HeadlessDialog onClose={props.onClose}>
        <HeadlessTransitionChild
          as={Fragment}
          enter="ease-out duration-100"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 flex w-screen justify-center overflow-y-auto bg-zinc-950/15 px-2 py-2 focus:outline-0 sm:px-6 sm:py-8 lg:px-8 lg:py-16 dark:bg-zinc-950/50" />
        </HeadlessTransitionChild>

        <HeadlessTransitionChild
          className="fixed inset-0 w-screen overflow-y-auto pt-6 sm:pt-0"
          enter="ease-out duration-100"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="grid min-h-full grid-rows-[1fr_auto_1fr] justify-items-center p-8 sm:grid-rows-[1fr_auto_3fr] sm:p-4">
            <HeadlessTransitionChild
              as={HeadlessDialogPanel}
              className={classNames(
                props.className,
                sizes[props.size as string],
                'row-start-2 w-full rounded-2xl bg-white p-8 shadow-lg ring-1 ring-zinc-950/10 sm:rounded-2xl sm:p-6 dark:bg-zinc-900 dark:ring-white/10 forced-colors:outline'
              )}
              enter="ease-out duration-100"
              enterFrom="scale-95"
              enterTo="scale-100"
              leave="ease-in duration-100"
              leaveFrom="scale-100"
              leaveTo="scale-100"
            >
              {props.children}
            </HeadlessTransitionChild>
          </div>
        </HeadlessTransitionChild>
      </HeadlessDialog>
    </HeadlessTransition>
  )
}

export function AlertTitle(props: ComponentPropsWithoutRef<'div'>) {
  return (
    <HeadlessDialogTitle
      {...props}
      className={classNames(
        props.className,
        'text-balance text-center text-base/6 font-semibold text-zinc-950 sm:text-wrap sm:text-left sm:text-sm/6 dark:text-white'
      )}
    />
  )
}

export function AlertDescription(props: ComponentPropsWithoutRef<'div'>) {
  return (
    <HeadlessDescription
      as={Text}
      {...props}
      className={classNames(props.className, 'mt-2 text-pretty text-center sm:text-left')}
    />
  )
}

export function AlertBody(props: ComponentPropsWithoutRef<'div'>) {
  return <div {...props} className={classNames(props.className, 'mt-4')} />
}

export function AlertActions(props: ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      {...props}
      className={classNames(
        props.className,
        'mt-6 flex flex-col-reverse items-center justify-end gap-3 *:w-full sm:mt-4 sm:flex-row sm:*:w-auto'
      )}
    />
  )
}
