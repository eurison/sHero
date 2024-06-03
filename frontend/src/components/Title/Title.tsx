type Props = {
  title: string
}
export function Title({title}: Props) {
  return (
    <p className="text-5xl border-b-4 border-b-evergreen-light w-fit font-bold text-evergreen">
      {title}
    </p>
  )
}