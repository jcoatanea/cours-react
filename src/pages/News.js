import React, { useEffect, useState } from 'react';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';
import axios from 'axios';
import Article from '../components/Article';

const News = () => {

    const [newsData, setNewsData] = useState([])

    useEffect(() => {
        getData();
    }, [])


    const getData = () => {
        axios.get('http://localhost:3003/articles').then((res) => setNewsData(res.data));
    }



    return (
        <div className="news-container">
            <Navigation />
            <Logo />
            <h1>News</h1>


            <form>
                <input type="text" placeholder="Nom" />
                <textarea placeholder="Message"></textarea>
                <input type="submit" value="Envoyer" />
            </form>
            <ul>
                {newsData.map((article) => (
                    <Article article={article} key={article.id} />
                ))}
            </ul>
        </div>
    );
};

export default News;