import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import backgroundImage from "../../assets/background-cultura.png";
import imageCultura1 from "../../assets/image 2.webp";
import imageCultura2 from "../../assets/image 3.png";
import imageFesta1 from "../../assets/festa1.webp";
import imageFesta2 from "../../assets/festa2.jpg";
import imageFesta3 from "../../assets/festa3.jpg";
import "./Cultura.css";

const Cultura = () => {
  // Função para rolar até a próxima seção
  const handleScrollToNextSection = () => {
    const nextSection = document.querySelector(".content-1");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="cultura-container">
      <Navbar isCulturaPage={true} />
      <main className="main-content">
        <section
          className="banner-section"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className="overlay"></div>
          <div className="banner-text">
            <h1>MAUÉS</h1>
            <h2>Bem-Vindo à Lenda do Guaraná</h2>
          </div>
          <div className="banner-button">
            <button onClick={handleScrollToNextSection}>Iniciar</button>
          </div>
        </section>

        <div className="content-1">
          <div className="text-content">
            <h2>A Lenda do Guaraná: O Fruto Sagrado de Maués</h2>
            <p>
              Na região de Maués, no coração da Amazônia, a lenda do guaraná é uma das histórias mais antigas e respeitadas pelas tribos indígenas. Segundo a tradição, há muitos séculos, uma tribo foi agraciada com o nascimento de uma criança muito especial, querida por todos. O menino, considerado um presente dos deuses, era gentil, generoso e amado por sua comunidade, trazendo alegria e harmonia.  
              Contudo, a paz não durou para sempre. Enciumado pela felicidade da tribo, Jurupari, o espírito do mal, decidiu tirar a vida do menino enquanto ele colhia frutos na floresta. A tragédia atingiu a aldeia de dor, e a mãe da criança, em prantos, clamou aos deuses para que seu filho pudesse continuar a trazer alegria ao seu povo, mesmo depois que ele partisse.
            </p>
          </div>
          <div className="imageCultura1">
            <img src={imageCultura1} alt="Image1" />
          </div>
        </div>

        <div className="content-2">
          <div className="imageCultura2">
            <img src={imageCultura2} alt="image2" />
          </div>
          <div className="text-content-cultura-2">
            <p>
              Na região de Maués, no coração da Amazônia, a lenda do guaraná é uma das histórias mais antigas e respeitadas pelas tribos indígenas. Segundo a tradição, há muitos séculos, uma tribo foi agraciada com o nascimento de uma criança muito especial, querida por todos. O menino, considerado um presente dos deuses, era gentil, generoso e amado por sua comunidade, trazendo alegria e harmonia.
            </p>
          </div>
        </div>

        <div className="content-cultura-4">
          <div className="text-content">
            <h2 className="cabecalho-festa">A Festa do Guaraná de Maués</h2>
            <p>
              A Festa do Guaraná, realizada anualmente em Maués, Amazonas, é uma celebração cultural única que combina tradições, lendas e a rica herança amazônica. Instituída pela Lei Municipal nº 19 de 1989, ocorre no último fim de semana de novembro e celebra a importância do guaraná, fruto símbolo da região.
            </p>
            <p>
              Além de encenações das lendas do guaraná, como a história do curumim Cauê e da índia Cereçaporanga, a festividade inclui feiras agrícolas, exposições, artesanato indígena e apresentações culturais. Visitantes podem experimentar o guaraná em diversas formas, como bastão ralado, misturado com mel ou outros ingredientes típicos.
            </p>
            <p>
              A festa também movimenta o turismo, com a produção de souvenirs, trajes típicos e trabalhos artísticos que destacam a identidade de Maués. Mais do que uma comemoração, a Festa do Guaraná reforça o vínculo entre a cultura local e a preservação da natureza, celebrando o papel do guaraná como fonte de energia e símbolo do bem-viver.
            </p>
          </div>
          <div className="imageFesta">
            <img className="imagefesta1" src={imageFesta1} alt="festa1" />
            <img className="imagefesta2" src={imageFesta2} alt="festa2" />
            <img className="imagefesta3" src={imageFesta3} alt="festa3" />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cultura;
