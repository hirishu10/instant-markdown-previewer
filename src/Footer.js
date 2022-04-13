import React from "react";
import "./styles/Footer.scss";
//
import {
  faExpandAlt,
  faExpand,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faTumblr,
  faGithub,
  faCodepen,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//
function Footer() {
  const socialIcons = [
    {
      icon: faTwitter,
      color: "#319bf4",
      href: "https://twitter.com/rishuchowdhary",
    },
    {
      icon: faGithub,
      color: "#1a1f23",
      href: "https://github.com/hirishu10",
    },
    {
      icon: faCodepen,
      color: "whitesmoke",
      href: "https://codepen.io/hirishu10",
    },
    {
      icon: faTumblr,
      color: "blue",
      href: "https://hirishu10.tumblr.com/",
    },
  ];
  return (
    <div className="footerContainer">
      <div className="footerContainerOne">
        <div className="footerContainerOneFirst">
          <a
            className="logoImage"
            href="https://github.com/hirishu10"
            target={"_blank"}
            rel="noreferrer"
          >
            <img
              // className="logoImage"
              src="https://raw.githubusercontent.com/hirishu10/my-assets/main/contact_logo.png"
              alt="my_logo"
              width={"100px"}
              height={"100px"}
              style={
                {
                  // marginLeft: 80,
                }
              }
            />
          </a>
        </div>
        <div className="footerContainerOneSecond">
          <div className="socialIconContainer">
            <div className="socialIconContainerOne">
              {socialIcons.map((item, index) => (
                <a
                  className="socialIcons"
                  href={item?.href}
                  target={"_blank"}
                  rel="noreferrer"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "whitesmoke";
                    e.currentTarget.style.transition = "0.3s";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#333";
                    e.currentTarget.style.transition = "0.3s";
                  }}
                >
                  <FontAwesomeIcon
                    className=""
                    icon={item?.icon}
                    size={"lg"}
                    // color={"white"}
                  />
                </a>
              ))}
            </div>
            <div className="socialIconContainerTwo">
              <p>
                {`Please help us to improve `}
                <a
                  href={"#github"}
                  target={"_blank"}
                  rel="noreferrer"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "whitesmoke";
                    e.currentTarget.style.transition = "0.3s";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#333";
                    e.currentTarget.style.transition = "0.3s";
                  }}
                >
                  <FontAwesomeIcon
                    className=""
                    icon={faArrowUpRightFromSquare}
                    size={"lg"}
                  />
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="footerContainerTwo">
        {`© Copyright </> Instant Markdown Previewer 2022`}
      </div>
    </div>
  );
}

export default Footer;
