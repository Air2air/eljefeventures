import http from "./http-common";

const getAll = () => {
  return http.get("/portfolios");
};

const get = id => {
  return http.get(`/portfolios/${id}`);
};

const create = data => {
  return http.post("/portfolios", data);
};

const update = (id, data) => {
  return http.put(`/portfolios/${id}`, data);
};

const remove = id => {
  return http.delete(`/portfolios/${id}`);
};


const findByPortName = portName => {
  return http.get(`/portfolios?portName=${portName}`);
};

export default {
  getAll,
  get,
  create,
  update,
  remove,
  findByPortName
};