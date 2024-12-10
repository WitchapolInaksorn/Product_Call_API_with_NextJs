import Head from "next/head"
import Image from "next/image"
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

                <p className="text-2xl font-bold text-black mb-10"> Products </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
                    {product.map((item) => (
                        <Link
                            key={item.id}
                            href={`/products/${item.id}`}
                            className="mx-8 flex flex-col items-center justify-between bg-white bg-opacity-90 p-4 rounded-lg shadow-md transition-all w-[250px] h-[420px]"
                        >
                            <Image
                                src={item.image}
                                width={150}
                                height={180}
                                alt={item.title}
                                className="object-contain hover:scale-105 transition-transform"
                            />
                            <div className="flex flex-col items-center mt-3">
                                <p className="text-center text-lg font-semibold text-gray-800 h-[60px] overflow-hidden">
                                    {item.title}
                                </p>
                                <p className="text-center text-md font-bold text-green-600 mt-2">
                                    Price: ${item.price}
                                </p>
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