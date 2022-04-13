import {
  SET_DARK_MODE,
  SET_VERSION_MODE,
  UPDATE_VERSION_IN_MARKDOWN,
} from "../actions/types";

const initialState = {
  isDarkMode: false,
  isVersionViewMode: false,
  versionUpdateViewer: `
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

    `,
};

const actionCombined = (state = initialState, action) => {
  switch (action.type) {
    case SET_DARK_MODE:
      return { ...state, isDarkMode: action.payload };
    case SET_VERSION_MODE:
      return { ...state, isVersionViewMode: action.payload };
    case UPDATE_VERSION_IN_MARKDOWN:
      return { ...state, versionUpdateViewer: action.payload };
    default:
      return state;
  }
};

export default actionCombined;
