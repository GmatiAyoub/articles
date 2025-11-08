function Article({ articleNom, description, prix, photo, onAcheter, dejaAchete }) {
  return (
    <div className="articleCard">
      <img src={photo} alt={articleNom} className="articleImage" />
      <div className="articleContent">
        <h3 className="articleTitle">{articleNom}</h3>
        <p className="articleDescription">{description}</p>
        <p className="articlePrice">{prix}</p>

        {dejaAchete ? (
          <button disabled className="btnDeja">
            Déjà acheté
          </button>
        ) : (
          <button onClick={() => onAcheter(articleNom, prix)}>
            Acheter
          </button>
        )}
      </div>
    </div>
  );
}

export default Article;