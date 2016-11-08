# use-yarn-instead

This package hooks up to the `postinstall` npm hook and displays a message when a developer runs `npm install` instead of `yarn install`.

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
