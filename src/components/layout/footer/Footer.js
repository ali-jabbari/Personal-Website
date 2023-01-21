import React from 'react'

const Footer = () => {
    return (
        <div className="bg-navy py-16">
            <div className="container flex flex-col gap-5 md:flex-row md:gap-0 justify-between items-center">
                <p className="text-white">© 1401 - کلیه حقوق محفوظ است.</p>
                <p className="text-white">
                    طراحی شده توسط <span className="text-green font-bold border-b border-green">علی جباری</span>
                </p>
            </div>

        </div>
    )
}

export default Footer