'use client';
import React from 'react';
import { Box, Typography, Container, Grid, ToggleButton, ToggleButtonGroup, useMediaQuery } from '@mui/material';
import { useRouter, usePathname } from 'next/navigation';
import { ImageCarousel } from '@/components/carousels/ImageCarousel';
import { InfoCard } from '@/components/cards/InfoCard';

interface Feature {
    icon: string;
    description: string;
}

interface LeisureTemplateProps {
    title: string;
    images: string[];
    features: Feature[];
}

export const LeisureTemplate = ({ title, images, features }: LeisureTemplateProps) => {
    const isMobile = useMediaQuery('(max-width:480px)');
    const router = useRouter();
    const pathname = usePathname();

    // Determine active toggle based on URL
    const activeValue = pathname.includes('gym') ? 'gym' : 'pool';

    const handleNavigation = (_: React.MouseEvent<HTMLElement>, nextView: string | null) => {
        if (nextView !== null) {
            router.push(`/compendium/leisure/${nextView}`);
        }
    };

    if (!isMobile) return <Box sx={{ p: 10 }}>Desktop View (Split-line Design)</Box>;

    return (
        <Box sx={{
            pb: 15,
            width: '100%',
            maxWidth: '100vw',
            overflowX: 'hidden',
            bgcolor: '#FFFFFF',
            minHeight: '100vh'
        }}>
            <Container sx={{ pt: 4, px: 2 }}>
                <Typography variant="h4" sx={{ textAlign: 'center', fontWeight: 800, mb: 3 }}>
                    Leisure Facilities
                </Typography>

                {/* Subcategory Navigation Buttons */}
                <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
                    <ToggleButtonGroup
                        value={activeValue}
                        exclusive
                        onChange={handleNavigation}
                        sx={{
                            bgcolor: '#f2f2f2',
                            borderRadius: '50px',
                            p: 0.5,
                            border: 'none',
                            '& .MuiToggleButton-root': {
                                border: 'none',
                                borderRadius: '50px !important',
                                px: 5,
                                py: 0.8,
                                fontWeight: 700,
                                textTransform: 'none',
                                color: '#800040',
                                '&.Mui-selected': {
                                    bgcolor: '#FFD1E8', // Light pink/purple highlight
                                    color: '#800040',
                                    '&:hover': { bgcolor: '#FFC0DF' }
                                }
                            }
                        }}
                    >
                        <ToggleButton value="pool">Pool</ToggleButton>
                        <ToggleButton value="gym">Gym</ToggleButton>
                    </ToggleButtonGroup>
                </Box>

                {/* Image Carousel */}
                <ImageCarousel images={images} />

                {/* Subcategory Title */}
                <Typography variant="h5" sx={{ textAlign: 'center', fontWeight: 800, mb: 3 }}>
                    {title}
                </Typography>

                {/* Features Grid using your updated InfoCard */}
                <Grid container spacing={1.5} sx={{ width: 'calc(100% + 12px)', ml: -0.75 }}>
                    {features.map((item, index) => (
                        <Grid size={6} >
                            <InfoCard
                                icon={<img src={`/assets/icons/${item.icon}.png`} width="28" alt="" />}
                                description={item.description}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};
