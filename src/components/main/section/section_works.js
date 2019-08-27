import React from "react";
import pic1 from "./works_images/봉사1.jpeg";
import pic2 from "./works_images/봉사2.jpeg";
import pic3 from "./works_images/봉사3.png";
function SectionWorks() {
  return (
    <div className="section fp-responsive">
      <div id="section_works" className="container">
        <h1>활동</h1>
        <div className="works_row">
          <div className="row_content">
            <div className="picture">
              <img src={pic1} width="250px" height="200px" />
            </div>
            <div>
              <h3>교육 봉사</h3>
              <p>교육이 필요한 분들에게 교육 봉사를 하였습니다.</p>
            </div>
          </div>
          <div className="row_content">
            <div className="picture">
              <img src={pic2} width="250px" height="200px" />
            </div>
            <div>
              <h3>노인 봉사</h3>
              <p>지역내의 어르신분들을 돌보는 봉사를 하였습니다.</p>
            </div>
          </div>
          <div className="row_content">
            <div className="picture">
              <img src={pic3} width="250px" height="200px" />
            </div>
            <div>
              <h3>행사 관련 봉사</h3>
              <p>지역 행사에 관련된 봉사를 실시하였습니다.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionWorks;
