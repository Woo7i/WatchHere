/// 네트워크 라이브러리
// import { PostData } from "../../Network/Connect";

/**
 *
 * @param {Number} activate 유저 현재 상태
 * @param {string} email  유저의 이메일
 * @param {string} nick_name 유저의 닉네임
 * @returns
 *
 * 이 모달은 관리자가 유저 상태를 정지시키거나 정지를 해제할 때 최종 알림창으로 사용
 *
 */
export function ChangeUserStateModal({ props }) {
  //모달 중복으로 뜨는 문제를 해결해야함
  // 1.event.stopPropagation() 사용
  // 2. adminUserList 에서 html 을 변경해서 버튼간의 레이어 겹침을 없앰

  const putUserActivateStatus = async (uid) => {
    let jsonData = {};
    jsonData["uId"] = uid;
    console.log("데이터 전송 준비");
    // const response = await PostData("url", JSON.stringify(jsonData));
    // console.log(response);
  };
  const { activate, email, nick_name } = props;
  return (
    <dialog id="changeUserStateModal" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">계정 상태를 변경합니다.</h3>
        <p className="py-4">
          <div>현재 변경하려는 계정의 정보는 다음과 같습니다.</div>
          <div>이메일 : {email}</div>
          <div>닉네임 : {nick_name}</div>
          <div>현재 상태 : {activate}</div>
          <div>변경하시겠습니까?</div>
        </p>
        <div className="modal-action">
          <form method="dialog">
            <button className="btn1" onClick={putUserActivateStatus}>
              변경하기
            </button>
            <button className="btn">닫기</button>
          </form>
        </div>
      </div>
    </dialog>
  );
}
/**
 *
 * @param {Number} activate 유저 현재 상태
 * @param {string} email  유저의 이메일
 * @param {string} nick_name 유저의 닉네임
 * @returns
 *
 * 이 모달은 관리자가 유저의 정보를 확인하는 모달
 * 반응형에서 레이아웃에 데이터가 다 나오지 않아 작성
 *
 */

export function CheckUserInfoModal({ props }) {
  console.log(props);
  const { activate, email, nick_name } = props;
  return (
    <dialog id="checkUserInfoModal" className="modal ">
      <div className="modal-box">
        <h3 className="font-bold text-lg">계정 상태를 확인 합니다.</h3>
        <p className="py-4">
          <div>현재 확인중인 계정의 정보는 다음과 같습니다.</div>
          <div>이메일 : {email}</div>
          <div>닉네임 : {nick_name}</div>
          <div>현재 상태 : {activate}</div>
          <div>변경하시겠습니까?</div>
        </p>
        <div className="modal-action">
          <form method="dialog">
            <button
              className="btn1"
              onClick={() =>
                document.getElementById("changeUserStateModal").showModal()
              }
            >
              변경하기
            </button>
            <button className="btn">닫기</button>
          </form>
        </div>
      </div>
    </dialog>
  );
}
/**
 *
 * @param {Number} reports 다른사람에게 신고당한 횟수
 * @param {String} review 작성한 리뷰 내용
 * @param {String} nick_name 해당 계정의 닉네임
 * @param {String} email 해당 계정의 이메일
 * @param {Date} write_date  해당 리뷰의 작성일
 *
 * @returns
 *
 * 유저 리뷰 삭제용 모달
 */
export function DeleteUserReview({ props }) {
  const delUserReview = async (uid) => {
    let jsonData = {};
    jsonData["uId"] = uid;
    console.log("데이터 전송 준비");
    // const response = await PostData("url", JSON.stringify(jsonData));
    // console.log(response);
  };
  const { email, nick_name, reports, review, write_date } = props;
  return (
    <dialog id="deleteUserReview" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">리뷰를 확인합니다.</h3>
        <p className="py-4">
          <div>현재 확인하는 리뷰의 정보는 다음과 같습니다.</div>
          <div>이메일 : {email}</div>
          <div>닉네임 : {nick_name}</div>
          <div>신고 횟수 : {reports}</div>
          <div>작성 리뷰 : {review}</div>
          <div>작성일: {write_date}</div>
          <div>삭제하시겠습니까?</div>
        </p>
        <div className="modal-action">
          <form method="dialog">
            <button
              className="btn1"
              onClick={() => delUserReview("userId, reviewId")}
            >
              삭제하기
            </button>
            <button className="btn">닫기</button>
          </form>
        </div>
      </div>
    </dialog>
  );
}