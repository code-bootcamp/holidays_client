import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";

export const FETCH_CLASS_SCHEDULES = gql`
  query fetchClassSchedules($class_id: String!) {
    fetchClassSchedules(class_id: $class_id) {
      cs_id
      date
      remain
    }
  }
`;

export const UseQueryFetchClassSchedules = () => {
  const router = useRouter();

  const query = useQuery(FETCH_CLASS_SCHEDULES, {
    variables: { class_id: router.query.class_id },
  });

  console.log(query);

  return query;
};
