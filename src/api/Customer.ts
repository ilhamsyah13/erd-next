import axios from "axios";

const list = async () => {
  try {
    const result = await axios.get("http://localhost:3002/costumers");
    return result.data;
  } catch (error) {
    return error;
  }
};

const create = async (payload: any) => {
  try {
    const result = await axios.post("http://localhost:3002/costumers", payload);
    return result;
  } catch (error) {
    return error;
  }
};

const update = async (payload: any) => {
  try {
    const result = await axios.put(
      `http://localhost:3002/costumers/${payload.id}`,
      payload
    );
    return result;
  } catch (error) {
    return error;
  }
};

const findOne = async (id: any) => {
  try {
    const result = await axios.get(`http://localhost:3002/costumers/${id}`);
    return result.data;
  } catch (error) {
    return error;
  }
};

const deleted = async (id: any) => {
  try {
    const result = await axios.delete(`http://localhost:3002/costumers/${id}`);
    return result;
  } catch (error) {
    return error;
  }
};

export const allFunc = {
  list,
  create,
  update,
  findOne,
  deleted,
};

export default allFunc;
