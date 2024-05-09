"use client";
import NewestSection from '@/sections/NewestSection';
import OpenFormSection from '@/sections/OpenFormSection';
import React from 'react';
import { useUser } from "@clerk/clerk-react";
import { NextUIProvider } from '@nextui-org/react';

export default function Home() {

  const { isSignedIn, user, isLoaded } = useUser();
  const data = [{
    title: 'CAFA Org',
    desciption: "CAFA Week is a week-long event that celebrates the achievements of the students in the College of Agriculture and Forestry.",
    date: '2022-10-10',
    time: '8:00 AM',
    location: 'Quadrangle',
    targetAudience: 'Students',
    image: 'https://source.unsplash.com/1600x900/?event',
    tags: ['All', 'Organization'],
  },
  {
    title: 'CAFA Departments',
    desciption: "CAFA Week is a week-long event that celebrates the achievements of the students in the College of Agriculture and Forestry.",
    date: '2022-10-10',
    time: '8:00 AM',
    location: 'Quadrangle',
    targetAudience: 'Students',
    image: 'https://source.unsplash.com/1600x900/?event',
    tags: ['All', 'Departments'],
  },
  {
    title: 'CAFA Overall',
    desciption: "CAFA Week is a week-long event that celebrates the achievements of the students in the College of Agriculture and Forestry.",
    date: '2022-10-10',
    time: '8:00 AM',
    location: 'Quadrangle',
    targetAudience: 'Students',
    image: 'https://source.unsplash.com/1600x900/?event',
    tags: ['All', 'Overall School'],
  },
  {
    title: 'CAFA Week',
    desciption: "CAFA Week is a week-long event that celebrates the achievements of the students in the College of Agriculture and Forestry.",
    date: '2022-10-10',
    time: '8:00 AM',
    location: 'Quadrangle',
    targetAudience: 'Students',
    image: 'https://source.unsplash.com/1600x900/?event',
    tags: ['All', 'Departments'],
  },
  {
    title: 'CAFA Week',
    desciption: "CAFA Week is a week-long event that celebrates the achievements of the students in the College of Agriculture and Forestry.",
    date: '2022-10-10',
    time: '8:00 AM',
    location: 'Quadrangle',
    targetAudience: 'Students',
    image: 'https://source.unsplash.com/1600x900/?event',
    tags: ['All', 'Organization'],
  },
]

  if (!isLoaded) {
    <div>Loading...</div>
    return null;
  }

  if (isSignedIn) {

    return (
      <NextUIProvider>
        <main className="flex flex-col items-center justify-between">
          <NewestSection  data={data} />
          <OpenFormSection data={data} />
          Dashboard
        </main>
      </NextUIProvider>
    )
  }

  return <div>Not Signed In</div>;
}
