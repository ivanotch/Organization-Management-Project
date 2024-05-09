import { SignIn } from "@clerk/nextjs";
 
export default function Page() {
  return <div className="flex justify-center">
    <div className="mt-[5rem]">
      <SignIn/>
    </div>
  </div>;
}