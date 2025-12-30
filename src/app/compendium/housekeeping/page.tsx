'use client';
import React from 'react';
import { Box, Typography, Stack, Grid, useMediaQuery } from '@mui/material';
import InfoCardWithTitle from '@/components/cards/InfoCardWithTitle';
import SmallServiceCard from '@/components/cards/SmallServiceCard';

export default function HousekeepingPage() {
    const isMobile = useMediaQuery('(max-width:480px)');

    if (!isMobile) return <Box sx={{ p: 10 }}>Desktop View Placeholder</Box>;

    return (
        <Box sx={{
            pb: 15,
            width: '100%',
            maxWidth: '100vw',
            overflowX: 'hidden',
            bgcolor: '#800040', // Base theme color
            minHeight: '100vh'
        }}>
            <Stack>
                {/* 1. Hero Image */}
                <Box
                    component="img"
                    src="/assets/images/housekeeping-hero.png"
                    sx={{ width: '100%', height: 'auto', display: 'block' }}
                    alt="Housekeeping Staff"
                />

                {/* 2. Content Container */}
                <Box sx={{
                    bgcolor: '#FFFFFF',
                    borderRadius: '40px 40px 0 0',
                    mt: -4,
                    position: 'relative',
                    zIndex: 2,
                    px: 2,
                    pt: 4
                }}>
                    <Typography variant="h4" sx={{ textAlign: 'center', fontWeight: 800, mb: 4, color: '#800040' }}>
                        Housekeeping
                    </Typography>

                    {/* Top Row: Two side-by-side cards */}
                    <Grid container spacing={2} sx={{ mb: 2 }}>
                        <Grid size={6}>
                            <SmallServiceCard
                                icon="/assets/icons/hk-clock.png"
                                title="Service Hours:"
                                description="9:00am – 6:00pm"
                            />
                        </Grid>
                        <Grid size={6}>
                            <SmallServiceCard
                                icon="/assets/icons/hk-phone.png"
                                title="Requests"
                                description="Dial #9 from your in-room phone"
                            />
                        </Grid>
                    </Grid>

                    {/* Bottom Rows: Full-width stacked cards */}
                    <Stack spacing={2}>
                        {housekeepingData.map((item, index) => (
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

// Data for the full-width cards
const housekeepingData = [
    {
        icon: '/assets/icons/hk-calendar.png',
        title: 'Daily Service (On Request)',
        description: 'Display "Please make up my room" before 1:00pm to request a room clean.'
    },
    {
        icon: '/assets/icons/hk-coffee.png',
        title: 'Clean-Break Program',
        description: 'Display "Clean Break: Do Not Disturb" to skip service. Receive a Complimentary Coffee Voucher from reception as a thank you.'
    },
    {
        icon: '/assets/icons/hk-linen.png',
        title: 'Long-Stay Servicing',
        description: 'Rooms are automatically serviced with linen change on Day 4. Keep Do Not Disturb sign up to opt out.'
    }
];