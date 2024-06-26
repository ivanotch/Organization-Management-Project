"use server"
import FormUi from './fromUi'
import { getXataClient } from "@/xata";
import { redirect } from 'next/navigation'

async function handlesubmit(formData: FormData) {
    "use server"
    const xata = getXataClient();
    let redirectPath: string | null = null
    try {
        const records = await xata.db.adminData
        .select(["name", "email", "password"])
        .getAll();
        console.log(records);

        const email = formData.get("email") as string;
        const password = formData.get("password") as string;

        const user = records.find((record) => record.email === email && record.password === password);

        if (user) {
            redirectPath = `/admin/adminpage`
        }

      } catch (error) {
        console.error("An error occurred:", error);
      } finally {
        if (redirectPath)
            redirect(redirectPath)
      }
}

export default async function AdminLogin() {

    return (
        <div className='flex justify-center mt-[10rem]'>
            <FormUi action={handlesubmit} />
        </div>
    
    )
}
