import {Product} from "../types";
import {useEffect, useState} from "react";
import {api} from "../api";

export const useProducts = () => {
    const [products, setProducts] = useState<Product[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<any>()


    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true)
            try {
                const products = await api.getProducts()
                setLoading(false)
                setProducts(products)
            } catch (error) {
                setLoading(false)
                setError(error)
            }
        }
        fetchProducts()
    }, []);

    return {products, loading, error}
}
