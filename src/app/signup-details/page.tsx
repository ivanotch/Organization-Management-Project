"use server";
import React from "react";
import { getXataClient } from "@/xata";
import { currentUser } from '@clerk/nextjs';
import Form from "./form";
import { redirect } from 'next/navigation'

async function onSubmit(formData: FormData) {
  'use server';
  const studentID = formData.get("studentID") as string;
  const yearlevel = formData.get("yearlevel") as string;
  const user = await currentUser();

  const xataClient = getXataClient();

  const id = await xataClient.db.userData.filter({studentId: studentID}).getMany();
  
  if (id.length !== 0) {
    console.log("User already exists");
    return;
  }

  const record = await xataClient.db.userData.create({
    name: `${user?.firstName} ${user?.lastName}`,
    userId: `${user?.id}`,
    studentId: studentID,
    email: `${user?.emailAddresses[0].emailAddress}`,
    yearlevel: yearlevel,
  });

  redirect('/');
}

export default async function SignupDetailsPage() {

  return (
    <div className="flex justify-center">
      <Form action={onSubmit} />
    </div>
  )
}