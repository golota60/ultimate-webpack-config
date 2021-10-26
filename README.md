# Ultimate webpack setup

This is the entry point for bootstrapping all my react applications. I always swap a few things, depending on which tooling I want to use, but generally it all comes down to modifying this repo. I try to keep this up to date. 

What you get by using this setup:
- ✅ .scss/.css Hot module replacement and source maps
- ✅ .js/.ts/.jsx/.tsx Hot reloading and source maps(no HMR due to shaky support)
- ✅ .svg resolutions - can be rendered as react components
- ✅ Zero runtime CSS
- ✅ Fast compile times
- ✅ Typescript
- ✅ Less webpack headaches


If you want to use it too, here are the things that it uses:

Code-wise:
- [Typescript](https://github.com/microsoft/TypeScript)
- [React](https://github.com/facebook/react/)

Style-wise
- [SASS](https://github.com/sass/sass)
- [Linaria](https://github.com/callstack/linaria)
- [PostCSS](https://github.com/postcss/postcss)

Bundle-wise:
- [webpack](https://github.com/webpack/webpack)
- [Babel](https://github.com/babel/babel)

Tool-wise:
- [yarn](https://github.com/yarnpkg/yarn)
- [eslint](https://github.com/eslint/eslint)

> This is state manager agnostic. You need to add your fav state manager yourself.

### Starting development

There's a few things that need to be done to adjust this starter to your needs. 

- Check .browserslistrc
- Check your production [source-maps](#source-maps) policy

### Source maps

By default source maps on prod are being shipped in this repo. To change this modify `webpack.config.js` like this

Change this:
```ts
    '@linaria/webpack-loader'
```
To this:
```ts
      {
        loader: '@linaria/webpack-loader',
        options: {
          sourceMap: process.env.NODE_ENV !== 'production',
        },
      }
```

and

Change this:
```ts
    devtool: "source-map",
```
To this:
```ts
  devtool: process.env.NODE_ENV === 'production' ? false : "source-map",
```

You might also want to add hashes to your styles as described [here](https://github.com/callstack/linaria/blob/master/docs/BUNDLERS_INTEGRATION.md#webpack)
