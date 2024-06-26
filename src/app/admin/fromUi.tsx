"use client"
import React from "react";
import {Input, Button} from "@nextui-org/react";


export default function FormUi({action}: {action: any}) {
    return (
        <form action={action}>
            <div className=" w-[20rem] text-center p-[1rem] border-[2px] border-solid rounded-lg">
            <span className="text-[1.4rem] inline-block mb-[15px]">Admin Login</span>
            <div className="flex mb-3">
                <Input
                isClearable
                type="text"
                name="firstname"
                label="First Name"
                variant="bordered"
                placeholder="Enter First Name"
                className="max-w-xs mr-1"
                />
                <Input
                isClearable
                type="text"
                name="surname"
                label="Surname"
                variant="bordered"
                placeholder="Enter Surname"
                className="max-w-xs"
                />
            </div>
            <Input
            isClearable
            type="email"
            label="Email"
            name="email"
            variant="bordered"
            placeholder="Enter your email"
            className="max-w-xs mb-3"
            />
            <Input
            isClearable
            type="password"
            label="Password"
            name="password"
            variant="bordered"
            placeholder="Enter your password"
            className="max-w-xs"
            />
            <Button className="bg-[#6f4ef2] shadow-lg shadow-indigo-500/20 mt-4" type="submit" >
                Send Application
            </Button>
        </div>
        </form>
    )
}