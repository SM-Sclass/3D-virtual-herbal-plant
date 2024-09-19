import React from 'react'

function Feature() {
    return (
        <div className='bg-white text-green-900 py-20'>
            <div className='container grid grid-cols-1 w-full md:grid-cols-2 lg:grid-cols-3 md:gap-8 gap-5'>
                <div className='border border-green-900 p-5 cursor-pointer rounded-md hover:shadow-2xl hover:-translate-y-1 duration-200 space-y-5'>
                    <div className='flex items-center gap-5'>
                        <i className="ri-tree-line text-3xl md:text-4xl xl:text-5xl"></i>
                        <p className='md:text-lg font-bold'>
                            3D <br />
                            Herbals
                        </p>
                    </div>
                    <p className='text-sm font-semibold font-Poppins'>Discover the power of medicinal plants through interactive, life-like experiences!</p>
                </div>
                <div className='border border-green-900 p-5 cursor-pointer rounded-md hover:shadow-2xl hover:-translate-y-1 duration-200 space-y-5'>
                    <div className='flex items-center gap-5'>
                        <i className="ri-flower-line text-3xl md:text-4xl xl:text-5xl"></i>
                        <p className='md:text-lg font-bold'>
                            Garden <br />
                            Tour
                        </p>
                    </div>
                    <p className='text-sm font-semibold font-Poppins'>Embark on a virtual tour, Explore vibrant plants and learn about their medicinal wonders up close! </p>
                </div>
                <div className='border border-green-900 p-5 cursor-pointer rounded-md hover:shadow-2xl hover:-translate-y-1 duration-200 space-y-5'>
                    <div className='flex items-center gap-5'>
                        <i className="ri-t-shirt-line text-3xl md:text-4xl xl:text-5xl"></i>
                        <p className='md:text-lg font-bold'>
                            Select<br />
                            Theme
                        </p>
                    </div>
                    <p className='text-sm font-semibold font-Poppins'>Personalize your experience with our dynamic themes, designed to bring your herbal journey to life</p>
                </div>
            </div>
        </div>
    )
}

export default Feature