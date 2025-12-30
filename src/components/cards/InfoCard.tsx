'use client';
import React from 'react';
import { Paper, Box, Typography } from '@mui/material';

interface InfoCardProps {
    icon: React.ReactNode;
    description: string;
}

export const InfoCard = ({ icon, description }: InfoCardProps) => {
    return (
        <Paper
            elevation={0} // Using 0 or low elevation to prevent shadow overflow
            sx={{
                p: 1.5,
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                height: '85px',
                gap: 1,
                boxSizing: 'border-box',
                border: '1px solid #F0F0F0',
                boxShadow: '0px 4px 12px rgba(0,0,0,0.05)',
                overflow: 'hidden' // Prevents text from pushing the card width
            }}
        >
            <Box sx={{ minWidth: '35px', display: 'flex', justifyContent: 'center' }}>
                {icon}
            </Box>
            <Box sx={{ overflow: 'hidden' }}>
                <Typography sx={{
                    fontWeight: 500,
                    fontSize: '0.8rem',
                    lineHeight: 1.1,
                    color: '#000',
                    whiteSpace: 'normal'
                }}>
                    {description}
                </Typography>
            </Box>
        </Paper>
    );
};