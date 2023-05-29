import { UseQueryFetchClassDetail } from "../../../commons/hooks/useQueries/class/useQueryFetchClassDetail";
import CalendarUI from "./reservationCalendar/reservationCalendar.index";
import * as S from "./classDetail.styles";
import DOMPurify from "dompurify";
import { useMutationDeleteClass } from "../../../commons/hooks/useMutations/class/useMutationDeleteClass";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { UseMutationWishList } from "../../../commons/hooks/useMutations/class/useMutationWishList";
import ClassReviewWrite from "../../classReviewPage/write/classReviewWrite.index";
import SlickPage from "./classDetailSlick";
import { UseQueryFetchWishLists } from "../../../commons/hooks/useQueries/class/UseQueryFetchWishlists";

declare const window: typeof globalThis & {
  kakao: any;
};

export default function ClassDetail() {
  const router = useRouter();

  const { data } = UseQueryFetchClassDetail();

  const { data: isPick } = UseQueryFetchWishLists();

  const { onClickClassDelete } = useMutationDeleteClass();

  const { onClickCreateWishlist, onClickDeleteWishlist } =
    UseMutationWishList();

  const onClickMoveToClassEdit = () => {
    router.push(`/classPage/${router.query.class_id}/edit`);
  };

  // 카카오지도
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=a9169f002991ce2cba289e84e705d4d4&libraries=services";
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById("map");
        const options = {
          center: new window.kakao.maps.LatLng(33.450701, 126.570667),
          level: 3,
        };

        const map = new window.kakao.maps.Map(container, options);

        let geocoder = new window.kakao.maps.services.Geocoder();

        geocoder.addressSearch(
          `${data?.fetchClassDetail?.address}`,

          function (result: any, status: any) {
            if (status === window.kakao.maps.services.Status.OK) {
              var coords = new window.kakao.maps.LatLng(
                result[0].y,
                result[0].x
              );

              var marker = new window.kakao.maps.Marker({
                map: map,
                position: coords,
              });

              var infowindow = new window.kakao.maps.InfoWindow({
                content: `<div style="width:270px;text-align:center;padding:6px 0;">${data?.fetchClassDetail?.address}</div>`,
              });
              infowindow.open(map, marker);

              map.setCenter(coords);
            }
          }
        );
      });
    };
  }, [data?.fetchClassDetail?.address]);

  return (
    <>
      <S.Wrapper>
        <S.Wrapper_header>
          <S.Wrapper_header_top>
            {data?.fetchClassDetail.title}
          </S.Wrapper_header_top>
          <S.Wrapper_header_bottom>
            <S.Wrapper_header_bottom_right>
              <S.Btn onClick={onClickMoveToClassEdit}>수정</S.Btn>
              <S.Btn onClick={onClickClassDelete}>삭제</S.Btn>
            </S.Wrapper_header_bottom_right>
          </S.Wrapper_header_bottom>
        </S.Wrapper_header>

        <S.SlickWrapper>
          <SlickPage src={data?.fetchClassDetail?.image_} />
        </S.SlickWrapper>

        <S.Wrapper_body>
          <S.Wrapper_body_left>
            <S.Wrapper_body_header>
              <S.Title>{data?.fetchClassDetail.content_summary}</S.Title>

              {isPick?.fetchWishlistOfMine ? (
                <S.Heart_fill
                  onClick={() =>
                    onClickDeleteWishlist(data?.fetchClassDetail.class_id)
                  }
                />
              ) : (
                <S.Heart
                  onClick={() =>
                    onClickCreateWishlist(data?.fetchClassDetail.class_id)
                  }
                />
              )}
            </S.Wrapper_body_header>

            <S.Wrapper_body_bottom>
              <S.Wrapper_body_bottom_left>
                <S.ClassInfo_wrapper>
                  <S.ClassInfo_container>
                    <S.Icon src="/classPage/clock.png" />
                    <S.ClassInfo_container_right>
                      <S.Label>진행 시간</S.Label>
                      <S.SubLabel>
                        {data?.fetchClassDetail.total_time}
                      </S.SubLabel>
                    </S.ClassInfo_container_right>
                  </S.ClassInfo_container>

                  <S.ClassInfo_container>
                    <S.Icon src="/classPage/category.png" />
                    <S.ClassInfo_container_right>
                      <S.Label>카테고리</S.Label>
                      <S.SubLabel>{data?.fetchClassDetail.category}</S.SubLabel>
                    </S.ClassInfo_container_right>
                  </S.ClassInfo_container>

                  <S.ClassInfo_container>
                    <S.Icon src="/classPage/price.png" />
                    <S.ClassInfo_container_right>
                      <S.Label>클래스 가격</S.Label>
                      <S.SubLabel>{data?.fetchClassDetail.price} 원</S.SubLabel>
                    </S.ClassInfo_container_right>
                  </S.ClassInfo_container>
                </S.ClassInfo_wrapper>

                <S.Contents_wrapper>
                  <S.Title>클래스 소개</S.Title>
                  <S.Contents>
                    {typeof window !== "undefined" && (
                      <div
                        dangerouslySetInnerHTML={{
                          __html: DOMPurify.sanitize(
                            data?.fetchClassDetail?.content
                          ),
                        }}
                      />
                    )}
                  </S.Contents>
                </S.Contents_wrapper>
              </S.Wrapper_body_bottom_left>
            </S.Wrapper_body_bottom>
          </S.Wrapper_body_left>

          <S.Wrapper_body_right>
            <CalendarUI />
          </S.Wrapper_body_right>
        </S.Wrapper_body>

        <S.Wrapper_footer>
          <S.Title>클래스 위치</S.Title>
          <S.Map id="map" />
          <S.Address>
            {data?.fetchClassDetail.address}
            <S.AddressDetail>
              {data?.fetchClassDetail.address_detail}
            </S.AddressDetail>
          </S.Address>
        </S.Wrapper_footer>
      </S.Wrapper>
    </>
  );
}
