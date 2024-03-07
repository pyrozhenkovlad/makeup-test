import axios, { AxiosResponse} from "axios";
import {Product} from "../types";

axios.defaults.baseURL = "http://makeup-api.herokuapp.com/api/v1"
export const api = {
     getProducts: async () => {
        try {
            const response: AxiosResponse<Product[]> = await axios.get('/products.json')
            return response.data
        } catch (error) {
            throw new Error()
        }
    }
}
