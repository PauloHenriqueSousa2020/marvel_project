import { Dispatch, SetStateAction } from "react";
type SetCurrentTab = Dispatch<SetStateAction<boolean>>;

export interface EmailTemplateProps {
  selecteds: ComicsInfoProps[]
};

export interface ComicDetailsProps {
  comicDetail: ComicsInfoProps | any,
  setShowComicDetail: SetCurrentTab,
}

export interface useComicDetailProps {
  comicDetail: ComicsInfoProps,
}
export interface ComicsInfoProps {
  id: number,
  title: string,
  thumbnail: ThumbnailProps,
  pageCount: number,
  description: string,
  prices: [PricesProps],
  creators: CreatorsProps,
  dates: [DateProps],
  urls: [UrlsProps],
}
export interface DateProps {
  type: string,
  date: string,
}

export interface PricesProps {
  type: string,
  price: number,
}

export interface ThumbnailProps {
  path: string,
  extension: string,
}
export interface UrlsProps {
  type: string,
  url: string,
}

export interface CreatorsProps {
  available: number,
  collectionURI: string,
  items: ItemsPros[],
  returned: number
}


export interface ItemsPros {
  resourceURI: string,
  name: string,
  role: string,
}