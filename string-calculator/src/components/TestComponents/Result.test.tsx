import { describe, it, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import '@testing-library/jest-dom'

import { ResultDisplay } from "../Result/ResultDisplay"

describe("ResultDisplay Component", () => {
  it("should render nothing when result is null", () => {
    const { container } = render(<ResultDisplay result={null} operation={null} input="" error={null} />)
    expect(container.firstChild).toBeNull()
  })

  it("should display result with operation label", () => {
    render(<ResultDisplay result={15} operation="add" input="5, 10" error={null} />)

    expect(screen.getByText("Addition")).toBeInTheDocument()
    expect(screen.getByText("15")).toBeInTheDocument()
  })

  it("should display input in result", () => {
    render(<ResultDisplay result={20} operation="multiply" input="4, 5" error={null} />)

    expect(screen.getByText("4, 5")).toBeInTheDocument()
  })

  it("should format decimal results to 4 decimal places", () => {
    render(<ResultDisplay result={3.3333333} operation="divide" input="10, 3" error={null} />)

    expect(screen.getByText("3.3333")).toBeInTheDocument()
  })

  it("should display error message when error exists", () => {
    render(<ResultDisplay result={null} operation={null} input="" error="Division by zero is not allowed" />)

    expect(screen.getByText("Error")).toBeInTheDocument()
    expect(screen.getByText("Division by zero is not allowed")).toBeInTheDocument()
  })

  it("should display all operation labels correctly", () => {
    const operations: Array<"add" | "subtract" | "multiply" | "divide"> = ["add", "subtract", "multiply", "divide"]

    operations.forEach((op) => {
      const { unmount } = render(<ResultDisplay result={10} operation={op} input="test" error={null} />)

      const labels: Record<string, string> = {
        add: "Addition",
        subtract: "Subtraction",
        multiply: "Multiplication",
        divide: "Division",
      }

      expect(screen.getByText(labels[op])).toBeInTheDocument()
      unmount()
    })
  })
})
