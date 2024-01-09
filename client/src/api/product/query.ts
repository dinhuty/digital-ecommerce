import {
    UseQueryOptions,
    useInfiniteQuery,
    useMutation,
    useQuery,
} from "vue-query";
import { fetchProduct, fetchProductDetails, fetchProductOfCategory } from "./product";
import { IParams } from "@/types/product.types";

export const useListProductsInfiniteQuery = () => {
    return useInfiniteQuery("productsInfinite", ({ pageParam: page }) =>
        fetchProduct({
            limit: 2,
            page
        }),
        {

            getNextPageParam: (lastPage) => {
                if (lastPage.page >= lastPage.total) return undefined;
                return lastPage.page + 1;
            },
            staleTime: 1000000,
        }
    );
};
export const useListProducts = (params?: IParams) => {
    return useQuery("products", () =>
        fetchProduct({
            limit: 2,
            page: params?.page
        })
    );
}
export const useGetProductDetails = (slug: string) => {
    return useQuery(["product-details", slug], () =>
        fetchProductDetails(slug)
    );
};

export const useGetProductsByCategory = (
    categoryName: string,
    params?: IParams,
    enabled?: boolean
) => {
    return useQuery(
        ["products-categories", categoryName],
        () => fetchProductOfCategory(categoryName, params),
        {
            enabled,
        }
    );
};