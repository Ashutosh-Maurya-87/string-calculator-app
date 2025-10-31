/**
 * Calculator utility functions with comprehensive logic
 * These functions handle string parsing and mathematical operations
 */

export type Operation = "add" | "subtract" | "multiply" | "divide"

/**
 * Parses a string of numbers separated by commas or spaces
 * @param input - String containing numbers
 * @returns Array of numbers
 */
export function parseNumbers(input: string): number[] {
  if (!input.trim()) return []

  // Split by comma or space and filter empty strings
  const numbers = input
    .split(/[,\s]+/)
    .filter((str) => str.trim() !== "")
    .map((str) => {
      const num = Number.parseFloat(str)
      if (isNaN(num)) {
        throw new Error(`Invalid number: "${str}"`)
      }
      return num
    })

  return numbers
}

/**
 * Adds all numbers together
 * @param numbers - Array of numbers to add
 * @returns Sum of all numbers
 */
export function add(numbers: number[]): number {
  if (numbers.length === 0) return 0
  return numbers.reduce((sum, num) => sum + num, 0)
}

/**
 * Subtracts all numbers from the first number
 * @param numbers - Array of numbers to subtract
 * @returns Result of subtraction
 */
export function subtract(numbers: number[]): number {
  if (numbers.length === 0) return 0
  if (numbers.length === 1) return numbers[0]

  return numbers.reduce((result, num, index) => {
    if (index === 0) return num
    return result - num
  })
}

/**
 * Multiplies all numbers together
 * @param numbers - Array of numbers to multiply
 * @returns Product of all numbers
 */
export function multiply(numbers: number[]): number {
  if (numbers.length === 0) return 0
  return numbers.reduce((product, num) => product * num, 1)
}

/**
 * Divides the first number by all subsequent numbers
 * @param numbers - Array of numbers to divide
 * @returns Result of division
 * @throws Error if dividing by zero
 */
export function divide(numbers: number[]): number {
  if (numbers.length === 0) return 0
  if (numbers.length === 1) return numbers[0]

  return numbers.reduce((result, num, index) => {
    if (index === 0) return num
    if (num === 0) {
      throw new Error("Division by zero is not allowed")
    }
    return result / num
  })
}

/**
 * Performs the specified operation on the numbers
 * @param operation - Type of operation to perform
 * @param numbers - Array of numbers
 * @returns Result of the operation
 */
export function performOperation(operation: Operation, numbers: number[]): number {
  switch (operation) {
    case "add":
      return add(numbers)
    case "subtract":
      return subtract(numbers)
    case "multiply":
      return multiply(numbers)
    case "divide":
      return divide(numbers)
    default:
      throw new Error(`Unknown operation: ${operation}`)
  }
}

/**
 * Main calculator function that parses input and performs operation
 * @param input - String of numbers
 * @param operation - Type of operation
 * @returns Result of calculation
 */
export function calculate(input: string, operation: Operation): number {
  const numbers = parseNumbers(input)
  return performOperation(operation, numbers)
}
