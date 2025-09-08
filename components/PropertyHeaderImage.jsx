"use client"
import React from 'react';
import Image from 'next/image';
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
const PropertyHeaderIMage = ({ image }) => {
    return (
        <>
            <section>
                <div className="container-xl m-auto">
                    <div className="grid grid-cols-1">
                        <Image
                            src={`/images/properties/${image}`}
                            alt="Property Image"
                            className="object-cover h-[400px] w-full"
                            width={1800}
                            height={400}
                            sizes='100vw'
                            priority={true}
                        />
                    </div>
                </div>
            </section>
            <section>
                <div className="container m-auto py-6 px-6">
                    <Link
                        href="/properties.html"
                        className="text-blue-500 hover:text-blue-600 flex items-center"
                    >
                        <FaArrowLeft className="mr-2" /> Back to Properties
                    </Link>
                </div>
            </section>

        </>
    )
}

export default PropertyHeaderIMage