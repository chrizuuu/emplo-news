import fetchWithToken from "./fetchWithToken";

export const get = async () =>
  fetchWithToken(
    "https://afreactrecrutation.azurewebsites.net/api/Messages?page=0"
  );
