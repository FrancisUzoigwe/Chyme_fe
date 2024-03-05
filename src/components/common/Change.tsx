import React, { useState, useEffect } from 'react';

interface iChange {
    images?: any;
}

const Change: React.FC<iChange> = ({ images }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 500);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="slider-container">
            {images.map((image: any, index: any) => (
                <img
                    key={index}
                    src={image} 
                    alt={`Image ${index + 1}`}
                    className={index === currentImageIndex ? 'block ' : 'hidden'}
                />
            ))}
        </div>
    );
};

export default Change;
