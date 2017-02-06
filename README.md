# use-yarn-instead

![unstable](https://img.shields.io/badge/status-unstable-yellow.svg)

This package is a playground for technically enforcing the use of `yarn` instead of `npm` on a project. You can read [@farisj's use case](https://github.com/alexanderwallin/use-yarn-instead/issues/1#issuecomment-277493922) to get a kind of rationale for it.

You should probably not be using this!

## Usage

The published package hooks up to the `postinstall` npm hook and displays a message when a developer runs `npm install` instead of `yarn install`. The problem with this is that it does not stop the installation process. Also, the warning will be superseeded by a massive package depenceny graph, which will almost guaranteedly make people miss it.

Example:

```sh
$ npm install

# npm output...

~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~

       Psst, use `yarn` instead

~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~

# npm graph...

$
```
