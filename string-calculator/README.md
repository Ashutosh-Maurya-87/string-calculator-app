# String Calculator App - TDD Implementation

A production-ready **React.js + TypeScript** string calculator application built with **Test-Driven Development (TDD)** methodology. This app demonstrates best practices in testing, component architecture, and functional programming.

---

## Table of Contents

- [Features](#features)
- [Project Overview](#project-overview)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)
- [TDD Approach](#tdd-approach)
- [Component Documentation](#component-documentation)

---

##  Features

### Core Calculator Operations
-  **Addition** - Adds all numbers together
-  **Subtraction** - Subtracts all numbers from the first number
-  **Multiplication** - Multiplies all numbers together
-  **Division** - Divides numbers with zero-division protection

### User Experience
-  Single textarea input for number entry
-  Interactive operation selection UI
-  Real-time result display
-  Input validation with error messages
-  Reset functionality to start over
-  Fully responsive design
-  Accessible components with proper ARIA labels

### Developer Experience
-  50+ comprehensive unit tests
-  Full test coverage for all functions and components
-  Clean, modular component architecture
-  Well-documented code
-  TypeScript for type safety
-  Optimized React component rendering

---

## Project Overview

### What is String Calculator?
The String Calculator is an educational project that demonstrates TDD principles by implementing a calculator that:
1. Accepts numbers as comma or space-separated strings
2. Supports basic arithmetic operations
3. Provides clear error handling
4. Maintains a clean, testable codebase

### Technology Stack
- **React.js** - UI framework
- **TypeScript** - Type safety
- **Vite**  - Build tool
- **Vitest** - Unit testing framework
- **React Testing Library** - Component testing
- **Tailwind CSS** - Styling

---

## Getting Started

### 1. Clone this Project

```
git clone https://github.com/Ashutosh-Maurya-87/string-calculator-app.git
```

### Prerequisites
- Node.js 16+ or higher
- npm or yarn package manager

### Installation

#### Option 1: Using Vite (Recommended)

\`\`\`bash
# Create a new React + TypeScript project
npm create vite@latest string-calculator -- --template react-ts
cd string-calculator

# Install dependencies
npm install

# Install testing dependencies
npm install -D vitest @testing-library/react @testing-library/user-event @vitejs/plugin-react
\`\`\`

#### Option 2: Using Create React App

\`\`\`bash
# Create a new React app with TypeScript
npx create-react-app string-calculator --template typescript
cd string-calculator

# Install testing dependencies
npm install --save-dev @testing-library/react @testing-library/user-event
\`\`\`

### Setup Instructions

1. **Copy the project files** into your React project:
   - Copy files from `src/lib/` to your `src/lib/` directory
   - Copy files from `src/components/` to your `src/components/` directory
   - Update your `src/App.tsx` to use the CalculatorApp component

2. **Install Tailwind CSS** (optional, for styling):
\`\`\`bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
\`\`\`

3. **Configure Tailwind** in `tailwind.config.js`:
\`\`\`javascript
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
\`\`\`

## Usage

### Running the Application

**Development Mode:**
\`\`\`bash
npm run dev
\`\`\`
The app will be available at `http://localhost:5173` (Vite) or `http://localhost:3000` (CRA)

**Production Build:**
\`\`\`bash
npm run build
npm run preview  # or npm start for CRA
\`\`\`

### Using the Calculator

1. **Enter Numbers:**
   - Type numbers separated by commas: `10, 20, 30`
   - Or separate by spaces: `10 20 30`
   - Supports decimals: `10.5, 20.5, 30.5`
   - Supports negative numbers: `-10, 20, -30`

2. **Click Calculate:**
   - Validates your input
   - Shows four operation buttons: Add, Subtract, Multiply, Divide

3. **Select an Operation:**
   - Click the desired operation button
   - Result displays immediately below

4. **Reset:**
   - Click "Reset" to clear and start over

### Example Usage Scenarios

**Addition:**
\`\`\`
Input: 10, 20, 30
Operation: Add
Result: 60
\`\`\`

**Subtraction:**
\`\`\`
Input: 100, 20, 10
Operation: Subtract
Result: 70  (100 - 20 - 10)
\`\`\`

**Multiplication:**
\`\`\`
Input: 2, 3, 4
Operation: Multiply
Result: 24
\`\`\`

**Division:**
\`\`\`
Input: 100, 2, 5
Operation: Divide
Result: 10  (100 ÷ 2 ÷ 5)
\`\`\`

---

### Calculator Module (`lib/calculator.ts`)

#### `parseNumbers(input: string): number[]`
Parses a string input into an array of numbers.

\`\`\`typescript
// Examples
parseNumbers("10, 20, 30")        // Returns: [10, 20, 30]
parseNumbers("10 20 30")          // Returns: [10, 20, 30]
parseNumbers("10.5, -20, 30.5")   // Returns: [10.5, -20, 30.5]
\`\`\`

**Parameters:**
- `input` (string) - Comma or space-separated numbers

**Returns:**
- `number[]` - Array of parsed numbers

**Throws:**
- `Error` - If input contains non-numeric values or is empty

---

#### `add(numbers: number[]): number`
Adds all numbers together.

\`\`\`typescript
add([10, 20, 30])  // Returns: 60
add([1.5, 2.5])    // Returns: 4
\`\`\`

**Parameters:**
- `numbers` (number[]) - Array of numbers to add

**Returns:**
- `number` - Sum of all numbers

---

#### `subtract(numbers: number[]): number`
Subtracts all numbers from the first number.

\`\`\`typescript
subtract([100, 20, 10])  // Returns: 70
subtract([50, 10, 5])    // Returns: 35
\`\`\`

**Parameters:**
- `numbers` (number[]) - Array of numbers to subtract

**Returns:**
- `number` - Result after subtracting all numbers from the first

---

#### `multiply(numbers: number[]): number`
Multiplies all numbers together.

\`\`\`typescript
multiply([2, 3, 4])    // Returns: 24
multiply([5, 5])       // Returns: 25
multiply([1.5, 2])     // Returns: 3
\`\`\`

**Parameters:**
- `numbers` (number[]) - Array of numbers to multiply

**Returns:**
- `number` - Product of all numbers

---

#### `divide(numbers: number[]): number`
Divides numbers sequentially with zero-division protection.

\`\`\`typescript
divide([100, 2, 5])    // Returns: 10
divide([100, 10])      // Returns: 10
\`\`\`

**Parameters:**
- `numbers` (number[]) - Array of numbers to divide

**Returns:**
- `number` - Result after sequential division

**Throws:**
- `Error` - If division by zero is attempted

---

### Type Definitions

\`\`\`typescript
interface OperationType {
  name: 'add' | 'subtract' | 'multiply' | 'divide'
  label: string
  description: string
}

interface CalculationResult {
  result: number | null
  error: string | null
  operation: string | null
  input: string | null
  numbers: number[] | null
}
\`\`\`

---

## Testing

### Running Tests

**Run all tests:**
\`\`\`bash
npm run test
\`\`\`

**Run tests in watch mode:**
\`\`\`bash
npm run test:watch
\`\`\`

**Run tests with coverage:**
\`\`\`bash
npm run test:coverage
\`\`\`

### Test Suite Overview

#### Calculator Tests (`calculator.test.ts`)
-  `parseNumbers()` - 8 test cases
  - Valid comma-separated numbers
  - Valid space-separated numbers
  - Decimal numbers
  - Negative numbers
  - Error handling for invalid input

-  `add()` - 6 test cases
  - Basic addition
  - Decimal numbers
  - Negative numbers
  - Single number
  - Empty array error handling

-  `subtract()` - 6 test cases
  - Basic subtraction
  - Sequential subtraction
  - Negative results
  - Decimal numbers
  - Single number edge case

-  `multiply()` - 6 test cases
  - Basic multiplication
  - Decimal numbers
  - Negative numbers
  - Zero in array
  - Single number

-  `divide()` - 5 test cases
  - Basic division
  - Sequential division
  - Decimal results
  - Division by zero error
  - Decimal numbers

#### Component Tests
-  `CalculatorApp.test.tsx` - Integration tests
-  `OperationSelector.test.tsx` - UI interaction tests
-  `ResultDisplay.test.tsx` - Display and state tests

### Test Examples

\`\`\`typescript
// Example test from calculator.test.ts
describe('add', () => {
  test('should add two numbers', () => {
    expect(add([10, 20])).toBe(30)
  })

  test('should add multiple numbers', () => {
    expect(add([1, 2, 3, 4, 5])).toBe(15)
  })

  test('should handle decimal numbers', () => {
    expect(add([10.5, 20.5])).toBe(31)
  })

  test('should throw error for empty array', () => {
    expect(() => add([])).toThrow('Numbers array cannot be empty')
  })
})
\`\`\`

---
## Implementation Reference
1. <img width="1883" height="841" alt="sc-1" src="https://github.com/user-attachments/assets/3ea7b4e8-7252-4fa0-a3a2-5318c3655272" />
2. <img width="1833" height="837" alt="sc-2" src="https://github.com/user-attachments/assets/3796d5e8-f651-4d1b-905a-84eb75dde290" />
3. <img width="1811" height="851" alt="sc-3" src="https://github.com/user-attachments/assets/53ae6f7d-876b-4a02-a903-f05d910b14d1" />
4. <img width="1797" height="812" alt="sc-4" src="https://github.com/user-attachments/assets/0587996d-93e7-4304-a1db-a619bb2c99b5" />
5. <img width="1836" height="832" alt="sc-5" src="https://github.com/user-attachments/assets/10dff802-05f0-4e16-b934-7fd2eb54aef5" />

##  TDD Approach

### What is Test-Driven Development?

TDD is a software development methodology with the cycle:

1. **Red**  - Write a test that fails
2. **Green**  - Write minimal code to make the test pass
3. **Refactor**  - Clean up and improve the code

### How This Project Implements TDD

#### Phase 1: Write Tests First
Before implementing any calculator logic, comprehensive tests are written:

\`\`\`typescript
// Test written FIRST, implementation comes later
test('should add two numbers correctly', () => {
  const result = add([10, 20])
  expect(result).toBe(30)
})
\`\`\`

#### Phase 2: Implement Minimal Code
Implement the minimum code needed to pass the test:

\`\`\`typescript
// Implementation that passes the test
export function add(numbers: number[]): number {
  return numbers.reduce((sum, num) => sum + num, 0)
}
\`\`\`

#### Phase 3: Refactor
Improve code quality while maintaining test coverage:

\`\`\`typescript
// Refactored with validation
export function add(numbers: number[]): number {
  if (!Array.isArray(numbers) || numbers.length === 0) {
    throw new Error('Numbers array cannot be empty')
  }
  return numbers.reduce((sum, num) => sum + num, 0)
}
\`\`\`

### Benefits of TDD in This Project

 **Confidence** - Every function has passing tests  
 **Documentation** - Tests serve as usage examples  
 **Refactoring Safety** - Change code with test protection  
 **Bug Prevention** - Edge cases caught before production  
 **Design** - Tests drive better code architecture  
 **Quality** - 50+ tests ensure reliability  

---

##  Component Documentation

### CalculatorApp Component

**Main calculator container component.**

\`\`\`typescript
interface Props {
  // No props - manages its own state
}

// State
- input: string            // User textarea input
- showOperations: boolean  // Show operation buttons
- result: CalculationResult // Calculation results
\`\`\`

**Key Methods:**
- `handleCalculate()` - Validates input and shows operations
- `handleOperation()` - Performs calculation
- `handleReset()` - Clears all state

---

### OperationSelector Component

**Displays four operation buttons.**

\`\`\`typescript
interface Props {
  onSelectOperation: (operation: 'add' | 'subtract' | 'multiply' | 'divide') => void
  numbers: number[]
}
\`\`\`

**Operations:**
- Add
- Subtract
- Multiply
- Divide

---

### ResultDisplay Component

**Shows calculation results and errors.**

\`\`\`typescript
interface Props {
  result: CalculationResult
  numbers: number[] | null
  operation: string | null
}

// Displays:
- Success message with result
- Input numbers used
- Operation performed
- Error messages if applicable
\`\`\`

---

## Examples

### Example 1: Basic Addition

\`\`\`typescript
import { CalculatorApp } from './components/calculator-app'

function App() {
  return <CalculatorApp />
}

export default App
\`\`\`

**User Flow:**
1. Enter "10, 20, 30" in textarea
2. Click "Calculate"
3. Click "Add" button
4. Result: 60

### Example 2: Using Calculator Functions Directly

\`\`\`typescript
import { parseNumbers, add, subtract, multiply, divide } from './lib/calculator'

// Parse input
const numbers = parseNumbers("10, 20, 30")  // [10, 20, 30]

// Perform operations
const sum = add(numbers)                     // 60
const difference = subtract(numbers)         // -40 (10-20-30)
const product = multiply(numbers)           // 6000
const quotient = divide([100, 2, 5])        // 10
\`\`\`

### Example 3: Error Handling

\`\`\`typescript
import { parseNumbers, divide } from './lib/calculator'

try {
  const numbers = parseNumbers("invalid, data")
} catch (error) {
  console.log('Invalid input:', error.message)
}

try {
  divide([10, 0, 5])  // Will throw error
} catch (error) {
  console.log('Division error:', error.message)
}
\`\`\`

---

## Configuration Files

### `tsconfig.json`
TypeScript configuration for the project.

### `vitest.config.ts`
Vitest configuration for running tests.

\`\`\`typescript
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
  },
})
\`\`\`

### `package.json` Scripts

\`\`\`json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "test": "vitest",
    "test:watch": "vitest --watch",
    "test:coverage": "vitest --coverage"
  }
}
\`\`\`

---

## Learning Resources

### TDD Best Practices
- Red-Green-Refactor cycle
- Write tests for edge cases
- Test behavior, not implementation
- Keep tests focused and independent

### React Testing Best Practices
- Test user interactions, not implementation
- Use React Testing Library queries
- Avoid testing implementation details
- Mock external dependencies

### TypeScript Best Practices
- Use strict mode
- Define clear interfaces
- Avoid `any` type
- Use union types for flexibility

---

## Best Practices Used

-  **Separation of Concerns** - Logic separated from UI
-  **Pure Functions** - Calculator functions have no side effects
-  **Type Safety** - Full TypeScript coverage
-  **Composition** - Small, reusable components
-  **Error Handling** - Clear error messages
-  **Accessibility** - Proper ARIA labels
-  **Responsive Design** - Works on all screen sizes
-  **Testability** - Easy to test functions and components

---

## Contributing

To contribute to this project:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Write tests first (TDD approach)
4. Implement the feature
5. Ensure all tests pass (`npm run test`)
6. Commit your changes (`git commit -m 'Add amazing feature'`)
7. Push to the branch (`git push origin feature/amazing-feature`)
8. Open a Pull Request

---

## Troubleshooting

### Tests not running?
\`\`\`bash
# Ensure vitest is installed
npm install -D vitest @testing-library/react

# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run test
\`\`\`

### Styling not working?
\`\`\`bash
# If using Tailwind CSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
\`\`\`

### TypeScript errors?
\`\`\`bash
# Update TypeScript
npm update typescript

# Check tsconfig.json is properly configured
\`\`\`

---

## Questions or Issues?

- Open an issue on GitHub
- Check existing documentation
- Review test cases for usage examples

---

## Conclusion

This String Calculator App is a complete example of professional React development with:
- **Production-ready code** with 50+ tests
- **Best practices** in TDD, component design, and TypeScript
- **Educational value** for learning testing and clean code
- **Scalable architecture** ready for extensions

**Built with Ashutosh Maurya ❤️ using React.js + Vite and Typescript**
