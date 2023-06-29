import { MouseEventHandler, useState } from "react";
import Backdrop from "../../commons/modals/newMagazineModal/Backdrop/Backdrop";
import Modal from "../../commons/modals/newMagazineModal/Modal/modal";
import { FECTCH_BOARDS } from "../../commons/hooks/useQueries/board/UseQueryFetchBoards";
import { FETCH_BOARD_DETAIL } from "../../commons/hooks/useQueries/board/UseQueryFetchBoardsDetail";

import * as S from "./newMagazine.styles";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useRecoilValue } from "recoil";
import { selectMonth } from "../../../commons/stores";

export default function Magazine(): JSX.Element {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const { data } = useQuery(FECTCH_BOARDS);

  const handleMouseEnter = (): void => {
    setIsHovered(true);
  };

  const handleMouseLeave = (): void => {
    setIsHovered(false);
  };

  // 월간호 클릭 시
  const [showModal, setShowModal] = useState(false);
  const selectMagazine = useRecoilValue(selectMonth);
  const whichMonth = selectMagazine === "2023년 6월호" ? "" : selectMagazine;

  // 월간호 모달
  const openModal = (): void => {
    setShowModal(true);
  };

  const closeModal = (): void => {
    setShowModal(false);
  };

  //  게시물 이동
  const onClickMove: MouseEventHandler<HTMLDivElement> = (event): void => {
    const target = event.currentTarget;
    const postId = target.id;
    router.push(`/communityPage/${postId}`);
  };

  // 월별 필터링된 게시글 가져오기
  const filteredPosts = data?.fetchBoards.filter(
    (post: any) => new Date(post.createdAt).getMonth() === 6
  );

  // 추천수 기준으로 내림차순 정렬된 게시글 가져오기
  const sortedPosts = filteredPosts?.sort(
    (a: any, b: any) => b.likes - a.likes
  );

  // 상위 3개의 게시글 가져오기
  const topThreePosts = sortedPosts?.slice(0, 3);

  return (
    <>
      <S.Wrapper>
        {showModal && (
          <Modal
            onClose={() => {
              closeModal();
            }}
            isSelected={true}
          />
        )}
        {showModal && <Backdrop onClick={closeModal} />}
        <S.Header>
          <S.HeaderLogo src="/images/logo.png" />
          <S.HeaderTitle onClick={openModal}>
            {whichMonth !== "" ? whichMonth : "2023년 6월호"}
          </S.HeaderTitle>
        </S.Header>
        <S.Body>
          <S.Contents>
            <S.ImageBox1
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={onClickMove}
            >
              <S.ContentsTextWrapper
                className={isHovered ? "visible" : "hidden"}
              >
                <S.ContentsLabel>{data?.fetchBoards[0].title}</S.ContentsLabel>
                <S.ContentsRemarks>
                  {data?.fetchBoards[0].name}
                </S.ContentsRemarks>
              </S.ContentsTextWrapper>
            </S.ImageBox1>
          </S.Contents>
          <S.Contents>
            <S.ImageBox2
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <S.ContentsTextWrapper2
                className={isHovered ? "visible" : "hidden"}
              >
                <S.ContentsLabel>{data?.fetchBoards[1].title}</S.ContentsLabel>
                <S.ContentsRemarks>
                  {data?.fetchBoards[1].name}
                </S.ContentsRemarks>
              </S.ContentsTextWrapper2>
            </S.ImageBox2>
          </S.Contents>
          {/* <S.Contents>
            <S.ContentsImage src="/mainPage/매거진메인.png" />
            <S.ContentsTextWrapper>
              <S.ContentsLabel>빈센트의 인생 레시피</S.ContentsLabel>
              <S.ContentsRemarks>연령별 인생 레시피를 맛보다</S.ContentsRemarks>
            </S.ContentsTextWrapper>
          </S.Contents> */}
        </S.Body>
      </S.Wrapper>
    </>
  );
}
