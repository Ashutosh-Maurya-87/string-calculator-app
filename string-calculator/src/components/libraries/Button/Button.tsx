import { cn } from "../../../lib/utils"
import { ButtonVariants } from "./_components/ButtonVariants/ButtonVariants"
import type { ButtonProps } from "./types/ButtonProps"

export function Button({ className, variant, size, asChild = false, ...props }: ButtonProps) {
  const Comp = "button"
  return <Comp className={cn(ButtonVariants({ variant, size, className }))} {...props} />
}
