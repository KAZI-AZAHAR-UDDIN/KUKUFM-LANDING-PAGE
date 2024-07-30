import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import '../styles/InfiniteScroll.css';
import LoadingSpinner from './LoadingSpinner';

const InfiniteScroll = () => {
    const [items, setItems] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    const [error, setError] = useState(null);

    const fetchItems = useCallback(async () => {
        if (loading || !hasMore) return;
        setLoading(true);
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}&page=${page}`);
            const newItems = response.data.items || [];
            setItems(prevItems => [...prevItems, ...newItems]);
            setHasMore(newItems.length > 0);
            setPage(prevPage => prevPage + 1);
        } catch (error) {
            console.error('Error fetching data:', error);
            setError(error);
        } finally {
            setLoading(false);
        }
    }, [page, loading, hasMore]);

    useEffect(() => {
        fetchItems();
    }, [fetchItems]);

    useEffect(() => {
        const handleScroll = () => {
            if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || loading) return;
            fetchItems();
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [fetchItems, loading]);

    if (error) return <p>Error loading data: {error.message}</p>;

    return (
        <div className="infinite-scroll">
            <div className="items-container">
                {items.map((item, index) => (
                    <div key={index} className="banner-item">
                        {item.banners && item.banners.map((banner, idx) => (
                            <div key={idx} className="banner-card">
                                <a href={banner.web_url} className="banner-link">
                                    <img src={banner.image} alt={banner.title} className="banner-image" />
                                    <div className="banner-info" style={{ backgroundColor: banner.bg_color, color: banner.text_color }}>
                                        <h3 className="banner-title">{banner.title}</h3>
                                        <p className="banner-description">{banner.content_type.description}</p>
                                    </div>
                                </a>
                            </div>
                        ))}
                    </div>
                ))}
                {loading && <LoadingSpinner />}
            </div>
        </div>
    );
};

export default InfiniteScroll;
