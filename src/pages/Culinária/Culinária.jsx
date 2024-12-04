import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import backgroundImage from "../../assets/background-culinaria.png";
import imageTacaca from "../../assets/image-tacaca.jpeg";
import imageFarinha from "../../assets/image-farinha.jpg";
import imagePirarucu from "../../assets/image-pirarucu.webp";
import imageGuarana from "../../assets/image-guarana.webp";
import imageCulinariaMaues from "../../assets/imageCulinariaMaues.jpeg";
import "./Culinária.css";

const Culinaria = () => {
  // Função para rolar até a próxima seção
  const handleScrollToNextSection = () => {
    const nextSection = document.querySelector(".content-1");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="cultura-container">
      <Navbar isCulinariaPage={true} />
      <main className="main-content">
        <section
          className="banner-section"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className="overlay"></div>
          <div className="banner-text">
            <h1>MAUÉS</h1>
            <h2>Saboreie a Culinária</h2>
          </div>
          <div className="banner-button">
            <button onClick={handleScrollToNextSection}>Iniciar</button>
          </div>
        </section>

        <div className="content-1">
          <div className="text-content">
            <h2>Culinária de Maués: Tradição e Sabores da Amazônia</h2>
            <p>
            A culinária de Maués, uma cidade localizada no coração da Amazônia, é um verdadeiro tesouro cultural e gastronômico. Reconhecida como a "Terra do Guaraná", a região possui uma cozinha rica em sabores, aromas e tradições que refletem a biodiversidade e a herança cultural de seus habitantes. A alimentação local é profundamente influenciada pelos recursos naturais da floresta, como peixes, frutas, raízes e especiarias, que compõem pratos autênticos e nutritivos.
            Entre os destaques está o guaraná, não apenas um símbolo econômico da região, mas também um ingrediente versátil na gastronomia local. Seja em bebidas refrescantes, sobremesas ou até mesmo pratos principais, o guaraná é celebrado como um elemento indispensável na cozinha mauesense. Além disso, peixes frescos como tambaqui e pirarucu, preparados em receitas tradicionais como moquecas e assados, são ícones da culinária local, acompanhados por farinha de mandioca, outro ingrediente essencial.
            A presença de frutas exóticas como cupuaçu, açaí e pupunha adiciona um toque especial às sobremesas, enquanto temperos e ervas típicas, como chicória e jambu, enriquecem os pratos com sabores únicos. A culinária de Maués não é apenas uma expressão da criatividade e do talento de seus cozinheiros, mas também uma forma de conectar-se à natureza e às tradições indígenas que formam a base da cultura local.
            Explorar a gastronomia de Maués é embarcar em uma jornada pelos sabores da Amazônia, onde cada prato conta uma história e celebra a riqueza cultural e ambiental da região.
            </p>
          </div>
          <div className="image1">
            <img src={imageCulinariaMaues} alt="Culinária de Maués" />
          </div>
        </div>

        <div className="content-titulo-2">
          <h1>Tacacá: Tradição Amazônica</h1>
        </div>
        <div className="content-2">
          <div className="image2">
            <img src={imageTacaca} alt="Tacacá" />
          </div>
          <div className="text-content-2">
            <p>
            O tacacá é um dos pratos mais icônicos da culinária amazônica, e em Maués, ele ganha um toque especial que reflete a rica cultura e os recursos naturais da região. Preparado com tucupi, um caldo amarelo extraído da mandioca brava e cuidadosamente fermentado, o tacacá é servido quente em cuias, evocando uma experiência tradicional e única.
            A receita típica inclui goma de tapioca, que dá uma textura suave ao prato, além de camarões secos, que conferem um sabor marcante e uma ligação com os rios que circundam a cidade. O jambu, uma erva amazônica conhecida por causar uma leve sensação de dormência na boca, é outro ingrediente essencial, proporcionando uma experiência sensorial única.
            O tacacá de Maués é frequentemente consumido em ocasiões especiais ou como uma refeição reconfortante no final do dia. Ele simboliza a conexão entre a culinária local e a floresta, destacando os ingredientes nativos e o saber ancestral que tornam essa iguaria uma das mais apreciadas da Amazônia.
            </p>
          </div>
        </div>

        <div className="content-titulo-3">
          <h1>Farinha de Maués: Um Tesouro Artesanal</h1>
        </div>
        <div className="content-3">
          <div className="image3">
            <img src={imageFarinha} alt="Farinha de Maués" />
          </div>
          <div className="text-content-3">
            <p>
            A farinha de Maués é um dos produtos mais emblemáticos da região, conhecida por sua qualidade excepcional e seu sabor único. Produzida artesanalmente a partir da mandioca, ela carrega consigo não apenas o sabor, mas também a história e a tradição dos povos amazônicos que dominam essa técnica há gerações.
            O processo de produção começa com a colheita da mandioca, que é descascada, ralada e prensada para retirar o excesso de líquido. Depois, a massa é torrada cuidadosamente em tachos de ferro, garantindo a textura crocante e o sabor levemente defumado que caracterizam a farinha de Maués. Cada etapa é feita com atenção e respeito, refletindo o profundo vínculo da comunidade com a terra.
            Amplamente utilizada na culinária local, a farinha é um acompanhamento indispensável para pratos como peixe assado, tacacá e caldo de piranha. Além disso, ela é apreciada sozinha, com manteiga ou mel de abelha nativa, como um lanche simples e saboroso.
            Reconhecida por sua versatilidade e qualidade, a farinha de Maués não é apenas um alimento básico, mas também um símbolo da riqueza cultural e gastronômica da Amazônia.
            </p>
          </div>
        </div>

        <div className="content-titulo-4">
                <h1>Pirarucu de Casaca: O Bacalhau da Amazônia</h1>
            </div>
            <div className="content-4">
                <div className="image4">
                    <img src={imagePirarucu} alt="image4" />
                </div>
                <div className="text-content-4">
                    <p>
                    O pirarucu de casaca é um dos pratos mais sofisticados e tradicionais da culinária de Maués, representando a riqueza dos sabores amazônicos em uma combinação que encanta paladares. O protagonista desse prato é o pirarucu, conhecido como o "bacalhau da Amazônia", um peixe de carne firme, sabor delicado e grande importância cultural e econômica para a região.
                    Preparar o pirarucu de casaca é uma arte que mescla técnicas tradicionais com ingredientes locais. O peixe é dessalgado e desfiado, formando a base de uma camada generosa que se mistura harmoniosamente com ingredientes como banana-da-terra frita, farinha-d’água, azeite de dendê, ovos cozidos e azeitonas. A montagem do prato é feita em camadas, resultando em uma apresentação visualmente rica e convidativa.
                    O tempero do pirarucu de casaca é cuidadosamente equilibrado com ervas e especiarias locais, conferindo um aroma e sabor únicos que remetem às tradições amazônicas. Geralmente servido em ocasiões especiais, como festas e encontros familiares, o prato é um verdadeiro banquete que celebra a conexão entre o homem e a natureza.
                    Além de delicioso, o pirarucu de casaca é um símbolo da cultura gastronômica de Maués, mostrando como os ingredientes da Amazônia podem ser transformados em uma experiência culinária sofisticada e inesquecível.
                    </p>
                </div>
            </div>
            
            <div className="content-titulo-5">
                <h1>Guaraná: Símbolo de Energia e Tradição</h1>
            </div>
            <div className="content-5">
                <div className="image5">
                    <img src={imageGuarana} alt="image5" />
                </div>
                <div className="text-content-4">
                    <p>
                    O guaraná de Maués é um dos maiores tesouros naturais da região e um símbolo de sua rica biodiversidade. Conhecido mundialmente por suas propriedades energéticas e estimulantes, o guaraná é um fruto nativo da Amazônia, especialmente cultivado em Maués, um município localizado no coração da floresta. Sua importância vai além da gastronomia, desempenhando um papel essencial na economia local e na cultura regional.
                    O fruto, com sua casca vermelha e sementes pretas, é transformado em uma pasta ou pó, amplamente utilizado na fabricação de bebidas energéticas, suplementos alimentares e produtos cosméticos, além de ser ingrediente base para a criação de xaropes e refrigerantes.
                    Na culinária local, o guaraná é utilizado de diversas formas, desde sucos frescos até doces e pratos típicos. Seu sabor levemente amargo e seu aroma marcante fazem com que seja um ingrediente único, que adiciona uma energia natural e vigorosa às receitas. O guaraná também é utilizado em chás e remédios tradicionais, sendo considerado um poderoso estimulante, com propriedades que auxiliam na melhora da concentração e combate à fadiga.
                    O guaraná de Maués não é apenas um produto da natureza, mas também um ícone cultural da região, celebrado em festivais e eventos, e valorizado por sua conexão com a história e os saberes ancestrais dos povos indígenas locais. 
                    </p>
                </div>
            </div>
      </main>
      <Footer />
    </div>
  );
};

export default Culinaria;
