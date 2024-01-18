import { IAddress } from "./address.type";
import { ICart } from "./cart.types";

export interface IOrderInfor {
    carts: ICart[],
    address?: IAddress,
    userAddressId?: string,
    paymentId: number,
    userName?: string,
    phoneNumber?: string
}