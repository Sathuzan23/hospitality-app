'use client';
import React from 'react';
import { Box } from '@mui/material';

interface GroupedImageCarouselProps {
    images: string[];
}

export const GroupedImageCarousel = ({ images }: GroupedImageCarouselProps) => {
    return (
        <Box
            sx={{
                display: 'flex',
                overflowX: 'auto',
                gap: 1,
                px: 3,
                py: 2,
                '&::-webkit-scrollbar': { display: 'none' },
                msOverflowStyle: 'none',
                scrollbarWidth: 'none',
                WebkitOverflowScrolling: 'touch',
            }}
        >
            {images.map((src, index) => (
                <Box
                    key={index}
                    component="img"
                    src={src}
                    sx={{
                        width: '100%',
                        height: '250px',
                        objectFit: 'cover',
                        flexShrink: 0,
                        boxShadow: '0px 10px 30px rgba(0,0,0,0.1)',
                    }}
                    alt={`Gallery ${index + 1}`}
                />
            ))}
        </Box>
    );
};