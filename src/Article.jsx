function Article({ articleNom, description, prix, photo, onAcheter, dejaAchete }) {
  return (
    <div className="articleCard">
      <img src={photo} alt={articleNom} width="100%" />
      <h3>{articleNom}</h3>
      <p>{description}</p>
      <p><strong>{prix} dt</strong></p>

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
  );
}

export default Article;
