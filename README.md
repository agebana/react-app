# Setup Checklist

When starting a new project from scratch:

- [ ] Initialize the git repository and project via `npm init` and `git init`
- [ ] Install `webpack` and `webpack-cli`
- [ ] Install loaders and configure through `webpack.config.js`, you will likely need the following:
  - [ ] html-loader
  - [ ] css-loader
  - [ ] file-loader
  - [ ] image-webpack-loader
- [ ] Install babel plugins and configure through `.babelrc`
  - [ ] Babel plugins / ES6 proposals
    > Babel maintainers highly encourage that from v7.0 onwards, you explicitly opt in for proposals you wish to use in your project.
    > https://babeljs.io/blog/2018/07/27/removing-babels-stage-presets
  - [ ] ESLint plugins
  - [ ] React preset
