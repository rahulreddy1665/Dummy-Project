import axios from "axios";

const URL = "http://3.7.26.208/api/";

const fetchCredentials = async () => {
  try {
    const credentials = await localStorage.getItem("token");
    if (credentials) {
      return {
        headers: {
          Bearer: credentials,
        },
      };
    } else {
      console.log("No credentials stored");
    }
  } catch (error) {
    console.log("Keychain couldn't be accessed!", error);
  }
  return false;
};

// For login user
export const handelLogin = async (request) => {
  try {
    const response = await axios.post(URL + "auth/login", request);
    return response;
  } catch (error) {
    return error.response;
  }
};
