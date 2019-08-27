import React from "react";
import Appbar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import { makeStyles } from "@material-ui/styles";

import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

function MyAppbar(props) {
  //내용에 패딩 주기
  const useStyle = makeStyles({
    appbar: {
      backgroundColor: "#ffffff"
    },
    mobile_btn: {
      display: "none"
    },
    toolbar: { margin: "0 auto", width: "960px", padding: 0 },
    "@media only screen and (max-width: 767px)": {
      mobile_btn: {
        display: "block",
        color: "black"
      },
      toolbar: {
        width: "300px"
      }
    },
    "@media only screen and (max-width: 767px) and (min-width: 480px)": {
      mobile_btn: {
        display: "block",
        color: "black"
      },
      toolbar: {
        width: "420px"
      }
    }
  });

  const classes = useStyle();
  return (
    <Appbar className={classes.appbar}>
      <Toolbar className={classes.toolbar}>
        <div className="one-third column">
          <a className="nav_title" href="#sectionCarousel">
            <h5 className="title">VolF</h5>
          </a>
        </div>
        <div className="two-thirds column">
          <div className="nav_box">
            <IconButton
              className={classes.mobile_btn}
              onClick={props.callbackFromParent}
            >
              <a>
                <MenuIcon className={classes.mobile_btn} />
              </a>
            </IconButton>
            <ul className="nav_list" id="menu">
              <li className="nav_li" data-menuanchor="sectionAbout">
                <a className="nav_a" href="#sectionAbout">
                  VolF 소개
                </a>
              </li>
              <li className="nav_li" data-menuanchor="sectionWorks">
                <a className="nav_a" href="#sectionWorks">
                  활동
                </a>
              </li>
              <li className="nav_li" data-menuanchor="sectionNotices">
                <a className="nav_a" href="#sectionNotices">
                  공지사항
                </a>
              </li>
              <li className="nav_li" data-menuanchor="sectionRecruits">
                <a className="nav_a" href="#sectionRecruits">
                  지원하기
                </a>
              </li>
              <li className="nav_li" data-menuanchor="sectionContect">
                <a className="nav_a" href="#sectionContect">
                  Contect Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Toolbar>
    </Appbar>
  );
}

export default MyAppbar;
