# ls-enum

Tiny and fast utility to extract all possible values for a given enum.

<hr />

## Installation
#### Using yarn
```sh
yarn add ls-enum
```

#### Using pnpm
```sh
pnpm add ls-enum
```

#### Using npm
```sh
npm install ls-enum
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
