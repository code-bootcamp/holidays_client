import { MouseEventHandler, useState } from "react";
import Backdrop from "../../commons/modals/newMagazineModal/Backdrop/Backdrop";
import Modal from "../../commons/modals/newMagazineModal/Modal/modal";

import * as S from "./newMagazine.styles";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useRecoilValue } from "recoil";
import { selectMonth } from "../../../commons/stores";
import { FETCH_MAGAZINES } from "../../commons/hooks/useQueries/board/UseQueryFetchMagazines";

interface IMagazine {
  board_id: string;
  title: string;
  content: string;
  createdAt: string;
  name: string;
  url: string;
  row_count: number;
}

export default function Magazine(): JSX.Element {
  const router = useRouter();

  const { data } = useQuery<{ fetchMagazines: IMagazine[] }>(FETCH_MAGAZINES);

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
    console.log(postId);
  };

  // 월별 필터링된 게시글 가져오기
  const filteredPosts: IMagazine[] =
    data?.fetchMagazines?.filter((post: IMagazine) => {
      const postMonth = new Date(post.createdAt).getMonth() + 1;
      return postMonth === 6;
    }) ?? [];

  // 추천수 기준으로 내림차순 정렬된 게시글 가져오기
  const sortedPosts: IMagazine[] = filteredPosts?.sort(
    (a: IMagazine, b: IMagazine) => b.row_count - a.row_count
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
              onClick={onClickMove}
              style={{
                backgroundImage: topThreePosts[0]?.url
                  ? `url(${topThreePosts[0].url})`
                  : "",
              }}
              id={topThreePosts[0]?.board_id ?? ""}
            ></S.ImageBox1>
            <S.ContentsTextWrapper>
              <S.ContentsLabel>
                {topThreePosts[0]?.title ?? "데이터 오류"}
              </S.ContentsLabel>
              <S.ContentsRemarks>
                {topThreePosts[0]?.name ?? "데이터 오류"} &nbsp; &nbsp;
                {topThreePosts[0]?.createdAt.slice(0, 10)}
              </S.ContentsRemarks>
            </S.ContentsTextWrapper>
          </S.Contents>
          <S.Contents>
            <S.ImageBox1
              onClick={onClickMove}
              style={{
                backgroundImage: topThreePosts[0]?.url
                  ? `url(${topThreePosts[0].url})`
                  : "",
              }}
              id={topThreePosts[0]?.board_id ?? ""}
            ></S.ImageBox1>
            <S.ContentsTextWrapper>
              <S.ContentsLabel>
                {topThreePosts[0]?.title ?? "데이터 오류"}
              </S.ContentsLabel>
              <S.ContentsRemarks>
                {topThreePosts[0]?.name ?? "데이터 오류"} &nbsp; &nbsp;
                {topThreePosts[0]?.createdAt.slice(0, 10)}
              </S.ContentsRemarks>
            </S.ContentsTextWrapper>
          </S.Contents>
          <S.Contents>
            <S.ImageBox1
              onClick={onClickMove}
              style={{
                backgroundImage: topThreePosts[0]?.url
                  ? `url(${topThreePosts[0].url})`
                  : "",
              }}
              id={topThreePosts[0]?.board_id ?? ""}
            ></S.ImageBox1>
            <S.ContentsTextWrapper>
              <S.ContentsLabel>
                {topThreePosts[0]?.title ?? "데이터 오류"}
              </S.ContentsLabel>
              <S.ContentsRemarks>
                {topThreePosts[0]?.name ?? "데이터 오류"} &nbsp; &nbsp;
                {topThreePosts[0]?.createdAt.slice(0, 10)}
              </S.ContentsRemarks>
            </S.ContentsTextWrapper>
          </S.Contents>
        </S.Body>
      </S.Wrapper>
    </>
  );
}
