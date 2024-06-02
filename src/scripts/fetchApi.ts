export default function FetchApi(route: string, headers: any) {
  return fetch("/api/" + route, headers)
    .then((resp) => resp.json())
    .then((data) => {
      return data;
    })
    .catch((err) => console.error(err));
}
