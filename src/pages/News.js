import React, { useEffect, useState } from 'react';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';
import axios from 'axios';
import Article from '../components/Article';

const News = () => {

    const [newsData, setNewsData] = useState([]);
    const [author, setAuthor] = useState("");
    const [content, setContent] = useState("");
    const [error, setError] = useState(false);

    useEffect(() => {
        getData();
    }, [])


    const getData = () => {
        axios.get('http://localhost:3003/articles').then((res) => setNewsData(res.data));
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (content.length < 140) {
            setError(true);
        } else {
            axios.post('http://localhost:3003/articles', {
                author: author,
                content: content,
                date: Date.now(),
            }).then(() => {
                // On remet l'error sur false pour pas que la bordur rouge et le texte d'affiche apres avoir post
                setError(false);
                // Remettre le champs de texte vide dans le formulaire 
                setAuthor("");
                setContent("");
                // Pour afficher dynamiquement le post que l'on vient de creer, pas oublier de rappeler la data
                getData();
            })
        }
    }

    return (
        <div className="news-container">
            <Navigation />
            <Logo />
            <h1>News</h1>

            {/* On recupere l'evenement du handleSubmit en passant en parametre le e et en le recuperant dans le (e) */}
            <form onSubmit={(e) => handleSubmit(e)}>
                {/* value={author} pour vider le champs de texte du formulaire lié au .then  */}
                <input type="text" placeholder="Nom" value={author} onChange={(e) => setAuthor(e.target.value)} />
                <textarea style={{ border: error ? "1px solid red" : "1px solid #61dafb" }} placeholder="Message" value={content} onChange={(e) => setContent(e.target.value)}></textarea>
                {/* si error est true alors (&&) on affiche le texte */}
                {error && <p>Veuillez ecrire min 140 caractères</p>}
                <input type="submit" value="Envoyer" />
            </form>

            <ul>
                {newsData
                    .sort((a, b) => b.date - a.date)
                    .map((article) => (
                        <Article article={article} key={article.id} />
                    ))}
            </ul>
        </div>
    );
};

export default News;