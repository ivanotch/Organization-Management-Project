"use server"
import { getXataClient } from "@/xata";

const HandleSubmit = async ({item, user}: {item: any, user: any}) => {
  // console.log(item);
    try {
      const xata = getXataClient();
      const record = await xata.db.applicationData.create({
        userId: user,
        eventId: item.id,
        status: "pending",
      });
      console.log(record);
    } catch (error) {
      console.error("An error occurred:", error);
    }
}

export default HandleSubmit;