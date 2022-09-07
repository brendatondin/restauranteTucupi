import axios from "axios";

export const api = axios.create({
  baseURL: "https://api-tucupi.herokuapp.com",
});

export const getTodasAsReservas = async () => {
  const response = await api.get("/reservas");
  return response;
};

export const getReservasUmCliente = async (email) => {
  const response = await api.get(`/reservas/email/${email}`);
  return response;
};

export const deleteReservas = async (id) => {
  await api.delete(`/reservas/idReserva/${id}`);
  return 'reserva deletada com sucesso'
};

export const postReservas = async (body) => {
  const response = await api.post("/reservas", body);
  const json = await response.data;
  console.log(json);
  return json;
};



export const putReservas = async(idReserva, body) => {
  const response = await api.put(`/reservas/idReserva/${idReserva}`, body);
  return response
}

