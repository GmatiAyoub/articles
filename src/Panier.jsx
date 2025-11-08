function Panier({ panier, total, onVider, onAnnuler }) {
    return (
    <div className="panier">
        <h2>PANIER</h2>
        {panier.length === 0 ? (
        <p>Votre panier est vide</p>
        ) : (
        <div>
            <ul>
            {panier.map((article, index) => (
            <li key={index} className="panierItem">
                <span>
                {article.nom} - {article.prix} dt
                </span>
                <button
                className="btnAnnuler"
                onClick={() => onAnnuler(article.nom)}
                >
                Annuler
                </button>
            </li>
            ))}
        </ul>
        <h3>Total : {total} dt</h3>
        <button onClick={onVider}>Vider le panier</button>
        </div>
    )}
    </div>
);
}

export default Panier;
