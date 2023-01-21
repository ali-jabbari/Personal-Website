import Navigation from "@/components/layout/navigation/Navigation"
import SideNavigation from "@/components/layout/navigation/SideNavigation"
import Hero from "@/components/home/Hero"
import Services from "@/components/home/Services"
import ResumeAndSkills from "@/components/home/ResumeAndSkills"
import Portfolio from "@/components/home/Portfolio"
import Contact from "@/components/home/Contact"
import Footer from "@/components/layout/footer/Footer"
import Head from "next/head"

export default function Home() {

    return (
        <>
            <Head>
                <title>توسعه دهنده وبسایت و اپ موبایل | علی جباری</title>
                <meta name="description" content="this is my personal website, i'm web developer and android developer."/>
            </Head>

            <div className="grid w-full lg:grid-cols-[20%_80%] xl:grid-cols-[20%_80%]">

                {/*Side Navigation*/}
                <div className="hidden shadow-lg lg:block bg-white">
                    <SideNavigation/>
                </div>

                {/*Main*/}
                <div className="">
                    {/*/!*Top Navigation*!/*/}
                    <Navigation/>

                    {/*/!*Hero*!/*/}
                    <Hero/>

                    {/*/!*Services*!/*/}
                    <Services/>

                    {/*/!*Resume And Skills*!/*/}
                    <ResumeAndSkills/>

                    {/*/!*Portfolio*!/*/}
                    <Portfolio/>

                    {/*/!*Contact me*!/*/}
                    <Contact/>

                    {/*/!*Footer*!/*/}
                    <Footer/>

                </div>
            </div>
        </>
    )
}
