import http from "./http-common";

const getAll = () => {
  return http.get("/studies");
};

const get = id => {
  return http.get(`/studies/${id}`);
};

const create = data => {
  return http.post("/studies", data);
};

const update = (id, data) => {
  return http.put(`/studies/${id}`, data);
};

const remove = id => {
  return http.delete(`/studies/${id}`);
};


const findByTitle = title => {
  return http.get(`/studies?title=${title}`);
};

export default {
  getAll,
  get,
  create,
  update,
  remove,
  findByTitle
};