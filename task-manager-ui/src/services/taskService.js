import axios from "axios";

const API_URL = "http://localhost:8080/tasks";

export const getAllTasks = () => axios.get(API_URL);

export const createTask = (task) => axios.post(API_URL, task);

export const deleteTask = (id) => axios.delete(`${API_URL}/${id}`);

export const updateStatus = (id, status) =>
  axios.put(`${API_URL}/${id}/status?status=${status}`);

