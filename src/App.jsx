import React, { useState } from "react";
import Article from "./Article.jsx";
import Panier from "./Panier.jsx";
import "./App.css";

function App() {
  const articles = [
    {
      articleNom: "Programmers",
      description: "Découvrez les secrets de la programmation moderne et devenez un expert du développement",
      prix: "29.99",
      photo: "https://serverexplorer.ledocdev.com/wp-content/uploads/2024/09/OIG1.Av4maWojyFIKl1aDVn6.jpg",
      categorie: "Développement"
    },
    {
      articleNom: "Designers",
      description: "Maîtrisez les principes du design UI/UX et créez des interfaces exceptionnelles",
      prix: "19.99",
      photo: "https://tse4.mm.bing.net/th/id/OIP.f66oygMo0mr9zJnSj8B1CwHaER?rs=1&pid=ImgDetMain&o=7&rm=3",
      categorie: "Design"
    },
    {
      articleNom: "Managers",
      description: "Apprenez les techniques de management moderne et leadez vos équipes vers le succès",
      prix: "39.99",
      photo: "https://s3.eu-west-2.amazonaws.com/img.creativepool.com/files/candidate/portfolio/full/858469.jpg",
      categorie: "Management"
    },
    {
      articleNom: "Testers",
      description: "Devenez expert en assurance qualité et maîtrisez toutes les méthodes de testing",
      prix: "24.99",
      photo: "https://ecdn.teacherspayteachers.com/thumbitem/The-Role-of-Game-Testers-Article-Multiple-Choice-Short-Response-Answers-10969332-1708982708/original-10969332-2.jpg",
      categorie: "Qualité"
    },
    {
      articleNom: "DevOps",
      description: "Automatisez vos déploiements et maîtrisez l'intégration continue",
      prix: "34.99",
      photo: "https://tse3.mm.bing.net/th/id/OIP.AGWsKZ2fdIYHPLOl__Vy9gHaEK?cb=ucfimg2ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
      categorie: "Infrastructure"
    },
    {
      articleNom: "Data Science",
      description: "Explorez le monde de la data science et du machine learning",
      prix: "44.99",
      photo: "https://www.simplilearn.com/ice9/free_resources_article_thumb/Data-Science-vs.-Big-Data-vs.jpg",
      categorie: "Data"
    }
  ];

  const [panier, setPanier] = useState([]);
  const [filtreCategorie, setFiltreCategorie] = useState("Tous");

  const categories = ["Tous", ...new Set(articles.map(article => article.categorie))];

  const articlesFiltres = filtreCategorie === "Tous" 
    ? articles 
    : articles.filter(article => article.categorie === filtreCategorie);

  const Acheter = (nom, prix) => {
    if (!panier.some((article) => article.nom === nom)) {
      setPanier([...panier, { 
        nom, 
        prix,
        id: Date.now() // ID unique pour chaque article
      }]);
    }
  };

  const Annuler = (id) => {
    setPanier(panier.filter((article) => article.id !== id));
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

  const nombreArticlesPanier = panier.length;

  return (
    <div className="app-container">
      {/* En-tête avec compteur de panier */}
      <div className="app-header">
        <div className="header-content">
          <h1>📚 Librairie Premium</h1>
          <p>Découvrez notre collection exclusive d'articles spécialisés</p>
          
          {/* Indicateur du panier */}
          <div className="panier-indicator">
            <span className="panier-count">{nombreArticlesPanier}</span>
            <span>Articles dans le panier</span>
          </div>
        </div>
      </div>

      {/* Filtres par catégorie */}
      <div className="filtres-container">
        <h3>Filtrer par catégorie :</h3>
        <div className="filtres-buttons">
          {categories.map(categorie => (
            <button
              key={categorie}
              className={`filtre-btn ${filtreCategorie === categorie ? 'active' : ''}`}
              onClick={() => setFiltreCategorie(categorie)}
            >
              {categorie}
            </button>
          ))}
        </div>
      </div>

      {/* Container des articles */}
      <div className="articlesContainer">
        {articlesFiltres.map((article, index) => (
          <Article
            key={index}
            articleNom={article.articleNom}
            description={article.description}
            prix={article.prix}
            photo={article.photo}
            categorie={article.categorie}
            onAcheter={Acheter}
            dejaAchete={panier.some((a) => a.nom === article.articleNom)}
          />
        ))}
      </div>

      {/* Message si aucun article trouvé */}
      {articlesFiltres.length === 0 && (
        <div className="no-articles">
          <h3>Aucun article trouvé dans cette catégorie</h3>
          <p>Essayez de sélectionner une autre catégorie</p>
        </div>
      )}

      {/* Composant Panier */}
      <Panier 
        panier={panier} 
        total={calculerT()} 
        onVider={viderP} 
        onAnnuler={Annuler} 
      />

      {/* Pied de page */}
      <footer className="app-footer">
        <p>&copy; 2024 Librairie Premium. Tous droits réservés.</p>
        <div className="footer-links">
          <a href="#cgv">CGV</a>
          <a href="#confidentialite">Confidentialité</a>
          <a href="#contact">Contact</a>
        </div>
      </footer>
    </div>
  );
}

export default App;