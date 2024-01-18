import { IOrderInfor } from "@/types/order.type";
import { IParams } from "@/types/product.types";
import { $axios } from "@plugins/axios/axios";

export const createOrder = (orderInfor: IOrderInfor) => {
    return $axios.post<unknown, unknown>(`/orders/create`, orderInfor);
};


export const fetchUserOrders = (userId: string | number, params?: IParams) => {
    return $axios.get<unknown, unknown>(`/orders/${userId}`, {
        params,
    });
};