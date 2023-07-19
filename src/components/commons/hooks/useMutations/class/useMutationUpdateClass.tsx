import { gql, useMutation } from "@apollo/client";

import { IFormData } from "../../../../units/classPage/write/classWrite.types";
import { FETCH_CLASS_DETAIL } from "../../useQueries/class/useQueryFetchClassDetail";
import { useRouter } from "next/router";
import { getFirstTwoChars } from "../../../../../commons/libraries/utils";
import { useState } from "react";
import { UploadFile } from "antd";
import { useMutationUploadFile } from "./useMutationUploadFile";
import {
  FETCH_CLASS_SCHEDULES,
  UseQueryFetchClassSchedules,
} from "../../useQueries/class/useQueryFetchClassSchedules";

export const UPDATE_CLASS = gql`
  mutation updateClass($updateClassInput: UpdateClassInput!) {
    updateClass(updateClassInput: $updateClassInput)
  }
`;

export const useMutationUpdateClass = () => {
  const router = useRouter();

  const [updateClass] = useMutation(UPDATE_CLASS);

  const [uploadFile] = useMutationUploadFile();
  const [fileList2, setFileList2] = useState<UploadFile[]>([]);

  const [selectedDates2, setSelectedDates2] = useState([]);
  const [remain2] = useState([]);
  const [date2] = useState([]);
  const [cs_id2] = useState([]);

  console.log(fileList2);

  console.log("ㅇㅇㅇㅇㅇㅇㅇ");

  // -------------------------------------------------------
  // const { data } = UseQueryFetchClassSchedules();

  // console.log("///////////////");
  // console.log(data);
  // console.log("///////////////");

  // -------------------------------------------------------

  const onClickClassUpdate = async (
    data: IFormData,
    address: string,
    content: string
  ) => {
    console.log("ㅁㅁㅁㅁㅁㅁ");
    console.log(selectedDates2);
    console.log("ㅎㅎㅎㅎㅎㅎㅎ");
    console.log("2222");
    try {
      if (typeof router.query.class_id !== "string") {
        alert("시스템에 문제가 있습니다.");
        return;
      }
      let updateFile = fileList2.filter((el) => el.originFileObj !== undefined);
      let prevFile = fileList2
        .filter((el) => el.originFileObj === undefined)
        .map((el, index) => {
          console.log(index, "########");
          if (index === 0) {
            return { url: el.url ?? "", type: 1, is_main: 1 };
          } else {
            return { url: el.url ?? "", type: 1, is_main: 2 };
          }
        });

      console.log(prevFile.length);

      const results = await Promise.all(
        updateFile.map((el) =>
          uploadFile({ variables: { files: el.originFileObj } })
        )
      );
      // const results = await Promise.all(
      //   fileList2.map(
      //     (el) => el && uploadFile({ variables: { files: el.originFileObj } })
      //   )
      // );
      // console.log(props);
      console.log(fileList2);
      console.log(uploadFile);
      console.log("파일리스트??");

      // 이미지 //추가start
      const resultUrls = [];
      for (let i = 0; i < results.length; i++) {
        if (i === 0 && prevFile.length === 0) {
          resultUrls.push({
            url: results[i].data.uploadFile[0],
            type: 1,
            is_main: 1,
          });
        } else {
          resultUrls.push({
            url: results[i].data.uploadFile[0],
            type: 1,
            is_main: 2,
          });
        }
      }

      const resultUrl = [...resultUrls, ...prevFile];
      //추가end
      // alert(data.content);

      if (resultUrl.length === 0) {
        alert("대표 이미지는 필수 입력 사항입니다 이미지를 등록 해 주세요.");
        return;
      }

      // 상세내용 수정 없을 시 기존 내용으로 저장
      if (data.content) {
        content = data.content;
      }

      // 주소 수정 없을 시 기존 내용으로 저장
      if (address) {
        data.address = address;
      }

      // 달력
      const classSchedules = [];
      for (let i = 0; i < selectedDates2.length; i++) {
        if (date2.includes(selectedDates2[i])) {
          const idx = date2.indexOf(selectedDates2[i]);
          classSchedules.push({
            cs_id: cs_id2[idx],
            date: selectedDates2[i],
            remain: remain2[idx],
          });
        } else {
          classSchedules.push({
            cs_id: "",
            date: selectedDates2[i],
            remain: Number(data.class_mNum),
          });
        }
      }
      console.log(remain2, date2);
      console.log(classSchedules);
      console.log("제발제발제발제발제발제발");
      const result = await updateClass({
        variables: {
          updateClassInput: {
            class_id: router.query.class_id,
            title: data.title,
            content_summary: data.content_summary,
            price: Number(data.price),
            class_mNum: Number(data.class_mNum),
            address: data.address,
            address_detail: data.address_detail,
            category: data.category,
            address_category: getFirstTwoChars(address),
            total_time: data.total_time,
            content: content,
            accountNum: String(data.accountNum),
            accountName: data.accountName,
            bankName: data.bankName,
            classSchedulesInput: classSchedules,
            imageInput: resultUrl,
          },
        },
        refetchQueries: [
          {
            query: FETCH_CLASS_DETAIL,
            variables: { class_id: router.query.class_id },
          },
          {
            query: FETCH_CLASS_SCHEDULES,
            variables: { class_id: router.query.class_id },
          },
        ],
      });
      alert("클래스 수정이 완료되었습니다.");

      //  수정을 눌렀을 때 수정스케쥴에 있는 날짜와 원래 날짜와 비교해서, 다른날짜가 남은인원과 최대인원이 다르면 예약자가 있어서 불가능하다 알러트 생성

      void router.push(`/classPage/${router.query.class_id}`);
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    }
  };
  return {
    onClickClassUpdate,
    fileList2,
    setFileList2,
    selectedDates2,
    setSelectedDates2,
    remain2,
    date2,
    cs_id2,
  };
};
