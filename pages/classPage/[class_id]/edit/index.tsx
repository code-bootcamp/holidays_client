import { NextRouter, useRouter } from "next/router";
import ClassWrite from "../../../../src/components/units/classPage/write/classWrite.index";
import { useQuery } from "@apollo/client";

import {
  IQuery,
  IQueryFetchClassDetailArgs,
} from "../../../../src/commons/types/generated/types";
import { FETCH_CLASS_DETAIL } from "../../../../src/components/commons/hooks/useQueries/class/useQueryFetchClassDetail";

export default function ClassEditPage() {
  const router: NextRouter = useRouter();

  const { data } = useQuery<
    Pick<IQuery, "fetchClassDetail">,
    IQueryFetchClassDetailArgs
  >(FETCH_CLASS_DETAIL, {
    variables: { class_id: String(router.query.class_id) },
  });

  return <ClassWrite isEdit={true} data={data} />;
}
