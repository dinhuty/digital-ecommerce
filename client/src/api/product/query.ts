import {
    UseQueryOptions,
    useInfiniteQuery,
    useMutation,
    useQuery,
} from "vue-query";
import {
    fetchProduct,
    fetchProductDetails,
    fetchProductOfCategory,
    fetchBase
} from "./product";
import { IParams, } from "@/types/product.types";


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
            refetchOnWindowFocus: false
        }
    );
};
export const useListProducts = (params?: Ref<IParams>) => {

    return useQuery(["products", params?.value.page], () =>
        fetchProduct({
            limit: params?.value.limit || 1,
            page: params?.value.page,
            ...(params?.value.brand && { brand: params.value.brand }),
            ...(params?.value.order && { order: params.value.order }),
            ...(params?.value.dir && { dir: params.value.dir }),
        }),
        {
            refetchOnWindowFocus: false,
        }
    );
}
export const useGetProductDetails = (slug: string) => {
    return useQuery(["product-details", slug], () =>
        fetchProductDetails(slug),
        {
            refetchOnWindowFocus: false
        }
    );
};


export const useGetProductsByCategory = (
    categoryName: string,
    params?: Ref<IParams>,
    enabled?: boolean
) => {
    return useQuery(
        ["products-categories", categoryName],
        () => fetchProductOfCategory(categoryName, params?.value),
        {
            enabled,
            refetchOnWindowFocus: false
        }
    );
};

export const useListProductsSale = (quantity: number) => {
    return useQuery(["product-sale", quantity], () =>
        fetchBase(quantity),
        {
            refetchOnWindowFocus: false,
            select: (data) => data.products
        }
    );
}