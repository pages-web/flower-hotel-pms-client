import { gql } from "@apollo/client";

const postDetail = gql`
  query CmsPost($id: String) {
    cmsPost(_id: $id) {
      _id
      authorKind
      authorId
      author {
        ... on User {
          _id
          details {
            avatar
            firstName
            lastName
            description
            fullName
          }
          isOwner
        }
      }
      title
      content
      excerpt
      categoryIds
      tagIds
      status
      featured
      createdAt
      images {
        url
        name
      }
      thumbnail {
        url
        name
      }
      audio {
        url
        name
      }
      videoUrl
    }
  }
`;

const posts = gql`
  query CmsPosts(
    $clientPortalId: String!
    $featured: Boolean
    $categoryIds: [String]
    $searchValue: String
    $status: PostStatus
    $page: Int
    $perPage: Int
    $tagIds: [String]
  ) {
    cmsPosts(
      clientPortalId: $clientPortalId
      featured: $featured
      categoryIds: $categoryIds
      searchValue: $searchValue
      status: $status
      page: $page
      perPage: $perPage
      tagIds: $tagIds
    ) {
      _id
      authorKind
      authorId
      author {
        ... on User {
          _id
          details {
            avatar
            firstName
            lastName
            description
            fullName
          }
          isOwner
        }
      }
      title
      content
      excerpt
      categoryIds
      tagIds
      status
      featured
      createdAt
      thumbnail {
        url
        name
      }
      thumbnail {
        url
        name
      }
      audio {
        url
        name
      }
      videoUrl
    }
  }
`;

const queries = { postDetail, posts };
export default queries;
