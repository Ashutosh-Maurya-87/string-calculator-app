
import { describe, it, expect, vi } from "vitest"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { OperationSelector } from "../Operations/OperationSelect"

describe("OperationSelector Component", () => {
  it("should render all operation buttons", () => {
    const mockOnSelect = vi.fn()
    render(<OperationSelector onSelect={mockOnSelect} />)

    expect(screen.getByText("➕ Add")).toBeInTheDocument()
    expect(screen.getByText("➖ Subtract")).toBeInTheDocument()
    expect(screen.getByText("✖️ Multiply")).toBeInTheDocument()
    expect(screen.getByText("➗ Divide")).toBeInTheDocument()
  })

  it("should call onSelect with correct operation when button is clicked", async () => {
    const mockOnSelect = vi.fn()
    const user = userEvent.setup()
    render(<OperationSelector onSelect={mockOnSelect} />)

    await user.click(screen.getByText("➕ Add"))
    expect(mockOnSelect).toHaveBeenCalledWith("add")

    await user.click(screen.getByText("➖ Subtract"))
    expect(mockOnSelect).toHaveBeenCalledWith("subtract")

    await user.click(screen.getByText("✖️ Multiply"))
    expect(mockOnSelect).toHaveBeenCalledWith("multiply")

    await user.click(screen.getByText("➗ Divide"))
    expect(mockOnSelect).toHaveBeenCalledWith("divide")
  })

  it("should disable buttons when isLoading is true", () => {
    const mockOnSelect = vi.fn()
    render(<OperationSelector onSelect={mockOnSelect} isLoading={true} />)

    const buttons = screen.getAllByRole("button")
    buttons.forEach((button) => {
      expect(button).toBeDisabled()
    })
  })

  it("should render instruction text", () => {
    const mockOnSelect = vi.fn()
    render(<OperationSelector onSelect={mockOnSelect} />)

    expect(screen.getByText("Select an operation:")).toBeInTheDocument()
  })
})
