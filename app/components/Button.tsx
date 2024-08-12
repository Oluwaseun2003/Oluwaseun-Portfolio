import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';

const variantsStyle = {
    ghost:
    'bg-zinc-700 font-semibold text-teal-700 border-teal-700 hover:bg-teal-700 hover:text-white active:bg-zinc-700 active:text-teal-100/70 dark:bg-zinc-700 dark:text-teal-700 dark:hover:bg-teal-700 dark:hover:text-white dark:active:bg-teal-700 dark:active:text-700',
    solid:
    'bg-teal-700 font-medium text-teal-100 hover:bg-teal-100 active:bg-teal-100 active:text-teal-900/60 dark:bg-teal:800 dark:text-teal-100 dark:hover:bg-teal-800 dark:hover:text-teal-50 dark:active:bg-teal-800/50 dark:active:text-teal-700',
}

type ButtonProps = {
    variant?: keyof typeof variantsStyle
} & (
    | (React.ComponentPropsWithoutRef<'button'> & { href?: undefined })
    | React.ComponentPropsWithoutRef<typeof Link>
)

export function Button({
    variant = 'ghost',
    className,
    ...props
}: ButtonProps) {
    className = clsx(
        'inline-flex items-center gap-2 justify-center rounded-full py-2 px-3 text-sm outline-offset-2 transition active:transition-none',
        variantsStyle[variant],
        className,
    )

    return typeof props.href === 'undefined' ? (
        <button className={className} {...props}/>
    ) : (
        <Link className={className} {...props} />
    )
}