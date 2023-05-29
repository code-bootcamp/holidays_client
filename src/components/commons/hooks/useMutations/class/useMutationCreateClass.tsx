import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { IFormData } from "../../../../units/classPage/write/classWrite.types";
import { getFirstTwoChars } from "../../../../../commons/libraries/utils";
import { useState } from "react";
import { useMutationUploadFile } from "./useMutationUploadFile";
import { UploadFile } from "antd";
import { FETCH_CLASSES } from "../../useQueries/class/UseQueryFetchClasses";

export const CREATE_CLASS = gql`
  mutation createClass($createClassInput: CreateClassInput!) {
    createClass(createClassInput: $createClassInput)
  }
`;

export const UseMutationCreateClass = () => {
  const [createClass] = useMutation(CREATE_CLASS);
  const router = useRouter();

  const [uploadFile] = useMutationUploadFile();

  const [fileList, setFileList] = useState<UploadFile[]>([]);

  const [selectedDates, setSelectedDates] = useState([]);

  const onClickClassSubmit = async (data: IFormData, address: string) => {
    try {
      const results = await Promise.all(
        fileList.map(
          (el) => el && uploadFile({ variables: { files: el.originFileObj } })
        )
      );

      // 이미지
      const resultUrls = [];
      for (let i = 0; i < results.length; i++) {
        if (i === 0) {
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

      // 달력
      const classSchedules = [];
      for (let i = 0; i < selectedDates.length; i++) {
        classSchedules.push({
          date: selectedDates[i],
          remain: Number(data.class_mNum),
        });
      }

      const result = await createClass({
        variables: {
          createClassInput: {
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
            classSchedulesInput: classSchedules,
            imageInput: resultUrls,
          },
        },

        refetchQueries: [{ query: FETCH_CLASSES }],
      });

      alert("클래스 등록에 성공하였습니다.");

      const class_id = result.data?.createClass;

      void router.push(`/classPage/${class_id}`);
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    }
  };

  return {
    onClickClassSubmit,
    fileList,
    setFileList,
    selectedDates,
    setSelectedDates,
  };
};
