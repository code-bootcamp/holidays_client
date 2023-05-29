import * as S from "./Landing.styles";
import { useInView } from "react-intersection-observer";
import { useRecoilState } from "recoil";
import { selectServiceFromLanding } from "../../../commons/stores";
import { Router } from "react-router-dom";
import { useRouter } from "next/router";

export default function LandingCategory(): JSX.Element {
  const router = useRouter();
  const [ref, inView] = useInView({
    root: null,
    rootMargin: "100px",
    threshold: 0.4,
  });

  const [, setSelectServiceFirst] = useRecoilState<string | null>(
    selectServiceFromLanding
  );

  const onClickEducation = (): void => {
    setSelectServiceFirst("교육");
    router.push(`/classPage`);
  };

  const onClickWorkout = (): void => {
    setSelectServiceFirst("운동");
    router.push(`/classPage`);
  };

  const onClickLeisure = (): void => {
    setSelectServiceFirst("여가");
    router.push(`/classPage`);
  };

  const onClickCooking = (): void => {
    setSelectServiceFirst("요리");
    router.push(`/classPage`);
  };

  return (
    <S.FirstWrapper>
      <S.Wrap1>
        <S.Part1>
          <S.MidWrap>
            <S.MidPic1Wrap className={inView ? "isActive" : ""} ref={ref}>
              <S.Span1 className={inView ? "isActive" : ""} ref={ref}>
                새롭고 이로운 지식
              </S.Span1>
              <S.Span
                className={inView ? "isActive" : ""}
                ref={ref}
                onClick={onClickEducation}
              >
                Education
              </S.Span>
              <S.MidPic
                src="/landingPage/lesson.png"
                className={inView ? "isActive" : ""}
                ref={ref}
                onClick={onClickEducation}
              />
            </S.MidPic1Wrap>
            <S.MidPic2Wrap className={inView ? "isActive" : ""} ref={ref}>
              <S.Span1 className={inView ? "isActive" : ""} ref={ref}>
                당신의 건강을 지켜줄
              </S.Span1>
              <S.Span
                className={inView ? "isActive" : ""}
                ref={ref}
                onClick={onClickWorkout}
              >
                WorkOut
              </S.Span>
              <S.MidPic
                src="/landingPage/golf.png"
                className={inView ? "isActive" : ""}
                ref={ref}
                onClick={onClickWorkout}
              />
            </S.MidPic2Wrap>
            <S.MidPic3Wrap className={inView ? "isActive" : ""} ref={ref}>
              <S.Span1 className={inView ? "isActive" : ""} ref={ref}>
                끝없는 재미를 안겨줄
              </S.Span1>
              <S.Span
                className={inView ? "isActive" : ""}
                ref={ref}
                onClick={onClickLeisure}
              >
                Leisure
              </S.Span>
              <S.MidPic
                src="/landingPage/fishing.png"
                className={inView ? "isActive" : ""}
                ref={ref}
                onClick={onClickLeisure}
              />
            </S.MidPic3Wrap>
            <S.MidPic4Wrap className={inView ? "isActive" : ""} ref={ref}>
              <S.Span1 className={inView ? "isActive" : ""} ref={ref}>
                수백가지 맛집 레시피
              </S.Span1>
              <S.Span
                className={inView ? "isActive" : ""}
                ref={ref}
                onClick={onClickCooking}
              >
                Cooking
              </S.Span>
              <S.MidPic
                src="/landingPage/kfood.png"
                className={inView ? "isActive" : ""}
                ref={ref}
                onClick={onClickCooking}
              />
            </S.MidPic4Wrap>
          </S.MidWrap>
        </S.Part1>
      </S.Wrap1>
    </S.FirstWrapper>
  );
}
