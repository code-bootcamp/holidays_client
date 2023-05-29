import { useState } from "react";
import * as S from "./reservation.styles";
import { FETCH_RESERVATIONS_OF_CLASS } from "../../../commons/hooks/useQueries/class/UseQueryFetchReservationsOfClass";
import { useMutation, useQuery } from "@apollo/client";
import { UPDATE_RESERVATION } from "../../../commons/hooks/useMutations/class/useMutationUpdateReservation";
import { LoadingOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";
import { DELETE_RESERVATION } from "../../../commons/hooks/useMutations/class/useMutationDeleteReservation";
import { FECTCH_CLASS_OF_MINE } from "../../../commons/hooks/useQueries/class/UseQueryFetchClassesOfMine";
import { FETCH_RESERVATIONS_OF_USER } from "../../../commons/hooks/useQueries/class/UseQueryFetchReservationsOfUser";

export default function Reservation() {
  const router = useRouter();
  const [Contents, setContents] = useState(false);
  const [rse_id, setRse_id] = useState();
  const [res_id, setRes_id] = useState();
  const { data, loading, refetch } = useQuery(FETCH_RESERVATIONS_OF_CLASS);
  const [updateReservation] = useMutation(UPDATE_RESERVATION);
  const [deleteReservation] = useMutation(DELETE_RESERVATION);

  const handleUpdateReservation = (event: any) => {
    setRse_id(event.currentTarget.id); // rse_id 업데이트
    updateReservation({
      variables: {
        rse_id: String(event.currentTarget.id),
      },
      refetchQueries: [
        { query: FETCH_RESERVATIONS_OF_CLASS },
        { query: FECTCH_CLASS_OF_MINE },
        { query: FETCH_RESERVATIONS_OF_USER },
      ],
    });
    console.log(event.currentTarget.id);
    alert("승인을 완료했습니다.");
  };

  const handleDeleteReservation = (event: any) => {
    setRes_id(event.currentTarget.id); // res_id 업데이트
    deleteReservation({
      variables: {
        res_id: String(event.currentTarget.id),
      },
      refetchQueries: [
        { query: FETCH_RESERVATIONS_OF_CLASS },
        { query: FECTCH_CLASS_OF_MINE },
        { query: FETCH_RESERVATIONS_OF_USER },
      ],
    });
    console.log(event.currentTarget.id);
    alert("승인을 취소했습니다.");
  };

  ///////////////////////////////////////////////////////////////
  //  화면 없을때 이동
  //////////////////////////////////////////////////////////////

  const onClickMenu = () => {
    void router.push("/classPage");
  };

  return (
    <S.Wrapper>
      {loading ? (
        // 로딩 페이지 또는 대체 이미지를 보여줄 수 있는 JSX를 작성하세요
        // 예시: <div>로딩 중...</div>
        <div>
          <LoadingOutlined />
        </div>
      ) : !data || data.fetchReservationsOfClass.length === 0 ? (
        <>
          <S.ListNameIconWrapper>
            <S.ListName>예약 관리</S.ListName>
            <S.Icon src="/myPage/user-options.png" />
          </S.ListNameIconWrapper>
          <S.Line />
          <S.Box>
            <S.Emoji>🤔</S.Emoji>
            <S.Text>받은 클래스 예약이 없어요</S.Text>
            <S.MainText>내가 만든 클래스에 들어가 보실까요?</S.MainText>
            <S.Button onClick={onClickMenu}>클래스 찾아보기</S.Button>
          </S.Box>
        </>
      ) : (
        <>
          <S.ListNameIconWrapper>
            <S.ListName>예약 관리</S.ListName>
            <S.Icon src="/myPage/user-options.png" />
          </S.ListNameIconWrapper>
          <S.Line />
          <S.PremiumWrapper>
            {data?.fetchReservationsOfClass.map((post: any, index: any) => (
              <div key={post.res_id}>
                <S.PremiumPosts>
                  <S.PremiumPostBody>
                    <S.PremiumTemplate>
                      <S.PremiumPostImg src={post.url} />
                    </S.PremiumTemplate>
                    <S.PremiumPostContent>
                      <S.PremiumPostTitle>{post.title}</S.PremiumPostTitle>
                      <S.PremiumUserTie>
                        <S.PremiumUser>
                          신청자명 : <S.TextColor>{post.name}</S.TextColor>
                        </S.PremiumUser>
                      </S.PremiumUserTie>
                      <S.PremiumPostInfo>
                        <S.PremiumDate>신청날짜 : {post.date}</S.PremiumDate>
                        <S.PremiumAvatarContentTie>
                          <S.PremiumContent>
                            신청인원 :{" "}
                            <S.TextColor>{post.personnel}</S.TextColor>명
                          </S.PremiumContent>
                          <S.PremiumContent>
                            잔여인원 : {post.remain}명
                          </S.PremiumContent>
                        </S.PremiumAvatarContentTie>
                      </S.PremiumPostInfo>
                    </S.PremiumPostContent>
                    <S.ButtonTie>
                      <S.Approve
                        id={post.res_id}
                        onClick={handleUpdateReservation}
                      >
                        승인
                      </S.Approve>
                      <S.Cancel
                        id={post.res_id}
                        onClick={handleDeleteReservation}
                      >
                        취소
                      </S.Cancel>
                    </S.ButtonTie>
                  </S.PremiumPostBody>
                </S.PremiumPosts>
              </div>
            ))}
          </S.PremiumWrapper>
        </>
      )}
    </S.Wrapper>
  );
}
