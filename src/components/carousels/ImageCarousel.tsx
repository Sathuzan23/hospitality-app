'use client';
import React, { useState, useEffect, useCallback } from 'react';
import { Box, Stack } from '@mui/material';

interface ImageCarouselProps {
    images: string[];
    autoPlayInterval?: number;
}

export const ImageCarousel = ({ images, autoPlayInterval = 5000 }: ImageCarouselProps) => {
    const [activeIndex, setActiveIndex] = useState(0);

    // Function to handle moving to the next image infinitely
    const nextImage = useCallback(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, [images.length]);

    // Auto-rotation logic
    useEffect(() => {
        const timer = setInterval(() => {
            nextImage();
        }, autoPlayInterval);

        return () => clearInterval(timer); // Cleanup on unmount or manual change
    }, [nextImage, autoPlayInterval]);

    const handleDotClick = (index: number) => {
        setActiveIndex(index);
    };

    return (
        <Box sx={{ width: '100%', mb: 3, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {/* Main Image Viewport */}
            <Box
                sx={{
                    width: '100%',
                    height: '301px',
                    borderRadius: '30px',
                    overflow: 'hidden',
                    boxShadow: '0px 8px 25px rgba(0,0,0,0.15)',
                    position: 'relative'
                }}
            >
                {images.map((img, index) => (
                    <Box
                        key={index}
                        component="img"
                        src={img}
                        alt={`Leisure facility ${index + 1}`}
                        sx={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            opacity: activeIndex === index ? 1 : 0,
                            transition: 'opacity 0.8s ease-in-out', // Smooth crossfade
                            zIndex: activeIndex === index ? 1 : 0
                        }}
                    />
                ))}
            </Box>

            {/* Position Indicators (Dots) matching Leisure_1.png */}
            <Stack
                direction="row"
                spacing={1.2}
                justifyContent="center"
                sx={{ mt: 2 }}
            >
                {images.map((_, index) => (
                    <Box
                        key={index}
                        onClick={() => handleDotClick(index)}
                        sx={{
                            width: 10,
                            height: 10,
                            borderRadius: '50%',
                            cursor: 'pointer',
                            bgcolor: activeIndex === index ? '#800040' : '#A0A0A0', // Active purple vs inactive grey
                            transition: 'all 0.3s ease'
                        }}
                    />
                ))}
            </Stack>
        </Box>
    );
};