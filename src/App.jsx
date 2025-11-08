import React, { useState } from "react";
import Article from "./Article.jsx";
import Panier from "./Panier.jsx";
import "./App.css";

function App() {
  const articles = [
    {
      articleNom: "programmers",
      description: "c'est un article qui explique tout sur la programmation",
      prix: "29.99",
      photo:
        "https://serverexplorer.ledocdev.com/wp-content/uploads/2024/09/OIG1.Av4maWojyFIKl1aDVn6.jpg",
    },
    {
      articleNom: "designers",
      description: "c'est un article qui explique tout sur design",
      prix: "19.99",
      photo:
        "https://tse4.mm.bing.net/th/id/OIP.f66oygMo0mr9zJnSj8B1CwHaER?rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
      articleNom: "managers",
      description: "c'est un article qui explique tout sur management",
      prix: "39.99",
      photo:
        "https://s3.eu-west-2.amazonaws.com/img.creativepool.com/files/candidate/portfolio/full/858469.jpg",
    },
    {
      articleNom: "testers",
      description: "c'est un article qui explique tout sur testing",
      prix: "24.99",
      photo:
        "https://ecdn.teacherspayteachers.com/thumbitem/The-Role-of-Game-Testers-Article-Multiple-Choice-Short-Response-Answers-10969332-1708982708/original-10969332-2.jpg",
    },
  ];

  const [panier, setPanier] = useState([]);

  const Acheter = (nom, prix) => {
    if (!panier.some((article) => article.nom === nom)) {
      setPanier([...panier, { nom, prix }]);
    }
  };

  const Annuler = (nom) => {
    setPanier(panier.filter((article) => article.nom !== nom));
  };


  const calculerT = () => {
    const total = panier.reduce(
      (total, article) => total + parseFloat(article.prix),
      0
    );
    return total.toFixed(2);
  };

  const viderP = () => {
    setPanier([]);
  };

  return (
    <div>
      <h1>Bienvenue dans notre librairie</h1>
      <p>Voici nos articles disponibles :</p>

      <div className="articlesContainer">
        {articles.map((article, index) => (
          <Article
            key={index}
            articleNom={article.articleNom}
            description={article.description}
            prix={article.prix}
            photo={article.photo}
            onAcheter={Acheter}
            dejaAchete={panier.some(
              (a) => a.nom === article.articleNom
            )}
          />
        ))}
      </div>
      <Panier panier={panier} total={calculerT()} onVider={viderP} onAnnuler={Annuler} />
    </div>
  );
}

export default App;
