import { Modal } from "antd";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { UseQueryFetchLoginUser } from "../useQueries/user/UseQueryFetchLoginUser";

// 회원 정보에 phone 이 입력되어 있는지 여부를 확인하고 없을 시 myPage로 router.push하는 권한분기 함수
// export const useAuth02 = (): void => {
//   const router = useRouter();
//   const { data: userData } = UseQueryFetchLoginUser();

//   useEffect(() => {
//     // 로그인 여부 확인
//     if (!userData?.fetchLoginUser.phone) {
//       Modal.info({ content: "전화번호 인증 후 이용할 수 있습니다." });
//       void router.push(`/myPage`);
//     }
//   }, [userData, router]);
// }

export const useAuth02 = (): void => {
  const router = useRouter();
  const { data: userData, error } = UseQueryFetchLoginUser();

  useEffect(() => {
    if (error) {
      // 에러 처리 로직 추가
      Modal.error({ content: "데이터를 불러오는 중에 오류가 발생했습니다." });
      return;
    }

    const checkPhone = () => {
      if (!userData?.fetchLoginUser.phone) {
        Modal.info({ content: "전화번호 인증 후 이용할 수 있습니다." });
        void router.push(`/myPage`);
      }
    };

    if (!userData) {
      // 데이터가 아직 로딩되지 않은 경우
      // 데이터가 로딩된 후에 전화번호 확인을 수행
      const waitForData = setInterval(() => {
        if (userData) {
          clearInterval(waitForData);
          checkPhone();
        }
      }, 100);
    } else {
      checkPhone();
    }
  }, [router, userData, error]);
};
