import React from 'react'
import {AiOutlineMenu} from "react-icons/ai"
import {isNavSideOpen} from "@/states/state"
import {useAtom} from "jotai"
import FullNavigation from "@/components/layout/navigation/FullNavigation"



const Navigation = () => {

    const [isSideOpen, setIsSideOpen] = useAtom(isNavSideOpen)

    const openSideHandler = () => {
        setIsSideOpen(!isSideOpen)
    }

    //Styles
    const className = {
        wrapper: `bg-white shadow-lg lg:hidden`,
        container: `container flex justify-between p-5 bg-white w-full`,
        languagesContainer: `flex gap-5`
    }

    return (
        <nav className="bg-white shadow-lg lg:hidden sticky top-0 z-30">

            {/*Full Navigation*/}
            {isSideOpen ? (
                <FullNavigation/>
            ) : null}

            <div className={className.container}>
                {/*toggle Side Nav*/}
                <button onClick={openSideHandler}>
                    <AiOutlineMenu size={24}/>
                </button>


                {/*select Language*/}
                <div className={className.languagesContainer}>
                    <button>
                        En
                    </button>

                    <button className="p-2 bg-green text-white rounded">
                        Pe
                    </button>
                </div>

            </div>

        </nav>
    )
}

export default Navigation