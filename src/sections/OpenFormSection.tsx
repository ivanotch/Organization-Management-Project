"use client"
import React from "react";
import {Tabs, Tab} from "@nextui-org/react"; 
import CardUi from "../components/card/Card";

export default function OpenFormSection({data}: {data: any}) {
    const tags = ['All', 'Organization', 'Departments', 'Overall School']

    return (
        <section className='flex flex-col items-center justify-between border border-[#2d2d2d] w-[100%] '>
            <Tabs variant="bordered" className="mt-[3rem]">
                {tags.map((tag, index) => (
                    <Tab key={index} title={tag} className="flex justify-center">
                        <div className="grid grid-cols-4 gap-6 w-[80%] mt-[2rem]">
                            {data.map((info: any, index: number) => (
                                (tag === "All" ? <CardUi  key={index} item={info} /> : info.tags.includes(tag) ? <CardUi key={index} item={info} /> : null)
                            ))}
                        </div>
                    </Tab>
                ))}
            </Tabs>
            
        </section>
    )
}