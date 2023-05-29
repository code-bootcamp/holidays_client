import * as S from "./MainPage.style";
import { useRouter } from "next/router";
import { useAuth02 } from "../../commons/hooks/useAuths/useAuth02";

export default function MainPageContainer(): JSX.Element {
  const router = useRouter();

  const onClickEducation = (): void => {
    router.push(`/classPage`);
  };
  const onClickLeisure = (): void => {
    router.push(`/classPage`);
  };
  const onClickMagazine = (): void => {
    router.push(`/classPage`);
  };
  const onClickCooking = (): void => {
    router.push(`/classPage`);
  };
  const onClickWorkout = (): void => {
    router.push(`/classPage`);
  };
  const onClickMainClass = (): void => {
    router.push(`/classPage`);
  };
  const onClickMainMagazine = (): void => {
    router.push(`/magazine`);
  };
  const onClickMainCommunity = (): void => {
    router.push(`/community`);
  };

  return (
    <>
      <S.Wrapper>
        <S.Header>
          <S.MainBanner src="/mainPage/Mainimage.png" />
          <S.MainButtonWrapper>
            <S.MainCategoryWrapper onClick={onClickEducation}>
              <S.MainCategoryIcon src="/mainPage/education.png" />
              <S.MainCategoryLabel>교육</S.MainCategoryLabel>
            </S.MainCategoryWrapper>
            <S.MainCategoryWrapper onClick={onClickCooking}>
              <S.MainCategoryIcon src="/mainPage/cook.png" />
              <S.MainCategoryLabel>요리</S.MainCategoryLabel>
            </S.MainCategoryWrapper>
            <S.MainCategoryWrapper onClick={onClickWorkout}>
              <S.MainCategoryIcon src="/mainPage/workout.png" />
              <S.MainCategoryLabel>운동</S.MainCategoryLabel>
            </S.MainCategoryWrapper>
            <S.MainCategoryWrapper onClick={onClickLeisure}>
              <S.MainCategoryIcon src="/mainPage/hobbies.png" />
              <S.MainCategoryLabel>여가</S.MainCategoryLabel>
            </S.MainCategoryWrapper>
            <S.MainCategoryWrapper onClick={onClickMagazine}>
              <S.MainCategoryIcon src="/mainPage/magazine.png" />
              <S.MainCategoryLabel>매거진</S.MainCategoryLabel>
            </S.MainCategoryWrapper>
          </S.MainButtonWrapper>
        </S.Header>
        <S.Body>
          <S.MainContentsLeft>
            <S.MainContentsImageLeft
              src="/mainPage/메인목공이미지.jpeg"
              onClick={onClickMainClass}
            />
            <S.MainContentsTextWrapperLeft>
              <S.MainContentsLabelLeft>원데이 클래스</S.MainContentsLabelLeft>
              <S.MainContentsRemarksLeft>
                새로운 취미를 찾아보세요
              </S.MainContentsRemarksLeft>
              <S.MainContentsButtonLeft
                onClick={onClickMainClass}
                src="/mainPage/right-arrow.png"
              />
            </S.MainContentsTextWrapperLeft>
          </S.MainContentsLeft>
          <S.MainContentsLeft>
            <S.MainContentsImageLeft
              src="/mainPage/매거진메인.png"
              onClick={onClickMainClass}
            />
            <S.MainContentsTextWrapperLeft>
              <S.MainContentsLabelLeft>원데이 클래스</S.MainContentsLabelLeft>
              <S.MainContentsRemarksLeft>
                새로운 취미를 찾아보세요
              </S.MainContentsRemarksLeft>
              <S.MainContentsButtonLeft
                onClick={onClickMainClass}
                src="/mainPage/right-arrow.png"
              />
            </S.MainContentsTextWrapperLeft>
          </S.MainContentsLeft>
          <S.MainContentsLeft>
            <S.MainContentsImageLeft
              onClick={onClickMainCommunity}
              src="/mainPage/메인사랑방.png"
            />
            <S.MainContentsTextWrapperLeft>
              <S.MainContentsLabelLeft>사랑방</S.MainContentsLabelLeft>
              <S.MainContentsRemarksLeft>
                다양한 의견을 나누어 보세요
              </S.MainContentsRemarksLeft>
              <S.MainContentsButtonLeft
                onClick={onClickMainCommunity}
                src="/mainPage/right-arrow.png"
              />
            </S.MainContentsTextWrapperLeft>
          </S.MainContentsLeft>
        </S.Body>
      </S.Wrapper>
    </>
  );
}
