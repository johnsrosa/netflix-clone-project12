import React, { useState } from 'react';
import Navbar from './componentes/navbar/navbar';
import GlobalStyle from './componentes/globastyles/globalStyles';
import Hero from './componentes/hero/hero';
import FAQ from  './componentes/FAQ/faq';
import Validation from './componentes/validation/validationelements';
import Jumbatron from './componentes/jumbatron/jumbatron';
import Faqtitle from './componentes/FAQ/faqtitle';
import Footer from './componentes/footer/footer';

function App() {

  const [faqs, setfaqs] = useState ([{
        question: 'O que é a Netflix?',
        answer: 'A Netflix é um serviço de transmissão online que oferece uma ampla variedade de séries, filmes e documentários premiados em milhares de aparelhos conectados à internet. Você pode assistir a quantos filmes e séries quiser, quando e onde quiser, sem comerciais – tudo por um preço mensal bem acessível. Aqui você sempre encontra novidades. A cada semana, adicionamos novas séries e filmes.',
        open: false,
        },
      {
        question: 'Quanto custa a Netflix?',
        answer: 'Assista à Netflix no seu celular, tablet, Smart TV, notebook ou aparelho de streaming por uma taxa mensal única. Os planos variam de R$21,90 a R$45,90 por mês. Sem contrato nem taxas extras.',
        open: false,
      }, 
      {
        question: 'Onde posso assistir?',
        answer: 'Assista onde quiser, o quanto quiser e em um número ilimitado de aparelhos. Faça login com sua conta Netflix em netflix.com para começar a assistir no computador ou em qualquer aparelho conectado à Internet compatível com o aplicativo Netflix, como Smart TVs, smartphones, tablets, aparelhos de streaming e videogames. Você também pode baixar a sua série favorita com o aplicativo Netflix para iOS, Android ou Windows 10. Use downloads para levar a Netflix para onde quiser sem precisar de conexão com a Internet. Leve a Netflix com você para qualquer lugar.',
        open: false,
      },
      {
        question: 'Como faço para cancelar?',
        answer: 'A Netflix é flexível. Não há contratos nem compromissos. Você pode cancelar a sua conta na internet com apenas dois cliques. Não há taxa de cancelamento – você pode começar ou encerrar a sua assinatura a qualquer momento.',
        open: false,
      },

      {
        question: 'O que eu posso assistir na Netflix?',
        answer: 'A Netflix tem um grande catálogo de filmes, documentários, séries, originais Netflix premiados e muito mais. Assista o quanto quiser, quando quiser.',
        open: false,
    },

    ]);

  const toggleFAQ = index => {
    setfaqs(faqs.map((faq, i) => {
      if (i === index) {
        faq.open = !faq.open
      }
      else {
        faq.open= false
      }
      return faq;
    }))
  }

  return (
    <>
    <GlobalStyle />
    <Navbar />
    <Hero/>

    <Jumbatron />
    
    <div className="faqs">
      <Faqtitle />
     {faqs.map((faq, i) => (
       
       <FAQ faq={faq} index={i} toggleFAQ={toggleFAQ}/>

     ))}
   </div>

        <div className="fuckme">
      <Validation /> 
        </div>

        <Footer />
    </>
  );
}

export default App;
