"use client"
import React, {useState} from 'react'
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Chip, Tooltip} from "@nextui-org/react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input, Textarea} from "@nextui-org/react";
import {Select, SelectItem} from "@nextui-org/react";
import {DatePicker} from "@nextui-org/date-picker";
import {now, getLocalTimeZone} from "@internationalized/date";
import HandleSubmitEvent from './handleSubmitEvent';


function AdminView({events}: {events: any}) {
    const [clicked, setClicked] = useState()
    const typeOfEvent = ["All", "Organization", "Departments", "Overall School"];
    const {isOpen, onOpen, onClose} = useDisclosure();
    const [eventItem, setEventItem] = useState({
        title: "",
        description: "",
        location: "",
        targetAudience: "",
        tags: ["All"],
        date: "",
    
    })


    const handleClick = (id: any) => {
        setClicked(id);
        console.log(clicked)
    }

    const handleOpen = () => {
        onOpen()
    }
  return (
    <div className="flex h-[80vh] gap-[1rem] justify-center">
            <div className="w-[45%]">
                <nav className='text-[1.7rem] text-center bg-[#778899] rounded-[6px] relative'>
                    Events
                    <Tooltip showArrow={true} content="Add an event" className='text-black'>
                        <img onClick={() => handleOpen()} className='cursor-pointer w-[2rem] h-[2rem] absolute right-[1rem] top-[0.3rem]' src="/add.png" alt="Add" />
                    </Tooltip>
                </nav>
                <Table 
                    color={"secondary"}
                    selectionMode="single" 
                    aria-label="Example static collection table"
                    className='text-black h-[100%] overflow-y-scroll bg-white rounded-[8px]'
                    classNames={{
                        base: "h-[100%]",
                        table: "h-[100%]",
                    }}
                >
                    <TableHeader>
                    <TableColumn>TITLE</TableColumn>
                    <TableColumn>DESCRIPTION</TableColumn>
                    <TableColumn>TAGS</TableColumn>
                    </TableHeader>
                    <TableBody>
                        {events.map((eventItem: any, index: any) => {
                            const id = eventItem.id;
                            return(
                                <TableRow key={index} onClick={() => handleClick(id)}>
                                    <TableCell>{eventItem.title}</TableCell>
                                    <TableCell>{eventItem.description.length > 20 ? eventItem.description.substring(0, 20 - 3) + "..." : eventItem.description}</TableCell>
                                    <TableCell>{eventItem.tags}</TableCell>
                                </TableRow>
                            )
                        })}

                    </TableBody>
                </Table>
            </div>
            <div className="w-[45%] h-[100%]">
                {events.map((item:any) => {
                    return(
                        item.id === clicked ? <div className='h-[100%] p-[2rem]'>
                            <div className='text-[1.7rem] text-center mb-[13px]'>{item.title}</div>
                            <div className='flex flex-col h-[100%] justify-between'>
                                <div className='text-[1.1rem]'>
                                    {item.description}
                                    <p className='mt-[15px]'> 
                                    The Event will be held on <span className='font-bold'>{item.date}</span> in <span className='font-bold'>{item.location}</span>. This event is only for <span className='font-bold'>{item.targetAudience}</span>. 
                                    </p>
                                    <p  className='mt-[15px]'>
                                    Please note that non-<span className='font-bold'>{item.targetAudience}</span> will not be accepted to attend the event.
                                    </p>
                                </div>
                                <div className=''> {item.tags.map((tag: any) => {
                                    return(
                                        <Chip className='mr-[5px]' color="warning" variant="shadow">{tag}</Chip>
                                    )
                                })}</div>
                            </div>
                        </div>: null
                    )
                })}
            </div>
            <Modal classNames={{
                body: "py-6",
                backdrop: "bg-[#292f46]/50 backdrop-opacity-40",
                base: "border-[#292f46] bg-[#19172c] dark:bg-[#19172c] text-[#a8b0d3]",
                header: "border-b-[1px] border-[#292f46]",
                footer: "border-t-[1px] border-[#292f46]",
                closeButton: "hover:bg-white/5 active:bg-white/10",
                }} backdrop={"blur"} isOpen={isOpen} onClose={onClose}>
                <ModalContent>
                {(onClose) => (
                    <>
                    <ModalHeader className="flex flex-col gap-1"><span>Create Event</span><Input onChange={e => setEventItem({...eventItem, title: e.target.value})}  type="text" label="Title" /></ModalHeader>
                    <ModalBody>
                        <Textarea
                            label="Description"
                            placeholder="Enter your Event description"
                            className="max-w-lg"
                            onChange={e => setEventItem({...eventItem, description: e.target.value})}
                        />
                        <Input onChange={e => setEventItem({...eventItem, targetAudience: e.target.value})} type="text" label="Input Target Audience" />
                        <Input onChange={e => setEventItem({...eventItem, location: e.target.value})} type="text" label="Input The Location Where the event will be held." />
                        <Select 
                            label="Select the type of event" 
                            className="max-w-lg text-black" 
                            onChange={e => setEventItem({...eventItem, tags: e.target.value === "All" ? ["All"] : [...eventItem.tags, e.target.value]})}
                        >
                            {typeOfEvent.map((type) => (
                            <SelectItem className='text-black' key={type}>
                                {type}
                            </SelectItem>
                            ))}
                        </Select>
                        <DatePicker
                            className='rounded-[10px] bg-white'
                            label="Event Date"
                            variant="bordered"
                            hideTimeZone
                            showMonthAndYearPickers
                            defaultValue={now(getLocalTimeZone())}
                            onChange={e => setEventItem({...eventItem, date: e.day + '/' + e.month + '/' + e.year + '|' + e.hour + ':' + e.minute})}
                        />
                    </ModalBody>
                    <ModalFooter>
                        <Button color="danger" variant="light" onPress={onClose}>
                        Close
                        </Button>
                        <form action={() => HandleSubmitEvent({newEvent: eventItem})}>
                            <Button color="primary" type='submit' onPress={onClose}>
                            Submit
                            </Button>
                        </form>
                    </ModalFooter>
                    </>
                )}
                </ModalContent>
            </Modal>
        </div>
   )
}

export default AdminView