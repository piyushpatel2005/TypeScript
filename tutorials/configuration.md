# Configuration

TypeScript compiler uses a `tsconfig.json` file at the root of the project directory to specify any global TypeScript project settings and compiler options.

We can use `tsc` command from project root and Typescript will compile all files automatically.

To create tsconfig.json file, use command:

`tsc --init`

[See Example file](../examples/config/tsconfig.json)

`target`: preferred JS output to generate.
`sourceMap`: whether to generate sourceMap for debugging or not.
`noImplicitAny`: true means we must attempt to strongly type all variables before use.
