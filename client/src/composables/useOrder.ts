import { useCreateOrderMutation } from "@/api/order/query";
import { IOrderInfor } from "@/types/order.type";

export const useOrder = () => {
    const router = useRouter();
    const { start, finish } = useLoading();
    const {
        data: orderData,
        isLoading: isOrderLoading,
        error: orderError,
        mutateAsync: orderMutateAsync,
    } = useCreateOrderMutation();

    const orderProduct = async (orderInfo: IOrderInfor) => {
        start();
        try {
            await orderMutateAsync(orderInfo);
            if (orderData && orderData.value) {
                console.log("Order Thành công")
                router.push("/");
            }
        } finally {
            finish();
        }
    };


    return {
        orderProduct,
        orderData,
        orderError,
        isOrderLoading
    };
};