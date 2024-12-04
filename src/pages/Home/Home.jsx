import React from "react";
import { Link } from "react-router-dom"; // Importa o Link
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import background from "../../assets/background2.png";
import "./Home.css";
import ImageCultura from "../../assets/image-cultura.webp";
import ImageCulinaria from "../../assets/image4.png";
import ImageGeografia from "../../assets/image-geografia.jpeg";
import ImageHistoria from "../../assets/image-historia.webp";

const Cultura = () => {
  const cards = [
    { 
      title: "Cultura Típica", 
      image: ImageCultura,
      hoverText: "Maués é um verdadeiro tesouro de cultura amazônica...",
      route: "/cultura"
    },
    { 
      title: "Culinária", 
      image: ImageCulinaria,
      hoverText: "Prepare-se para uma explosão de sabores...",
      route: "/culinaria"
    },
    { 
      title: "Geografia", 
      image: ImageGeografia,
      hoverText: "Situada no coração da Amazônia...",
      route: "/geografia"
    },
    { 
      title: "História", 
      image: ImageHistoria, 
      hoverText: "Descubra as raízes históricas de Maués...",
      route: "/historia"
    },
  ];

  return (
    <div className="cultura-container">
      <Navbar isCulinariaPage={true} />
      <main className="main-content">
        <div className="background-img">
          <img src={background} alt="background" />
        </div>
        <div className="title-section">
          <h1 className="main-title">MAUÉS</h1>
          <h2 className="sub-title">Uma nova forma de olhar</h2>
        </div>
        <div className="card-section">
          {cards.map((card, index) => (
            <Link to={card.route} key={index} className="card-link"> {/* Torna o card clicável */}
              <div
                className="card"
                style={{ backgroundImage: `url(${card.image})` }}
              >
                <span className="card-title">{card.title}</span>
                <span className="card-hover-text">{card.hoverText}</span>
              </div>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cultura;
