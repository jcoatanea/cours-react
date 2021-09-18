import React from 'react';
import axios from 'axios';

const DeleteArticle = (props) => {

    const { id } = props;

    const handleDelete = () => {
        axios.delete('http://localhost:3003/articles/' + id)
        window.location.reload();
    }

    return (
        <div>
            <button onClick={() => {
                if (window.confirm('Voulez vous supprimer cet article ?')) {
                    handleDelete();
                }
            }}>Supprimer</button>
        </div>
    );
};

export default DeleteArticle;