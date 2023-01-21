import {AiOutlineMobile} from "react-icons/ai"
import {GoBrowser} from "react-icons/go"
import {BiUser} from "react-icons/bi"
import {MdOutlineColorLens} from "react-icons/md"


const Services = () => {

    //Styles
    const className = {
        wrapper: `container text-center`,
        title: `text-navy text-2xl font-bold text-center inline-block my-10 border-b-4 border-orange xl:my-14`,
        itemsContainer: `grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4`,
        item: `flex flex-col justify-center items-center text-navy
                    bg-white rounded-xl px-5 pb-10 pt-16 w-full
                    hover:bg-gradient-to-br hover:from-white hover:to-gray-200`,
        itemTitle: `text-navy font-bold text-lg mt-7`,
        itemDescription: `text-zinc-400 text-sm mt-3`
    }


    return (
        <div className={className.wrapper} id="section_services">
            <h1 className={className.title}>خدمات</h1>

            <div className={className.itemsContainer}>

                <div className={className.item}>
                    <GoBrowser size={30} className="text-navy"/>
                    <h1 className={className.itemTitle}>طراحی وبسایت و وب اپلیکیشن</h1>
                    <p className={className.itemDescription}>
                        داشتن یک وبسایت برای هر کسب و کاری لازم هست، برای طراحی انواع وبسایت های استاتیک و داینامیک نظیر وبسایت شرکتی، فروشگاهی، شخصی، وبلاگ و یا ایده های شخصی خود تماس بگیرید.
                    </p>
                </div>

                <div className={className.item}>
                    <AiOutlineMobile size={30} className="text-navy"/>
                    <h1 className={className.itemTitle}>طراحی اپلیکیشن موبایل</h1>
                    <p className={className.itemDescription}>
                        اهمیت اپلیکیشن های موبایل هر روزه بیشتر میشه، شما میتونید با داشتن یک اپ موبایل کسب و کار خودتون
                        رو کسترش بدید، مشتریان بیشتری را جذب کنید یا ایده اپلیکیشن خودتون رو پیاده سازی کنید.
                    </p>
                </div>

                <div className={className.item}>
                    <MdOutlineColorLens size={30} className="text-navy"/>
                    <h1 className={className.itemTitle}>UI <span className="text-xs">/</span> UX</h1>
                    <p className={className.itemDescription}>
                        رابط کاربری و تجربه کاربری به عبارت ساده به معنای داشتن همزمان زیبایی و راحتی استفاده از یک نرم افزار هست، رابط کاربری توسط گرافیست و برنامه نویس Front-end پیاده سازی میشه.
                    </p>
                </div>

                <div className={className.item}>
                    <BiUser size={30} className="text-navy"/>
                    <h1 className={className.itemTitle}>مشاوره</h1>
                    <p className={className.itemDescription}>
                        مشاوره در زمینه پیاده سازی نرم افزار، ایجاد و رشد کسب و کار در فضای دیجیتال و برآورد زمان و هزینه فرآیند ساخت و پیاده سازی پروژه شما
                    </p>
                </div>

            </div>

        </div>
    )
}

export default Services