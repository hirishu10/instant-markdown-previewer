import {
  SET_DARK_MODE,
  SET_VERSION_MODE,
  UPDATE_VERSION_IN_MARKDOWN,
} from "./types";

/**
 *
 * @param {*} condition Condition to make dark / light mode
 * @returns return True/False provided by the user preferences
 */
const setDarkMode = (condition) => {
  return {
    type: SET_DARK_MODE,
    payload: condition,
  };
};

/**
 *
 * @param {*} condition Condition to make dark / light mode
 * @returns return True/False provided by the user preferences
 */
const setVersionMode = (condition) => {
  return {
    type: SET_VERSION_MODE,
    payload: condition,
  };
};

/**
 *
 * @param {*} version
 * @returns
 */
const updateVersionInMarkdown = (version) => {
  const versionData =
    version === "v1.0.0"
      ? `
  ![https://github.com/hirishu10](https://raw.githubusercontent.com/hirishu10/my-assets/main/instantMarkdownPreviewer/instantmarkdownpreview.gif)
# Release v1.0.0

### Update
- Improve bugs and fixes.
- Fix the version selection issue.

### Feature
- Added new Button for deleting the editor data.
- We are working for improving this with new feature.


## Some Example
>  Below Some Exampels how to use Markdown Language 🙂
# Welcome to my React Markdown Previewer!
## This is a sub-heading...
### And here's some other cool stuff:


Here some code, \`<div></div>\`, between 2 backticks.

\`\`\`javaScript
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
- Some are bulleted.
- With different indentation levels.
- That look like this.

1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![https://github.com/hirishu10](https://raw.githubusercontent.com/hirishu10/my-assets/main/rishuchowdharyanimate.gif)

`
      : version === "v1.0.1"
      ? `
![https://github.com/hirishu10](https://raw.githubusercontent.com/hirishu10/my-assets/main/instantMarkdownPreviewer/instantmarkdownpreview.gif)
# Release v1.0.1

### Update
- Improve bugs and fixes.
- Fix the version selection issue.

### Feature
- Added new Button for deleting the editor data.
- We are working for improving this with new feature.


## Some Example
>  Below Some Exampels how to use Markdown Language 🙂
# Welcome to my React Markdown Previewer!
## This is a sub-heading...
### And here's some other cool stuff:


Here some code, \`<div></div>\`, between 2 backticks.

\`\`\`javaScript
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
- Some are bulleted.
- With different indentation levels.
- That look like this.

1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![https://github.com/hirishu10](https://raw.githubusercontent.com/hirishu10/my-assets/main/rishuchowdharyanimate.gif)

`
      : version === "v1.0.2"
      ? `
![https://github.com/hirishu10](https://raw.githubusercontent.com/hirishu10/my-assets/main/instantMarkdownPreviewer/instantmarkdownpreview.gif)
# Release v1.0.2

### Update
- Improve bugs and fixes.
- Fix the version selection issue.

### Feature
- Added new Button for deleting the editor data.
- We are working for improving this with new feature.


## Some Example
>  Below Some Exampels how to use Markdown Language 🙂
# Welcome to my React Markdown Previewer!
## This is a sub-heading...
### And here's some other cool stuff:


Here some code, \`<div></div>\`, between 2 backticks.

\`\`\`javaScript
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
- Some are bulleted.
- With different indentation levels.
- That look like this.

1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![https://github.com/hirishu10](https://raw.githubusercontent.com/hirishu10/my-assets/main/rishuchowdharyanimate.gif)

`
      : `
![https://github.com/hirishu10](https://raw.githubusercontent.com/hirishu10/my-assets/main/instantMarkdownPreviewer/instantmarkdownpreview.gif)
# Release v1.0.3

### Update
- Improve bugs and fixes.
- Fix the version selection issue.

### Feature
- Added new Button for deleting the editor data.
- We are working for improving this with new feature.


## Some Example
>  Below Some Exampels how to use Markdown Language 🙂
# Welcome to my React Markdown Previewer!
## This is a sub-heading...
### And here's some other cool stuff:


Here some code, \`<div></div>\`, between 2 backticks.

\`\`\`javaScript
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
- Some are bulleted.
- With different indentation levels.
- That look like this.

1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![https://github.com/hirishu10](https://raw.githubusercontent.com/hirishu10/my-assets/main/rishuchowdharyanimate.gif)

`;

  return {
    type: UPDATE_VERSION_IN_MARKDOWN,
    payload: versionData,
  };
};

export { setDarkMode, setVersionMode, updateVersionInMarkdown };
