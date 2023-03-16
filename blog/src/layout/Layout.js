import Nav from "@/components/nav/Nav"
import Footer from "@/components/footer/Footer"
import Head from "next/head"

export default function Layout({children}) {
    return (
        <>

            <Head>
                <title>Dan.Slezak</title>
            </Head>

            <Nav></Nav>
            <main>{children}</main>
            <Footer></Footer>
        </>
    )
}