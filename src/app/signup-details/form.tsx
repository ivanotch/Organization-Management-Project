'use client';
import React, {useState} from "react";
import {Select, SelectItem, Input} from "@nextui-org/react";
import {Button} from "@nextui-org/react";
// import { currentUser } from '@clerk/nextjs';


export default function Form({action}: {action: any}) {
    // const [year, setyear] = useState("1st Year");
    const yearOptions = ["1st Year", "2nd Year", "3rd Year", "4th Year", "5th Year"];

    // const user = await currentUser();
    // console.log(user?.firstName);

    return (
        <form action={action} className="h-[15rem] w-[25rem] mt-[14%] p-[1rem] border-[#2d2d2d] border flex flex-col">
        <h1 className="text-[1.4em] mx-[auto] mb-[15px]">Continue Signing Up</h1>
        <div className="flex flex-col items-center">
          
            <Select 
              label="Select a Year Level" 
              className="max-w-xs text-slate-800 mb-[10px]" 
              name="yearlevel"
              size="sm"
              fullWidth={true}
            >
              {yearOptions.map((year) => (
                <SelectItem className="text-slate-800" key={year} value={year}>
                  {year}
                </SelectItem>
              ))}
            </Select>
          
        
            <Input name="studentID" className="max-w-xs mb-[15px]" size="sm" type="text" label="Student ID" placeholder="Enter your Student ID" />
            <Button type="submit"  color="primary" variant="ghost">
              Continue
            </Button>
        </div>
      </form>
    )
}

