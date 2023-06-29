import { gql, useMutation } from "@apollo/client";

import { IFormData } from "../../../../units/classPage/write/classWrite.types";
import { FETCH_CLASS_DETAIL } from "../../useQueries/class/useQueryFetchClassDetail";
import { useRouter } from "next/router";
import { getFirstTwoChars } from "../../../../../commons/libraries/utils";
import { useState } from "react";
import { UploadFile } from "antd";
import { useMutationUploadFile } from "./useMutationUploadFile";

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

  console.log("111");
  const onClickClassUpdate = async (data: IFormData, address: string) => {
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

      const result = await updateClass({
        variables: {
          updateClassInput: {
            class_id: router.query.class_id,
            title: data.title,
            content_summary: data.content_summary,
            price: Number(data.price),
            class_mNum: Number(data.class_mNum),
            address: address,
            address_detail: data.address_detail,
            category: data.category,
            address_category: getFirstTwoChars(address),
            total_time: data.total_time,
            content: data.content,
            accountNum: String(data.accountNum),
            accountName: data.accountName,
            bankName: data.bankName,
            classSchedulesInput: {
              cs_id: "cs_id",
              date: "date",
              remain: 7,
            },
            // imageInput: {
            //   url: "111",
            //   type: 1,
            //   is_main: 1,
            // },
            imageInput: resultUrl,
          },
        },
        refetchQueries: [
          {
            query: FETCH_CLASS_DETAIL,
            variables: { class_id: router.query.class_id },
          },
        ],
      });
      alert("클래스 수정이 완료되었습니다.");

      void router.push(`/classPage/${router.query.class_id}`);
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    }
  };
  return {
    onClickClassUpdate,
    fileList2,
    setFileList2,
  };
};
