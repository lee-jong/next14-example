export const API_URL = "http://localhost:4000/api/v1";
export const fetchOption: RequestInit = {
  mode: "cors", // no-cors, *cors, same-origin
  cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
  credentials: "same-origin", // include, *same-origin, omit
  headers: {
    "Content-Type": "application/json",
  },
  redirect: "follow", // manual, *follow, error
  referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
};

export const handleResponse = async (res: Response) => {
  const resJson = await res.json();
  if (resJson.status !== 200) throw resJson;
  return resJson.data;
};

export const handleError = (err: any) => {
  let error = {};

  if (err && err.response && err.response.data) {
    error = err.response.data;
  } else {
    error = err;
  }
  return Promise.reject(error);
};
