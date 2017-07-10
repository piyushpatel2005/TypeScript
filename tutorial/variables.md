# Variable Declartion:

TypeScript supports `let` and `const` which are relatively new in JavaScript.

TypeScript files are saved as `.ts` files.

**Syntax:**
`let variableName: variableType`

```TypeScript
let x: number = 5;

let x: number;
```

`let` is similar to `var` in JS. However, `let` controls the variable scope issues with JavaScript.

- Semicolons are optional in both JS and TS.

- **const** is used to declare constatnts. As they cannot change once assigned. They are not declared with type.

```typescript
const pi = 3.14
```

- Use [TypeScript Playground](http://www.typescriptlang.org/play/index.html) to practise basic codes and see them compiled into JS.

TypeScript is strongly-typed language. Once defined with a type, a variable cannot change its type in TypeScript.

If the variable is not assigned a type when it is defined, then the type is inferred from the first assignment or the initialization of variable.

```typescript
let y = 10;   // y is not strongly typed as number
y = "hello";  // incorrect
```

### Supported Data Types:

**Primitive Types**

- boolean
- number
- string
- array
- tuple
- enum
- null
- undefined
- any
- void: exists to indicate the absense of value.

**Complex Types**

- class
- interface

### Basic Type examples:

```typeScript
let isDone: boolean = false;

let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;

let color: string = "blue";
let fullName: string = `Bob Dillon`;
let age: number = 32;
let sentence: string = `Hello, my name is ${ fullName }. I'll be ${age + 1} years old next month.`;
```

- Arrays are declared using [] notation or generic array type.

```typescript
let list: number[] = [1, 2, 3];
let list: Array<number> = [1, 2, 3];
```

- Tuple types allow you to express an array where the type of a fixed number of elements is known.

```typescript
// Declare a tuple type
let x: [string, number];
// Initialize
x = ["hello", 10];  // Correct
x = [10, "hello"];  // Incorrect

console.log(x[0].substr(1));  // OK
console.log(x[1].substr(1));  // Error
```

- Enum is used to give friendly names to sets of numeric values. Enums begin numbering their members starting at 0. This can also be set manually by assigning different values.

```typescript
enum Color {Red, Green, Blue}
let c: Color = Color.Green;

cnum Color {Red = 1, Green, Blue};
let c: Color = Color.Green;
console.log(c);   // 2

enum Color {Red = 1, Green = 2, Blue = 4};
let colorName: string = Color[2];
console.log(colorName);   // Green
```

- Any: When value of the variable is not already known. It might come from 3rd party library. To let the values pass through and skip the type checking, we use any type.

```TypeScript
let notSure: any = 4;
notSure = "maybe a string";
notSure = false;

let list: any[] = [1, true, "free"];
list[1] = 100;
```

- void means absense of having any type at all. `void` is mainly used as a return of the function that does not return anything.

```typescript
function warn User(): void {
  alert("This is my warning");
}
```

If you define a variable as `void`, then you can assign only `null` or `undefined` to them.

- `null` and `undefined` are different types in TypeScript.

```typescript
let u: undefined = undefined;
let n: null = null;
```

`null` and `undefined` are subtypes of all other types. You can assign null and undefined to something like numbers.

```typescript
let x;
```

is equivalent to

`let x: any`.

### Type assertion:

Type assertion is similar to type casting in other languages. They can be applied using two notations.

One using < ... > angle bracket notation.

```TypeScript
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;
```

Another using 'as' syntax.

```TypeScript
let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;
```
