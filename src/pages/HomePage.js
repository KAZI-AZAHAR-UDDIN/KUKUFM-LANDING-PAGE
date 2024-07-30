import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Carousel from '../components/Carousel';
import InfiniteScroll from '../components/InfiniteScroll';
import { fetchData } from '../api';

const HomePage = () => {
    const [carouselItems, setCarouselItems] = useState([]);

    useEffect(() => {
        const loadCarouselData = async () => {
            try {
                const data = await fetchData(1);
                setCarouselItems(data.mixed_items || []);
            } catch (error) {
                console.error('Error loading carousel data:', error);
            }
        };

        loadCarouselData();
    }, []);

    return (
        <div>
            <Header />
            <main>
                <Carousel items={carouselItems} />
                <InfiniteScroll />
            </main>
        </div>
    );
};

export default HomePage;
