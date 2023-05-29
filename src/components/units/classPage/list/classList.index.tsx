import { MouseEventHandler, useState } from "react";
import Backdrop from "../../../commons/modals/classListModal/Backdrop/Backdrop";
import Modal from "../../../commons/modals/classListModal/Modal/modal";
import ModalComponent from "../../../commons/modals/areaListModal/Modal/modal";
import * as S from "./classList.styles";
import { useQuery } from "@apollo/client";
import { FETCH_CLASSES } from "../../../commons/hooks/useQueries/class/UseQueryFetchClasses";
import { useRecoilValue } from "recoil";
import {
  selectedRegionState,
  selectService,
} from "../../../../commons/stores/index";
import { Money } from "../../../../commons/libraries/utils";
import InfiniteScroll from "react-infinite-scroller";
import { useRouter } from "next/router";
import { FETCH_CLASSES_AD } from "../../../commons/hooks/useQueries/class/UseQueryFetchClassesAd";

interface PostType {
  class_id: number;
  title: string;
  content_summary: string;
  address: string;
  total_time: string;
  price: number;
}

export default function StaticRoutingPage() {
  const router = useRouter();

  ///////////////////////////////////////////////////////////////
  //  카테고리 및 검색
  //////////////////////////////////////////////////////////////

  const selectedRegion = useRecoilValue(selectedRegionState);
  const selectServiceRegion = useRecoilValue(selectService);
  const [writer, setWriter] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);

  const addressCategory = selectedRegion === "지역 전체" ? "" : selectedRegion;
  const category =
    selectServiceRegion === "서비스 전체" ? "" : selectServiceRegion;

  const onChangeWriter = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      console.log("입력된 내용:", writer);
      setWriter("");
    }
  };
  const { data, refetch, fetchMore } = useQuery(FETCH_CLASSES, {
    variables: {
      category: category,
      address_category: addressCategory,
      search: writer,
    },
  });

  const { data: AdData, refetch: AdRefetch } = useQuery(FETCH_CLASSES_AD);

  ///////////////////////////////////////////////////////////////
  //  서비스 모달기능
  //////////////////////////////////////////////////////////////

  const handleModalOpen = (): void => {
    setShowModal(true);
  };

  const handleModalClose = (): void => {
    setShowModal(false);
  };

  ///////////////////////////////////////////////////////////////
  //  지역 모달기능
  //////////////////////////////////////////////////////////////

  const handleModalOpen2 = (): void => {
    setShowModal2(true);
  };

  const handleModalClose2 = (): void => {
    setShowModal2(false);
  };

  ///////////////////////////////////////////////////////////////
  //  게시물 이동
  //////////////////////////////////////////////////////////////

  const onClickSubmit: MouseEventHandler<HTMLDivElement> = (event) => {
    const target = event.currentTarget;
    const postId = target.id;
    router.push(`/classPage/${postId}`);
    console.log(postId);
  };

  ///////////////////////////////////////////////////////////////
  // 무한 스크롤
  //////////////////////////////////////////////////////////////

  const onLoadMore = (): void => {
    if (data === undefined || data?.fetchClasses === undefined) return;
    void fetchMore({
      variables: {
        page: Math.ceil((data?.fetchClasses.length ?? 10) / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (fetchMoreResult?.fetchClasses === undefined) {
          return {
            fetchClasses: [...prev.fetchClasses],
          };
        }
        return {
          fetchClasses: [...prev.fetchClasses, ...fetchMoreResult.fetchClasses],
        };
      },
    });
  };

  return (
    <S.Wrapper>
      {showModal && (
        <Modal
          onClose={() => {
            handleModalClose();
          }}
          isSelected={true}
        />
      )}
      {showModal && <Backdrop onClick={handleModalClose} />}
      {showModal2 && (
        <ModalComponent
          onClose={() => {
            handleModalClose2();
          }}
        />
      )}
      {showModal2 && <Backdrop onClick={handleModalClose2} />}
      <S.Banner>
        <S.Box>
          <S.SearchTitle>클래스 찾기</S.SearchTitle>
          <S.ServiceAreaWrapper>
            <S.Service onClick={handleModalOpen}>
              <S.ServiceText>
                {category !== "" ? category : "서비스"}
              </S.ServiceText>
            </S.Service>
            <S.Area onClick={handleModalOpen2}>
              <S.AreaText>
                {addressCategory !== "" ? addressCategory : "지역"}
              </S.AreaText>
            </S.Area>
          </S.ServiceAreaWrapper>
        </S.Box>
        <S.PremiumAD>
          <S.Title>프리미엄 AD</S.Title>
          <S.PremiumWrapper>
            {AdData?.fetchClassesAd.map((post: any, index: number) => (
              <div key={index}>
                <S.PremiumPosts id={post.class_id} onClick={onClickSubmit}>
                  <S.PremiumPostBody>
                    <S.PremiumTemplate>
                      <S.PremiumPostImg src={post.url} />
                    </S.PremiumTemplate>
                    <S.ClassWrapper>
                      <S.Class>{post.category}</S.Class>
                      <S.PremiumTime>
                        진행시간 : {post.total_time}
                      </S.PremiumTime>
                    </S.ClassWrapper>
                    <S.PremiumPostTitle>{post.title}</S.PremiumPostTitle>
                    <S.PremiumPostContent>
                      <S.PremiumPostInfo>
                        <S.PremiumAddress>{post.address}</S.PremiumAddress>
                        <S.PremiumAvatarContentTie></S.PremiumAvatarContentTie>
                      </S.PremiumPostInfo>
                      <S.PremiumPriceTie>
                        <S.PremiumPrice>{Money(post.price)}</S.PremiumPrice>
                      </S.PremiumPriceTie>
                    </S.PremiumPostContent>
                  </S.PremiumPostBody>
                </S.PremiumPosts>
              </div>
            ))}
          </S.PremiumWrapper>
        </S.PremiumAD>
      </S.Banner>
      <S.Body>
        <S.BodyWrapper>
          <S.Line />
          <S.SearchBox
            placeholder="검색어를 입력해 주세요"
            value={writer}
            onChange={onChangeWriter}
            onKeyPress={handleKeyPress}
          />
          <S.NewestPopularity>
            <S.Newest>최신순</S.Newest>
            <S.Popularity>인기순</S.Popularity>
          </S.NewestPopularity>
          <InfiniteScroll
            pageStart={0}
            loadMore={onLoadMore}
            hasMore={true}
            useWindow={true}
          >
            {data?.fetchClasses.map((post: any, index: number) => (
              <div key={index}>
                <S.Posts id={post.class_id} onClick={onClickSubmit}>
                  <S.PostBody>
                    <S.PostContent>
                      <S.ClassWrapper>
                        <S.Class>{post.category}</S.Class>
                        <S.Time>진행시간 : {post.total_time}</S.Time>
                      </S.ClassWrapper>
                      <S.PostTitle>{post.title}</S.PostTitle>
                      <S.PostInfo>
                        <S.AvatarContentTie></S.AvatarContentTie>
                      </S.PostInfo>
                      <S.PriceTie>
                        <S.Address>{post.address}</S.Address>
                        <S.Price>{Money(post.price)}</S.Price>
                      </S.PriceTie>
                    </S.PostContent>
                    <S.PostImg src={post.url} />
                  </S.PostBody>
                </S.Posts>
              </div>
            ))}
          </InfiniteScroll>
        </S.BodyWrapper>
      </S.Body>
    </S.Wrapper>
  );
}
