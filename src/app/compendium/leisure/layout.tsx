'use client';
import React from 'react';
import { Box, Typography, Container, ToggleButton, ToggleButtonGroup, useMediaQuery } from '@mui/material';
import { useRouter, usePathname } from 'next/navigation';

export default function LeisureLayout({ children }: { children: React.ReactNode }) {
    const isMobile = useMediaQuery('(max-width:480px)');
    const router = useRouter();
    const pathname = usePathname();

    const activeValue = pathname.includes('gym') ? 'gym' : 'pool';

    const handleNavigation = (_: React.MouseEvent<HTMLElement>, nextView: string | null) => {
        if (nextView !== null) {
            router.push(`/compendium/leisure/${nextView}`);
        }
    };

    if (!isMobile) return <Box sx={{ p: 10 }}>Desktop View Placeholder</Box>;

    return (
        <Box sx={{ width: '100%', maxWidth: '100vw', overflowX: 'hidden', bgcolor: '#FFFFFF', minHeight: '100vh' }}>
            <Container sx={{ pt: 4, px: '10px', mt: '50px' }}>
                <Typography variant="h4" sx={{ textAlign: 'center', fontWeight: 800, mb: 3 }}>
                    Leisure Facilities
                </Typography>

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
                                px: 5, py: 0.8,
                                fontWeight: 700,
                                textTransform: 'none',
                                color: '#800040',
                                '&.Mui-selected': {
                                    bgcolor: '#FFD1E8',
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

                {/* Nested pages (pool or gym) render here */}
                {children}
            </Container>
        </Box>
    );
}