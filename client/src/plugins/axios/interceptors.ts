import {
  AxiosResponse,
  AxiosStatic,
  AxiosError,
  AxiosRequestConfig,
  AxiosInstance,
} from "axios";
import { ACCESS_TOKEN_KEY } from "@/utils/constants";

export default function interceptors(axios: AxiosInstance) {

  axios.interceptors.request.use(
    (config) => {
      const access_token = localStorage.getItem(ACCESS_TOKEN_KEY);
      if (access_token && config.headers) {
        config.headers["authorization"] = `Bearer ${access_token}`;
      }

      return config;
    },

    (error: AxiosError) => {
      return Promise.reject(error);
    }
  );

  axios.interceptors.response.use(
    (response: AxiosResponse) => response.data,
    async (error: AxiosError) => {
      // const originalConfig: any = error.config;

      if (error.response) {
        if (error.response.status === 401) {
          // refreshToken(originalConfig, axios); // enable if app's required refresh token
        }

        return Promise.reject(error.response.data);
      }
    }
  );
}

// const refreshToken = async (
//   originalConfig: AxiosRequestConfig<any>,
//   axios: AxiosStatic
// ) => {
//   if (isRefreshing) {
//     return new Promise((resolve, reject) => {
//       failedQueue.push({ resolve, reject });
//     });
//   }

//   isRefreshing = true;

//   try {
//     const access_token = "";

//     if (originalConfig?.headers) {
//       originalConfig.headers["authorization"] = `Bearer ${access_token}`;
//     }

//     processQueue(null, access_token);

//     return axios(originalConfig);
//   } catch (error) {
//     processQueue(error, null);
//     return Promise.reject(error);
//   } finally {
//     isRefreshing = false;
//   }
// };