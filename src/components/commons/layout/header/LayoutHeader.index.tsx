import { useRouter } from "next/router";
import * as S from "./LayoutHeader.styles";
import Backdrop from "../../../commons/modals/writePostModal/Backdrop/Backdrop";
import Modal1 from "../../../commons/modals/writePostModal/Modal/modal";
import Modal2 from "../../../commons/modals/myPageModal/Modal/modal";
import { useMutation, useQuery } from "@apollo/client";
import { useCallback, useEffect, useState } from "react";
import { FETCH_LOGIN_USER } from "../../hooks/useQueries/user/UseQueryFetchLoginUser";
import DropdownMyPage from "../../dropdowns/myPage";
import DropdownWriting from "../../dropdowns/writing";

export default function LayoutHeader(): JSX.Element {
  const router = useRouter();
  const { data, refetch } = useQuery(FETCH_LOGIN_USER);
  const userName = data?.fetchLoginUser.name;

  useEffect(() => {
    refetch();
  }, [userName]);

  const onClickLogIn = () => {
    void router.push("/loginPage");
  };

  const onClicksignUp = () => {
    void router.push("/signUpPage");
  };

  const NAVIGATION_MENUS = [
    { name: "클래스", page: "/classPage" },
    { name: "사랑방", page: "/communityPage" },
    { name: "메거진", page: "/magazinePage" },
  ];

  const onClickMenu = (event: any): void => {
    void router.push(event.currentTarget.id);
  };

  // 메인페이지 이동

  const onClickMain = (event: any): void => {
    void router.push("/classPage");
  };

  const handleReservationPage = (event: any) => {
    router.push("/myPage/reservation/");
  };

  return (
    <S.Wrapper>
      <S.InnerWrapper>
        <S.Logo src="/images/logo.png" onClick={onClickMain} />
        <S.NaviWrapper>
          {NAVIGATION_MENUS.map((el) => (
            <S.MenuWrapper key={el.page}>
              <S.Menu id={el.page} onClick={onClickMenu}>
                {el.name}
              </S.Menu>
            </S.MenuWrapper>
          ))}
        </S.NaviWrapper>
        {userName ? (
          <S.ButtonTie>
            <S.Reservation>알림</S.Reservation>
            <S.Reservation onClick={handleReservationPage}>
              예약 관리
            </S.Reservation>
            <DropdownMyPage />
            <DropdownWriting />
          </S.ButtonTie>
        ) : (
          <S.ButtonTie>
            <S.InnerButton onClick={onClickLogIn}>로그인</S.InnerButton>
            <S.InnerButton className="OrangeButton" onClick={onClicksignUp}>
              회원가입
            </S.InnerButton>
          </S.ButtonTie>
        )}
      </S.InnerWrapper>
    </S.Wrapper>
  );
}
