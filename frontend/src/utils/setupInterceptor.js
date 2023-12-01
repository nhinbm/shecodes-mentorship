import { getAccessToken } from "./authStorage";

const isGettingRefData = (url) => {
  return /refData/i.test(url);
};

export const handleResponseSuccess = (response) => {
  return Promise.resolve(response);
};

export const handleResponseFailure = async (error) => {
  if (error.response?.status !== 401) return Promise.reject(error);
  const originalConfig = error.config;
  try {
    return Promise.resolve(originalConfig);
  } catch (e) {
    window.location.href = "/";
  }
};

export function handleRequestSuccess(config) {
  const {
    url = "",
    headers: { Authorization: existingAuthorization },
  } = config;
  if (isGettingRefData(url)) {
    config.baseURL = process.env.PUBLIC_URL || "/";
  } else {
    config.baseURL = process.env.REACT_APP_API || "http://localhost:8080/api";
  }

  return Promise.resolve({
    ...config,
    headers: {
      ...config.headers,
      Authorization: existingAuthorization || `Bearer ${getAccessToken()}`,
    },
  });
}

export const handleRequestFailure = (error) => {
  return Promise.reject(error.request);
};
