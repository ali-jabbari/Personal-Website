import React from 'react'
import Backdrop from "@/components/ui/Backdrop"
import * as ReactDOM from "react-dom"
import {AiOutlineClose} from "react-icons/ai"
import TableItem from "@/components/ui/TableItem"

//Swiper
import {Navigation} from "swiper"
import {Swiper, SwiperSlide} from "swiper/react"

import "swiper/css"
import "swiper/css/navigation"

import Image from "next/image"
import Button from "@/components/ui/Button"

const ModalOverlay = (props) => {
    const content = (
        <div
            className="fixed top-[0%] left-[0%] right-[0%] bottom-[0%]
             lg:top-[5%] lg:left-[5%] lg:right-[5%] lg:bottom-[5%]
             z-50 bg-white p-5
            overflow-scroll shadow-2xl">

            {/*Close Button*/}
            <button
                className="fixed z-50 bg-white rounded-full shadow p-2"
                onClick={props.onCancel}>
                <AiOutlineClose size={20}/>
            </button>


            {/*Content*/}
            <div className="grid grid-cols-1 gap-2 xl:grid-cols-2 h-[90%] mt-12">

                {/*Images*/}
                <div className="sm:bg-navy rounded-lg flex justify-center items-center p-0 p-0">
                    {/*<Image src={props.data.itemImages[1]} width="260" height="auto" alt="portfolio gallery"/>*/}

                    <Swiper navigation={true} modules={[Navigation]}
                            className="w-full h-full flex justify-center items-center gap-0">
                        {props.data.itemImages.map(item => (
                            <SwiperSlide
                                className={`${props.data.type === 'APP' ? 'p-4' : 'p-0 sm:p-5'} flex justify-center items-center`}>
                                <Image src={item} width={props.data.type === 'WEBSITE' ? '600' : '300'} height="auto"
                                       alt="portfolio gallery"/>
                                {/*  unoptimized={true} priority*/}
                            </SwiperSlide>
                        ))}

                    </Swiper>

                </div>

                {/*Data*/}
                <div className="p-5">

                    {/*Title And Button*/}
                    <div className="flex justify-between items-center mb-5">
                        <h1 className="font-bold text-navy text-2xl">{props.data.title}</h1>
                        <Button color="navy" round="full" size="small">
                            مشاهده پروژه
                        </Button>
                    </div>

                    <p className="text-sm text-zinc-500 mt-2">{props.data.description}</p>

                    <h3 className="text-lg mt-7 mb-5 font-bold">جزئیات پروژه</h3>

                    {/*Table*/}
                    <div>
                        <TableItem title="موضوع پروژه" value={props.data.details.topic} color="gray"/>
                        <TableItem title="مشتری" value={props.data.details.customer} color="white"/>
                        <TableItem title="دسته بندی" value={props.data.details.category} color="gray"/>
                        <TableItem title="تکلونوژی های استفاده شده" value={props.data.details.technologies}
                                   color="white"/>
                        <TableItem title="تاریخ" value={props.data.details.date} color="gray"/>
                        <TableItem title="لینک" value={props.data.details.link} color="white"/>
                    </div>

                </div>


            </div>

        </div>
    )
    return ReactDOM.createPortal(content, document.getElementById('modal'))
}

const Modal = (props) => {

    return (
        <>
            {props.show && <Backdrop onClick={props.onCancel}/>}
            {props.show && <ModalOverlay {...props}/>}

        </>
    )
}

export default Modal