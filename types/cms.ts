import { IAttachment } from "./products";

export type PostStatus = "draft" | "published" | "scheduled" | "archived";
export type CategoryStatus = "active" | "inactive";

export interface IPostCategory {
  _id: string;
  clientPortalId: string;
  name: string;
  slug: string;
  description: string;
  parentId: string;
  status: CategoryStatus;
  parent: IPostCategory;
  createdAt: Date;
  updatedAt: Date;
}

export interface IPostTag {
  _id: string;
  clientPortalId: string;
  name: string;
  slug: string;
}

export interface IPost {
  _id: string;
  clientPortalId: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  categoryIds: [string];
  status: PostStatus;
  tagIds: [string];
  authorId: string;
  featured: Boolean;
  featuredDate: Date;
  scheduledDate: Date;
  autoArchiveDate: Date;
  reactions: [string];
  reactionCounts: JSON;
  thumbnail: IAttachment;
  images: [IAttachment];
  video: IAttachment;
  audio: IAttachment;
  documents: [IAttachment];
  pdfAttachment: any;
  videoUrl: string;
  createdAt: Date;
  updatedAt: Date;

  categories: [IPostCategory];
  tags: [IPostTag];
  customFieldsData: JSON;
}
