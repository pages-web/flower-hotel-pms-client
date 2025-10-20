import { gql } from "@apollo/client";

const postDetail = gql`
  query CmsPost($id: String, $language: String) {
    cmsPost(_id: $id, language: $language) {
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
      customFieldsData
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
    $language: String
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
      language: $language
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
const postList = gql(`
  query PostList($clientPortalId: String!, $type: String, $featured: Boolean, $categoryIds: [String], $searchValue: String, $status: PostStatus, $page: Int, $perPage: Int, $tagIds: [String], $sortField: String, $sortDirection: String) {
  cmsPostList(
    clientPortalId: $clientPortalId
    featured: $featured
    type: $type
    categoryIds: $categoryIds
    searchValue: $searchValue
    status: $status
    page: $page
    perPage: $perPage
    tagIds: $tagIds
    sortField: $sortField
    sortDirection: $sortDirection
  ) {
    currentPage
    totalCount
    totalPages
    posts {
      _id
      type
      customPostType {
        _id
        code
        label
        __typename
      }
      authorKind
      author {
        ... on User {
          _id
          username
          email
          details {
            fullName
            shortName
            avatar
            firstName
            lastName
            middleName
            __typename
          }
          __typename
        }
        ... on ClientPortalUser {
          _id
          fullName
          firstName
          lastName
          email
          username
          customer {
            avatar
            __typename
          }
          __typename
        }
        __typename
      }
      categoryIds
      categories {
        _id
        name
        __typename
      }
      featured
      status
      tagIds
      tags {
        _id
        name
        __typename
      }
      authorId
      createdAt
      autoArchiveDate
      scheduledDate
      thumbnail {
        url
        __typename
      }
      title
      updatedAt
      __typename
    }

    __typename
  }
}`);
const queries = { postDetail, posts, postList };
export default queries;
