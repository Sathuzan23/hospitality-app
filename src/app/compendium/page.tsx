'use client';
import React from 'react';
import { Box, Typography, Stack, Container, useTheme, useMediaQuery } from '@mui/material';
import { WelcomeCard } from '@/components/cards/WelcomeCard';

export default function CompendiumPage() {
    const theme = useTheme();
    const isLargeScreen = useMediaQuery(theme.breakpoints.up('md'));

    return (
        <Box sx={{ minHeight: '100vh', bgcolor: '#FFFFFF', position: 'relative' }}>
            {isLargeScreen ? (
                /* DESKTOP & TABLET VIEW: Minimalist Split-Line Design */
                <Box sx={{ display: 'flex', width: '100vw', height: '100vh', alignItems: 'flex-start', pt: '12vh', position: 'relative', zIndex: 2 }}>
                    <Box sx={{ width: '45%', pl: { md: 8, lg: 12 } }}>
                        <Box component="img" src="/assets/images/sage-logo.png" sx={{ width: '100px', mb: 4 }} />
                        <Typography variant="h1" sx={{ fontWeight: 900, color: '#800040', fontSize: { md: '3.5rem', lg: '4rem' }, lineHeight: 1 }}>
                            Digital <br /> Compendium
                        </Typography>
                        <Box sx={{ width: '80px', height: '8px', bgcolor: '#800040', mt: 4, borderRadius: '2px' }} />
                    </Box>

                    <Box sx={{ width: '4px', height: '50vh', bgcolor: '#800040', borderRadius: '4px' }} />

                    <Box sx={{ flex: 1, px: 8 }}>
                        <Container maxWidth="sm">
                            <Stack spacing={4}>
                                <Typography variant="h4" sx={{ fontWeight: 700, color: '#333' }}>
                                    Welcome to <br />
                                    <Box component="span" sx={{ color: '#800040' }}>Sage Wollongong</Box>
                                </Typography>
                                <WelcomeCard
                                    title="Experience Excellence"
                                    description="Explore our curated services and leisure facilities designed for a seamless stay. Our team is at your service throughout your visit."
                                    footer="Enjoy your stay with Sage Hotels."
                                />
                            </Stack>
                        </Container>
                    </Box>
                </Box>
            ) : (
                /* MOBILE VIEW: Exact replica of Compendium_Home.png */
                <Box sx={{ width: '100%', minHeight: '100vh', position: 'relative', overflow: 'hidden' }}>

                    {/* Full Page Background Image */}
                    <Box sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundImage: 'url(/assets/images/home-mobile-bg.png)',
                        backgroundSize: '100% auto', // Fits width perfectly
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'top center',
                        zIndex: 1
                    }} />

                    {/* Content Container */}
                    <Box sx={{ position: 'relative', zIndex: 2, pt: 2, pb: 15, px: 2 }}>
                        {/* Top Logo */}
                        <Box component="img" src="/assets/images/sage-logo.png" sx={{ width: '80px', ml: 1 }} />

                        {/* Main Heading Section */}
                        <Stack alignItems="center" sx={{ mt: '35vh', mb: 3 }}>
                            <Typography variant="h4" sx={{
                                fontWeight: 800,
                                color: '#800040',
                                textAlign: 'center',
                                fontSize: '1.8rem',
                                borderBottom: '3px solid #800040', // The underline from your image
                                pb: 0.5,
                                px: 2
                            }}>
                                Digital Compendium
                            </Typography>
                        </Stack>

                        {/* Welcome Card Section */}
                        <Container sx={{ px: 1 }}>
                            <WelcomeCard
                                title="Welcome to Sage Wollongong"
                                description="We invite you to explore the features, services, and curated experiences available throughout your stay. This guide provides easy access to hotel information, leisure facilities, dining, and more—designed to ensure a smooth and enjoyable visit."
                                footer="Our team remains at your service throughout your time with us."
                            />
                        </Container>
                    </Box>
                </Box>
            )}
        </Box>
    );
}