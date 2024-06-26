
import React from "react";
import AppAccordion from "./components/appAccordion";
import { getXataClient } from "@/xata";
import { currentUser } from '@clerk/nextjs';


export default async function Application() {

    const xata = getXataClient();
    
    const user = await currentUser();

    const userId = user?.id;

    // console.log(userId)
    const records = await xata.db.applicationData
        .select(["userId", "eventId", "status"])
        .getAll();
    
    const datas = records.map((record) => {
        return {
            status: record.status,
            userId: record.userId,
            eventId: record.eventId,
        }
    })

    const accepted = datas.filter((record: any) => record.status === "accepted" && userId === record.userId);
    const pending = datas.filter((record: any) => record.status === "pending" && userId === record.userId);
    const declined = datas.filter((record: any) => record.status === "rejected" && userId === record.userId);

    // map through the events in events data and filter the data based on the eventId of the application data
    // console.log(pending)
    const events = await xata.db.events
    .select([
        "id",
        "title",
        "description",
        "date",
        "location",
        "targetAudience",
        "tags",
    ])
    .getAll();

    const eventsData = events.map((event) => {
        return { 
            id: event.id,   
            title: event.title,
            description: event.description,
            date: event.date,
            location: event.location,
            targetAudience: event.targetAudience,
            tags: event.tags,
        }
    })

    // console.log(eventsData[0].id)
 
    const pendingData = pending.map((event) => {
        return eventsData.filter((data) => data.id === event.eventId);
    })
    const acceptedData = accepted.map((event) => {
        return eventsData.filter((data) => data.id === event.eventId);
    })
    const rejectedData = declined.map((event) => {
        return eventsData.filter((data) => data.id === event.eventId);
    })
    
 
    console.log(pendingData, acceptedData, rejectedData)

    return (
        <main className="flex flex-col items-center justify-between">
            <div id="pending-app" className="w-[80%] pt-[4rem]">
                <span>Pending Application</span>
                <AppAccordion data={pendingData} />
            </div>
            <div id="accepted-app" className="w-[80%] pt-[4rem]">
                <span>Accepted Application</span>
                <AppAccordion data={acceptedData} />
            </div>
            <div id="declined-app" className="w-[80%] pt-[4rem]">
                <span>Declined Application</span>
                <AppAccordion data={rejectedData} />
            </div>
        </main>
    );
}