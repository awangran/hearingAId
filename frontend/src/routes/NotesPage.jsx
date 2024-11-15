import React, { useState } from 'react';
import Navbar2 from '../components/Navbar2';
import axios from 'axios';

function NotesPage() {
  // Los apuntes que se mostrarán en la mitad izquierda de la pantalla
  const latestNotes = `Estos son los últimos apuntes de ISIS1001: Introducción a la Ingeniería de Sistemas. Aquí se analizan los usos de la Inteligencia Artificial en la Ingeniería.`;
  
  const [question, setQuestion] = useState(''); // Estado para la pregunta del usuario
  const [answer, setAnswer] = useState(''); // Estado para la respuesta generada por la API
  const [loading, setLoading] = useState(false); // Estado para manejar el cargando

  // Función para manejar el envío de la pregunta
  const handleAskQuestion = async () => {
    if (!question.trim()) return; // Verifica si la pregunta no está vacía
    console.log(import.meta.env.VITE_OPENAI_API_KEY);

    setLoading(true);
    try {
        const response = await axios.post('https://api.openai.com/v1/chat/completions', {
          model: 'gpt-3.5-turbo',
          messages: [
            { role: 'system', content: 'Eres un asistente útil que responde preguntas basadas en los apuntes proporcionados.' },
            { role: 'user', content: `Usando los siguientes apuntes como referencia: "${latestNotes}". Responde a la pregunta: "${question}"` },
          ],
          max_tokens: 150,
          temperature: 0.5,
        }, {
          headers: {
            'Authorization': `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
            'Content-Type': 'application/json',
          },
        });
      
        // Ajuste para manejar el formato de respuesta del modelo de chat
        const answer = response.data.choices[0].message.content.trim();
        setAnswer(answer); // Actualiza el estado con la respuesta
      } catch (error) {
        console.error('Error al obtener la respuesta:', error);
        setAnswer('Hubo un error al obtener la respuesta. Intenta de nuevo.');
      } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar2 />
      <div className="flex mx-16 my-12 h-screen">
        {/* Mitad Izquierda - Apuntes */}
        <div className="w-1/2 pr-8 overflow-y-auto bg-gray-100 p-6 rounded-lg shadow-lg">
          <h2 className="text-gray-700 font-semibold mb-4">Apuntes Recientes</h2>
          <p className="text-gray-700 whitespace-pre-wrap">{latestNotes}</p>
        </div>

        {/* Mitad Derecha - Preguntas y Respuestas */}
        <div className="w-1/2 pl-8 flex flex-col">
          <h2 className="text-2xl font-semibold mb-4">Haz una pregunta sobre los apuntes</h2>
          
          {/* Campo de entrada para la pregunta */}
          <input
            type="text"
            placeholder="Escribe tu pregunta aquí..."
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className="p-4 mb-4 border border-gray-300 text-gray-700 focus:outline-none focus:border-blue-500"
          />

          {/* Botón para enviar la pregunta */}
          <button
            onClick={handleAskQuestion}
            className="p-4 bg-blue-500 text-white rounded-lg font-semibold mb-4 disabled:bg-gray-400"
            disabled={loading}
          >
            {loading ? 'Obteniendo respuesta...' : 'Preguntar'}
          </button>

          {/* Contenedor de la respuesta */}
          <div className="p-4 bg-gray-100 rounded-lg shadow-lg">
            <h3 className="text-gray-700 font-semibold mb-2">Respuesta:</h3>
            <p className="text-gray-700">{answer || 'La respuesta aparecerá aquí después de hacer una pregunta.'}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default NotesPage;