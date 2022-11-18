import fetchWithToken from "./fetchWithToken";

export const get = async () =>
  fetchWithToken(
    "https://afreactrecrutation.azurewebsites.net/api/Messages?page=0"
  );

export const getNews = async ({ pageParam }: { pageParam: number }) => {
  return fetchWithToken(
    "https://afreactrecrutation.azurewebsites.net/api/Messages?" +
      new URLSearchParams({
        page: pageParam.toString(),
      })
  );
};
