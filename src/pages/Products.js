import { useEffect, useState } from "react"
import Navbar from "../components/navbar/Navbar"
import Card from "../components/ui/Card"
import ProductsList from "../components/products/ProductsList"

const Products = () => {
    return (
        <>
            <Navbar />
            <ProductsList />
        </>
    )
}

export default Products