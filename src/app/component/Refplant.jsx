import React from 'react'
import Plantcard from "./Plantcard"
import RefPlantcard from "./RefPlantcard"
function Refplant() {
    const images = {
        Nephrolepisexaltata: {
            imageLink: "/assets/img/cart-1.png",
            title: "Nephrolepis Exaltata",
            details: "Boston Fern",
        },
        Ficuselastica: {
            imageLink: "/assets/img/cart-2.png",
            title: "Ficus Elastica",
            details: "Rubber Plant",
        },
        SpathiphyllumWallisii: {
            imageLink: "/assets/img/cart-3.png",
            title: "Spathiphyllum Wallisii",
            details: "Peace Lily",
        },
        Adeniumonobesum: {
            imageLink: "/assets/img/cart-4.png",
            title: "Adeniumon Obesum",
            details: "Desert Rose",
        }
    }
    return (
        <div className=' w-full bg-green-900 py-6'>
            <div className='flex flex-col gap-3 items-center text-center mb-36'>
                <h2 className='text-yellow-500 text-3xl font-bold'>Some Looks</h2>
                <p className='max-w-2xl font-bold text-xl'>Trail Purpose</p>
            </div>
            <div className='container w-full grid grid-cols-1 gap-x-8 gap-y-36 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                {Object.entries(images).map(([key, { imageLink, title, details }]) => (
                    <RefPlantcard
                        key={key}
                        image={imageLink}
                        title={title}
                        details={details}
                    />
                ))}
            </div>
        </div>
    )
}

export default Refplant