const Root_API_URI = "http://127.0.0.1:8000";

export const API_URI = {
  login: () => `${Root_API_URI}/login`,
  signup: () => `${Root_API_URI}/create-user`,
};

// secretkey for getthe item from local storage
export const LOCALSTORAGE_TOKEN_KEY = "__sayyad_secret__";

// used to convert the body into form body //x-www-form-urlencoded
export const getFormBody = (params) => {
  let formBody = [];

  for (let property in params) {
    let encodedKey = encodeURIComponent(property); //'user name' => 'user&20name'
    let encodedValue = encodeURIComponent(params[property]); //aakash 123 => aaksh%20123

    formBody.push(encodedKey + "=" + encodedValue);
  }

  return formBody.join("&"); // 'username=aakash&password=123'
};
// export const getFormBody = (parameter) => {
//   let formData = [];

//   for (let property in parameter) {
//     let encodedKey = encodeURIComponent(property);
//     let encodedVal = encodeURIComponent(parameter[property]);

//     formData.push(encodedKey + "=" + encodedVal);
//   }

//   return formData.join("&");
// };
