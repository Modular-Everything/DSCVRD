# Discovered Magazine

A Sanity-based website for Discovered Magazine that includes:

- ESLint and Prettier set up from Wes Bos with autoformatting.
- `gatsby-browser.js` and `gatsby-ssr.js` files for wrapping content in `<Layout>`.
- `normalize.css` for setting up a nice baseline to work from.
- `styled-components` for scoped styles, but also a `GlobalStyles.js` for defining, well, global styles.
- `stylelint` with the `order` plugin, using SMACSS rules for setting the correct order

## Git Styleguide

This repo follows the [Udacity style guide](http://udacity.github.io/git-styleguide/) for commit messaging.

A quick summary of the `type`s are here for reference:

> - **feat**: A new feature
> - **fix**: A bug fix
> - **docs**: Changes to documentation
> - **style**: Formatting, missing semi colons, etc; no code change
> - **refactor**: Refactoring production code
> - **test**: Adding tests, refactoring test; no production code change
> - **chore**: Updating build tasks, package manager configs, etc; no production code change

And a rough template to use:

```
type: This is the subject line

(body)
This would be a 72 character summary of the commit.

It can exist a cross multiple lines and can...

- Also
- Use
- Bullets!

(footer)
The footer is optional and is used to reference issue tracker IDs.
```