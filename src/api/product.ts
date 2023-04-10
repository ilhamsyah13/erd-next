import axios from "axios";
import config from "../config/config";

const list = async () => {
  try {
    const result = await axios.get(`${config.domain}/product/`);
    return result.data;
  } catch (error) {
    return await error;
  }
};

const deleted = async (id: any) => {
  try {
    const result = await axios.delete(`${config.domain}/product/${id}`);
    return result;
  } catch (error) {
    return await error;
  }
};

const create = async (payload: any) => {
  try {
    const result = await axios.post(
      `${config.domain}/product/upload/`,
      payload
    );
    return result;
  } catch (error) {
    return await error;
  }
};

const update = async (payload: any) => {
  const id = parseInt(payload.get("id"));
  try {
    const result = await axios.put(
      `${config.domain}/product/upload/${id}`,
      payload
    );
    return result;
  } catch (error) {
    return await error;
  }
};

const findOne = async (id: any) => {
  try {
    const result = await axios.get(`${config.domain}/product/${id}`);
    return result.data;
  } catch (error) {
    return await error;
  }
};

const findImage = async (id: any) => {
  try {
    const result = await axios.get(`${config.domain}/product/image/${id}`);
    return result;
  } catch (error) {
    return await error;
  }
};

const allApi = {
  list,
  deleted,
  create,
  update,
  findOne,
  findImage,
};

export default allApi;
