interface IFetchApiProps {
  url: string;
}

export async function fetchAPi({ url }: IFetchApiProps) {
  const res = await fetch(url);
  const data = await res.json();
  return data;
}
