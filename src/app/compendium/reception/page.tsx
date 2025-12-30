'use client';
import React from 'react';
import { Box, Typography, Container, Stack, useMediaQuery, useTheme } from '@mui/material';
import Grid from '@mui/material/Grid'; // Use Grid (v2) to resolve 'xs' and 'item' errors
import CallIcon from '@mui/icons-material/Call';
import { InfoCard } from '@/components/cards/InfoCard';

export default function ReceptionPage() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    if (isMobile) {
        return (
            <Box sx={{ pb: 15, bgcolor: '#FFFFFF', minHeight: '100vh', mx: '10px' }}>
                <Box
                    component="img"
                    src="/assets/images/reception-hero.png"
                    sx={{
                        width: '100%',
                        filter: 'drop-shadow(0px 10px 30px rgba(0,0,0,0.15))',
                        display: 'block',
                        mt: '50px'
                    }}
                />

                <Typography variant="h5" sx={{ textAlign: 'center', fontWeight: 800, mt: 2, mb: 3 }}>
                    Reception
                </Typography>

                <Container>
                    {/* Grid v2 uses 'size' instead of 'xs' to be more future-proof */}
                    <Grid container spacing={2}>
                        <Grid size={6}>
                            <InfoCard
                                icon={<img src="/assets/icons/clock.svg" width="35" alt="clock" />}
                                description="Available 24/7 in the Level 1 lobby"
                            />
                        </Grid>
                        <Grid size={6}>
                            <InfoCard
                                icon={<img src="/assets/icons/bell.png" width="35" alt="bell" />}
                                description="Check-in & check-out assistance"
                            />
                        </Grid>
                        <Grid size={6}>
                            <InfoCard
                                icon={<img src="/assets/icons/taxi.svg" width="35" alt="taxi" />}
                                description="Transportation arrangements"
                            />
                        </Grid>
                        <Grid size={6}>
                            <InfoCard
                                icon={<img src="/assets/icons/pin.png" width="35" alt="pin" />}
                                description="Local recommendations"
                            />
                        </Grid>
                        <Grid size={6}>
                            <InfoCard
                                icon={<img src="/assets/icons/alarm.png" width="35" alt="alarm" />}
                                description="Wake-up requests"
                            />
                        </Grid>
                        <Grid size={6}>
                            <InfoCard
                                icon={<img src="/assets/icons/handshake.png" width="35" alt="handshake" />}
                                description="Support for any stay-related needs"
                            />
                        </Grid>
                    </Grid>

                    {/* Contact Action Box */}
                    <Stack
                        direction="row"
                        alignItems="center"
                        spacing={2}
                        sx={{
                            mt: 4,
                            mx: 'auto',
                            width: 'fit-content',
                            bgcolor: '#FFF',
                            p: 2,
                            borderRadius: '20px',
                            boxShadow: '0px 4px 20px rgba(0,0,0,0.1)',
                            border: '1px solid #EEE'
                        }}
                    >
                        <Box sx={{ bgcolor: '#4CAF50', p: 1, borderRadius: '50%', display: 'flex' }}>
                            <CallIcon sx={{ color: '#FFF' }} />
                        </Box>
                        <Typography sx={{ fontSize: '0.85rem', fontWeight: 500, maxWidth: '160px' }}>
                            Dial #9 from your in-room phone for assistance
                        </Typography>
                    </Stack>
                </Container>
            </Box>
        );
    }

    return <Box sx={{ p: 10 }}>Desktop View</Box>;
}