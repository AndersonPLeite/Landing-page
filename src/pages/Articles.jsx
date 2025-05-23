import React, { useEffect, useRef } from 'react';
import './articles.css';
import bitcoinLogo from '../assets/bitcoin-logo.png'; // Importando a imagem do logo do Bitcoin
import anime from 'animejs/lib/anime.es.js';




const Articles = () => {
  const bitcoinLogoRef = useRef(null);
 


  useEffect(() => {
    anime({
      targets: bitcoinLogoRef.current,
      scale: [1, 2],          // dobra de tamanho
      rotate: 360,            // gira
      duration: 3000,
      easing: 'easeInOutQuad',
      direction: 'alternate',
      loop: true
    });
    
  }, []);
  

  return (
    <main className="articles">
      <section className="secao-introducao">
        <h1>O que é Bitcoin?</h1>
        <p>Bitcoin é uma criptomoeda descentralizada que utiliza tecnologia de blockchain para registrar transações.</p>
        <img
          ref={bitcoinLogoRef}
          src={bitcoinLogo}
          alt="Logo do Bitcoin"
          className="bitcoin-logo"
        />
      </section>
      <section className="secao-investimentos">
        <h2>Investimentos em Criptomoedas</h2>
        <p>Investir em criptomoedas pode ser uma opção atraente para aqueles que buscam diversificar seus investimentos.</p>
        <ul>
          <li>
            <strong>Vantagens:</strong>
            <ul>
              <li>Potencial de alta rentabilidade</li>
              <li>Descentralização e segurança</li>
              <li>Acesso global</li>
            </ul>
          </li>
          <li>
            <strong>Desvantagens:</strong>
            <ul>
              <li>Volatilidade do mercado</li>
              <li>Risco de perda de investimento</li>
              <li>Regulação governamental</li>
            </ul>
          </li>
        </ul>
      </section>
      <section className="secao-dicas">
        <h2>Dicas para Investir em Criptomoedas</h2>
        <p>Aqui estão algumas dicas para investir em criptomoedas de forma segura e eficaz:</p>
        <ul>
          <li>Faça sua pesquisa e entenda o mercado</li>
          <li>Diversifique seus investimentos</li>
          <li>Não invista mais do que pode perder</li>
          <li>Use uma carteira segura</li>
        </ul>
      </section>
    </main>
  );
};

export default Articles;