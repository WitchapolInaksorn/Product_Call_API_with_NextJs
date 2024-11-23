import "@/styles/globals.css";
import { Space_Mono, DM_Sans } from "next/font/google"

const spaceMono = Space_Mono({
  weight: ["400","700"],
  subsets: ["latin"]
})


export default function App({ Component, pageProps }) {
  return (
    <>
      <div className={`${spaceMono.className}`}>
        <Component {...pageProps} />
      </div>
    </>

  );
}
