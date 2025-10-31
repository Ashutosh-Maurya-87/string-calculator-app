"use client"

import { useState } from "react"
import { calculate, type Operation } from "./lib/Calculator"
import { Button } from "./components/libraries/Button/Button"
import { OperationSelector } from "./components/Operations/OperationSelect"
import { ResultDisplay } from "./components/Result/ResultDisplay"

const App = () => {
  const [input, setInput] = useState("")
  const [result, setResult] = useState<number | null>(null)
  const [selectedOperation, setSelectedOperation] = useState<Operation | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [showOperations, setShowOperations] = useState(false)

  const handleCalculate = () => {
    setError(null)
    setResult(null)
    setSelectedOperation(null)

    if (!input.trim()) {
      setError("Please enter numbers")
      return
    }

    setShowOperations(true)
  }

  const handleOperationSelect = (operation: Operation) => {
    try {
      setError(null)
      const calculatedResult = calculate(input, operation)
      setResult(calculatedResult)
      setSelectedOperation(operation)
      setShowOperations(false)
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "An error occurred"
      setError(errorMessage)
      setResult(null)
      setSelectedOperation(null)
    }
  }

  const handleReset = () => {
    setInput("")
    setResult(null)
    setSelectedOperation(null)
    setError(null)
    setShowOperations(false)
  }

  return (
    <div className="mx-auto w-full max-w-md space-y-6 rounded-lg border border-border bg-card p-6 shadow-sm">
      <div className="space-y-2">
        <h1 className="text-2xl font-bold text-foreground">String Calculator</h1>
        <p className="text-sm text-muted-foreground">Enter numbers separated by commas or spaces</p>
      </div>

      <div className="space-y-3">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="e.g., 1, 2, 3 or 10 20 30"
          className="min-h-24 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-ring"
          disabled={showOperations}
        />

        <Button onClick={handleCalculate}
          className="w-full bg-black text-white">
          Calculate
        </Button>
      </div>

      {showOperations && <OperationSelector onSelect={handleOperationSelect} />}

      <ResultDisplay result={result} operation={selectedOperation} input={input} error={error} />

      {(result !== null || error) && (
        <Button onClick={handleReset} variant="outline" className="w-full bg-transparent">
          Reset
        </Button>
      )}
    </div>
  )
}
export default App