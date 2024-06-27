"use server"
import { getXataClient } from "@/xata";

export default async function HandleSubmitEvent({newEvent}: {newEvent: any}) {
    const xata = getXataClient();

    try {
        const record = await xata.db.events.create({
            title: newEvent.title,
            description: newEvent.description,
            date: newEvent.date,
            location: newEvent.location,
            targetAudience: newEvent.targetAudience,
            tags: newEvent.tags,
        });
    } catch (error) {
        console.error("An error occurred:", error);
    }

};