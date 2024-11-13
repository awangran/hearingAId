import 'regenerator-runtime/runtime';
import React from 'react'
import Navbar2 from '../components/Navbar2'
import { Button } from '@material-tailwind/react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import Pregunta from '../components/Pregunta';


function Generate() {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Tu navegador no soporta la funcion de voz a texto.</span>;
  }

  const subs = transcript.split(' ').slice(-15).join(' ');

  const [openPregunta, setOpenPregunta] = React.useState(false);




  return (
    <>
    <Navbar2 />
    <div className="mx-32 my-16 lg:text-left">
          <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">
            Generar
          </p>
          <p className="mt-6 text-lg/8 text-gray-600">
            Quis tellus eget adipiscing convallis sit sit eget aliquet quis. 
          </p>
      </div>

      <div className='mx-16 bg-gray-200 p-12 rounded-lg h-64 text-center	'>
        <p className="mt-2 text-pretty text-2xl font-semibold tracking-tight text-gray-700 sm:text-4xl lg:text-balance">
          {subs}
          </p>
      </div>

      <div className="my-12 mx-32 flex gap-4 flex justify-center	">
        <Button variant="filled" onClick={()=>SpeechRecognition.startListening({ continuous: true, language: 'es-CO' })}>Empezar</Button>
        <Button variant="filled" onClick={()=>{SpeechRecognition.stopListening({continuous: false}, console.log(transcript));
 }}>Terminar</Button>
        <Button variant="filled">Generar</Button>
        <Button variant="outlined" onClick={()=> setOpenPregunta(!openPregunta)}>Preguntar</Button>
    </div>
    { openPregunta ? (
      <Pregunta />
    ):(
      <></>
    )}

    </>
  )
}

export default Generate