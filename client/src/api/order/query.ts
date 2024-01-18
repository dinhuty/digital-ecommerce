import {
    useMutation,
    useQuery,
} from "vue-query";
import {
    createOrder,
    fetchUserOrders
} from "./order";
import { IOrderInfor } from "@/types/order.type";

export const useCreateOrderMutation = () => {
    return useMutation(
        ["create-order-user"],
        (orderInfor: IOrderInfor) => createOrder(orderInfor)
    );
};