import React from 'react'

const NewsItem = (props) => {
    let { title, description, imgUrl, newsUrl, author, date } = props;
    return (
        <div className='my-3'>
            <div className="card">
                <img src={imgUrl ? imgUrl : "https://economictimes.indiatimes.com/thumb/msid-102698198,width-1070,height-580,imgsize-88698,overlay-etmarkets/photo.jpg"} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{description}...</p>
                    <p className="card-text"><small className="text-body-secondary">By {author ? author : "Unknown"} on {date}</small></p>
                    <a href={newsUrl} target="blank" className="btn btn-sm btn-dark">Read More</a>
                </div>
            </div>
        </div>
    )
}


export default NewsItem
