import { Input as HeadlessInput, type InputProps as HeadlessInputProps } from '@headlessui/react'
import { forwardRef } from 'react'
import { classNames } from '@nx-base/helpers';

const dateTypes = ['date', 'datetime-local', 'month', 'time', 'week']
type DateType = (typeof dateTypes)[number]

export const Input = forwardRef<
  HTMLInputElement,
  { type?: 'email' | 'number' | 'password' | 'search' | 'tel' | 'text' | 'url' | DateType } & HeadlessInputProps
>(function Input({ className, ...props }, ref) {
  return (
    <span
      data-slot="control"
      className={classNames(
        className,
        'relative w-full',
        'has-[[data-disabled]]:opacity-50 before:has-[[data-disabled]]:bg-zinc-950/5 before:has-[[data-disabled]]:shadow-none',
        'before:has-[[data-invalid]]:shadow-red-500/10',
      )}
    >
      <HeadlessInput
        ref={ref}
        className={classNames(
          // Date classes
          props.type &&
            dateTypes.includes(props.type) && [
              '[&::-webkit-datetime-edit-fields-wrapper]:p-0',
              '[&::-webkit-date-and-time-value]:min-h-[1.5em]',
              '[&::-webkit-datetime-edit]:inline-flex',
              '[&::-webkit-datetime-edit]:p-0',
              '[&::-webkit-datetime-edit-year-field]:p-0',
              '[&::-webkit-datetime-edit-month-field]:p-0',
              '[&::-webkit-datetime-edit-day-field]:p-0',
              '[&::-webkit-datetime-edit-hour-field]:p-0',
              '[&::-webkit-datetime-edit-minute-field]:p-0',
              '[&::-webkit-datetime-edit-second-field]:p-0',
              '[&::-webkit-datetime-edit-millisecond-field]:p-0',
              '[&::-webkit-datetime-edit-meridiem-field]:p-0',
            ],

          // Basic layout
          'relative px-3 py-1.5 block w-full appearance-none rounded-lg focus:z-10 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800 focus:ring-offset-2 dark:focus:ring-offset-2',

          // Typography
          'text-base/6 text-zinc-950 placeholder:text-zinc-500 sm:text-sm/6 dark:text-white',

          // Border
          'border border-gray-300 data-[hover]:border-gray-200 dark:border-white/10 dark:data-[hover]:border-white/20',

          // Background color
          'bg-transparent dark:bg-white/5 focus:outline-none',

          // Invalid state
          'data-[invalid]:border-red-500 data-[invalid]:data-[hover]:border-red-500 data-[invalid]:dark:border-red-500 data-[invalid]:data-[hover]:dark:border-red-500',

          // Disabled state
          'data-[disabled]:border-zinc-950/20 dark:data-[hover]:data-[disabled]:border-white/15 data-[disabled]:dark:border-white/15 data-[disabled]:dark:bg-white/[2.5%]',
        )}
        {...props}
      />
    </span>
  )
})
