import React from "react"
import imgElement1 from "../../../public/images/hero_element.png"
import imgElement2 from "../../../public/images/profile_photo_circle.png"
import Button from "@/components/ui/Button"
import {RiContactsFill} from "react-icons/ri"
import {IoMdPaper} from "react-icons/io"
import Image from "next/image"


const Hero = () => {

    //Styles
    const className = {
        wrapper: `bg-gradient-to-l from-green to-greenLight`,
        container: `container flex flex-col justify-center items-center
        w-full py-10 bg-cover bg-no-repeat bg-center
        md:h-screen lg:py-0 lg:flex lg:flex-row-reverse lg:justify-around
        xl:gap-0`,
        element1Container: `w-60
        2xl:w-80 
        hidden lg:block lg:w-[12rem] xl:w-[20rem] 2xl:w-[30rem]`,
        element2Container: `w-60 h-60 rounded-full mb-5
        2xl:w-80 2xl:h-80
        lg:hidden`,
        content: `text-center p-4
        flex flex-col justify-center items-center
        lg:text-start lg:p-0 lg:w-[30rem] lg:justify-start lg:items-start
        xl:w-[40rem]`,
        name: `text-navy font-bold text-5xl
        p-5 bg-greenWhite rounded-xl inline
        lg:text-7xl`,
        jobContainer: `text-navy bg-greenWhite py-4 px-0 sm:px-4 rounded-lg mt-2 mb-4 text-sm sm:text-2xl 2xl:text-3xl`,
        jobText: `font-iranSansMedium overflow-hidden whitespace-nowrap animate-typing px-3 sm:border-l sm:border-orange`,
        description: `text-white text-center leading-6
                        sm:px-10
                        lg:px-0
                        lg:text-start`,
        description2: `text-white text-center mt-3 leading-6
                        sm:px-10
                        lg:px-0
                        lg:text-start`,
        buttonsContainer: `flex flex-col w-full justify-center gap-3 mt-10
                        sm:flex-row sm:w-auto
                        lg:justify-start`,
    }

    function contactClickHandler() {
        const element = document.getElementById('section_contact')
        if (element) {
            element.scrollIntoView({behavior: "smooth"})
        }
    }

    function portfolioClickHandler() {
        const element = document.getElementById('section_portfolios')
        if (element) {
            element.scrollIntoView({behavior: "smooth"})
        }
    }

    return (
        <div className={className.wrapper} id="section_hero">
            <div className={className.container}>

                {/*Pic Element*/}
                <div className={className.element1Container}>
                    <Image src={imgElement1} width="auto" height="auto" alt="hero element"/>
                </div>

                <div className={className.element2Container}>
                    <Image src={imgElement2} width="auto" height="auto" alt="hero element"/>
                </div>

                {/*Content*/}
                <div className={className.content}>
                    <h1 className={className.name}>علی جباری</h1>

                    {/*Job*/}
                    <div className={className.jobContainer}>
                        <h1 className={className.jobText}>توسعه دهنده وبسایت و اپلیکیشن موبایل</h1>
                    </div>


                    <p className={className.description}>
                        برنامه نویس و علاقه مند به توسعه نرم افزار های تحت وب با تکلونوژی های مدرن نظیر React, Next, Node و توسعه اپلیکیشن های اندروید با Kotlin هستم، همچنین علاقه مند به طراحی رابط کاربری، اجرا و پیاده سازی ایده های نو و استارتاپی هستم.
                    </p>



                    <div className={className.buttonsContainer}>
                        <Button
                            size="normal"
                            color="white"
                            round="full"
                            icon={<RiContactsFill/>}
                            onClick={contactClickHandler}>
                            ارتباط با من
                        </Button>

                        <Button size="normal" color="navy" round="full" icon={<IoMdPaper/>}
                        onClick={portfolioClickHandler}>
                            نمونه کار ها
                        </Button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Hero
