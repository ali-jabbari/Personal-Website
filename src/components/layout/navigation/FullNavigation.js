import React from 'react'
import Link from "next/link"
import Image from "next/image"
import icTelegram from "../../../../public/images/ic_telegram.svg"
import icInstagram from "../../../../public/images/ic_instagram.svg"
import icWhatsapp from "../../../../public/images/ic_whatsapp.svg"
import {AiFillInstagram, AiOutlineClose} from "react-icons/ai"
import {useAtom} from "jotai"
import {isNavSideOpen} from "@/states/state"
import * as ReactDOM from "react-dom"
import {IoLogoWhatsapp} from "react-icons/io"
import {SiTelegram} from "react-icons/si"
import {BsGithub, BsLinkedin} from "react-icons/bs"


const FullNavigation = () => {
    const [,setIsSideOpen] = useAtom(isNavSideOpen)

    function closeNavHandler() {
        setIsSideOpen(false)
    }

    function heroSectionHandler() {
        const element = document.getElementById('section_hero')
        if (element) {
            element.scrollIntoView({behavior: "smooth"})
        }
        setIsSideOpen(false)
    }

    function servicesSectionHandler() {
        const element = document.getElementById('section_services')
        if (element) {
            element.scrollIntoView({behavior: "smooth"})
        }
        setIsSideOpen(false)
    }

    function resumeSectionHandler() {
        const element = document.getElementById('section_resume')
        if (element) {
            element.scrollIntoView({behavior: "smooth"})
        }
        setIsSideOpen(false)
    }

    function portfoliosSectionHandler() {
        const element = document.getElementById('section_portfolios')
        if (element) {
            element.scrollIntoView({behavior: "smooth"})
        }
        setIsSideOpen(false)
    }

    function contactSectionHandler() {
        const element = document.getElementById('section_contact')
        if (element) {
            element.scrollIntoView({behavior: "smooth"})
        }
        setIsSideOpen(false)
    }

    //Styles
    const className = {
        wrapper: `bg-white fixed top-0 bottom-0 right-0 left-0 z-50`,
        closeButton: `w-full text-start mt-10 mr-10`,
        listContainer: `flex flex-col justify-center items-center gap-10 text-zinc-400`,
        link: `text-zinc-500 cursor-pointer`,
        socialMediaContainer: `flex gap-4 mb-10`,
    }

    const content =  <nav className={className.wrapper}>

        <div className="w-full h-full flex flex-col justify-between items-center">
            {/*Close Full Navigation*/}
            <button className={className.closeButton} onClick={closeNavHandler}>
                <AiOutlineClose size={22}/>
            </button>

            {/*Nav Links*/}
            <ul className={className.listContainer}>
                <li className={className.link} onClick={heroSectionHandler}>معرفی</li>
                <li className={className.link} onClick={servicesSectionHandler}>خدمات</li>
                <li className={className.link} onClick={resumeSectionHandler}>رزومه و مهارت ها</li>
                <li className={className.link} onClick={portfoliosSectionHandler}>نمونه کارها</li>
                <li className={className.link} onClick={contactSectionHandler}>ارتباط با من</li>
            </ul>

            {/*Social Media*/}
            <div className="flex flex-wrap justify-start items-center gap-3 p-10">

                <Link href="https://instagram.com/ali.__jabbari" target="_blank">
                    <div className="bg-navy inline-block p-3 rounded-lg cursor-pointer hover:bg-orange">
                        <AiFillInstagram size={25} className="text-white"/>
                    </div>
                </Link>

                <Link href="https://wa.me/+989173898837" target="_blank">
                    <div className="bg-navy inline-block p-3 rounded-lg cursor-pointer hover:bg-orange">
                        <IoLogoWhatsapp size={25} className="text-white"/>
                    </div>
                </Link>

                <Link href="tg://resolve?domain=ali._jabb" target="_blank">
                    <div className="bg-navy inline-block p-3 rounded-lg cursor-pointer hover:bg-orange">
                        <SiTelegram size={25} className="text-white"/>
                    </div>
                </Link>

                <Link href="https://github.com/ali-jabbari" target="_blank">
                    <div className="bg-navy inline-block p-3 rounded-lg cursor-pointer hover:bg-orange">
                        <BsGithub size={25} className="text-white"/>
                    </div>
                </Link>

                <Link href="https://www.linkedin.com/in/ali-jabbari-7455891a9" target="_blank">
                    <div className="bg-navy inline-block p-3 rounded-lg cursor-pointer hover:bg-orange">
                        <BsLinkedin size={25} className="text-white"/>
                    </div>
                </Link>

            </div>
            {/*<div className={className.socialMediaContainer}>*/}

            {/*    <Link href="/">*/}
            {/*        <Image src={icTelegram} width={25} height={25} alt="telegram"/>*/}
            {/*    </Link>*/}

            {/*    <Link href="/">*/}
            {/*        <Image src={icInstagram} width={25} height={25} alt="instagram"/>*/}
            {/*    </Link>*/}

            {/*    <Link href="/">*/}
            {/*        <Image src={icWhatsapp} width={25} height={25} alt="whatsapp"/>*/}
            {/*    </Link>*/}

            {/*</div>*/}
        </div>

    </nav>

    return (
        <>
            {ReactDOM.createPortal(content, document.getElementById('full_nav_portal'))}
        </>

    )
}

export default FullNavigation