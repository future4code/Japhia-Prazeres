import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from "./components/CardPequeno/CardPequeno";

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande
          imagem="http://paroquiasagradomerces.com.br/wp-content/uploads/2018/02/no-avatar.png"
          nome="Japhia Prazeres"
          descricao="Olá, eu sou Japhia, trabalho com projetos de implantação do s4/HANNA na IBM, conheço bastente de processos e tenho certifcação Black Belt - Lean Six Sigma e Scrum Master, além de um MBA em metodologias Ágeis e agora também sou aluna do curso de frontend na Labenu."
        />

        <ImagemButton
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png"
          texto="Ver mais"
        />
      </div>

       <div className="page-section-container">
       <CardPequeno
       imagem="https://cdn.icon-icons.com/icons2/2098/PNG/512/mail_icon_128820.png"
       nome="E-mail"
       descricao="japhiaprazeres@labenu.com"
       nome="Fone"
       descricao="(11) 95555-0011"
       />
       </div>

      <div className="page-section-container">
        <h2>Experiências Acadêmicas e Profissionais</h2>
        <CardGrande
          imagem="https://yt3.ggpht.com/ytc/AAUvwnhKbubHEvUCTiZTjTbOfneyGUISEJsfnzpRV9CP=s900-c-k-c0x00ffffff-no-rj"
          nome="IBM"
          descricao="Change Consultant - Digital Transformation"
        />

        <CardGrande
          imagem="https://user-images.githubusercontent.com/2351721/31314483-7611c488-ac0e-11e7-97d1-3cfc1c79610e.png"
          nome="Labenu"
          descricao="Atualmente estudante de Desenvolvimento Web Front-End na Labenu!"
        />

        <CardGrande
          imagem="https://user-images.githubusercontent.com/2351721/31314483-7611c488-ac0e-11e7-97d1-3cfc1c79610e.png"
          nome="Totvs"
          descricao="Business Consultant"
        />

      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"
          texto="Facebook"
        />

        <ImagemButton
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"
          texto="Twitter"
        />
      </div>
    </div>
  );
}

export default App;