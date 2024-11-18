import React, { useState } from 'react'
import Navbar2 from '../components/Navbar2'
import NoteCard from '../components/NoteCard';
import { Button, ButtonGroup, IconButton } from "@material-tailwind/react";
import {PlusIcon} from "@heroicons/react/24/solid";
import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useUser } from "../../UserContext";

// Lista de materias de ejemplo
/* const subjects = [
  { subject: 'ISIS1001: Introducción a la Ingeniería de Sistemas', description: 'Usos de la Inteligencia Artificial en la Ingeniería.', date: '15 de noviembre de 2024' },
  { subject: 'ISIS2503: Arquitectura y Diseño de Software', description: 'Modelo de Microservicios.', date: '15 de noviembre de 2024' },
  { subject: 'IIND2106: Probabilidad y Estadística I', description: 'Pruebas de Hipótesis.', date: '13 de noviembre de 2024' },
  { subject: 'ISIS2203: Infraestructura Computacional', description: 'Seguridad: Llaves simétricas y asimetricas.', date: '13 de noviembre de 2024' },
  { subject: 'ISIS2403: Arquitectura Empresarial', description: 'Modelo de negocio: Metamodelo.' , date: '14 de noviembre de 2024'},
]; */

function Dashboard() {
    const location = useLocation();
    const { userId } = useUser();
    const [userData, setUserData] = useState(null);

    /* useEffect(() => {
      if (userId) {
          // Fetch user daya del db segun id
          axios.get('http://localhost:5555/login',{userId})
              .then(response => {
                  setUserData(response.data); // guardar data en el state
              })
              .catch(error => {
                  console.error("Error fetching user data:", error);
              });
      }
  }, [userId]);

  if (!userId) {
      return <p>Error: No user ID found. Please log in again.</p>;
  } */

  return (
    <>
    <Navbar2 />
    <div className="mx-16 my-12 lg:text-left" >
          <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">
            Mis Notas de 2024-2
          </p>
          <p className='mt-2 text-gray-600' >User Id: {userId} </p>
          <p className="mt-6 text-lg/8 text-gray-600">
            Aquí puedes revisar tus apúntes del semestre actual 2024-2.
          </p>
          <div className='flex justify-end'>
          <IconButton size="lg" className='rounded-full right-0'>
            <a href="/generate">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
            </a>
          </IconButton>
          </div>
      </div>      

      <ButtonGroup fullWidth>
        <Button onClick>Cards</Button>
        <Button>Tabla</Button>
        <Button>Clases</Button>
      </ButtonGroup>

      {/* <div className="flex flex-wrap justify-center">
        {userData.map((item, index) => (
          <NoteCard
            key={index}
            subject={item.subject}
            description={item.description}
            date={item.date}
            onClick={index === 0 ? () => window.location.href = '/notes' : undefined} // Redirige solo la primera tarjeta
          />
        ))}
      </div> */}
    </>
  )
}

export default Dashboard