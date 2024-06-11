import React, { Component, useEffect, useState } from 'react'
import { NewsItem, Spinner } from '../../components'
import InfiniteScroll from 'react-infinite-scroll-component'
const News = (props) => {
    const defaultLink = 'https://static.vecteezy.com/system/resources/previews/000/197/882/original/vector-news-headlines-background-with-earth-planet.jpg'

    const [articles, setArticles] = useState("")
    const [loading, setLoading] = useState(true)
    const [currentPage, setCurrentPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)
    const [hasMore, setHasMore] = useState(true);

    const capitalize = (s) => {
        return s[0].toUpperCase() + s.slice(1)
    }

    const updateData = async () => {
        let url = 'https://newsapi.org/v2/top-headlines?' +
            'country=in&' +
            `category=${props.category}&` +
            `apiKey=${props.apikey}&` +
            `pageSize=${props.pageSize}&` +
            `page=${currentPage}`;
        let req = new Request(url);
        let data = await (await fetch(req)).json()
        setArticles(data.articles)
        setTotalResults(data.totalResults)
        setLoading(false)
    }

    useEffect(() => {
        document.title = `${capitalize(props.category)} - NewsMonkey`
        updateData()
    }, [])


    const fetchMoreData = async () => {
        let url = 'https://newsapi.org/v2/top-headlines?' +
            'country=in&' +
            `category=${props.category}&` +
            `apiKey=${props.apikey}&` +
            `pageSize=${props.pageSize}&` +
            `page=${currentPage + 1}`;

        setCurrentPage(currentPage + 1)
        let req = new Request(url);
        let data = await (await fetch(req)).json()
        setArticles(articles.concat(data.articles))
        setHasMore(articles.length + data.articles.length < data.totalResults)
        setTotalResults(data.totalResults)


    };


    return (
        <div className="flex flex-col justify-center items-center mb-7 mt-12 z-0">
            <h1 className="text-5xl py-6">In today's headlines -
                {props.category}</h1>
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={hasMore}
                loader={<div className="flex justify-center items-center h-full w-full"><Spinner /></div>}
            >
                <div className="flex flex-wrap justify-center">
                    {!loading && articles.map(({ title, description, urlToImage,
                        url, author, publishedAt, source }) => {
                        return <div key={url} >
                            <NewsItem
                                title={title && title.length > 56 ? title.slice(0, 56)
                                    + '...' : title}

                                description={description && description.length > 156 ?
                                    description.slice(0, 156) + '...' : description}

                                image={urlToImage ? urlToImage : defaultLink}
                                url={url}
                                author={author}
                                date={publishedAt}
                                sourceName={source.name}
                            />

                        </div>
                    })}
                </div>
            </InfiniteScroll>

        </div>
    )
}

export default News
