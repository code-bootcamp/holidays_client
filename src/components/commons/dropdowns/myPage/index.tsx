import React, { useEffect, useState } from "react";
import type { MenuProps } from "antd";
import { Button, Dropdown, Space, Image } from "antd";
import { useRouter } from "next/router";
import { useMutation, useQuery } from "@apollo/client";
import { LOGOUT } from "../../hooks/useMutations/login/useMutationLogout";
import { FETCH_LOGIN_USER } from "../../hooks/useQueries/user/UseQueryFetchLoginUser";

const dropdownOverlayStyle = {
  zIndex: 9999,
};

const imageStyle = {
  width: "23px",
  height: "23px",
  cursor: "pointer",
};

const DropdownMyPage: React.FC = () => {
  const router = useRouter();
  const { data, refetch } = useQuery(FETCH_LOGIN_USER);
  const [logout] = useMutation(LOGOUT);
  const [isLoggedOut, setIsLoggedOut] = useState(false);

  const handleMyPageClick = (event: any) => {
    event.preventDefault();
    router.push("/myPage");
  };

  const handleLogOutClick = (event: any) => {
    logout({
      refetchQueries: [{ query: FETCH_LOGIN_USER }],
    });
    setIsLoggedOut(true);
  };

  useEffect(() => {
    if (isLoggedOut) {
      window.location.reload();
    }
  }, [isLoggedOut]);

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleMyPageClick}
          style={{ fontSize: "14px", fontWeight: 500 }}
        >
          마이페이지
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleLogOutClick}
          style={{ fontSize: "14px", fontWeight: 500 }}
        >
          로그아웃
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
      <Image src={"/images/user.png"} preview={false} style={imageStyle} />
    </Dropdown>
  );
};

export default DropdownMyPage;
