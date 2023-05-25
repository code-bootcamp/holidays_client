import { ChangeEvent, useCallback, useEffect, useRef, useState } from "react";
import * as S from "./classWrite.styles";

import { PlusOutlined } from "@ant-design/icons";
import { Modal, Upload } from "antd";
import type { RcFile, UploadProps } from "antd/es/upload";
import type { UploadFile } from "antd/es/upload/interface";

// import MultipleDatePicker from "react-multiple-datepicker";
import DaumPostcodeEmbed from "react-daum-postcode"; //  우편번호
import type { Address } from "react-daum-postcode";
import { UseMutationCreateClass } from "../../../commons/hooks/useMutations/class/useMutationCreateClass";
import { classWriteSchema } from "./classWrite.validation";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import dynamic from "next/dynamic";

import "react-quill/dist/quill.snow.css";
import { useMutationUpdateClass } from "../../../commons/hooks/useMutations/class/useMutationUpdateClass";
import { IClassWriteProps, IFormData } from "./classWrite.types";
import { useMutationUploadFile } from "../../../commons/hooks/useMutations/class/useMutationUploadFile";
import ClassImage from "./classWriteImage";
import Calendar from "../../../commons/calendar";
import { useAuth02 } from "../../../commons/hooks/useAuths/useAuth02";
import { UseMutationUploadFile } from "../../../commons/hooks/useMutations/uploadFile/UseMutationUploadFile";

// 웹 에디터
const ReactQuill = dynamic(async () => await import("react-quill"), {
  ssr: false,
});

const ToastEditor = dynamic(
  async () => await import("../../../commons/toastUI"),
  {
    ssr: false,
  }
);

// 카카오지도
declare const window: typeof globalThis & {
  kakao: any;
  geocoder: any;
};

export default function ClassWrite(props: IClassWriteProps) {
  useAuth02;

  // 우편주소(카카오지도)
  const [fulladdress, setFulladdress] = useState("");

  // 세부내용(ToastEditor)
  const contentsRef = useRef(null);
  const [content, setContent] = useState("");
  const [uploadFile] = UseMutationUploadFile();

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

        // 지도를 생성합니다
        const map = new window.kakao.maps.Map(container, options);
        console.log(map);

        let geocoder = new window.kakao.maps.services.Geocoder();

        geocoder.addressSearch(
          fulladdress !== ""
            ? fulladdress
            : props.data?.fetchClassDetail?.address,

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
                content: `<div style="width:270px;text-align:center;padding:6px 0;">${
                  fulladdress !== ""
                    ? fulladdress
                    : props.data?.fetchClassDetail?.address
                }</div>`,
              });
              infowindow.open(map, marker);

              map.setCenter(coords);
            }
          }
        );
      });
    };
  }, [fulladdress]);

  // --------------------------------------------------------

  const [isOpen, setIsOpen] = useState(false);

  // 우편번호 모달창
  const onToggleModal = (): void => {
    setIsOpen((prev) => !prev);
  };

  const handleComplete = (data: Address): void => {
    console.log(data.address);

    onToggleModal();

    setValue("address", data.address);
    setFulladdress(data.address);
  };

  // --------------------------------------------------------

  // 등록
  const {
    onClickClassSubmit,
    fileList,
    setFileList,
    selectedDates,
    setSelectedDates,
  } = UseMutationCreateClass();

  // 수정
  const { onClickClassUpdate } = useMutationUpdateClass();

  const { register, setValue, handleSubmit } = useForm<IFormData>({
    // resolver: yupResolver(classWriteSchema),
    // mode: "onSubmit",
    mode: "onChange",
  });

  // 등록하기, 수정하기 제출
  const onSubmitForm = async (data: IFormData) => {
    const { ...value } = data;

    if (!props.isEdit) {
      await onClickClassSubmit(value, fulladdress);
    } else {
      await onClickClassUpdate(value, fulladdress);
    }
  };

  // 세부내용(웹에디터)
  // const onChangeContents = (value: string): void => {
  //   console.log(value);

  //   setValue("content", value === "<p><br></p>" ? "" : value);

  //   void trigger("content");
  // };

  // 세부내용(ToastEditor)
  const onChangeContents = (text: any) => {
    const editorInstance = contentsRef.current?.getInstance().getHTML();
    // setContent(text === "<p><br><p>" ? "" : editorInstance);
    setValue("content", editorInstance === "<p><br></p>" ? "" : editorInstance);
  };

  return (
    <>
      <S.Wrapper>
        {/* 우편번호 모달 */}
        {isOpen && (
          <Modal open={isOpen} onOk={onToggleModal} onCancel={onToggleModal}>
            <DaumPostcodeEmbed onComplete={handleComplete} />
          </Modal>
        )}

        <S.Wrapper_header>
          <S.Wrapper_header_left>
            {props.isEdit ? "클래스 수정" : "신규 클래스 개설"}
          </S.Wrapper_header_left>
        </S.Wrapper_header>

        <form onSubmit={handleSubmit(onSubmitForm)}>
          <S.Wrapper_body>
            <S.Label>카테고리를 선택해주세요</S.Label>
            <S.CustomSelect
              {...register("category")}
              // defaultValue={props.data?.category}
              defaultValue={props.data?.fetchClassDetail.category}
            >
              <option value="교육">교육</option>
              <option value="여가">여가</option>
              <option value="운동">운동</option>
              <option value="요리">요리</option>
            </S.CustomSelect>
            {/* <S.Error>{formState.errors.category?.message}</S.Error> */}

            <S.Label>클래스 이름을 입력해주세요</S.Label>
            <S.TextInput
              type="text"
              placeholder="클래스 이름을 입력해주세요"
              {...register("title")}
              defaultValue={props.data?.fetchClassDetail.title}
            />
            {/* <S.Error>{formState.errors.title?.message}</S.Error> */}

            <S.Label>클래스 한줄요약을 입력해주세요</S.Label>
            <S.TextInput
              type="text"
              placeholder="클래스 한줄요약을 입력해주세요"
              {...register("content_summary")}
              defaultValue={props.data?.fetchClassDetail.content_summary}
            />
            {/* <S.Error>{formState.errors.content_summary?.message}</S.Error> */}

            {/* <S.Error>에러</S.Error> */}

            <S.Label>
              대표 이미지를 올려주세요 (최대 5개까지 업로드 가능합니다)
            </S.Label>
            <ClassImage fileList={fileList} setFileList={setFileList} />
            {/* <S.Error>에러</S.Error> */}

            <S.Wrapper_body_middle>
              <S.Wrapper_body_middle_left>
                <S.Label>클래스 소요 시간을 선택해주세요</S.Label>

                {/* <S.Time size="large" onChange={onChangeTime} /> */}
                <S.CustomSelect
                  {...register("total_time")}
                  defaultValue={props.data?.fetchClassDetail.total_time}
                >
                  <option value="1시간">1시간</option>
                  <option value="2시간">2시간</option>
                  <option value="3시간">3시간</option>
                  <option value="4시간">4시간</option>
                </S.CustomSelect>
                {/* <S.Error>{formState.errors.total_time?.message}</S.Error> */}
              </S.Wrapper_body_middle_left>
              <S.Wrapper_body_middle_right>
                <S.Label>클래스 최대 인원을 입력해주세요</S.Label>
                <S.TextInput3
                  type="int"
                  placeholder="숫자만 입력해주세요"
                  {...register("class_mNum")}
                  defaultValue={props.data?.fetchClassDetail.class_mNum}
                />
                {/* <S.Error>{formState.errors.class_mNum?.message}</S.Error> */}
              </S.Wrapper_body_middle_right>
            </S.Wrapper_body_middle>
            <S.Label>클래스 가격을 입력해주세요</S.Label>
            <S.TextInput
              type="int"
              placeholder="숫자만 입력해주세요"
              {...register("price")}
              defaultValue={props.data?.fetchClassDetail.price}
            />
            {/* <S.Error>{formState.errors.price?.message}</S.Error> */}

            <S.Label>클래스 위치를 입력해주세요</S.Label>
            <S.Wrapper_body_map>
              <S.Map id="map" />
              <S.Wrapper_body_map_right>
                <S.Wrapper_body_map_right_top>
                  {/* <S.AddressInput /> */}
                  <S.TextInput2
                    type="text"
                    readOnly
                    value={
                      fulladdress !== ""
                        ? fulladdress ?? ""
                        : props.data?.fetchClassDetail.address ?? ""
                    }
                  />
                  <S.AddressBtn type="button" onClick={onToggleModal}>
                    주소 검색
                  </S.AddressBtn>
                </S.Wrapper_body_map_right_top>
                <S.Wrapper_body_map_right_bottom>
                  <S.AddressDetail_text>상세주소 입력</S.AddressDetail_text>
                  <S.TextInput3
                    type="text"
                    placeholder="상세주소를 입력해주세요"
                    {...register("address_detail")}
                    defaultValue={props.data?.fetchClassDetail.address_detail}
                  />
                </S.Wrapper_body_map_right_bottom>
                {/* <S.Error>{formState.errors.address_detail?.message}</S.Error> */}
              </S.Wrapper_body_map_right>
            </S.Wrapper_body_map>

            {/* <S.Error>에러</S.Error> */}
            <S.Label>클래스 세부내용을 작성해주세요</S.Label>
            {/* <ReactQuill
              style={{
                width: "730px",
                height: "431px",
                marginBottom: "75px",
              }}
              onChange={onChangeContents}
              placeholder="클래스 세부내용을 입력해주세요"
              defaultValue={props.data?.fetchClassDetail.content}
            /> */}

            <S.ToastEditor>
              <ToastEditor
                contentsRef={contentsRef}
                onChangeContents={onChangeContents}
                initialValue={props.data?.fetchClassDetail.content}
              />
            </S.ToastEditor>

            <S.Label>클래스 일정을 선택해주세요</S.Label>
            <Calendar
              selectedDates={selectedDates}
              setSelectedDates={setSelectedDates}
            />

            <S.Label>입금 계좌를 작성해주세요</S.Label>
            <S.TextInput
              type="text"
              placeholder="'-' 빼고 숫자만 입력해주세요."
              {...register("accountNum")}
              defaultValue={props.data?.fetchClassDetail.accountNum}
            />
            {/* <S.Error>{formState.errors.accountNum?.message}</S.Error> */}

            <S.BankWrapper>
              <div>
                <S.Label>예금주를 작성해주세요</S.Label>
                <S.TextInput3
                  type="text"
                  placeholder="예금주를 작성해주세요"
                  {...register("accountName")}
                  defaultValue={props.data?.fetchClassDetail.accountName}
                />
                {/* <S.Error>{formState.errors.accountName?.message}</S.Error> */}
              </div>

              <div>
                <S.Label>입금 은행을 작성해주세요</S.Label>
                <S.TextInput3
                  type="text"
                  placeholder="입금 은행을 작성해주세요"
                  {...register("bankName")}
                  defaultValue={props.data?.fetchClassDetail.bankName}
                />
                {/* <S.Error>{formState.errors.bankName?.message}</S.Error> */}
              </div>
            </S.BankWrapper>
            <S.BtnWrapper>
              <S.CancelBtn>취소</S.CancelBtn>
              <S.SubmitBtn type="submit">
                {props.isEdit ? "수정" : "등록"}
              </S.SubmitBtn>
            </S.BtnWrapper>
          </S.Wrapper_body>
        </form>
      </S.Wrapper>
    </>
  );
}
