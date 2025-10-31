import { describe, it, expect } from "vitest"
import { parseNumbers, add, subtract, multiply, divide, performOperation, calculate } from "../../lib/Calculator"

describe("Calculator - parseNumbers", () => {
  it("should parse comma-separated numbers", () => {
    expect(parseNumbers("1,2,3")).toEqual([1, 2, 3])
  })

  it("should parse space-separated numbers", () => {
    expect(parseNumbers("1 2 3")).toEqual([1, 2, 3])
  })

  it("should parse mixed separators", () => {
    expect(parseNumbers("1, 2 3, 4")).toEqual([1, 2, 3, 4])
  })

  it("should handle decimal numbers", () => {
    expect(parseNumbers("1.5, 2.5, 3.5")).toEqual([1.5, 2.5, 3.5])
  })

  it("should handle negative numbers", () => {
    expect(parseNumbers("-1, -2, -3")).toEqual([-1, -2, -3])
  })

  it("should return empty array for empty string", () => {
    expect(parseNumbers("")).toEqual([])
  })

  it("should return empty array for whitespace only", () => {
    expect(parseNumbers("   ")).toEqual([])
  })

  it("should throw error for invalid numbers", () => {
    expect(() => parseNumbers("1, abc, 3")).toThrow('Invalid number: "abc"')
  })
})

describe("Calculator - add", () => {
  it("should add two numbers", () => {
    expect(add([2, 3])).toBe(5)
  })

  it("should add multiple numbers", () => {
    expect(add([1, 2, 3, 4, 5])).toBe(15)
  })

  it("should handle negative numbers", () => {
    expect(add([10, -5, 3])).toBe(8)
  })

  it("should handle decimal numbers", () => {
    expect(add([1.5, 2.5, 3])).toBe(7)
  })

  it("should return 0 for empty array", () => {
    expect(add([])).toBe(0)
  })

  it("should handle single number", () => {
    expect(add([42])).toBe(42)
  })
})

describe("Calculator - subtract", () => {
  it("should subtract two numbers", () => {
    expect(subtract([10, 3])).toBe(7)
  })

  it("should subtract multiple numbers", () => {
    expect(subtract([20, 5, 3, 2])).toBe(10)
  })

  it("should handle negative numbers", () => {
    expect(subtract([10, -5])).toBe(15)
  })

  it("should handle decimal numbers", () => {
    expect(subtract([10.5, 2.5])).toBe(8)
  })

  it("should return 0 for empty array", () => {
    expect(subtract([])).toBe(0)
  })

  it("should return single number as is", () => {
    expect(subtract([42])).toBe(42)
  })

  it("should handle result in negative", () => {
    expect(subtract([5, 10])).toBe(-5)
  })
})

describe("Calculator - multiply", () => {
  it("should multiply two numbers", () => {
    expect(multiply([3, 4])).toBe(12)
  })

  it("should multiply multiple numbers", () => {
    expect(multiply([2, 3, 4])).toBe(24)
  })

  it("should handle negative numbers", () => {
    expect(multiply([5, -2])).toBe(-10)
  })

  it("should handle decimal numbers", () => {
    expect(multiply([2.5, 4])).toBe(10)
  })

  it("should return 0 for empty array", () => {
    expect(multiply([])).toBe(0)
  })

  it("should handle multiplication by zero", () => {
    expect(multiply([5, 0, 3])).toBe(0)
  })

  it("should handle single number", () => {
    expect(multiply([42])).toBe(42)
  })
})

describe("Calculator - divide", () => {
  it("should divide two numbers", () => {
    expect(divide([20, 4])).toBe(5)
  })

  it("should divide multiple numbers", () => {
    expect(divide([100, 2, 5])).toBe(10)
  })

  it("should handle negative numbers", () => {
    expect(divide([20, -4])).toBe(-5)
  })

  it("should handle decimal numbers", () => {
    expect(divide([10, 2.5])).toBe(4)
  })

  it("should return 0 for empty array", () => {
    expect(divide([])).toBe(0)
  })

  it("should return single number as is", () => {
    expect(divide([42])).toBe(42)
  })

  it("should throw error when dividing by zero", () => {
    expect(() => divide([10, 0])).toThrow("Division by zero is not allowed")
  })

  it("should throw error when dividing by zero in chain", () => {
    expect(() => divide([100, 2, 0])).toThrow("Division by zero is not allowed")
  })
})

describe("Calculator - performOperation", () => {
  it("should perform add operation", () => {
    expect(performOperation("add", [1, 2, 3])).toBe(6)
  })

  it("should perform subtract operation", () => {
    expect(performOperation("subtract", [10, 3, 2])).toBe(5)
  })

  it("should perform multiply operation", () => {
    expect(performOperation("multiply", [2, 3, 4])).toBe(24)
  })

  it("should perform divide operation", () => {
    expect(performOperation("divide", [100, 2, 5])).toBe(10)
  })

  it("should throw error for unknown operation", () => {
    expect(() => performOperation("unknown" as any, [1, 2])).toThrow("Unknown operation: unknown")
  })
})

describe("Calculator - calculate (integration)", () => {
  it("should calculate addition from string input", () => {
    expect(calculate("1, 2, 3", "add")).toBe(6)
  })

  it("should calculate subtraction from string input", () => {
    expect(calculate("20, 5, 3", "subtract")).toBe(12)
  })

  it("should calculate multiplication from string input", () => {
    expect(calculate("2, 3, 4", "multiply")).toBe(24)
  })

  it("should calculate division from string input", () => {
    expect(calculate("100, 2, 5", "divide")).toBe(10)
  })

  it("should handle space-separated input", () => {
    expect(calculate("1 2 3", "add")).toBe(6)
  })

  it("should handle mixed separators", () => {
    expect(calculate("1, 2 3, 4", "add")).toBe(10)
  })

  it("should throw error for invalid input", () => {
    expect(() => calculate("1, abc, 3", "add")).toThrow('Invalid number: "abc"')
  })

  it("should throw error for division by zero", () => {
    expect(() => calculate("10, 0", "divide")).toThrow("Division by zero is not allowed")
  })
})
