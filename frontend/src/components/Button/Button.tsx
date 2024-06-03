import classNames from "classnames"

type Props = {
  title: string
  selected?: string
  setSelected?: (selected: string) => void
  className?: string
  variant: "light" | "dark"
}

export function Button({ title, className, variant = "dark" }: Props) {
  return (
    <button
      className={classNames(
        className,
        "bg-evergreen-light px-5 py-2 rounded-lg text-white font-medium mt-3",
        variant === "dark" && "bg-evergreen-light",
        variant === "light" &&
          "bg-white border-2 border-evergreen-light text-evergreen-light",
        className
      )}
    >
      {title}
    </button>
  )
}
