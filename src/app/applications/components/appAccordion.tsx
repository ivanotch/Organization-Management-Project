'use client';

import React from 'react';
import {Accordion, AccordionItem} from "@nextui-org/react";

export default function AppAccordion({data}: {data: any}) {

    const itemClasses = {
        title: "text-primary",
    }
    // console.log(status.status)
    if (data.length === 0) {
        return (
            <div>
                <h1>No applications</h1>
            </div>
        )
    }
    if (data) {
        return (
            <Accordion itemClasses={itemClasses}>
                {data.map((item: any, index: number) => {
                    // const d = new Date(item[0].date);
                    
                    // {console.log(JSON.stringify(item[0].date))}
                    return <AccordionItem
                    key={index}
                    aria-label={item[0].title}
                    
                    subtitle={
                    <span>
                        <strong>{item[0].date}</strong>
                    </span>
                    }
                    title={item[0].title}
                    >
                        {item[0].description}
                    </AccordionItem>
                })}
            </Accordion>
        );
    }
}