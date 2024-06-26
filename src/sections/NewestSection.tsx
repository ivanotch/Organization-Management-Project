import React from "react";
import Cards from "@/components/card/Cards";

export default function NewestSection ({data, user}: {data: any, user: any}) {

    return (
        <section className='flex justify-center items-center border border-[#2d2d2d] w-[100%] h-[35vh]'>
            <Cards user={user} data={data}/>
        </section>
    )

}