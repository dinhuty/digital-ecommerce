import { $axios } from "@plugins/axios/axios";
import {
    IAthleteProfile,
    ILoginBody,
    ILoginResponse,
    IMeta,
    IPagination,
    IRegisterBody,
} from "@/types/auth.types";
import { IUser } from "@/types/user.types";

const auth = () => ({
    login(body: ILoginBody) {
        return $axios.post<ILoginResponse, ILoginResponse>("/auth/login", body);
    },

    register(body: IRegisterBody) {
        return $axios.post("/auth/register", body);
    },

    getUser(userId: string | number) {
        return $axios.get<unknown, IUser>(`/auth/profile/${userId}`);
    },
});

export const { login, register, getUser } = auth();