import request from 'superagent';

const URL = '/api/sauces';

export async function getSauces() {
  const response = await request.get(URL);
  return response.body;
}

export async function getSauce(id) {
  const response = await request.get(`${URL}/${id}`);
  return response.body;
}