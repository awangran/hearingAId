import React from 'react'
import NavbarComp from '../components/NavbarComp'
import TeamCard from '../components/TeamCard'
import Footer from '../components/Footer'

import { ArrowPathIcon, CloudArrowUpIcon, CloudIcon, FingerPrintIcon, LockClosedIcon, NoSymbolIcon, NumberedListIcon, ShareIcon, UserCircleIcon, CalendarIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import { PlusIcon } from '@heroicons/react/24/solid'

function Root() {
    const features = [
        {
          name: '1. Registrate',
          description: 
            'Registrate con tu correo electrónico en el que deseas que se guarden tus notas.',
          icon: UserCircleIcon,
        },
        {
          name: '2. Registra tu calendario',
          description:
            'Registra el nombre de cada clase que desees transcribir. Esto para que las notas se guarden respectivamente.',
          icon: CalendarIcon,
        },
        {
          name: '3. Genera tus notas',
          description:
            'Haz click en el icono "Generar" ubicado en la parte superior de esta pestaña. Recuerda conceder los permisos a la aplicacion para usar tu micrófono. Haz click en el botón "Generar", y cuando haya terminado tu clase click en "Terminar".',
          icon: PlusIcon,
        },
        {
          name: '4. ¡Organizalas a tu gusto!',
          description:
            'Puedes organizar y personalizar el formato en el que se te presentan tus notas. ¡Haz click en "Cards", "Tabla" o "Clases" para explorar cada formato.!',
          icon: NumberedListIcon,
        },
      ]
  
    return (
    <>
    <NavbarComp />
    
     {/* Este es el boton de se vienen cositas pero no se si borrarlo o que poner*/} 
     <div className="bg-white">
      <div className="relative isolate px-6 pt-7 lg:px-8">
        <div className="mx-auto max-w-2xl py-4 sm:py-16 lg:py-10"> {/* Ajusta los valores de py */}
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              ¿Quienes somos?{' '}
          <a href="/#team" className="font-semibold text-indigo-600">
            <span aria-hidden="true" className="absolute inset-0" />
            Ver <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
          <div className="text-center ">
          <a href="https://imgur.com/a/TB4sk1m"><img src="https://i.ibb.co/wC0Y3f1/Loguito-Hearing-Aid.png" alt="Loguito-Hearing-Aid" border="0"class="w-80 h-auto mx-auto"></img></a>
            <h1 className="text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
              Cuaderno virtual 
              speech-to-text
            </h1>
            
            <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl max-w-3xl mx-auto">
              HearingAId es un cuaderno virtual que facilitará el aprendizaje a personas con limitaciones auditivas. Con su tecnología de 
             "Speech-To-Text", HearingAId transcribe en tiempo real la clase que sea, mostrando subtítulos
              en tiempo real, transcribiéndolos después y generando un resumen automático personalizado de 
              cada clase.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/signup"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                
                Registrate
              </a>
              

              <a href="/#como" className="text-sm/6 font-semibold text-gray-900">
                Más información <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          {/*<div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />*/} 
        </div>
      </div>


    </div>

    {/* Header con botones end*/} 

    {/* Quienes somos start*/} 
    <div className="mx-auto max-w-7xl px-6 lg:px-8" id="como">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="mt-10 text-base/5 font-semibold text-indigo-600">Uso</h2>
          <p className="mt-8 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">
            Tu guía rápida para usar la app
          </p>
          <p className="mt-6 text-lg/8 text-gray-600">
            Transforma el habla en texto de forma simple y eficiente paso por paso:
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base/7 font-semibold text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon aria-hidden="true" className="h-6 w-6 text-white" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base/7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    {/* Quienes somos end */} 

    {/* Team start */}
    <div id="team">
    <TeamCard />
    </div>
    {/* Team end */} 

    {/* Footer start */}
    <Footer />
    {/* Footer end */} 
    
    </>
  )
}

export default Root
