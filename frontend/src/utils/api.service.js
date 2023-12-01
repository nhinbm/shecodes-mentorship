import { handleRequestSuccess } from "./setupInterceptor";
import axios from "axios";
import {
  handleRequestFailure,
  handleResponseSuccess,
  handleResponseFailure,
} from "./setupInterceptor";

export class ServiceSingleton {
  static instance;
  static interceptorsRequestNumber;
  static interceptorsResponseNumber;

  constructor() {}

  static getInstance() {
    if (ServiceSingleton.instance) return ServiceSingleton.instance;

    ServiceSingleton.instance = axios.create({
      withCredentials: true,
    });

    ServiceSingleton.instance.setupAxiosInterceptors =
      ServiceSingleton.setupAxiosInterceptors;

    ServiceSingleton.setupAxiosInterceptors();

    return ServiceSingleton.instance;
  }

  static setupAxiosInterceptors(interceptors) {
    if (interceptors) {
      ServiceSingleton.instance.interceptors.request.eject(
        ServiceSingleton.interceptorsRequestNumber
      );
      ServiceSingleton.instance.interceptors.response.eject(
        ServiceSingleton.interceptorsResponseNumber
      );

      ServiceSingleton.instance.interceptors.request.handlers = [];
      ServiceSingleton.instance.interceptors.response.handlers = [];

      ServiceSingleton.interceptorsRequestNumber =
        ServiceSingleton.instance.interceptors.request.use(
          interceptors.request.success?.bind(ServiceSingleton),
          interceptors.request.failure
        );
      ServiceSingleton.interceptorsResponseNumber =
        ServiceSingleton.instance.interceptors.response.use(
          interceptors.response.success,
          interceptors.response.failure
        );

      return;
    }

    ServiceSingleton.interceptorsRequestNumber =
      ServiceSingleton.instance.interceptors.request.use(
        handleRequestSuccess.bind(this),
        handleRequestFailure
      );

    ServiceSingleton.interceptorsResponseNumber =
      ServiceSingleton.instance.interceptors.response.use(
        handleResponseSuccess,
        handleResponseFailure
      );
  }
}

export const apiService = ServiceSingleton.getInstance();
