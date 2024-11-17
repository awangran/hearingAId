import React from 'react'
import NavbarComp from '../components/NavbarComp'
import TeamCard from '../components/TeamCard'
import Footer from '../components/Footer'

import { useState } from 'react'
import { PlusIcon } from '@heroicons/react/24/solid'
import Navbar2 from '../components/Navbar2'



function EditProfile() {
    return (
        <div className="bg-white min-h-screen">
          {/* Importar NavBar */}
          <Navbar2 />
    
          {/* Contenido principal */}
          <div className="bg-white min-h-screen py-8">
            {/* Título de la Página */}
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold text-gray-800">Editar Perfil</h2>
              <p className="text-gray-600">Actualiza tu información básica</p>
            </div>
    
            {/* Formulario de Edición */}
            <div className="max-w-2xl mx-auto bg-gray-50 p-6 rounded-lg shadow-md">
              <form>
                {/* Nombre de Usuario */}
                <div className="mb-4">
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Nombre de Usuario
                  </label>
                  <input
                    type="text"
                    id="username"
                    placeholder="Ingresa tu nombre de usuario"
                    className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
    
                {/* Nombres */}
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Nombres
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Ingresa tus nombres"
                    className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
    
                {/* Correo Electrónico */}
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Ingresa tu correo electrónico"
                    className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
    
                {/* Contraseña */}
                <div className="mb-4">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Contraseña
                  </label>
                  <input
                    type="password"
                    id="password"
                    placeholder="Ingresa tu contraseña"
                    className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
    
                {/* Botón de Guardar */}
                <div className="text-right">
                  <button
                    type="submit"
                    className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
                  >
                    Guardar Cambios
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      );
    }
    
export default EditProfile;