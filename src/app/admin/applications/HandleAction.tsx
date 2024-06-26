"use server"
import { getXataClient } from "@/xata";
import { revalidatePath } from 'next/cache'

export default async function HandleAction({action, applicationId}: {action: any, applicationId: any}) {
    const xata = getXataClient();
    console.log(action, applicationId)
    if (action === "accept") {
        try {
            const record = await xata.db.applicationData.update(applicationId, {
                status: "accepted",
              });
            revalidatePath("/admin/applications")
        } catch (error) {
            console.error("An error occurred:", error);
        }
    }

    if (action === "reject") {
        try {
            const record = await xata.db.applicationData.update(applicationId, {
                status: "rejected",
              });
              revalidatePath("/admin/applications")
        } catch (error) {
            console.error("An error occurred:", error);
        }
    }

}