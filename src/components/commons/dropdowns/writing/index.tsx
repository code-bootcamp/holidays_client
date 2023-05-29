import React from "react";
import type { MenuProps } from "antd";
import { Button, Dropdown, Space, Image } from "antd";
import { useRouter } from "next/router";
import { useMutation, useQuery } from "@apollo/client";
import { LOGOUT } from "../../hooks/useMutations/login/useMutationLogout";
import { FETCH_LOGIN_USER } from "../../hooks/useQueries/user/UseQueryFetchLoginUser";

const dropdownOverlayStyle = {
  zIndex: 9999,
};

const buttonStyle = {
  marginLeft: "14px",
  cursor: "pointer",
  fontSize: "14px",
  fontWeight: 700,
  backgroundColor: "#f28316",
  width: "90px",
  height: "36px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "4px",
  border: "none",
  color: "#ffffff",
  ":hover": {
    backgroundColor: "#e97100",
    color: "#ffffff",
  },
};

const DropdownWriting: React.FC = () => {
  const router = useRouter();
  const { data, refetch } = useQuery(FETCH_LOGIN_USER);
  const [logout] = useMutation(LOGOUT);

  const handleMyPageWrite = (event: any) => {
    event.preventDefault();
    router.push("/classPage/write");
  };

  const handlePaymentPage = (event: any) => {
    router.push("/paymentPage");
  };

  const handleCommunityPage = (event: any) => {
    router.push("/communityPage/write");
  };

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleMyPageWrite}
          style={{ fontSize: "14px", fontWeight: 500 }}
        >
          클래스 생성하기
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          onClick={handlePaymentPage}
          style={{ fontSize: "14px", fontWeight: 500 }}
        >
          클래스 광고하기
        </a>
      ),
    },
    {
      key: "3",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleCommunityPage}
          style={{ fontSize: "14px", fontWeight: 500 }}
        >
          사랑방 글쓰기
        </a>
      ),
    },
  ];

  return (
    <Dropdown
      menu={{ items }}
      placement="bottom"
      overlayStyle={dropdownOverlayStyle}
    >
      <div style={buttonStyle}>글쓰기</div>
    </Dropdown>
  );
};

export default DropdownWriting;
