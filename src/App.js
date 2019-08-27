//react components
import React, { Component } from "react";

import ReactFullpage from "@fullpage/react-fullpage";
//material-ui components
//my components
import MyAppbar from "./components/appbar/myappbar";
import MyCarousel from "./components/carousel/mycarousel";
import MyFooter from "./components/main/footer/myfooter";
import MyDrawer from "./components/drawer/mydrawer";

import SectionAbout from "./components/main/section/section_about";
import SectionWorks from "./components/main/section/section_works";
import SectionNotices from "./components/main/section/section_notices";
import SectionRecruits from "./components/main/section/section_recruits";
//font
//normalize css
import "normalize.css";
//my css
import "./styles/skeleton.css";
import "./styles/desktop.css";
import "./styles/tablet.css";
import "./styles/mobile.css";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      btnClicked: false
    };
    this.btnClickCallback = this.btnClickCallback.bind(this);
  }

  btnClickCallback = () => {
    this.setState(prevState => {
      return { btnClicked: !prevState.btnClicked };
    });
  };

  render() {
    return (
      <div className="wrapper">
        <MyAppbar callbackFromParent={this.btnClickCallback} />
        <ReactFullpage
          //fullpage options
          licenseKey={"05C661D0-A69A46EA-B64A44BF-E1AA7FE4"}
          scrollingSpeed={700} /* Options here */
          menu={"#menu"}
          anchors={[
            "sectionCarousel",
            "sectionAbout",
            "sectionWorks",
            "sectionNotices",
            "sectionRecruits",
            "sectionContect"
          ]}
          render={(state, fullpageApi) => {
            return (
              <ReactFullpage.Wrapper>
                <MyDrawer
                  btnClicked={this.state.btnClicked}
                  btnClickCallback={this.btnClickCallback}
                />
                <MyCarousel />
                <SectionAbout />
                <SectionWorks />
                <SectionNotices />
                <SectionRecruits />
                <MyFooter />
              </ReactFullpage.Wrapper>
            );
          }}
        />
      </div>
    );
  }
}
