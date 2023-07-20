import { MouseEventHandler, useState } from "react";
import Backdrop from "../../commons/modals/newMagazineModal/Backdrop/Backdrop";
import Modal from "../../commons/modals/newMagazineModal/Modal/modal";
import * as S from "./newMagazine.styles";
import { useRouter } from "next/router";
import { useRecoilValue } from "recoil";
import { selectMonth } from "../../../commons/stores";
import { UseQueryFetchMagazines } from "../../commons/hooks/useQueries/board/UseQueryFetchMagazines";

export default function Magazine(): JSX.Element {
  const router = useRouter();

  const { data } = UseQueryFetchMagazines();

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
          {data?.fetchMagazines.map((item: any, index: number) => (
            <S.Contents key={index}>
              <S.ContentsImage
                onClick={onClickMove}
                style={{
                  backgroundImage: item.url ? `url(${item.url})` : "",
                }}
                id={item.board_id ?? ""}
              ></S.ContentsImage>
              <S.ContentsTextWrapper>
                <S.ContentsLabel>{item.title ?? "데이터 오류"}</S.ContentsLabel>
                <S.ContentsRemarks>
                  {item.name ?? "데이터 오류"} &nbsp; &nbsp;
                  {item.createdAt.slice(0, 10)}
                </S.ContentsRemarks>
              </S.ContentsTextWrapper>
            </S.Contents>
          ))}
        </S.Body>
      </S.Wrapper>
    </>
  );
}
