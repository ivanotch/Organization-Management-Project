"use server"
import AdminView from "./adminView";
import { getXataClient } from "@/xata";

export default async function AdminPage() {
    
    const xata = getXataClient();

    const records = await xata.db.events
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

    const events = records.map((record) => {
        return {
            id: record.id,
            title: record.title,
            description: record.description,
            date: record.date,
            location: record.location,
            targetAudience: record.targetAudience,
            tags: record.tags,
        }
    })

    return (
        <AdminView events={events} />
    )
}