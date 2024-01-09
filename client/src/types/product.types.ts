export interface IProduct {
  id: string;
  name: string;
  description: string;
  basePrice: number;
  discountPercentage?: number;
  rating?: number;
  stock?: number;
  brandName: string;
  slug: string;
  categoryName?: string;
  thumbUrl?: string;
  images?: string[];
  productSpecs?: IProductSpec
}

export interface IProductSpec {
  specification?: Object,
  specValue: string
}
export interface IParams {
  page?: number;
  limit?: number;
  skip?: number;
  select?: string;
}

export interface IProductsListResponse {
  products: IProduct[];
  total: number;
  skip: number;
  limit: number;
  page: number
}