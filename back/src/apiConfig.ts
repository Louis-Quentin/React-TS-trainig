import { get } from 'env-var';

const env = (key: string, required = true) => get(key).required(required);

export const API_CODE = env("API_CODE").asString();

export const PORT = env("PORT").asPortNumber();
export const HOST = env("HOST").asString();
