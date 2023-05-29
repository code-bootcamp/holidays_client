import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useAuth01 } from "../../../hooks/useAuths/useAuth01";
import { UseQueryFetchLoginUser } from "../../../hooks/useQueries/user/UseQueryFetchLoginUser";
import Head from "next/head";
import * as S from "./modal.styles";
import {
  IMutation,
  IMutationCreateClassAdArgs,
} from "../../../../../commons/types/generated/types";

export const CREATE_CLASS_AD = gql`
  mutation createClassAd($createClassAdInput: CreateClassAdInput!) {
    createClassAd(createClassAdInput: $createClassAdInput)
  }
`;

declare const window: typeof globalThis & {
  IMP: any;
};

interface ModalProps {
  onClose: () => void;
}

const PayModal: React.FC<ModalProps> = ({ onClose, children }) => {
  useAuth01();
  const router = useRouter();

  const [createClassAd] = useMutation<
    Pick<IMutation, "createClassAd">,
    IMutationCreateClassAdArgs
  >(CREATE_CLASS_AD);
  const { data: userData } = UseQueryFetchLoginUser();

  useEffect(() => {
    if (userData) {
    }
  }, [userData]);

  // 일반결제 (이니시스 or 나이스)
  const onClickGeneralPay = () => {
    if (typeof window.IMP === "undefined") return console.log("중지");
    // if (router.query.class_id === "undefined") return;
    const IMP = window.IMP;

    IMP.init("imp25268840");

    IMP.request_pay(
      {
        pg: "html5_inicis",
        pay_method: "card",
        name: "프리미엄 광고료 결제",
        amount: 15000,
        buyer_email: userData?.fetchLoginUser.email ?? "odo@marine",
        buyer_name: userData?.fetchLoginUser.name ?? "송해병",
        buyer_tel: userData?.fetchLoginUser.phone ?? "010-0000-0000",
        buyer_addr: "서울시 강남구 봉은사로",
        buyer_postcode: "110-111",
        m_redirect_url: "http://localhost:3000/myPage/",
      },
      (rsp: any) => {
        if (rsp.success) {
          try {
            void createClassAd({
              variables: {
                createClassAdInput: {
                  imp_uid: rsp.imp_uid,
                  amount: 15000, // Replace with your desired amount
                  method: "card", // Replace with your desired payment method
                  class_id: String(router.query.class_id), // Replace with your desired class ID
                },
              },
            });
            router.push(`/classPage`);
          } catch (error) {
            if (error instanceof Error) {
              console.log(error.message);
              alert("결제에 실패했습니다.");
            }
          }
        }
      }
    );
  };

  // 간편결제 (카카오페이)
  const onClickKakaoPay = async () => {
    console.log(userData?.fetchLoginUser.name);
    if (userData?.fetchLoginUser.name === "undefined")
      return console.log("data 없음");
    if (typeof window.IMP === "undefined") return console.log("중지");

    const IMP = window.IMP;
    IMP.init("imp25268840");

    IMP.request_pay(
      {
        // param
        pg: "kakaopay",
        pay_method: "card",
        name: "프리미엄 광고 결제",
        amount: 15000, // 동적으로 바뀐 amount 값 사용
        buyer_email: "odo@marine",
        buyer_name: "송해병",
        buyer_tel: "010-4242-4242",
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "01181",
        m_redirect_url: "localhost:3000/mainPage",
      },
      async (rsp: any): Promise<void> => {
        // callback
        if (rsp.success === true) {
          const result = await createClassAd({
            variables: {
              createClassAdInput: {
                imp_uid: rsp.imp_uid,
                amount: 15000,
                method: "card",
                class_id: String(router.query.class_id),
              },
            },
          });
          console.log(result);
          router.push(`/classPage`);
        } else {
          // 결제 실패 시 로직
          alert("결제가 취소되었습니다");
        }
      }
    );
  };

  return (
    <S.ModalWrapper>
      {children}
      <Head>
        <script src="https://cdn.iamport.kr/v1/iamport.js"></script>
      </Head>
      <S.Wrapper>
        <S.HeadLogo src="/images/logo2.png" />
        <S.Header>지금 혜택받고 결제하기</S.Header>
        <S.SubtitleWrapper>
          <S.Subtitle
            style={{ textDecoration: "line-through", color: "#868686" }}
          >
            50,000 원
          </S.Subtitle>
          <S.Subtitle>{">"}</S.Subtitle>
          <S.Subtitle style={{ scale: "1.1", color: "#f5b221" }}>
            15,000 원
          </S.Subtitle>
        </S.SubtitleWrapper>
        <S.DivideLine />
        <S.PaymentWrapper>
          <S.PaymentBtn onClick={onClickGeneralPay}>카드결제</S.PaymentBtn>
          <S.PaymentBtn onClick={onClickKakaoPay}>카카오 간편결제</S.PaymentBtn>
        </S.PaymentWrapper>
        <S.DivideLine />
        <S.Button className="Cancel" onClick={onClose}>
          취소
        </S.Button>
      </S.Wrapper>
    </S.ModalWrapper>
  );
};

export default PayModal;
