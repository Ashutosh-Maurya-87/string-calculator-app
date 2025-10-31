
import type { Operation } from "../../lib/Calculator"
import { Button } from "../../components/libraries/Button/Button"

interface OperationSelectorProps {
  onSelect: (operation: Operation) => void
  isLoading?: boolean
}

const OPERATIONS: { label: string; value: Operation }[] = [
  { label: "+ Add", value: "add" },
  { label: "- Subtract", value: "subtract" },
  { label: "X Multiply", value: "multiply" },
  { label: "/ Divide", value: "divide" },
]

export function OperationSelector({ onSelect, isLoading = false }: OperationSelectorProps) {
  return (
    <div className="space-y-3">
      <p className="text-sm font-medium text-foreground">Select an operation:</p>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        {OPERATIONS.map((op) => (
          <Button
            key={op.value}
            onClick={() => onSelect(op.value)}
            disabled={isLoading}
            variant="outline"
            className="h-12 text-sm font-medium transition-all hover:bg-primary hover:text-primary-foreground"
          >
            {op.label}
          </Button>
        ))}
      </div>
    </div>
  )
}
