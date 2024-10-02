import React from 'react'
import Image from "next/image";
import Link from "next/link";
function Showcase() {
  return (
    <div className="w-full flex flex-col  bg-green-700 lg:flex-row">
        <div className="container p-4 w-full lg:w-1/2">
          <h1 className=" text-3xl md:text-4xl xl:text-5xl font-bold m-3">
            Explore the wonders of nature with
            <br />
            our immersive<span className="text-yellow-500"> 3D Virtual Herbal Plant </span>

          </h1>

          <div className=" mx-3 my-7">
            <Link
              className="text-white font-bold border border-yellow-500 rounded-md hover:bg-yellow-500 hover:border-yellow-500 hover:text-white px-4 py-2 transition-all duration-300"
              href={"/Explore"}
            >
              Explore <i className="ri-leaf-line"></i>
            </Link>
          </div>

        </div>
        <div>
            <Image src="/assets/img/home.png" alt="Plant Image" width={500} height={300}/>
        </div>
      </div>
  )
}

export default Showcase