import React, {useState} from "react"
import Image from "next/image"
import Modal from "@/components/ui/Modal"

import lingimo_pre from '../../../public/images/portfolios/lingimo/lingimo_pre.png'
import lingimo_1 from '../../../public/images/portfolios/lingimo/lingimo_1.jpg'
import lingimo_2 from '../../../public/images/portfolios/lingimo/lingimo_2.jpg'
import lingimo_3 from '../../../public/images/portfolios/lingimo/lingimo_3.jpg'
import lingimo_4 from '../../../public/images/portfolios/lingimo/lingimo_4.jpg'
import lingimo_5 from '../../../public/images/portfolios/lingimo/lingimo_5.jpg'
import lingimo_6 from '../../../public/images/portfolios/lingimo/lingimo_6.jpg'

import fullmath_pre from '../../../public/images/portfolios/fullmath/fullmath_pre.png'
import fullmath_1 from '../../../public/images/portfolios/fullmath/fullmath_1.png'
import fullmath_2 from '../../../public/images/portfolios/fullmath/fullmath_2.png'
import fullmath_3 from '../../../public/images/portfolios/fullmath/fullmath_3.png'
import fullmath_4 from '../../../public/images/portfolios/fullmath/fullmath_4.png'

import karresume_pre from '../../../public/images/portfolios/karresume/karresume_pre.png'
import karresume_1 from '../../../public/images/portfolios/karresume/karresume_1.png'
import karresume_2 from '../../../public/images/portfolios/karresume/karresume_2.png'
import karresume_3 from '../../../public/images/portfolios/karresume/karresume_3.png'
import karresume_4 from '../../../public/images/portfolios/karresume/karresume_4.png'

//data
const data = [
    {
        id: 1,
        preImage: karresume_1,
        itemImages: [karresume_1, karresume_2, karresume_3, karresume_4],
        title: 'کار رزومه',
        type: 'WEBSITE',
        description: 'کار رزومه یک رزومه ساز آنلاین با بیش از 10 قالب متنوع است که شما میتوانید رزومه حرفه ای خود را در کمتر از 10 دقیقه به دو زبان فارسی و انگلیسی بسازید، پس از ورود و تکمیل اطلاعات کافیست تا قالب خود را انتخاب کرده و در فرمت های مختلف نظیر ورد و PDF رزومه خود را دریافت کنید.',
        details: {
            topic: 'وب اپلیکیشن ساخت رزومه آنلاین',
            customer: 'کار رزومه',
            category: 'کاربردی',
            technologies: 'React, Next.js, Node.js, MongoDB',
            date: '1401/11/1',
            link: '',
        },
        comingSoon: true
    },
    {
        id: 2,
        preImage: lingimo_pre,
        itemImages: [lingimo_1, lingimo_2, lingimo_3, lingimo_4, lingimo_5,lingimo_6],
        title: 'لینگیمو',
        type: 'APP',
        description: 'لینگیمو یک اپلیکیشن آموزش زبان انگلیسی است که در آن کاربر قادر به یادگیری مکالمه زبان انگلیسی، واژگان جدید زبان انگلیسی، تلفظ زبان و الفبای زبان خواهد بود. همچنین این اپلیکیشن شامل یک لاینتر کامل میباشد که به کاربر کمک خواهد کرد مطالب یاد گرفته شده در برنامه را مرور کرده و به حافظه بلند مدت خود انتقال دهد. همچنین با قابلیت تست تلفظ لغات و جملات کاربر قادر خواهد بود از صحت تلفظ خود اطمینان حاصل کند.',
        details: {
            topic: 'اپلیکیشن اندروید آموزش زبان انگلیسی',
            customer: 'لینگیمو',
            category: 'آموزش',
            technologies: 'Kotlin, Java, Native Android, Sqlite',
            date: '1401/2/1',
            link: 'https://lingimo.ir',
        },
        comingSoon: false
    },
    {
        id: 3,
        preImage: fullmath_pre,
        itemImages: [fullmath_1, fullmath_2, fullmath_3, fullmath_4],
        title: 'فول مت',
        type: 'APP',
        description: 'این نرم افزار یک مرجع کامل در دسترس برای دانشجویان و مهندسین به شمار می رود. \n' +
            '\n' +
            '\n' +
            'این نرم افزار کلیه روابط از ریاضیات دبیرستان تا ریاضیات مهندسی مقطع کارشناسی و پیشرفته، اقتصاد، علوم تجربی و ریاضیات را دربر می گیرد.  \n' +
            '\n' +
            '\n' +
            'این مجموعه شامل صدها فرمول، جداول، و شکلهایی مربوط به مجموعه های اعداد، جبر، هندسه، مثلثات، ماتریسها و دترمینانها، بردارها، هندسه تحلیلی، حسابان، معادلات دیفرانسیل، سریها، و نظریه احتمالات است. ' +
            ' فهرست ساختاریافته، ارتباطها، و آرایش این اپ، موجب یافتن سریع و آسان اطلاعات مرتبط می شود، به گونه ای که می توان از آن به عنوان یک راهنمای مرجع سریع روزمره بهره گرفت.',
        details: {
            topic: 'اپلیکیشن اندروید فول مت',
            customer: 'فول مت',
            category: 'آموزش',
            technologies: 'Java, Native Android, Sqlite, Material Ui',
            date: '1399/8/1',
            link: 'https://cafebazaar.ir/app/com.pidest.fullmath.fullmathfa',
        },
        comingSoon: false
    },
]

const Portfolio = () => {

    const [modal, setModal] = useState({isOpen: false, item: {}})

    const [portfolios, setPortfolios] = useState(data)
    const [activeLink, setActiveLink] = useState('ALL')

    const allClickHandler = () => {
        setActiveLink('ALL')
        setPortfolios(data)
    }

    const websitesClickHandler = () => {
        setActiveLink('WEBSITES')
        setPortfolios(data.filter(item => item.type === 'WEBSITE'))
    }

    const appsClickHandler = () => {
        setActiveLink('APPS')
        setPortfolios(data.filter(item => item.type === 'APP'))
    }

    //Styles
    const className = {
        wrapper: `container text-center`,
        title: `text-navy text-2xl font-bold text-center inline-block mt-16 mb-7`,
        //border-b-4 border-orange
        controlsContainer: `flex justify-center gap-2 mb-10`,
        itemsContainer: `grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3`,
        // itemsContainer: ``,
        itemContainer: `flex flex-col bg-white cursor-pointer hover:bg-navy group rounded-lg`,
        //p-5 rounded-lg 2xl:p-7
        itemTitle: `font-bold text-xl p-2 text-navy group-hover:text-white`
    }

    return (
        <>
            {/*Modal*/}
            <Modal
                show={modal.isOpen}
                data={modal.item}
                onCancel={() => setModal({isOpen: false, item: {}})}
            />

            <div className={className.wrapper} id="section_portfolios">
                <h1 className={className.title}>نمونه کار ها</h1>

                {/* Controls */}
                <div className={className.controlsContainer}>
                    <button
                        className={activeLink === 'ALL' ? 'text-white px-4 py-1 bg-orange rounded-full' : 'text-zinc-400 px-4 py-1 rounded-full'}
                        onClick={allClickHandler}>
                        همه
                    </button>
                    <button
                        className={activeLink === 'WEBSITES' ? 'text-white px-4 py-1 bg-orange rounded-full' : 'text-zinc-400 px-4 py-1 rounded-full'}
                        onClick={websitesClickHandler}>
                        وبسایت
                    </button>
                    <button
                        className={activeLink === 'APPS' ? 'text-white px-4 py-1 bg-orange rounded-full' : 'text-zinc-400 px-4 py-1 rounded-full'}
                        onClick={appsClickHandler}>
                        اپلیکیشن موبایل
                    </button>
                </div>

                {/* Items */}
                <div className={className.itemsContainer}>

                    {/* Item */}
                    {portfolios.map((item, index) => (
                        <div
                            key={index}
                            className={className.itemContainer}
                            onClick={async () => {
                                setModal({isOpen: true, item: item})
                            }}>

                            <div className="w-full h-72 bg-navy bg-cover rounded-t-lg bg-cover
                            flex justify-center items-center">
                                {/*style={{backgroundImage: `url(${item.image.src})`}}*/}
                                <Image className="" src={item.preImage} width={`${item.type === "APP" ? '240' : '270'}`}
                                       height="auto" alt="portfolio pre design"/>
                                {/*unoptimized={true} priority*/}
                            </div>

                            <div className="p-5 mt-3 mb-3">

                                <div className="w-full flex justify-between items-center">
                                    <h1 className={className.itemTitle}>{item.title}</h1>
                                    <h4 className="text-zinc-500 text-xs bg-background py-2 px-4 rounded-full">{item.type === 'APP' ? 'اپلیکیشن موبایل' : 'وبسایت'}</h4>
                                </div>

                                <p className="text-sm text-zinc-400 text-start mt-3 overflow-ellipsis whitespace-nowrap overflow-hidden">
                                    {item.description}
                                </p>

                            </div>

                        </div>
                    ))}


                </div>

            </div>
        </>
    )
}

export default Portfolio
