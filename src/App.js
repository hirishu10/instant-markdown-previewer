import logo from "./logo.svg";
import "./styles/App.scss";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useState } from "react";
//
import { marked } from "marked";
//
// get our fontawesome imports
import { faExpandAlt, faExpand } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faTumblr } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
// import { useEffect, useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
// import "animate.css";
import hljs from "highlight.js";
// import "highlight.js/styles/github.css";
import "highlight.js/styles/vs.css";
// import "highlight.js/styles/googlecode.css";
// import "highlight.js/styles/github-dark.css";
// import "highlight.js/styles/vs2015.css";
// import "highlight.js/styles/base16/nord.css";
// import "highlight.js/styles/base16/darcula.css";
// import "highlight.js/styles/base16/3024.css";

//
// import "highlight.js/styles/googlecode.css";
// import "highlight.js/styles/vs2015.css";

// import Prism from "prismjs";
// import "prismjs/themes/vs.css";
//
import { useSelector, useDispatch } from "react-redux";
import {
  setDarkMode,
  setVersionMode,
  updateVersionInMarkdown,
} from "./redux/actions/index";

function App() {
  const dispatch = useDispatch();
  const { isDarkMode, isVersionViewMode, versionUpdateViewer } = useSelector(
    (state) => state.actionCombined
  );

  const [darkMode, setDarkMode] = useState(false);
  const [editorBox, setEditiorBox] = useState(false);
  const [previewerBox, setPreviewerBox] = useState(false);

  // some states to take the data from the textarea
  //   const predefinedData = `
  // ![https://github.com/hirishu10](https://raw.githubusercontent.com/hirishu10/my-assets/main/rishuchowdharyanimate.gif)
  // # Welcome to my React Markdown Previewer!
  // ## This is a sub-heading...
  // ### And here's some other cool stuff:

  // Heres some code, \`<div></div>\`, between 2 backticks.

  // \`\`\`java
  // // this is multi-line code:

  // function anotherExample(firstLine, lastLine) {
  //   if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
  //     return multiLineCode;
  //   }
  // }
  // \`\`\`

  // You can also make text **bold**... whoa!
  // Or _italic_.
  // Or... wait for it... **_both!_**
  // And feel free to go crazy ~~crossing stuff out~~.

  // There's also [links](https://www.freecodecamp.org), and
  // > Block Quotes!

  // And if you want to get really crazy, even tables:

  // Wild Header | Crazy Header | Another Header?
  // ------------ | ------------- | -------------
  // Your content can | be here, and it | can be here....
  // And here. | Okay. | I think we get it.

  // - And of course there are lists.
  // - Some are bulleted.
  // - With different indentation levels.
  // - That look like this.

  // 1. And there are numbered lists too.
  // 1. Use just 1s if you want!
  // 1. And last but not least, let's not forget embedded images:

  // ![https://github.com/hirishu10](https://raw.githubusercontent.com/hirishu10/my-assets/main/Rishu%20Chowdhary%20(1).gif)
  // `;

  const predefinedData = versionUpdateViewer;
  const [editorData, setEditorData] = useState(predefinedData);
  // const [previewData, setPreviewData] = useState("");

  const editorFullScreen = (e) => {
    e.preventDefault();
    setPreviewerBox(false);
    setEditiorBox(!editorBox);
  };
  const previewerFullScreen = (e) => {
    e.preventDefault();
    setEditiorBox(false);
    setPreviewerBox(!previewerBox);
  };

  // This function helpful for enabling the dark mode
  const darkModeEnabled = (e) => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  //
  // marked.setOptions({
  //   breaks: true,
  //   highlight: function (code) {
  //     return Prism.highlight(code, Prism.languages.javascript, "javascript");
  //   }
  // });

  // `highlight` example uses https://highlightjs.org
  marked.setOptions({
    renderer: new marked.Renderer(),
    highlight: function (code, lang) {
      // const hljs = require("highlight.js");

      const language = hljs.getLanguage(lang) ? lang : "plaintext";
      return hljs.highlight(code, { language }).value;
    },
    // highlight: function (code) {
    //   return Prism.highlight(code, Prism.languages.javascript, "javascript");
    // },
    langPrefix: "hljs language-", // highlight.js css expects a top-level 'hljs' class.
    pedantic: false,
    gfm: true,
    breaks: true,
    sanitize: false,
    smartLists: true,
    smartypants: false,
    xhtml: false,
  });
  useEffect(() => {
    // console.log("isVersionViewMode :>> ", isVersionViewMode);
    // console.log("versionUpdateViewer :>> ", versionUpdateViewer);
    const markdownData = marked.parse(
      isVersionViewMode ? versionUpdateViewer : editorData
    );
    // const markdownData = marked.parse(versionUpdateViewer);
    // $(".language-java").addClass("hljs language-java");
    document.getElementById("preview").innerHTML = markdownData;
  }, [editorData, isVersionViewMode, versionUpdateViewer]);

  //
  return (
    <div className="App">
      <Navbar darkMode={darkMode} darkModeEnabled={darkModeEnabled} />
      <div className="mainContainer">
        <div
          className="mainContainerOne"
          style={{
            display: previewerBox ? "none" : "block",
            width: editorBox ? "100%" : "50%",
            height: "100%",
            // backgroundColor: "orange",
            borderRight: "1px solid silver",
          }}
        >
          <div className="sameForBoth">
            <div className="sameForBothOne">#Editor</div>
            <div className="sameForBothTwo">
              <button
                onClick={editorFullScreen}
                className="sameForBothTwoButton"
              >
                <FontAwesomeIcon
                  className="sameForBothTwoButtonChild"
                  icon={editorBox ? faExpandAlt : faExpand}
                  size={"1x"}
                  // color={"white"}
                />
              </button>
            </div>
          </div>
          {/* Below Text-Area */}
          <div
            className="textAreaContainer"
            style={{
              display: "flex",
              justifyContent: editorBox ? "center" : "flex-end",
              alignItems: editorBox ? "center" : "flex-start",
            }}
          >
            <textarea
              // disabled={true}
              className="textArea"
              id="editor"
              style={{
                minWidth: editorBox ? "98%" : "97%",
                minHeight: editorBox ? "96%" : "96.5%",
                maxWidth: editorBox ? "98%" : "97%",
                maxHeight: editorBox ? "96%" : "96.5%",
                overflowX: "hidden",
                overflowY: "scroll",
                outlineStyle: "none",
                // padding: 10,
                wordBreak: "break-word",
                // display: "flex",
                // justifyContent: "center",
                // alignItems: "flex-end",
                backgroundColor: "white",
                border: "none",
              }}
              value={editorData}
              onChange={(e) => {
                e.preventDefault();
                dispatch(setVersionMode(false));
                setEditorData(e.target.value);
                const markdownData = marked.parse(
                  isVersionViewMode ? versionUpdateViewer : editorData
                );
                document.getElementById("preview").innerHTML = markdownData;
              }}
            ></textarea>
          </div>
        </div>
        {/* ********************** */}
        {/* **** Editor Above **** */}
        {/* ********************** */}
        {/* *** Preview Below *** */}
        {/* ********************** */}
        <div
          className="mainContainerTwo"
          style={{
            display: editorBox ? "none" : "block",
            width: previewerBox ? "100%" : "50%",
            height: "100%",
            // backgroundColor: "orangered",
          }}
        >
          <div className="sameForBoth">
            <div className="sameForBothOne">#Previewer</div>
            <div className="sameForBothTwo">
              <button
                onClick={previewerFullScreen}
                className="sameForBothTwoButton"
              >
                <FontAwesomeIcon
                  className="sameForBothTwoButtonChild"
                  icon={previewerBox ? faExpandAlt : faExpand}
                  size={"1x"}
                  // color={"white"}
                />
              </button>
            </div>
          </div>
          {/* Below Text-Area */}
          <div
            className="textAreaContainer"
            style={{
              display: "flex",
              justifyContent: previewerBox ? "center" : "flex-start",
              alignItems: previewerBox ? "center" : "flex-start",
            }}
          >
            <div
              // disabled={true}
              className="textArea"
              id="preview"
              style={{
                minWidth: previewerBox ? "95%" : "97%",
                minHeight: previewerBox ? "96%" : "96.5%",
                maxWidth: previewerBox ? "95%" : "97%",
                maxHeight: previewerBox ? "96%" : "96.5%",
                overflowX: "hidden",
                overflowY: "scroll",
                // padding: 10,
                wordBreak: "break-word",
                border: "none",
                backgroundColor: "white",
                // marginRight: previewerBox ? 20 : null,
                paddingLeft: previewerBox ? 40 : null,
              }}
              // value={previewData}
              // onChange={(e) => {
              //   e.preventDefault();
              //   setPreviewData(e.target.value);
              // }}
            ></div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
