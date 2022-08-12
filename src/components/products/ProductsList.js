import { useEffect, useState } from "react"
import styles from "./ProductsList.module.css"
import Card from "../ui/Card"

const ProductsList = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setData(json))
    }, [])

    return (
        <div className={styles.container}>
            {data.map((product) => <Card product={product}></Card>)}
        </div>
    )

}

export default ProductsList