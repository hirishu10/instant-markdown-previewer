import React, { useEffect, useState } from "react";
import "./styles/Navbar.scss";
import {
  faSun,
  faMoon,
  faAngleDown,
  faAngleUp,
} from "@fortawesome/free-solid-svg-icons";
// import { faTwitter, faTumblr } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//
import $ from "jquery";
import "animate.css";
//
import { useSelector, useDispatch } from "react-redux";
import {
  setDarkMode,
  setVersionMode,
  updateVersionInMarkdown,
} from "./redux/actions/index";
function Navbar({ darkMode, darkModeEnabled }) {
  const dispatch = useDispatch();
  const { isDarkMode, isVersionViewMode, versionUpdateViewer } = useSelector(
    (state) => state.actionCombined
  );

  const [getDropDown, setDropDown] = useState(false);
  const [index, setIndex] = useState(0);
  const hearts = ["❤️", "💙", "💜", "💚", "🖤", "💛", "🧡", "🤍", "🤎"];

  useEffect(() => {
    $("#heart").addClass("animate__animated animate__heartBeat");
    setTimeout(() => {
      $("#heart").removeClass("animate__animated animate__heartBeat");
    }, 1000);
    setTimeout(() => {
      let x = index >= hearts.length - 1 ? 0 : index + 1;
      setIndex(x);
      // $("#heart").removeClass("animate__animated animate__heartBeat");
    }, 1000);
  }, [hearts.length, index]);

  //
  const updateVersionDataInTheMarkdownPreviewer = (v) => {
    dispatch(updateVersionInMarkdown(v));
  };
  //
  return (
    <div className="navbarContainer">
      <div className="navbarContainerZero">
        <div className="navbarContainerZeroFirst">
          <button
            className="optionContainer"
            // onClick={(e) => {
            //   e.preventDefault();
            //   setDropDown(!getDropDown);
            // }}
            style={
              {
                // marginTop: getDropDown ? 30 : null,
              }
            }
            onMouseEnter={(e) => {
              e.preventDefault();
              setDropDown(!getDropDown);
              e.currentTarget.style.transition = "0.3s";
            }}
            onMouseLeave={(e) => {
              e.preventDefault();
              setDropDown(!getDropDown);
              e.currentTarget.style.transition = "0.3s";
            }}
          >
            {`v1.0.3`}
            <em
              style={{
                marginLeft: 5,
              }}
            >
              {" "}
              <FontAwesomeIcon
                className="sameForBothTwoButtonChild"
                icon={getDropDown ? faAngleUp : faAngleDown}
                size={"1x"}
                // color={"white"}
              />
            </em>
            <div
              className="optionDesign"
              style={
                {
                  // display: getDropDown ? "block" : "none",
                }
              }
            >
              <ul className="options">
                <li
                  className="optionsLayout"
                  onClick={(e) => {
                    e.preventDefault();
                    dispatch(setVersionMode(true));
                    updateVersionDataInTheMarkdownPreviewer("v1.0.3");
                  }}
                >
                  <p className="optionLayoutInside">v1.0.3</p>
                </li>
                <li
                  className="optionsLayout"
                  onClick={(e) => {
                    e.preventDefault();
                    dispatch(setVersionMode(true));
                    updateVersionDataInTheMarkdownPreviewer("v1.0.2");
                  }}
                >
                  <p className="optionLayoutInside">v1.0.2</p>
                </li>
                <li
                  className="optionsLayout"
                  onClick={(e) => {
                    e.preventDefault();
                    dispatch(setVersionMode(true));
                    updateVersionDataInTheMarkdownPreviewer("v1.0.1");
                  }}
                >
                  <p className="optionLayoutInside">v1.0.1</p>
                </li>
                <li
                  className="optionsLayout"
                  onClick={(e) => {
                    e.preventDefault();
                    dispatch(setVersionMode(true));
                    updateVersionDataInTheMarkdownPreviewer("v1.0.0");
                  }}
                >
                  <p className="optionLayoutInside">v1.0.0</p>
                </li>
              </ul>
            </div>
          </button>
          {/*  */}
        </div>
        <div className="navbarContainerZeroSecond">
          <img
            alt="GitHub package.json version"
            src="https://img.shields.io/github/package-json/v/hirishu10/instant-markdown-previewer?color=%23333&label=Github&logo=github&style=for-the-badge"
          />
        </div>
      </div>
      <div className="navbarContainerOne">
        {/* in the heart i may add animation for looking good */}
        {`</> Instant Markdown Previewer | made with`}
        <p
          id="heart"
          style={{
            marginLeft: 2,
            marginRight: 3,
            transition: "0.3s",
          }}
        >{`${hearts[index]}`}</p>
        {`by Rishu Chowdhary`}
      </div>
      <div className="navbarContainerTwo">
        <em className="icon-design" onClick={darkModeEnabled}>
          <FontAwesomeIcon
            className="sameForBothTwoButtonChild"
            icon={darkMode ? faMoon : faSun}
            size={"1x"}
            // color={"white"}
          />
        </em>
      </div>
    </div>
  );
}

export default Navbar;
