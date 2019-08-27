import React from "react";

function MyFooter() {
  return (
    <div className="section fp-auto-height fp-responsive">
      <footer className="main_footer">
        <div className="container footer_content">
          <div className="footer_row">
            <section className="footer_content footer_section">
              <div className="footer_section footer_title">
                <h6 className="footer_head">VolF</h6>
              </div>
              <div className="footer_section section_content">
                <p className="section_text">
                  VolF는 Volunteer Friends의 약자로 대학생 연합 동아리 입니다.
                  <br />
                  동아리는 수도권 지역 대학의 대학생들로 구성 되어있으며,
                  <br />
                  자발적인 봉사와 친목도모를 목적으로 하고 있습니다.
                </p>
              </div>
            </section>
            <section className="footer_content footer_section">
              <div className="footer_section footer_title">
                <h6 className="footer_head">임원진</h6>
              </div>
              <div className="footer_section section_content">
                <ul className="section_content footer_list">
                  <li className="footer_list footer_item">
                    회장_홍기현 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    example1@naver.com
                  </li>
                  <li className="footer_list footer_item">
                    부회장_허정윤 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    example2@naver.com
                  </li>
                  <li className="footer_list footer_item">
                    차장_김도현 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    example3@naver.com
                  </li>
                  <li className="footer_list footer_item">
                    총무_정재희 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    example4@naver.com
                  </li>
                  <li className="footer_list footer_item">
                    섭외부장_박준형 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    example5@naver.com
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </div>
        <div className="copyright">
          Copyright © 2019 Volunteer Friends All Rights Reserved
        </div>
      </footer>
    </div>
  );
}

export default MyFooter;
