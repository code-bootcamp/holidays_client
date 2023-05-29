import { useRouter } from "next/router";
import * as S from "./withdrawal.styles";
import { useMutation } from "@apollo/client";
import { DELETE_USER } from "../../../commons/hooks/useMutations/user/useMutationDeleteUser";

export default function Withdrawal() {
  const router = useRouter();
  ///////////////////////////////////////////////////////////////
  //  취소하기
  //////////////////////////////////////////////////////////////

  const onClickCancel = async () => {
    router.push(`/myPage`);
  };

  ///////////////////////////////////////////////////////////////
  //  유저 삭제
  //////////////////////////////////////////////////////////////

  const [deleteUser] = useMutation(DELETE_USER);

  const onClickDeleteUser = () => {
    alert("아이디가 삭제되었습니다.");
    router.push(`/loginPage`);
    deleteUser();
  };

  return (
    <div>
      <S.Wrapper>
        <S.TitleMain>회원탈퇴 신청</S.TitleMain>
        <S.Box>
          <S.TitleTextWrapper>
            <S.Title>회원탈퇴 시 처리내용</S.Title>
            <S.TextLi>홀리데이즈 구매 정보가 삭제됩니다.</S.TextLi>
            <S.Title>회원탈퇴 시 처리내용</S.Title>
            <S.Text>
              소비자보호에 관한 법률 제6조에 의거,계약 또는 청약철회 등에 관한
              기록은 5년, 대금결제 및 재화등의 공급에 관한 기록은 5년, 소비자의
              불만 또는 분쟁처리에 관한 기록은 3년 동안 보관됩니다. 동
              개인정보는 법률에 의한 보유 목적 외에 다른 목적으로는 이용되지
              않습니다.
            </S.Text>
            <S.Text>
              회원탈퇴 후 홀리데이즈 서비스에 입력한 게시물 및 댓글은 삭제되지
              않으며, 회원정보 삭제로 인해 작성자 본인을 확인할 수 없으므로
              게시물 편집 및 삭제 처리가 원천적으로 불가능 합니다. 게시물 삭제를
              원하시는 경우에는 먼저 해당 게시물을 삭제 하신 후, 탈퇴를
              신청하시기 바랍니다.
            </S.Text>
          </S.TitleTextWrapper>
        </S.Box>
        <S.InputWrapper>
          <S.Label>서비스 이용 중 어떤 부분이 불편하셨나요?</S.Label>
          <S.Contents
          // onChange={props.onChangeContents}
          // defaultValue={props.data?.fetchBoard.contents}
          ></S.Contents>
          <S.Error>{/* {props.contentsError} */}</S.Error>
        </S.InputWrapper>
        <S.ButtonWrapper>
          <S.SubmitButton onClick={onClickDeleteUser}>탈퇴하기</S.SubmitButton>
          {/* <B.CancelButton onClick={props.onClickCancel}> */}
          <S.CancelButton onClick={onClickCancel}>취소하기</S.CancelButton>
        </S.ButtonWrapper>
      </S.Wrapper>
    </div>
  );
}
