import { Link } from 'react-router-dom'

function ChevronRightIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M6.75 5.75 9.25 8l-2.5 2.25"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function Card({ as, className, children }) {
  let Component = as ?? 'div'

  return (
    <Component
      className={className + ' group relative flex flex-col items-start'}
    >
      {children}
    </Component>
  )
}

Card.Link = function CardLink({ children, ...props }) {
  return (
    <>
      <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-daintree-700 opacity-0 transition group-hover:scale-100 group-hover:opacity-25 sm:-inset-x-6 sm:rounded-2xl" />
      <Link {...props} target={props.to ? '_blank' : undefined}>
        <span className="absolute -inset-x-4 -inset-y-6 z-0 sm:-inset-x-6 sm:rounded-2xl" />
        <span className="relative z-0">{children}</span>
      </Link>
    </>
  )
}

Card.Title = function CardTitle({ as, href, children }) {
  let Component = as ?? 'h2'

  return (
    <Component className="text-base font-semibold tracking-tight text-zinc-800">
      {href ? <Card.Link href={href}>{children}</Card.Link> : children}
    </Component>
  )
}

Card.Description = function CardDescription({ children }) {
  return (
    <p className="relative z-0 mt-2 text-sm text-zinc-600">
      {children}
    </p>
  )
}

Card.Cta = function CardCta({ children }) {
  return (
    <div
      aria-hidden="true"
      className="relative z-0 mt-4 flex items-center text-sm font-medium text-teal-500"
    >
      {children}
      <ChevronRightIcon className="ml-1 h-4 w-4 stroke-current" />
    </div>
  )
}

Card.Eyebrow = function CardEyebrow({
  as,
  decorate = false,
  className,
  children,
  ...props
}) {
  let Component = as ?? 'p'

  return (
    <Component
      className={
        className + 
        ' relative z-0 order-first mb-3 flex items-center text-sm text-zinc-400' +
        (decorate ? ' pl-3.5': '')
      }
      {...props}
    >
      {decorate && (
        <span
          className="absolute inset-y-0 left-0 flex items-center"
          aria-hidden="true"
        >
          <span className="h-4 w-0.5 rounded-full bg-zinc-200" />
        </span>
      )}
      {children}
    </Component>
  )
}
