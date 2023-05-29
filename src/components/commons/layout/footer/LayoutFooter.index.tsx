import { useRouter } from "next/router";
import * as S from "./LayoutFooter.styles";

export default function LayoutFooter(): JSX.Element {
  const router = useRouter();

  return (
    <S.Wrapper>
      <S.InnerWrapper>
        <S.LogoWrapper>
          <S.Logo src="/images/logo2.png"></S.Logo>
          <S.Text>Let’s make more chance with Mocha Class</S.Text>
        </S.LogoWrapper>
        <S.TextDetailMenuWrapper>
          <S.TextMenuWrapper>
            <S.TextMenu>이용약관</S.TextMenu>
            <S.TextMenu>개인정보처리방침</S.TextMenu>
            <S.TextMenu>사업자정보확인</S.TextMenu>
            <S.TextMenu>문의</S.TextMenu>
          </S.TextMenuWrapper>
          <S.TextDetail>
            © 주식회사 내 나이가 어때서 | 대표 홍길동 | 사업자등록번호 :
            123-456-7890 | 통신판매번호 : 2023-서울은평-1234 주소 : 서울특별시
            구로구 디지털로 30길 28 609호 | 서울특별시 구로구 디지털로 30길 28
            609호 Tel : 070-1234-5678 (평일 10:00 ~ 20:00) | E-mail :
            mrpumpkin98@mochaclass.com
          </S.TextDetail>
        </S.TextDetailMenuWrapper>
      </S.InnerWrapper>
    </S.Wrapper>
  );
}
