import React from 'react'
import Navbar2 from '../components/Navbar2'
import { Button } from '@material-tailwind/react'

function Generate() {
  return (
    <>
    <Navbar2 />
    <div className="mx-32 my-12 lg:text-left" >
          <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">
            Generar
          </p>
          <p className="mt-6 text-lg/8 text-gray-600">
            Quis tellus eget adipiscing convallis sit sit eget aliquet quis. 
          </p>
      </div>

      <div className='mx-16 bg-gray-200 p-12 rounded-lg h-64 text-center	'>
        <p className="mt-2 text-pretty text-2xl font-semibold tracking-tight text-gray-700 sm:text-4xl lg:text-balance">
            Quis tellus eget adipiscing convallis sit sit e cing convallis sit sit eget aliquet qget aliqucing convallis sit sit eget aliquet q cing convallis sit sit eget aliquet qet quis. 
          </p>
      </div>

      <div className="my-12 mx-32 flex gap-4 flex justify-center	">
        <Button variant="filled">Generar</Button>
        <Button variant="outlined">Preguntar</Button>
    </div>

    </>
  )
}

export default Generate