import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { IoChevronBack } from "react-icons/io5";
export default function ProductDetail({ product }) {
    console.log("-- ", product)
    return (
        <div>
            <Head>
                <title>
                    Product Detail Page
                </title>
            </Head>
            <div
                className="min-h-screen justify-items-center p-5 
                bg-white">

                    <Link href={"/products"} className="flex justify-self-start text-black font-bold text-xl">
                        <IoChevronBack />
                    </Link>

                <div className="w-full md:w-1/2">
                    <p className="text-black font-bold text-2xl text-center"> {product.title} </p>
                    <Image src={product.image}
                        alt={product.title}
                        className="w-[180px] w-[220px] justify-self-center mt-7 mb-10"
                        width={180}
                        height={220} />

                    <div className="text-md">
                        <p className="mb-2">
                            <b className="text-indigo-500">Category : </b>
                            <b className="text-indigo-300">{product.category}</b>
                        </p>
                        <p className="mb-2">
                            <b className="text-emerald-500">Description : </b>
                            <b className="text-emerald-300">{product.description}</b>
                        </p>
                        <p className="mb-2">
                            <b className="text-yellow-500">Price : </b>
                            <b className="text-yellow-300">{product.price}$</b>
                        </p>
                        <p className="mb-2">
                            <b className="text-orange-500">Rating : </b>
                            <b className="text-orange-300">{product.rating.rate}</b>
                        </p>
                        <p className="mb-2">
                            <b className="text-red-500">Count : </b>
                            <b className="text-red-300">{product.rating.count}</b>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export async function getServerSideProps(context) {
    const resp = await fetch(`https://fakestoreapi.com/products/${context.params.id}`);
    const product = await resp.json()

    return {
        props: { product }
    }
}