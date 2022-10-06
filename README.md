# pnpm-variables README

"pnpm-variables" extension. provides variable substitution commands for `launch.json`

## Features

### Command pnpm-variables.root

In a `launch.json` add `testFile` property pointing to the file you want to debug

And then you can use `${command:pnpm-variables.root}` that will point to the relative pnpm node_modules of that file

Example configuration

```json
{
  "name": "Vitest File",
  "program": "${command:pnpm-variables.root}/vitest/vitest.mjs",
  "testFile": "${file}",
  "args": ["${file}"],
  "cwd": "${command:pnpm-variables.root}/..",
  "request": "launch",
  "skipFiles": ["<node_internals>/**"],
  "type": "node"
}
```

## Requirements

Require pnpm to be installed in the host machine

## Known Issues

Calling out known issues can help limit users opening duplicate issues against your extension.

**Enjoy!**
