import React from 'react';
import { Paper, Typography } from '@mui/material';

interface WelcomeCardProps {
    title: string;
    description: string;
    footer?: string;
}

export const WelcomeCard = ({ title, description, footer }: WelcomeCardProps) => {
    return (
        <Paper
            elevation={0}
            sx={{
                p: 4,
                borderRadius: '32px', // Matches Figma's high-radius corners
                textAlign: 'center',
                // Creating a custom soft shadow instead of default MUI elevation
                boxShadow: '0px 15px 35px rgba(0, 0, 0, 0.1)',
                border: '1px solid rgba(0, 0, 0, 0.03)',
                backgroundColor: '#FFFFFF',
            }}
        >
            <Typography
                variant="h5"
                sx={{
                    fontWeight: 800,
                    color: 'primary.main',
                    mb: 3,
                    fontSize: '1.5rem'
                }}
            >
                {title}
            </Typography>

            <Typography
                variant="body1"
                sx={{
                    color: '#444',
                    lineHeight: 1.8,
                    textAlign: 'center',
                    mb: footer ? 3 : 0
                }}
            >
                {description}
            </Typography>

            {footer && (
                <Typography
                    variant="body1"
                    sx={{
                        fontWeight: 700,
                        color: '#333'
                    }}
                >
                    {footer}
                </Typography>
            )}
        </Paper>
    );
};