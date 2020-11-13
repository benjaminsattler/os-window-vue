# Development

## Requirements

In order to start developing os-window-vue, first checkout the repository:
```shell
> git clone https://github.com/benjaminsattler/os-window-vue.git
```

For the vue development server unfortunately you need to have some global dependencies installed as well
```shell
> yarn global add @vue/cli-service-global
```

> Eslint needs to be installed as a global dependency because of @vue/cli unfortunately.

Next make sure to install the development dependencies:
```shell
> cd os-window-vue
> yarn
```

Afterwards make sure to also install the required peer dependencies, which will include a compatible version of vue and os-window:
```shell
> npx npm-install-peers
```
When all is installed you can start the vue development webserver:

For the next step please make sure to have a working installation of **Python 2.x**. Start the preconfigured python web server to load the development debug HTML page:

```shell
> yarn dev
```

Now you can point your web browser at `http://localhost:8000/html/debug.html` and see the os-window-vue component in action. It'll not automatically reload, make sure to refresh the page once you saved your changes.

## Running tests

In order to run the tests during development, simply type the following command in your console:

```shell
> yarn test
```

## Running EsLint

In order to run EsLint on the source and test files, simply type the following command in your console:

```shell
> yarn lint
```

The linter will also automatically be run in a git hook pre-commit.

## More Information

You can find more information at the following places:

- [Os-Window component documentation](https://github.com/benjaminsattler/os-window/blob/master/doc/index.md)
- [Vue v2 API Documentation](https://vuejs.org/v2/api/)

