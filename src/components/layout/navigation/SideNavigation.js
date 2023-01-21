import React from 'react'
import Image from "next/image"
import imgElement2 from "../../../../public/images/profile_photo_circle.png"


const SideNavigation = () => {

    //Styles
    const className = {
        wrapper: `flex justify-center items-center`,
        container: `flex flex-col justify-between items-center h-screen py-10 fixed top-0`,
        languagesContainer: `flex gap-5`,
        linksContainer: `flex flex-col justify-center items-center gap-10 text-zinc-400`,
        link: `text-zinc-500 cursor-pointer`,
        socialMediaContainer: `flex flex-col justify-center items-center gap-2`,
    }

    function heroSectionHandler() {
        const element = document.getElementById('section_hero')
        if (element) {
            element.scrollIntoView({behavior: "smooth"})
        }
    }

    function servicesSectionHandler() {
        const element = document.getElementById('section_services')
        if (element) {
            element.scrollIntoView({behavior: "smooth"})
        }
    }

    function resumeSectionHandler() {
        const element = document.getElementById('section_resume')
        if (element) {
            element.scrollIntoView({behavior: "smooth"})
        }
    }

    function portfoliosSectionHandler() {
        const element = document.getElementById('section_portfolios')
        if (element) {
            element.scrollIntoView({behavior: "smooth"})
        }
    }

    function contactSectionHandler() {
        const element = document.getElementById('section_contact')
        if (element) {
            element.scrollIntoView({behavior: "smooth"})
        }
    }

    return (
        <nav className={className.wrapper}>

            <div className={className.container}>

                {/*Social Media*/}
                <div className={className.socialMediaContainer}>

                    <Image src={imgElement2} width={160} height={160} alt="hero element"/>
                    <h1 className="font-bold text-lg">علی جباری</h1>
                    <h4 className="text-[0.8rem] text-zinc-500 px-5 text-center">توسعه دهنده وبسایت و اپ موبایل</h4>

                </div>

                {/*Nav Links*/}
                <ul className={className.linksContainer}>
                    <li className={className.link} onClick={heroSectionHandler}>معرفی</li>
                    <li className={className.link} onClick={servicesSectionHandler}>خدمات</li>
                    <li className={className.link} onClick={resumeSectionHandler}>رزومه و مهارت ها</li>
                    <li className={className.link} onClick={portfoliosSectionHandler}>نمونه کارها</li>
                    <li className={className.link} onClick={contactSectionHandler}>ارتباط با من</li>
                </ul>


                {/*select Language*/}
                <div className={className.languagesContainer}>
                    <button
                    onClick={() => {
                        alert('Coming Soon!')
                    }}>
                        En
                    </button>

                    <button
                        className="p-2 bg-green text-white rounded">
                        Pe
                    </button>
                </div>
            </div>


        </nav>
    )
}

export default SideNavigation