import { useLazyQuery, useQuery } from "@apollo/client";
import { queries } from "../graphql/cms";
import { IPost } from "@/types/cms";

export const UseGetPosts = () => {
  const { data, loading } = useQuery(queries.posts, {
    variables: {
      clientPortalId: process.env.NEXT_PUBLIC_CP_ID,
    },
  });

  const posts: IPost[] = data?.cmsPosts;

  return { posts, loading };
};
