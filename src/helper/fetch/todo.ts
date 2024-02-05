import { fetchOption, API_URL, handleResponse, handleError } from "./index";

export const postFetch = async (path: string, data: Object = {}) => {
  return await fetch(`${API_URL}${path}`, {
    ...fetchOption,
    method: "POST",
    body: JSON.stringify(data), // body의 데이터 유형은 반드시 "Content-Type" 헤더와 일치해야 함
  })
    .then(handleResponse)
    .catch(handleError);
};

export const getfetch = async (path: string) => {
  return await fetch(`${API_URL}${path}`, {
    ...fetchOption,
    method: "GET",
  })
    .then(handleResponse)
    .catch(handleError);
};

export const deleteFetch = async (path: string, data: Object = {}) => {
  return await fetch(`${API_URL}${path}`, {
    ...fetchOption,
    method: "DELETE",
    body: JSON.stringify(data),
  })
    .then(handleResponse)
    .catch(handleError);
};
