type FetchType = {
  path: string;
  method?: 'get' | 'post' | 'delete' | 'PATCH';
  body?: any;
};

const API_HOST = 'http://localhost:3000';

export const fetchFromApi = async ({ path, method, body }: FetchType) => {
  const res = await fetch(`${API_HOST}/${path}`, {
    headers: {
      'Content-Type': 'application/json',
    },
    method,
    body: body && JSON.stringify(body),
  });

  if (res.ok) {
    return res.json();
  }

  throw new Error();
};
