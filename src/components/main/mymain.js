import React from "react";

function MyMain() {
  return (
    <div className="container">
      <div id="section_about" className="section">
        <h1>VolF 소개</h1>
        <p>
          볼프란 서울 수도권 봉사 연합동아리 입니다.
          <br />과 같은 내용들이 다수 들어가자
          <br />
          그리고 아무튼 재밌고 좋습니다.
          <br />
          우헤헤헤헤
        </p>
      </div>
      <div id="section_works" className="section">
        <h1>활동</h1>
        <div className="works_row">
          {"//그리드 겔러리로 변경 가능"}
          <div className="works_row row_content">
            <div className="picture">사진 들어가고</div>
            <div>
              <h3>활동 내용 들어가고</h3>
              <p>활동 내용 간단하게 소개</p>
            </div>
          </div>
          <div className="works_row row_content">
            <div className="picture">사진 들어가고</div>
            <div>
              <h3>활동 내용 들어가고</h3>
              <p>활동 내용 간단하게 소개</p>
            </div>
          </div>
          <div className="works_row row_content">
            <div className="picture">사진 들어가고</div>
            <div>
              <h3>활동 내용 들어가고</h3>
              <p>활동 내용 간단하게 소개</p>
            </div>
          </div>
        </div>
      </div>
      <div id="section_notices" className="section">
        <h1>공지사항</h1>
        <div className="notices_row">
          <div className="notices_row row_content">
            <h3 className="notice_row_title">여기에는 공지사항 목록</h3>
            <ul>
              <li>하나씩 들어간다</li>
              <li>하나씩 들어간다</li>
              <li>하나씩 들어간다</li>
              <li>하나씩 들어간다</li>
              <li>하나씩 들어간다</li>
            </ul>
          </div>
          <div className="notices_row row_content">
            <h3 className="notice_row_title">여기에는 공지사항 목록</h3>
            <ul>
              <li>하나씩 들어간다</li>
              <li>하나씩 들어간다</li>
              <li>하나씩 들어간다</li>
              <li>하나씩 들어간다</li>
              <li>하나씩 들어간다</li>
            </ul>
          </div>
          <div className="notices_row row_content">
            <h3 className="notice_row_title">여기에는 공지사항 목록</h3>
            <ul>
              <li>하나씩 들어간다</li>
              <li>하나씩 들어간다</li>
              <li>하나씩 들어간다</li>
              <li>하나씩 들어간다</li>
              <li>하나씩 들어간다</li>
            </ul>
          </div>
        </div>
      </div>
      <div id="section_recruits" className="section">
        <h1>지원하기</h1>
        <div className="recruit_row">
          <h1>동아리원 모집</h1>
          <p>볼프와 함께하고 싶으시다면 지원버튼을 눌러주세요</p>
          <button>볼프 지원하기</button>
        </div>
      </div>
    </div>
  );
}

export default MyMain;
