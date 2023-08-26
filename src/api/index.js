import { API_URI, LOCALSTORAGE_TOKEN_KEY, getFormBody } from "../utils";

// custom config used to make the fetching  easy
const customFetch = async (url, { body, ...customConfig }) => {
  const token = window.localStorage.getItem(LOCALSTORAGE_TOKEN_KEY);

  const headers = {
    "content-type": "application/x-www-form-urlencoded",
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const config = {
    ...customConfig,
    headers: {
      ...headers,
      ...customConfig.headers,
    },
  };

  if (body) {
    config.body = getFormBody(body);
  }

  try {
    // fetching the data and store in response
    const response = await fetch(url, config);
    // convaert to json
    const data = await response.json();
    // console.log(data)
    if (data.success) {
      return {
        data: data.data,
        success: true,
      };
    }

    return new Error(data.message);
  } catch (err) {
    console.log(err);

    return {
      message: err.message,
      success: false,
    };
  }
};

// for login the user
export const login = (email, password) => {
  return customFetch(API_URI.login(), {
    method: "POST",
    body: { email, password },
  });
};
// for creating the new user or account
export const createUser = (name, email, password) => {
  return customFetch(API_URI.signup(), {
    method: "POST",
    body: { name, email, password },
  });
};
