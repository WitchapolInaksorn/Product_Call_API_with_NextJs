import Head from "next/head"
import product1 from "../../../public/assets/images/gpro-image.webp"
import Mycomponent from "@/components/component"
import Image from "next/image"
import { Component } from "react"
import Link from "next/link"
export default function Product({ product }) {
    console.log("---", product)
    return (
        <div>
            <Head>
                <title> Product Page </title>
            </Head>

            <div
                className="min-h-screen justify-items-center p-5 
                bg-white">

                <p className="text-2xl font-bold text-black "> Products </p>
                <p className="text-2xl font-bold mb-10 text-black "> Owen Shop </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center">

                    {product.map((item) => (
                        <Link key={item.id}
                            href={`/products/${item.id}`}
                            className="mix-blend-multiply border-dotted border-2 border-black w-[250px] h-[380px] mx-10 mb-5">

                            <div className="flex flex-col gap-3 items-center mt-3 ">
                                <Image src={item.image}
                                width={"180"}
                                height={"200"}
                                    alt="G-Pro Image"
                                    className="w-[180px] h-[220px] mx-3 justify-self-center hover:scale-105" />
                                <p className="mt-3 mx-3 text-black font-bold"> {item.title} </p>

                            </div>
                            <div>
                                <p className="mx-3 text-black font-bold"> Price : {item.price} </p>
                            </div>

                        </Link>
                    ))}
                </div>
            </div>

        </div>

    )
}

export async function getServerSideProps(context) {
    const resp = await fetch(`https://fakestoreapi.com/products`)
    const product = await resp.json()

    return {
        props: { product }
    }
}