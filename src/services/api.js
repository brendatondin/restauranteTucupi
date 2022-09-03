import axios from "axios";

export const api = axios.create({
  baseURL: "https://api-tucupi.herokuapp.com",
});

export const getReservasCliente = async (email) => {
  const response = await api.get(`/reservas/email/${email}`);
  return await response.data.dados;
};

export const deleteReservas = async (id) => {
  await api.delete(`/reservas/idReserva/${id}`);
};

export const postReservas = async (body) => {
  const response = await api.post("/reservas", body);
  const json = await response.data.dados;
  console.log(json);
  return json;
};

