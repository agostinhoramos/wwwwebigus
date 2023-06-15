import classNames from "classnames"

export function Container({ className, ...props }) {
  return (
    <div
      className={classNames('mx-auto max-w-7xl px-6 sm:px-8 xl:px-0', className)}
      {...props}
    ></div>
  )
}