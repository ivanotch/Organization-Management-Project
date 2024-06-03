'use client';
import React, {useState} from 'react'
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import {Chip} from "@nextui-org/react";


const CardUi = ({item}: {item: any}) => {

  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  const submitApplication = () => {

    console.log('Application Sent');
  }

  return (
    <>
      <button onClick={onOpen}>
        <Card className="max-w-[300px] max-h-[250px] card">
          <CardHeader className="flex gap-3">
            <Image
              alt="nextui logo"
              height={40}
              radius="sm"
              src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
              width={40}
            />
            <div className="flex flex-col">
              <p className="text-md">{item.title}</p>
              <p className="text-small text-default-500">{item.time} / {item.date}</p>
            </div>
          </CardHeader>
          <Divider/>
          <CardBody>
            <p>{item.desciption}</p>
          </CardBody>
          <Divider/>
          <CardFooter className='flex justify-around'>
            <p>{item.targetAudience} <br></br> {item.location}</p>
            <br></br>
            <div className="flex gap-2">
              {item.tags.map((tag: string, index: number) => (
                <Chip key={index} color="warning" variant='bordered' size="sm">{tag}</Chip>
              ))}
            </div>
          </CardFooter>
        </Card>
      </button>
      <Modal 
        backdrop="opaque" 
        isOpen={isOpen} 
        onOpenChange={onOpenChange}
        radius="lg"
        classNames={{
          body: "py-6",
          backdrop: "bg-[#292f46]/50 backdrop-opacity-40",
          base: "border-[#292f46] bg-[#19172c] dark:bg-[#19172c] text-[#a8b0d3]",
          header: "border-b-[1px] border-[#292f46]",
          footer: "border-t-[1px] border-[#292f46]",
          closeButton: "hover:bg-white/5 active:bg-white/10",
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                {item.title}
              </ModalHeader>
              <ModalBody>
                <p> 
                  {item.desciption}
                </p>
                <p> 
                  The Event will be held on <span className='font-bold'>{item.date}</span> at <span className='font-bold'>{item.time}</span> in <span className='font-bold'>{item.location}</span>. This event is only for <span className='font-bold'>{item.targetAudience}</span>. 
                </p>
                <p>
                  Please note that non-<span className='font-bold'>{item.targetAudience}</span> will not be accepted to attend the event.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button className="bg-[#6f4ef2] shadow-lg shadow-indigo-500/20" onClick={submitApplication}>
                  Send Application
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}

export default CardUi