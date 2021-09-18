import React, { useState } from 'react';
import axios from 'axios';
import DeleteArticle from './DeleteArticle';

const Article = (props) => {

    const { article } = props;

    const [isEditing, setIsEditing] = useState(false);
    const [editedContent, setEditContent] = useState("");

    const dateParser = (date) => {
        let newDate = new Date(date).toLocaleDateString('fr-FR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
        })

        return newDate;
    }

    const handleEdit = () => {

        const data = {
            author: article.author,
            content: editedContent ? editedContent : article.content,
            date: article.date,
        }

        axios.put('http://localhost:3003/articles/' + article.id, data)
            .then(() => {
                setIsEditing(false);
            })

    }

    return (
        <div className="article" style={{ background: isEditing ? "#f3feff" : "white" }}>
            <div className="card-header">
                <h3>{article.author}</h3>
                <em>Posté le {dateParser(article.date)}</em>
            </div>
            {/* autofocus pour que la balise soit directement prete a etre ecrite */}
            {isEditing ? (
                <textarea autoFocus defaultValue={editedContent ? editedContent : article.content} onChange={(e) => setEditContent(e.target.value)}></textarea>
            ) : (
                // Probleme on ne peut pas changer la data dynamiquement sans refresh la page, donc petite astuce (sinon redux)
                // Est ce que editedContent est sur true si oui tu affiche editedContent sinon article.content /!\ pas oublier de le faire aussi sur la defaultValue
                <p>{editedContent ? editedContent : article.content}</p>
            )}

            <div className="btn-container">
                {isEditing ? (
                    <button onClick={handleEdit}>Valider</button>
                ) : (
                    <button onClick={() => setIsEditing(true)}>Edit</button>
                )}

                <DeleteArticle id={article.id} />
            </div>

        </div>
    );
};

export default Article;