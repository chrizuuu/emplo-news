const post = async ({ email, password }: { email: string; password: string }) =>
  await fetch("https://afreactrecrutation.azurewebsites.net/api/Auth", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ username: email, password: password }),
  });

export default post;
