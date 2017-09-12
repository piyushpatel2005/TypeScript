# Complex Types:

1. Interfaces
2. Class Types
3. Function Types
4. Indexable Types
5. Classes

## Functions:

```typescript
function addNumbers(a: number, b: number): string {
  return (a + b).toString();
}
var addResult = addNumbers(2, 3);
console.log(`addNumbers returned: ${addResult}`);
```

- We can also make some of the parameters as optional by using `?` syntax. With plain Vanilla JS, it will assign `undefined` to uninitialized variable.

```typescript
function concatStrings(a: string, b: string, c?: string) {
  return a + b + c;
}
var concatStrings = concatStrings("a", "b", "c");
var concat2Strings = concatStrings("a", "b");
console.log(concatStrings);   // "abc"
console.log(concat2Strings);  // "ab"
```

- We can also provide default parameters like named parameters in some programming languages.

```typescript
function concatSTrings (a: string, b: string, c: string = "c") {
  return a + b + c;
}
```

- Rest arguments can be assigned using three dots (...) in the function declaration. This express a variable number of function parameters.

```typescript
function testArgs(...  argArr: number[]) {
  if(argArr.length > 0) {
    for(var i = 0; i < argArr.length; i++) {
      console.log(`argArr[${i}] = ${argArr[i]}`);
    }
  }
}
testArgs(1, 2, 3);
```

- We can combine normal parameters along with rest parameters.

```typescript
function test(arg1: string, arg2: number, ...arg: number[]) {

}
```

- TypeScript also supports function overloading.

```typescript
function add(a:string, b: string) : string;
function add(a:number, b: number) : number;
function add(a: any, b: any): any {
  return a + b;
}
```

## Union

TS allows us to express a type as the combination of two or more other types.This is known as union types.

```typescript
var unionType: string | number;
unionType = 1;
unionType = "test";
```

- We can define new types using `type` just like we do in C using`typedef`.

```typescript
type StringOrNumber = string | number;

function addWithAlias(
  arg1: StringOrNumber,
  arg2: StringOrNumber
) {
  return arg1.toString() + arg2.toString();
}
```

- We can copy one object to another using ES7 syntax.

```typescript
let firstObjt = {id: 1, name: "firstObj"};
let secondObj = {...firstObj};
console.log(secondObj.id);  // 1
```

- We can also merge multiple objects' all properties using this syntax.

```typescript
let nameObj = {name: "nameObj"};
let idObj = {id: 1};
let obj3 = {...nameObj, ...idObj};    // now obj3 contains both properties.
```


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

```typescript
interface IComplexType {
  id: number;
  name: string;
}

let ComplexType: IComplexType;
complexType = {id: 1, name: "test"};
```


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
```

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
- Interfaces cannot include constructor definition. It if does, the compiler will throw an error.



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

## Class Types:

```typescript
interface ClockInterface {
  currentTime: Date;
}

class Clock implements ClockInterface {
  currentTime: Date;
  constructor(h: number, m: number) {

  }
}
```

You can also define methods in an interface that are implemented in the class, just like C# or Java.

```typescript
interface ClockInterface {
  currenTime: Date;
  setTime(d: Date);
}

class Clock implements ClockInterface {
  currenTime: Date;
  setTime(d: Date) {
    this.currenTime = d;
  }
  constructor(h: number, m: number) {

  }
}
```

- We can have overloaded constrctors in the case of a class.

```typescript
class ComplexType implements IComplexType {
  id: number;
  name: string;
  constructor(idArg: number, nameArg: string);
  constructor(idArg: string, nameArg: string);
  constructor(idArg: any, nameArg: any) {
    this.id = idArg;
    this.name = nameArg;
  }
}
```

### Access Modifiers

TypeScript provides public, private and protected access modifiers.

```typescript
class Person {
  public name: string;
}

let piyush = new Person();
piyush.name = "Piyush";
```

- `private` properties are not accessible outside the class.
- Class functions are `public` by default.

### Property accessor

It is a function that can be used to retrieve a property. The accessor functions are called to retrieve and set private properties.

```typescript
class Person {
  private _id: number;
  get id() {
    return this._id;
  }
  set id(value:number) {
    this._id = value;
  }
}
var piyush = new Person();
piyush.id = 2;    // will call get id() function.
```

**Static functions** are the ones that can be called on a class without having to create an instance of the class first.

```typescript
class StaticClass {
  static printTwo() {
    console.log('2');
  }
}
StaticClass.printTwo();
```

- Similarly, static properties can be declared using `static` keyword  and can be accessed from anywhere without creating the object.

## Namespaces:

Typescript supports namespaces to cover different classes inside namespace to avoid naming collision. Namespaces are created using `namespace` keyword.

```typescript
namespace LivingObject {
  class Person {

  }
  export class Teacher {
    id: number;
  }
}
```

Those classes that are not explicitly exported cannot be instantiated. The compiler will give error in the case of

`let person = new LivingObject.Person()` but not in the case of `Teacher()` instantiation.

## Inheritance

Inheritance means one object can extend another object.

```typescript
interface IBase {
  id: number;
}

interface IDerivedFromBase extends IBase {
  name: string;
}

class InterfaceInheritanceClass implements IDerivedFromBase {
  id: number;
  name: string;
}
```

Implementing class must successfully implement all the properties of the parent interface.

**Class Inheritance** works in similar manner.

```typescript
class BaseClass implements IBase {
  id: number;
}

class DerivedClass extends BaseClass implements IDerivedFromBase {
  name: string;
}
```

- In the case of class inheritance, derived class does not need to redefine parent class properties, but it must implement properties of interface.

- Typescript does not support multiple inheritance, however, can implement multiple interfaces.

```typescript
interface IBase {
  id: number;
}

interface IDerived extends IBase {
  name: string;
}

class InterfaceInheritanceClass implements IBase, IDerived {
  id: number;
  name: string;
}
```

- We can also call parent class constructor using `super()` keyword.
- We can also override parent functions in the child class.

```typescript
class BaseClass {
  public id: number;
  getProperties() : string {
    return `id: ${this.id}`;
  }
}

class DerivedClass extends BaseClass {
  public name: string;
  getProperties(): string {
    return `${super.getProperties()}` + `, name: ${this.name}`;
  }
}
```

Sometimes, it is required that all the derived classes have certain properties from the parent class, but not other classes. In that case, parent class property can be declared as `protected`.
