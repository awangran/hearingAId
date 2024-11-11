import React from 'react'
import Navbar2 from '../components/Navbar2'
import NoteCard from '../components/NoteCard';
import { Button, ButtonGroup, IconButton } from "@material-tailwind/react";
import {PlusIcon} from "@heroicons/react/24/solid";
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <>
    <Navbar2 />
    <div className="mx-16 my-12 lg:text-left" >
          <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">
            Mis Notas
          </p>
          <p className="mt-6 text-lg/8 text-gray-600">
            Quis tellus eget adipiscing convallis sit sit eget aliquet quis. 
          </p>
          <div className='flex justify-end'>
          <IconButton size="lg" className='rounded-full right-0'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
          </IconButton>
          </div>
      </div>

      

    <ButtonGroup fullWidth>
      <Button onClick>Cards</Button>
      <Button>Tabla</Button>
      <Button>Clases</Button>
    </ButtonGroup>

    <div className="grid grid-cols-5 gap-4">
      <NoteCard />
      <NoteCard />
      <NoteCard />
      <NoteCard />
      <NoteCard />
      <NoteCard />
      <NoteCard />
      <NoteCard />
      <NoteCard />
      <NoteCard />
      <NoteCard />
    </div>
    </>
  )
}

export default Dashboard