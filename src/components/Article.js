import React from 'react';

const Article = (props) => {

    const { article } = props;

    return (
        <div className="article">
            <div className="card-header">
                <h3>{article.author}</h3>
                <em>Posté le {article.date}]</em>
                <p>{article.content}</p>

                <div className="btn-container">
                    <button>Edit</button>
                    <button>Delete</button>
                </div>

            </div>

        </div>
    );
};

export default Article;