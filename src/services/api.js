import axios from "axios";

export const api = axios.create({
  baseURL: "https://api-tucupi.herokuapp.com",
});

export const getReservasCliente = async (email) => {
  const response = await api.get(`/reservas/email/${email}`);
  return await response.data;
};

export const deleteReservas = async (id) => {
  await api.delete(`/reservas/idReserva/${id}`);
  return 'reserva deletada com sucesso'
};

export const postReservas = async (body) => {
  const response = await api.post("/reservas", body);
  return response;
};

export const putReservas = async(email, body) => {
  const response = await api.put (`/reservas/email/${email}`, body);
  return response
}

