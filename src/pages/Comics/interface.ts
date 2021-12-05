export interface ComicProps {
  id: number,
  title: string,
  thumbnail: ThumbnailProps,
  pageCount: number,
  description: string,
  prices: PricesProps,
  creators: CreatorsProps,
  dates: [DateProps],
  urls: [UrlsProps],
}
interface DateProps {
  type: string,
  date: string,
}

interface PricesProps {
  type: string,
  price: number,
}

interface ThumbnailProps {
  path: string,
  extension: string,
}

interface UrlsProps {
  type: string,
  url: string,
}

interface CreatorsProps {
  available: number,
  collectionURI: string,
  items: ItemsPros[],
  returned: number
}

interface ItemsPros {
  resourceURI: string,
  name: string,
  role: string,
}