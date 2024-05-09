import React from "react";
import Cards from "@/components/card/Cards";

export default function NewestSection ({data}: {data: any}) {
    return (
        <section className='flex justify-center items-center border border-[#2d2d2d] w-[100%] h-[35vh]'>
            <Cards data={data}/>
        </section>
    )

}