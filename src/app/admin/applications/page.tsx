"use server"
import ApplicationTable from './ApplicationTable';
import ApplicationData from './ApplicationData';
import { getXataClient } from "@/xata";

export default async function AdminApplications() {
    const xata = getXataClient();

    const applicationRecords = await xata.db.applicationData
    .select(["userId", "eventId", "status"])
    .getAll();

    const applications = applicationRecords.map((record) => {
        return {
            id: record.id,
            userId: record.userId,
            eventId: record.eventId,
            status: record.status
        }
    })

    const userRecords = await xata.db.userData
    .select(["name", "userId", "studentId", "email", "yearlevel"])
    .getAll();

    const users = userRecords.map((record) => {
        return {
            name: record.name,
            userId: record.userId,
            studentId: record.studentId,
            email: record.email,
            yearlevel: record.yearlevel
        }
    })

    const eventRecords = await xata.db.events
    .select([
        "id", 
        "title",
        "description",
        "location",
        "targetAudience",
        "tags",
        "date",
    ])
    .getAll();

    const events = eventRecords.map((event) => {
        return {
            id: event.id,
            title: event.title,
            description: event.description,
            location: event.location,
            targetAudience: event.targetAudience,
            tags: event.tags,
            date: event.date,
        }
    })

    const data = {
        pending: applications.filter((application: any) => application.status === "pending").length,
        accepted: applications.filter((application: any) => application.status === "accepted").length,
        rejected: applications.filter((application: any) => application.status === "rejected").length,
        availableEvents: events.length,
        numberOfUsers: users.length,
    }

    return (
        <div className='h-[80vh] w-[100%]'>
            <div className='flex'>
                <ApplicationTable applications={applications} users={users} events={events} />
                <ApplicationData data={data} applications={applications} users={users} events={events}/>
            </div>
        </div>
    );
}

