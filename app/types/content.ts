import { IconType } from "react-icons";

export type PublishStatus = "draft" | "scheduled" | "published";

export type Service = {
  slug: string;
  title: string;
  description: string;
  icon: IconType ;
};

export type NewsPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  publishedAt: string;
  status: PublishStatus;
  img: string;
};

export type Location = {
  slug: string;
  name: string;
  city: string;
  phone: string;
  address: string;
};
