import * as SecureStore from "expo-secure-store";

async function fetchWithToken(url, options) {
  const token = await SecureStore.getItemAsync("token");

  if (!token) {
    throw new Error("Something went wrong :(");
  }

  const opt = { ...options };

  if (!Object.prototype.hasOwnProperty.call(opt, "headers")) {
    opt.headers = {};
  }

  opt.headers.authorization = `Bearer ${token}`;

  const response = await fetch(url, opt);
  if (response.status !== 200) {
    throw new Error(`Request failed with status ${response.status}.`);
  }

  const body = await response.json();

  if (body.error) {
    throw new Error(body.error);
  }

  return body;
}

export default fetchWithToken;
