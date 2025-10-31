import type { Operation } from "../../lib/Calculator"

interface ResultDisplayProps {
  result: number | null
  operation: Operation | null
  input: string
  error: string | null
}

const OPERATION_LABELS: Record<Operation, string> = {
  add: "Addition",
  subtract: "Subtraction",
  multiply: "Multiplication",
  divide: "Division",
}

export function ResultDisplay({ result, operation, input, error }: ResultDisplayProps) {
  if (error) {
    return (
      <div className="rounded-lg border border-destructive bg-destructive/10 p-4">
        <p className="text-sm font-medium text-destructive">Error</p>
        <p className="mt-1 text-sm text-destructive/80">{error}</p>
      </div>
    )
  }

  if (result === null) {
    return null
  }

  return (
    <div className="rounded-lg border border-primary bg-primary/5 p-4">
      <div className="space-y-2">
        <p className="text-sm text-muted-foreground">{operation && OPERATION_LABELS[operation]}</p>
        <p className="text-sm text-muted-foreground">
          Input: <span className="font-mono font-medium text-foreground">{input}</span>
        </p>
        <div className="flex items-baseline gap-2">
          <span className="text-sm text-muted-foreground">Result:</span>
          <span className="text-2xl font-bold text-primary text-green-500">
            {typeof result === "number" && !Number.isInteger(result) ? result.toFixed(4) : result}
          </span>
        </div>
      </div>
    </div>
  )
}
