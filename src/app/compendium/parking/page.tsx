'use client';
import React from 'react';
import { Box, Typography, Stack, useMediaQuery } from '@mui/material';
import InfoCardWithTitle from '@/components/cards/InfoCardWithTitle';

export default function ParkingPage() {
    const isMobile = useMediaQuery('(max-width:480px)');

    if (!isMobile) return <Box sx={{ p: 10 }}>Desktop View Placeholder</Box>;

    return (
        <Box sx={{
            pb: 15,
            width: '100%',
            maxWidth: '100vw',
            overflowX: 'hidden',
            bgcolor: '#800040',
            minHeight: '100vh'
        }}>
            <Stack>
                {/* 1. Top Illustration Area - Aligned to the Right */}
                <Box
                    component="img"
                    src="/assets/images/parking-illustration.png"
                    sx={{
                        width: '90%',
                        alignSelf: 'flex-end', // Pushes the image to the right side
                        display: 'block'
                    }}
                    alt="Parking Map Illustration"
                />

                {/* 2. White Content Container */}
                <Box sx={{
                    bgcolor: '#FFFFFF',
                    borderRadius: '40px 40px 0 0',
                    mt: -1, // Creates the overlap effect with the illustration
                    position: 'relative',
                    zIndex: 2,
                    minHeight: '60vh',
                    px: 2,
                    pt: 4
                }}>
                    <Typography variant="h4" sx={{ textAlign: 'center', fontWeight: 800, mb: 4 }}>
                        Car Parking
                    </Typography>

                    <Stack spacing={2.5}>
                        {parkingData.map((item, index) => (
                            <InfoCardWithTitle
                                key={index}
                                icon={item.icon}
                                title={item.title}
                                description={item.description}
                            />
                        ))}
                    </Stack>
                </Box>
            </Stack>
        </Box>
    );
}

const parkingData = [
    {
        icon: '/assets/icons/white-car.png',
        title: 'On-Site Parking',
        description: '• Access via hotel driveway on Harbour Street.\n• Rate: $25 per vehicle, per day'
    },
    {
        icon: '/assets/icons/blue-p.png',
        title: 'Nearby Council Parking',
        description: '• Multiple public parking lots around the property.'
    },
    {
        icon: '/assets/icons/warning-tri.png',
        title: 'Important',
        description: '• Parking is subject to availability.'
    }
];