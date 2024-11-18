import 'regenerator-runtime/runtime';
import React, { useState } from 'react';
import Navbar2 from '../components/Navbar2';
import { Button } from '@material-tailwind/react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import Pregunta from '../components/Pregunta';
import { summarize } from '@ebereplenty/summarize';
import { useUser } from "../../UserContext";
import { useEffect } from 'react';
import axios from 'axios';

function Generate() {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  const [openPregunta, setOpenPregunta] = useState(false);
  const [summary, setSummary] = useState(''); 
  const [error, setError] = useState(''); 

  if (!browserSupportsSpeechRecognition) {
    return <span>Tu navegador no soporta la función de voz a texto.</span>;
  }

  // Función para manejar el botón de "Generar"
  const handleGenerateSummary = async () => {
    if (!transcript) {
      setError('No se puede generar un resumen sin contenido.'); // Muestra un mensaje de error si no hay transcript
      setSummary(''); 
    } else {
      setError(''); 
      try {
        const result = await summarize({
          input: transcript,
          openAiApiKey: import.meta.env.VITE_OPENAI_API_KEY,
        });
        setSummary(result);
      } catch (error) {
        console.error('Error al generar el resumen:', error);
        setError('Hubo un problema al generar el resumen. Inténtalo de nuevo.');
      }
    }
  };

  const subs = transcript.split(' ').slice(-15).join(' ');

  //hook para fetch las clases del usuario
  const { userId } = useUser();
  const [clases, setClases] = useState([]);

  useEffect(() => {
    const fetchClases = async () => {
      try {
        // Fetch the object by ID
        const response = await axios.get(`http://localhost:5555/generate/${userId}`);
        
        // Assuming `response.data` contains the full object
        setClases(response.data.clases); // Extract and set the `clases` array
      } catch (error) {
        console.error('Error fetching clases:', error.response ? error.response.data : error.message);
        alert('Failed to fetch clases, please try again.');
      }
    };

    fetchClases();
  }, [userId]);

 

  return (
    <>
      <Navbar2 />
      <div className="mx-32 my-16 lg:text-left">
        <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">
          Generar
        </p>
        <p className="mt-6 text-lg/8 text-gray-600">
          Empieza tu grabacion para hacer un resumen y elige una clase. 
        </p>
        <p className='mt-2 text-gray-600' >User Id: {userId} </p>

        {/* Elegir la clase get las clases de la db */}
        <p>{clases.map((clase, index) => (
          <li key={index}>{clases}</li>
        ))}</p>
      </div>

      <div className="mx-16 bg-gray-200 p-12 rounded-lg h-64 text-center">
        <p className="mt-2 text-pretty text-2xl font-semibold tracking-tight text-gray-700 sm:text-4xl lg:text-balance">
          {subs}
        </p>
      </div>

      <div className="my-12 mx-32 flex gap-4 flex justify-center">
        <Button variant="filled" onClick={() => SpeechRecognition.startListening({ continuous: true, language: 'es-CO' })}>Empezar</Button>
        <Button variant="filled" onClick={() => { SpeechRecognition.stopListening(); console.log(transcript); }}>Terminar</Button>
        <Button variant="filled" onClick={handleGenerateSummary}>Generar</Button>
        <Button variant="outlined" onClick={() => setOpenPregunta(!openPregunta)}>Preguntar</Button>
      </div>

      {error && ( // Muestra el mensaje de error si existe
        <div className="mx-32 my-4 p-4 bg-red-200 text-red-800 rounded">
          {error}
        </div>
      )}

      {summary && ( // Muestra el resumen si existe
        <div className="mx-16 bg-gray-100 p-6 rounded-lg text-center mt-8">
          <p className="text-pretty text-2xl font-semibold tracking-tight text-gray-700 sm:text-3xl">
            Resumen de los Apuntes
          </p>
          <p className="mt-4 text-lg text-gray-600">
            {summary}
          </p>
        </div>
      )}

      {openPregunta && <Pregunta />}
    </>
  );
}

export default Generate;
