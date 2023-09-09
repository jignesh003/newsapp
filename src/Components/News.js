import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';


const News = (props) => {

    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, settotalResults] = useState(0)

    const updateNews = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=7e6079fd461b4476ae9b9d98b1ef6f0e&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true)
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(parsedData.articles)
        settotalResults(parsedData.totalResults)
        setLoading(false)
    }

    useEffect(() => {
        updateNews()
    }, [])

    const handleprevclick = async () => {
        setPage(page - 1)
        updateNews()
    }

    const handlenextclick = async () => {

        setPage(page + 1)
        updateNews()

    }

    return (
        <div className="container my-3">
            <h2 className='text-center' style={{ margin: "35px 0px", marginTop:"90px" }}>HeadlineHub - Top {props.category} Headlines</h2>
            <div className="text-center">
                {loading && <Spinner />}
            </div>
            <div className="row">
                {!loading && articles.map((element) => {
                    return <div className="col-md-4" key={element.url}>
                        <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imgUrl={element.urlToImage} newsUrl={element.url}
                            author={element.author} date={element.publishedAt} />
                    </div>
                })}
            </div>
            <div className="container d-flex justify-content-between">
                <button disabled={page <= 1} type="button" className="btn btn-dark" onClick={handleprevclick}> &larr; Previous</button>
                <button disabled={page + 1 > Math.ceil(totalResults / props.pageSize)} type="button" className="btn btn-dark" onClick={handlenextclick}>Next &rarr;</button>

            </div>
        </div >
    )
}


export default News
