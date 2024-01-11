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
  productSpecs?: IProductSpec[]
}

export interface ISpecification {
  id: number,
  specName: string
}

export interface IProductSpec {
  specification?: ISpecification,
  specValue?: string
}
export interface IParams {
  page?: number;
  limit?: number;
  skip?: number;
  select?: string;
  order?: string,
  dir?: string,
  brand?: string
}


export interface IProductsListResponse {
  products: IProduct[];
  total: number;
  skip: number;
  limit: number;
  page: number
}