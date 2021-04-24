## core concepts

- Entry
- Output
- Loaders
- Plugins
- Mode

## Entry

> indicates which module webpack should use to begin building out its internal dependency graph. webpack will figure out which other modules and libraries that entry point depends on (directly and indirectly).

> By default its value is ./src/index.js, but you can specify a different (or multiple entry points) by setting an entry property in the webpack configuration.
