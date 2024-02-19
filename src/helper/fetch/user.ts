import { fetchOption, API_URL, handleResponse, handleError } from "./index";

export const signInUser = async (data: Object = {}) => {
  return await fetch(`${API_URL}/user/signin`, {
    ...fetchOption,
    method: "POST",
    body: JSON.stringify(data),
  })
    .then(handleResponse)
    .catch(handleError);
};

export const insertUser = async (data: Object = {}) => {
  return await fetch(`${API_URL}/user/signup`, {
    ...fetchOption,
    method: "POST",
    body: JSON.stringify(data),
  })
    .then(handleResponse)
    .catch(handleError);
};

export const duplicatedId = async (data: Object = {}) => {
  return await fetch(`${API_URL}/user/duplication`, {
    ...fetchOption,
    method: "POST",
    body: JSON.stringify(data),
  })
    .then(handleResponse)
    .catch(handleError);
};
