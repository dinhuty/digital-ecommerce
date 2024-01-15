import { loginMutation, registerMutation } from "@/api/auth/query";
import useAuthStore from "@/store/auth";
import { ACCESS_TOKEN_KEY, USER_ID } from "@/utils/constants";
import { storeToRefs } from "pinia";
import { useStorage } from "@vueuse/core";
import { ILoginBody, IRegisterBody } from "@/types/auth.types";

export const useAuth = () => {
    const router = useRouter();
    const { start, finish } = useLoading();
    const { getUserInfo, updateUser } = useAuthStore();
    const { loggedIn, userInfo: user } = storeToRefs(useAuthStore());
    const accessToken = useStorage(ACCESS_TOKEN_KEY, "");
    const userId = useStorage(USER_ID, "");
    const {
        data: loginData,
        isLoading: isSignInLoading,
        error: signInError,
        mutateAsync: loginMutateAsync,
        
    } = loginMutation();

    const signIn = async ({ email, password }: ILoginBody) => {
        start();
        try {
            await loginMutateAsync({
                email,
                password
            });
            if (loginData && loginData.value) {
                accessToken.value = loginData.value?.accessToken;
                userId.value = String(loginData.value?.user.id);
                loggedIn.value = true
                user.value = loginData.value?.user
                router.push("/");
            }
        } finally {
            finish();
        }
    };

    const {
        data: registerData,
        isLoading: isRegisterLoading,
        error: registerError,
        mutateAsync: registerMutateAsync,
    } = registerMutation();

    const register = async ({ email, password, confirmPassword }: IRegisterBody) => {
        start();
        try {
            await registerMutateAsync({
                email,
                password,
                confirmPassword
            });

        } finally {
            finish();
        }
    }

    const signOut = () => {
        accessToken.value = null;
        userId.value = null;
        router.push("/login");
    };

    return {
        loggedIn,
        user,
        isSignInLoading,
        signInError,
        getUserInfo,
        signIn,
        signOut,
        updateUser,
        register,
        registerData,
        registerError,
        isRegisterLoading,
        userId
    };
};