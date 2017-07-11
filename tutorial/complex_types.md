# Complex Types:

1. Interfaces
2. Class Types
3. Function Types
4. Indexable Types
5. Classes

## Interfaces:

```TypeScript
function printLabel(labelledObj: { label: string }) {
    console.log(labelledObj.label);
}

let myObj = {size: 10, label: "Size 10 Object"};
printLabel(myObj);
```

Type-checker checks that the call to printLabel requires an object with property called label. label is of type string. It can have more properties but it **must** have label property.

The same thing can be written using:

```typescript
interface LabelledValue {
  label: string;
}

function printLabel(labelledObj: LabelledValue) {
  console.log(labelledObj.label);
}

let myObj = {size: 10, label: "Size 10 object"};
printLabel(myObj);
```

- We do not need to explicitly say that the object we pass to printLabel implements this interface like we might have to in other languages like C# or Java.

- **Optional Properties:** Some of the properties in interface might be declared as optional using '?' symbol.

```typescript
interface SquareConfig {
  color?: string;     // optional
  width?: number;     // optional
}

function createSquare(config: SquareConfig): {color: string, area: number} {
  // return type is an object with color and area properties.
  let newSquare = {color: "white", area: 100};
  if(config.color) {
    newSquare.color = config.color;
  }
  if(config.width) {
    newSquare.area = config.width * config.width;
  }
  return newSquare;  
}
```

If `SquareConfig` can have 'color' and 'width' properties with above types, but could also have any number of other properties, then we could define it like this:

```typeScript
interface SquareConfig {
  color?: string;
  width?: number;
  [propName: string]: any;
}

**Readonly Properties:** `readonly` keyword is used to make properties modifiable only when an object is first created.

```typeScript
interface Point {
  readonly x: number;
  readonly y: number;
}

let p1: Point = {x: 10, y: 20};
p1.x = 5;   // error
```

- TypeScript also supports Readonly Arrays.

```typescript
let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a;
ro[0] = 12;   // Error
ro.push(5);   // Error
ro.length = 100;  // Error
a = ro;   // Error, you cannot even assign ReadonlyArray to normal array. This can be overridden using type assertion.

a = ro as number[];
```

**NOte:** `const` is used for variables whereas `readonly` is used for properties.
