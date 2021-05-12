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

export async function deleteSauce(id) {
  const response = await request.delete(`${URL}/${id}`);
  return response.body;
}

export async function addSauce(sauce) {
  const response = await await request.post(URL).send(sauce);
  return response.body;
}

export async function updateSauce(sauce) {
  const response = await await request.put(`${URL}/${sauce.id}`).send(sauce);
  return response.body;
}