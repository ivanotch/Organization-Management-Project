"use client"
import React from 'react';
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell} from "@nextui-org/react";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";


export default function ApplicationData({data, applications, users, events}: {applications: any, users: any, events: any, data: any}) {

    return (
        <div className='w-[50%]'>
            <Card className="max-w-[100%] h-[18rem]">
                <CardHeader className="flex gap-3">
                    <div className="flex flex-col text-center">
                    <p className="text-md">Event Dashboard</p>
                    </div>
                </CardHeader>
                <Divider/>
                <CardBody>
                    <Table hideHeader aria-label="Example static collection table">
                        <TableHeader>
                            <TableColumn>numbers</TableColumn>
                            <TableColumn>data</TableColumn>
                        </TableHeader>
                        <TableBody>
                            <TableRow key="1">
                            <TableCell>Number of Pending Application.</TableCell>
                            <TableCell>{data.pending}</TableCell>
                            </TableRow>
                            <TableRow key="2">
                            <TableCell>Number of Accepted Application.</TableCell>
                            <TableCell>{data.accepted}</TableCell>
                            </TableRow>
                            <TableRow key="3">
                            <TableCell>Number of Rejected Application.</TableCell>
                            <TableCell>{data.rejected}</TableCell>
                            </TableRow>
                            <TableRow key="4">
                            <TableCell>Number of Available Events.</TableCell>
                            <TableCell>{data.availableEvents}</TableCell>
                            </TableRow>
                            <TableRow key="5">
                            <TableCell>Number of Registered Students.</TableCell>
                            <TableCell>{data.numberOfUsers}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </CardBody>
                <Divider/>
            </Card>
            <Table removeWrapper isHeaderSticky aria-label="Example static collection table" className='' 
            classNames={{
                base: "max-h-[19rem] max-w-[100%] overflow-scroll",
                table: "min-h-[400px]",
              }}>
                <TableHeader>
                    <TableColumn>NAME</TableColumn>
                    <TableColumn>EMAIL</TableColumn>
                    <TableColumn>EVENT TITLE</TableColumn>
                    <TableColumn>STATUS</TableColumn>
                </TableHeader>
                <TableBody>
                    {applications.map((application: any, index: any) => {
                        const user = users.find((user: any) => user.userId === application.userId);
                        const event = events.find((event: any) => event.id === application.eventId);
                        return (
                            <TableRow key={index}>
                                <TableCell>
                                    <div>
                                        <p>{user.name}</p>
                                        <p>{user.studentId}</p>
                                        <p>{user.yearlevel}</p>
                                    </div>
                                </TableCell>
                                <TableCell>{user.email}</TableCell>
                                <TableCell>{event.title}</TableCell>
                                <TableCell>{application.status}</TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
            
        </div>
    )
}