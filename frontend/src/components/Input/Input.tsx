import { forwardRef } from "react";

type Props = {
  placeholder: string
}

export const Input = forwardRef<HTMLInputElement, Props>(
  ({ placeholder, ...rest }: Props, ref) => {
  return (
    <input
      ref={ref}
      className="outline-slate-500 shadow-lg border border-gray-100 rounded-lg w-full p-3 mt-3 my-3"
      placeholder={placeholder}
      {...rest}
    />
  )
})
// aqui não usamos useState para controlar o estado do input
// usamos o useRef para controlar o estado do input.