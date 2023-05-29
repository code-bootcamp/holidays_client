import { Modal } from "antd";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { UseQueryFetchLoginUser } from "../useQueries/user/UseQueryFetchLoginUser";

// 로그인 여부를 확인하고 로그인하지 않았을 시 로그인 창으로 router.push 하는 권한분기 함수
export const useAuth01 = (): void => {
  const router = useRouter();
  const { data: userData } = UseQueryFetchLoginUser();

  // 로그인 여부 확인
  useEffect(() => {
    if (!userData?.fetchLoginUser.email) {
      Modal.info({ content: "로그인이 필요합니다." });
      void router.push(`/loginPage`);
    }
  }, [router, userData]);
};
