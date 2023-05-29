import React from "react";
import { useRouter } from "next/router";
import * as S from "./modal.styles";
import { useMutation, useQuery } from "@apollo/client";
import { LOGOUT } from "../../../hooks/useMutations/login/useMutationLogout";
import { FETCH_LOGIN_USER } from "../../../hooks/useQueries/user/UseQueryFetchLoginUser";

interface ModalProps {
  onClose: () => void;
  onLogout: () => void;
}

const Modal: React.FC<ModalProps> = ({ onClose, onLogout, children }) => {
  const router = useRouter();
  const { data, refetch } = useQuery(FETCH_LOGIN_USER);
  const [logout] = useMutation(LOGOUT);
  const NAVIGATION_MENUS = [
    { name: "마이페이지", page: "/myPage" },
    {
      name: "로그아웃",
      page: "/communityPage",
      onClick: () => {
        logout({
          refetchQueries: [{ query: FETCH_LOGIN_USER }],
        });
        onClose();
      },
    },
  ];

  const onClickMenu = (event: any): void => {
    void router.push(event.currentTarget.id);
    onClose();
  };

  return (
    <S.ModalWrapper>
      {children}
      <S.Wrapper>
        <S.NaviWrapper>
          {NAVIGATION_MENUS.map((el) => (
            <S.ContentsWrapper key={el.page}>
              <S.Contents id={el.page} onClick={el.onClick || onClickMenu}>
                {el.name}
              </S.Contents>
            </S.ContentsWrapper>
          ))}
        </S.NaviWrapper>
      </S.Wrapper>
    </S.ModalWrapper>
  );
};

export default Modal;
