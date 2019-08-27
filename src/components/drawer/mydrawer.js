import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";

const useStyles = makeStyles({
  list: {
    width: 250,
    textAlign: "center",
    height: "auto"
  }
});

export default function MyDrawer(props) {
  const classes = useStyles();
  const [opened, setOpened] = useState({
    opened: props.btnClicked
  });

  useEffect(() => {
    setOpened({ opened: props.btnClicked });
  }, [props.btnClicked, props.btnClickCallback]);

  const MyList = () => {
    return (
      <div
        role="presentation"
        onClick={props.btnClickCallback}
        onKeyDown={props.btnClickCallback}
      >
        <ul className={classes.list}>
          <li className="nav_li">
            <a className="nav_a" href="#sectionCarousel">
              VolF
            </a>
          </li>
          <li className="nav_li">
            <a className="nav_a" href="#sectionAbout">
              동아리 소개
            </a>
          </li>
          <li className="nav_li">
            <a className="nav_a" href="#sectionWorks">
              활동
            </a>
          </li>
          <li className="nav_li">
            <a className="nav_a" href="#sectionNotices">
              공지사항
            </a>
          </li>
          <li className="nav_li">
            <a className="nav_a" href="#sectionRecruits">
              지원하기
            </a>
          </li>
          <li className="nav_li">
            <a className="nav_a" href="#sectionContect">
              Conect Us
            </a>
          </li>
        </ul>
      </div>
    );
  };

  return (
    <div>
      <SwipeableDrawer
        anchor="right"
        open={opened.opened}
        onClose={props.btnClickCallback}
        onOpen={props.btnClickCallback}
      >
        {MyList()}
      </SwipeableDrawer>
    </div>
  );
}
