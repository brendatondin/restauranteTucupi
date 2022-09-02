import axios from "axios";

export const api = axios.create({
  baseURL: "",
});

export const getReservas = async () => {
  const response = await api.get("/menu");
  return response.data.dados;
};

export const deleteReservas = async (produto) => {
  await api.delete(`/menu/produto/${produto}`);
};

export const postReservas = async (body) => {
  const response = await api.post("/menu", body);
  const json = await response.data.dados;
  console.log(json);
  return json;
};

// export const postProduto = async (data) => {
//   const response = await api.post("/menu", data)
//   return response.data.dados;
// }

// https://api-pub-project.herokuapp.com/menu -- Rota Get
// https://api-pub-project.herokuapp.com/menu/produto/:produto -- Rota Get(parametro)
// https://api-pub-project.herokuapp.com/menu -- Rota Post
// https://api-pub-project.herokuapp.com/menu/produto/:produto -- Rota Put
// https://api-pub-project.herokuapp.com/menu/produto/:produto -- Rota Delete
