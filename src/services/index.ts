import axios from "axios";

const baseURL = "https://libgen.is";

const client = axios.create({ baseURL });

export default client;
