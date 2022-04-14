# ls-enum

Tiny and fast utility to extract all possible values for a given enum.

<hr />

## Installation
#### Using yarn
```sh
yarn add immutable
```

#### Using pnpm
```sh
pnpm add immutable
```

#### Using npm
```sh
npm install immutable
```

<hr />

## Usage
```typescript
import lsEnum from 'ls-enum';

enum TestEnum {
  ValueOne = 'one',
  ValueTwo = 2
};

const values = lsEnum(TestEnum); // <- ['one', 2]
```
