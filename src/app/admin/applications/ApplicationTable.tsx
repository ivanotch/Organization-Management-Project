"use client"
import React from 'react';
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Tooltip} from "@nextui-org/react";
import {EditIcon} from "./EditIcon"
import {DeleteIcon} from "./DeleteIcon"
import HandleAction from './HandleAction';


export default function ApplicationTable({applications, users, events}: {applications: any, users: any, events: any}) {

    return (
        
            <Table removeWrapper isHeaderSticky aria-label="Example static collection table" className='' 
            classNames={{
                base: "max-h-[80vh] max-w-[50%] overflow-scroll",
                table: "min-h-[400px]",
              }}>
                <TableHeader>
                    <TableColumn>NAME</TableColumn>
                    <TableColumn>EMAIL</TableColumn>
                    <TableColumn>EVENT TITLE</TableColumn>
                    <TableColumn>ACTION</TableColumn>

                </TableHeader>
                <TableBody>
                    {applications.map((application: any, index: any) => {
                        if (application.status === "pending") {
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
                                <TableCell className='flex gap-2'>
                                    <Tooltip content="Accept Application" className='text-black'>
                                        <form action={() => HandleAction({action: "accept", applicationId: application.id})}>
                                            <button value='edit' type='submit' className="text-lg text-default-400 cursor-pointer active:opacity-50">
                                                <EditIcon />
                                            </button>
                                        </form>
                                    </Tooltip>
                                    <Tooltip color="danger" content="Reject Application">
                                        <form action={() => HandleAction({action: "reject", applicationId: application.id})}>
                                            <button value='delete' type='submit' className="text-lg text-danger cursor-pointer active:opacity-50">
                                                <DeleteIcon />
                                            </button>
                                        </form>
                                    </Tooltip>
                                </TableCell>
                            </TableRow>
                            )
                        }
                    })}
                </TableBody>
            </Table>

    )
}