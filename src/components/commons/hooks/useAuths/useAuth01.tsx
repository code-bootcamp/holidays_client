import { useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { UseQueryFetchLoginUser } from "../useQueries/user/UseQueryFetchLoginUser";

// 로그인 여부를 확인하고 로그인하지 않았을 시 로그인 창으로 router.push 하는 권한분기 함수
export const useAuth01 = (): void => {
  const router = useRouter();
  const { data: userData, error } = UseQueryFetchLoginUser();

  // 로그인 여부 확인
  useEffect(() => {
    if (error) {
      // 에러 처리 로직 추가
      Modal.error({ content: "데이터를 불러오는 중에 오류가 발생했습니다." });
      return;
    }

    const checkLogin = () => {
      if (!userData?.fetchLoginUser.email) {
        Modal.info({ content: "로그인이 필요합니다." });
        void router.push(`/loginPage`);
      }
    };

    if (!userData) {
      // 데이터가 아직 로딩되지 않은 경우
      // 데이터가 로딩된 후에 로그인 여부를 확인하도록 처리
      const waitForData = setInterval(() => {
        if (userData) {
          clearInterval(waitForData);
          checkLogin();
        }
      }, 100);
    } else {
      checkLogin();
    }
  }, [router, userData, error]);
};
