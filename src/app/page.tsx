import Main from '@/sections/Main';
import React from 'react';
import NewestSection from '../sections/NewestSection';
import OpenFormSection from '../sections/OpenFormSection';
import { getXataClient } from "@/xata";

export default async function Home() {
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
  const xata = getXataClient();

  const records = await xata.db.events
    .select([
      "title",
      "description",
      "date",
      "location",
      "targetAudience",
      "image",
      "tags",
    ])
    .getAll();
    
  console.log(records)

  return (
    <Main>
      <NewestSection  data={data} />
      <OpenFormSection data={data} />
    </Main>
  )
}
