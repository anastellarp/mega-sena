"use client";

import { useState } from 'react';
import Image from 'next/image';

export default function App() {
  const [showSorteio, setShowSorteio] = useState(false);
  const [numbers, setNumbers] = useState([]);

  const handleRealizarSorteio = () => {
    setShowSorteio(true);
  };

  const handleSortearNumeros = () => {
    const numerosSorteados = [];
    while (numerosSorteados.length < 6) {
      const numeroAleatorio = Math.floor(Math.random() * 61); 
      if (!numerosSorteados.includes(numeroAleatorio)) {
        numerosSorteados.push(numeroAleatorio);
      }
    }
    setNumbers(numerosSorteados);
  };

  const handleVoltar = () => {
    setShowSorteio(false);
  };

  return (
    <div style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif' }}>
      {!showSorteio ? (
        <>
          <div style={{ marginBottom: '20px' }}>
            <Image
              src="/mega-sena-logo.png" 
              width={200}
              height={100}
              alt="Logo Mega Sena"
            />
          </div>
          <h1 style={{ color: '#2C3E50' }}>Sorteio da Mega Sena - Anninha</h1>
          <p style={{ color: '#34495E' }}>
            Clique abaixo para realizar o sorteio dos números da Mega-Sena.
          </p>
          <button
            onClick={handleRealizarSorteio}
            style={{
              padding: '10px 20px',
              fontSize: '18px',
              backgroundColor: '#3498DB',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease',
            }}
          >
            Realizar Sorteio
          </button>
        </>
      ) : (
        <>
          <h1 style={{ color: '#2C3E50' }}>Números Sorteados</h1>
          <div>
            {numbers.length > 0 ? (
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                {numbers.map((numero, index) => (
                  <span
                    key={index}
                    style={{
                      margin: '10px',
                      fontSize: '24px',
                      padding: '15px',
                      border: '1px solid #3498DB',
                      borderRadius: '5px',
                      backgroundColor: '#ECF0F1',
                      color: '#3498DB',
                    }}
                  >
                    {numero}
                  </span>
                ))}
              </div>
            ) : (
              <p style={{ color: '#34495E' }}>Clique no botão para sortear os números</p>
            )}
          </div>
          <button
            onClick={handleSortearNumeros}
            style={{
              padding: '10px 20px',
              marginTop: '20px',
              fontSize: '18px',
              backgroundColor: '#2ECC71',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease',
            }}
          >
            Sortear Números
          </button>
          <br />
          <button
            onClick={handleVoltar}
            style={{
              padding: '10px 20px',
              marginTop: '10px',
              fontSize: '18px',
              backgroundColor: '#E74C3C',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease',
            }}
          >
            Voltar
          </button>
        </>
      )}
    </div>
  );
}
