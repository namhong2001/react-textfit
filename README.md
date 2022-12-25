# @namhong2001/react-textfit

## v1

### Diff from malte-wessel/react-textfit

- make run possible on react v18

### Install

```shell
npm install @namhong2001/react-textfit@1
```

#### Types

```bash
npm install @types/namhong2001__react-textfit@npm:@types/react-textfit --D
```

## v2

Originate from **_malte-wessel/react-textfit_** but fully rewritten with function component and hooks by typescript

### Install

```shell
npm install @namhong2001/react-textfit
```

#### Types

Included

### Supported props

- `mode` (single|multi) force singleline or multiline. default `multi`
- `min` (Number) minimum font size. default `0`
- `max` (Number) maximum font size. default `300`

### example

```typescript
<Textfit>
  {myText}
</Textfit>

<Textfit mode="single">
  {myText}
</Textfit>

<Textfit mode="single" min={10} max={50}>
  {myText}
</Textfit>
```

## LICENSE

MIT
