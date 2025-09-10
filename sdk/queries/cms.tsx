import { OperationVariables, useLazyQuery, useQuery } from "@apollo/client";
import { queries } from "../graphql/cms";
import { IPost } from "@/types/cms";

export const usePosts = (variables: OperationVariables) => {
  const { data, loading } = useQuery(queries.posts, {
    variables: {
      clientPortalId: process.env.NEXT_PUBLIC_CP_ID,
      ...variables,
    },
    fetchPolicy: "no-cache",
    notifyOnNetworkStatusChange: true,
  });
  const posts: IPost[] = data?.cmsPosts;
  return { posts, loading };
};
export const usePostLists = (variables: OperationVariables) => {
  const { data, loading } = useQuery(queries.postList, {
    variables: {
      clientPortalId: process.env.NEXT_PUBLIC_CP_ID,
      ...variables,
    },
    fetchPolicy: "no-cache",
    notifyOnNetworkStatusChange: true,
  });

  // const postList: IPost[] = data?.cmsPostList;

  return { postList: data?.cmsPostList, loading };
};

export const usePostDetail = (id: string, language: string) => {
  const { data, loading } = useQuery(queries.postDetail, {
    variables: { id, language },
    fetchPolicy: "no-cache",
    notifyOnNetworkStatusChange: true,
  });

  const post: IPost = data?.cmsPost || {};

  return { post, loading };
};
