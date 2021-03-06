import React, { useEffect, useState } from "react";
import "./styles/Navbar.scss";
import {
  faSun,
  faMoon,
  faAngleDown,
  faAngleUp,
} from "@fortawesome/free-solid-svg-icons";
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
function Navbar() {
  const dispatch = useDispatch();
  const { isDarkMode, isVersionViewMode, versionUpdateViewer } = useSelector(
    (state) => state.actionCombined
  );

  const [getDropDown, setDropDown] = useState(false);
  const [index, setIndex] = useState(0);
  const hearts = ["โค๏ธ", "๐", "๐", "๐", "๐ค", "๐", "๐งก", "๐ค", "๐ค"];

  useEffect(() => {
    $("#heart").addClass("animate__animated animate__heartBeat");
    setTimeout(() => {
      $("#heart").removeClass("animate__animated animate__heartBeat");
    }, 1000);
    setTimeout(() => {
      let x = index >= hearts.length - 1 ? 0 : index + 1;
      setIndex(x);
    }, 1000);
  }, [hearts.length, index]);

  //
  const updateVersionDataInTheMarkdownPreviewer = (v) => {
    dispatch(updateVersionInMarkdown(v));
  };

  // This function helpful for enabling the dark mode
  const darkModeEnabled = (e) => {
    // console.log("isDarkMode :>> ", isDarkMode);
    e.preventDefault();
    dispatch(setDarkMode(!isDarkMode));
    $(".icon-design").addClass("animate__animated animate__bounceIn");
    setTimeout(() => {
      $(".icon-design").removeClass("animate__animated animate__bounceIn");
    }, 800);
  };
  //
  return (
    <div className="navbarContainer">
      <div className="navbarContainerZero">
        <div className="navbarContainerZeroFirst">
          <button
            className="optionContainer"
            style={{}}
            onMouseEnter={(e) => {
              e.preventDefault();
              e.currentTarget.style.transition = "0.3s";
              setDropDown(true);
            }}
            onMouseLeave={(e) => {
              e.preventDefault();
              e.currentTarget.style.transition = "0.3s";
              setDropDown(false);
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
              />
            </em>
            <div className="optionDesign" style={{}}>
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
            icon={isDarkMode ? faMoon : faSun}
            size={"1x"}
          />
        </em>
      </div>
    </div>
  );
}

export default Navbar;
