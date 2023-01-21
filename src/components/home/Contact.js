import React from "react"
import Input from "@/components/ui/Input"
import Button from "@/components/ui/Button"
import contactImg from '../../../public/images/contact.png'
import Image from "next/image"
import {IoLogoWhatsapp} from "react-icons/io"
import {AiFillInstagram, AiFillPhone} from "react-icons/ai"
import {BsGithub, BsLinkedin} from "react-icons/bs"
import {SiTelegram} from "react-icons/si"
import Link from "next/link"
import {FaMapMarkerAlt} from "react-icons/fa"
import {MdEmail} from "react-icons/md"

const Contact = () => {
    //Styles
    const className = {
        wrapper: `bg-darkerWhite mt-16 pt-16 pb-20 lg:pb-32 lg:mt-32`,
        container: `container text-center`,
        title: `text-navy text-2xl font-bold text-center inline-block border-b-4 border-orange pb-2 mb-16`,
        sendMessageContainer: `flex flex-col gap-3 bg-white p-10 h-fit `,
        contactInfoContainer: `flex flex-col gap-3 bg-white p-10`,
        itemsContainer: `grid grid-cols-1 gap-5 xl:grid-cols-2`,
        itemTitle: `text-navy text-2xl font-bold text-start inline-block mt-5`,
        contactContainer: `grid grid-cols-1 gap-3 mt-5 2xl:grid-cols-2`,
        contactItem: `flex flex-col justify-start items-start border-2 border-gray-100 rounded-lg py-5 px-3 hover:bg-darkerWhite`,
        contactItemTitleContainer: `flex justify-center items-center gap-2`,
        contactItemValue: `text-sm text-zinc-500 mr-6 mt-2 font-iranSansMedium`
    }

    return (
        <div className={`${className.wrapper}`} id="section_contact">
            <div className={className.container}>
                <h1 className={className.title}>ارتباط با من</h1>

                {/* items container */}
                <div className={className.itemsContainer}>
                    {/*Send Message*/}
                    <div className={className.sendMessageContainer}>
                        <h1 className={`${className.itemTitle} mb-7`}>ارسال پیام</h1>
                        <Input element="text" placeholder="نام"/>
                        <Input element="text" placeholder="ایمیل" ltr/>
                        <Input element="text" placeholder="شماره تماس" ltr/>
                        <Input element="textarea" placeholder="پیام"/>
                        <Button size="normal" color="green" round="small" className="w-full 2xl:w-[10rem]">
                            ارسال پیام
                        </Button>
                    </div>

                    {/*Send Message*/}
                    <div className={className.contactInfoContainer}>

                        <Image src={contactImg} width="auto" height="auto" alt="contact"/>

                        <h1 className={className.itemTitle}>مشخصات تماس</h1>

                        <div className={className.contactContainer}>

                            <div className={className.contactItem}>
                                <div className={className.contactItemTitleContainer}>
                                    <FaMapMarkerAlt color="#44BFA7"/>
                                    <h1 className="font-bold">محل زندگی</h1>
                                </div>
                                <h4 className={className.contactItemValue}>شیراز</h4>
                            </div>


                            <div className={`${className.contactItem}`}>
                                <div className={className.contactItemTitleContainer}>
                                    <AiFillPhone color="#44BFA7"/>
                                    <h1 className="font-bold">موبایل</h1>
                                </div>
                                <h4 className={className.contactItemValue} dir="ltr">0917 389 8837</h4>
                            </div>

                            <div className={`${className.contactItem}`}>
                                <div className={className.contactItemTitleContainer}>
                                    <MdEmail color="#44BFA7"/>
                                    <h1 className="font-bold">ایمیل</h1>
                                </div>
                                <h4 className={className.contactItemValue} dir="ltr">Md.ali.jabb@gmail.com</h4>
                            </div>

                        </div>


                        {/*Media*/}
                        <h1 className="mt-5 text-start font-bold text-navy">مدیا</h1>

                        <div className="flex flex-wrap justify-start items-center gap-3">

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


                    </div>


                </div>

            </div>
        </div>
    )
}

export default Contact
