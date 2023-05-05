import Nav from "@/components/nav/Nav"
import Footer from "@/components/footer/Footer"
import Head from "next/head"

export default function Layout({children}) {
    return (
        <>

            <Head>
                <title>Dan.Slezak</title>
            </Head>
            <div className="min-h-screen flex flex-col">
                <Nav></Nav>
                <main className="flex flex-col flex-1 min-h-full">{children}</main>
                <Footer></Footer>
            </div>

        </>
    )
}