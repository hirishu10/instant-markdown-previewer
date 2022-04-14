import logo from "./logo.svg";
import "./styles/App.scss";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useState } from "react";
//
import { marked } from "marked";
//
// get our fontawesome imports
import {
  faExpandAlt,
  faExpand,
  faTrashCan,
  faDownload,
  faFileDownload,
} from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faTumblr } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
// import { useEffect, useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
// import "animate.css";
import hljs from "highlight.js";
// import "highlight.js/styles/github.css";
// import "highlight.js/styles/googlecode.css";
import "highlight.js/styles/github-dark.css";
// import "highlight.js/styles/base16/darcula.css";

// import Prism from "prismjs";
// import "prismjs/themes/vs.css";
//
import { useSelector, useDispatch } from "react-redux";
import {
  setDarkMode,
  setVersionMode,
  updateVersionInMarkdown,
} from "./redux/actions/index";
//
import fileDownload from "js-file-download";
//
function App() {
  const dispatch = useDispatch();
  const { isDarkMode, isVersionViewMode, versionUpdateViewer } = useSelector(
    (state) => state.actionCombined
  );

  const [editorBox, setEditiorBox] = useState(false);
  const [previewerBox, setPreviewerBox] = useState(false);

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

  // Color and Background Color
  const BACKGROUND_COLOR = isDarkMode ? "#0c1118" : "white";
  const COLOR = isDarkMode ? "#c8d1da" : "#232930";
  const LANGUAGE_BACKGROUND_COLOR = isDarkMode ? "#151b23" : "#333943";
  const P_CODE_BACKGROUND_COLOR = isDarkMode ? "#333943" : "#e8ebef";
  $("pre").css("background-color", LANGUAGE_BACKGROUND_COLOR);
  // $("pre code").css("background-color", LANGUAGE_BACKGROUND_COLOR);

  $("p code").css("background-color", P_CODE_BACKGROUND_COLOR);

  //
  useEffect(() => {
    // console.log("isVersionViewMode :>> ", isVersionViewMode);
    // console.log("versionUpdateViewer :>> ", versionUpdateViewer);
    const markdownData = marked.parse(
      isVersionViewMode ? versionUpdateViewer : editorData
    );
    // const markdownData = marked.parse(versionUpdateViewer);
    // $(".language-java").addClass("hljs language-java");
    document.getElementById("preview").innerHTML = markdownData;
    $("pre").css("background-color", LANGUAGE_BACKGROUND_COLOR);
    // $("pre code").css("background-color", LANGUAGE_BACKGROUND_COLOR);

    $("p code").css("background-color", P_CODE_BACKGROUND_COLOR);
  }, [
    LANGUAGE_BACKGROUND_COLOR,
    P_CODE_BACKGROUND_COLOR,
    editorData,
    isVersionViewMode,
    versionUpdateViewer,
  ]);
  //
  return (
    <div className="App">
      <Navbar />
      <div className="mainContainer">
        <div
          className="mainContainerOne"
          style={{
            display: previewerBox ? "none" : "block",
            width: editorBox ? "100%" : "50%",
            height: "100%",
            // backgroundColor: "orange",
            // borderRight: "1px solid silver",
          }}
        >
          <div className="sameForBoth">
            {/* <div className="sameForBothOne"></div> */}
            <div className="sameForBothOne">
              <div className="sameForBothOneFirst">#Editor</div>
              <div className="sameForBothOneSecond">
                <div
                  className="sameForBothOneSecondButtonContainer"
                  onMouseEnter={(e) => {
                    e.preventDefault();
                    $("#trashICon").addClass(
                      "animate__animated animate__heartBeat"
                    );
                  }}
                  onMouseLeave={(e) => {
                    e.preventDefault();
                    $("#trashICon").removeClass(
                      "animate__animated animate__heartBeat"
                    );
                  }}
                >
                  <button
                    className="sameForBothOneSecondButton"
                    onClick={(e) => {
                      e.preventDefault();
                      setEditorData("");
                    }}
                  >
                    Clear{" "}
                    <FontAwesomeIcon
                      id="trashICon"
                      className="sameForBothTwoButtonChild"
                      icon={faTrashCan}
                      size={"sm"}
                      // color={"white"}
                    />
                  </button>
                </div>
              </div>
              <div className="sameForBothOneThird">
                <div
                  className="sameForBothOneThirdButtonContainer"
                  onMouseEnter={(e) => {
                    e.preventDefault();
                    $("#fileDownload").addClass(
                      "animate__animated animate__heartBeat"
                    );
                  }}
                  onMouseLeave={(e) => {
                    e.preventDefault();
                    $("#fileDownload").removeClass(
                      "animate__animated animate__heartBeat"
                    );
                  }}
                >
                  <button
                    className="sameForBothOneThirdButton"
                    onClick={(e) => {
                      e.preventDefault();
                      if (editorData !== "") {
                        fileDownload(editorData, "markedraw.txt");
                      } else {
                        alert(
                          "Please type some text in the editor to download the same."
                        );
                      }
                    }}
                  >
                    Download File{" "}
                    <FontAwesomeIcon
                      id="fileDownload"
                      className="sameForBothTwoButtonChild"
                      icon={faFileDownload}
                      size={"sm"}
                      // color={"white"}
                    />
                  </button>
                </div>
              </div>
            </div>
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
                borderRadius: editorBox ? 5 : null,
                minWidth: editorBox ? "80%" : "97%",
                minHeight: editorBox ? "96%" : "96.5%",
                maxWidth: editorBox ? "80%" : "97%",
                maxHeight: editorBox ? "96%" : "96.5%",
                overflowX: "hidden",
                overflowY: "scroll",
                outlineStyle: "none",
                // padding: 10,
                wordBreak: "break-word",
                // display: "flex",
                // justifyContent: "center",
                // alignItems: "flex-end",
                backgroundColor: BACKGROUND_COLOR,
                color: COLOR,

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
            borderLeft: "1px solid silver",
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
                minWidth: previewerBox ? "80%" : "97%",
                minHeight: previewerBox ? "96%" : "96.5%",
                maxWidth: previewerBox ? "80%" : "97%",
                maxHeight: previewerBox ? "96%" : "96.5%",
                overflowX: "hidden",
                overflowY: "scroll",
                // padding: 10,
                wordBreak: "break-word",
                border: "none",
                // backgroundColor: "white",
                backgroundColor: BACKGROUND_COLOR,
                color: COLOR,
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
