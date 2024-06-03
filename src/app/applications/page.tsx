
import React from "react";
import AppAccordion from "./components/appAccordion";
import { getXataClient } from "@/xata";


export default async function Application() {

    const xata = getXataClient();

    const records = await xata.db.applicationData
        .select(["userId", "eventId", "status"])
        .getAll();

    const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

    return (
        <main className="flex flex-col items-center justify-between">
            <div id="pending-app" className="w-[80%] pt-[4rem]">
                <span>Pending Application</span>
                <AppAccordion />
            </div>
            <div id="accepted-app" className="w-[80%] pt-[4rem]">
                <span>Accepted Application</span>
                <AppAccordion />
            </div>
            <div id="declined-app" className="w-[80%] pt-[4rem]">
                <span>Declined Application</span>
                <AppAccordion />
            </div>
            Application page
        </main>
    );
}