# Helix TypeScript Test Case

This is a dummy project showcasing Code Actions not being available in places
where it should be.

## Installation

```console
$ npm install
```

## Steps to reproduce

Visit `src/App.tsx`. Place the cursor on `useState(0)`. Perform a Code Action.

### Expected result

Two Code Actions should be available.

1. Update import from "react".
2. Add missing function declaration 'useState'.

### Actual result

No code actions are available.
