'use client';
import React from 'react';
import { Box, Typography, Stack } from '@mui/material';

interface NavButtonProps {
    label: string;
    icon: React.ReactNode;
    isActive: boolean;
    onClick: () => void;
}

export const NavButton = ({ label, icon, isActive, onClick }: NavButtonProps) => {
    return (
        <Stack
            alignItems="center"
            justifyContent="center" // Ensures vertical centering for the stack content
            onClick={onClick}
            sx={{
                cursor: 'pointer',
                flex: 1,
                position: 'relative',
                height: '100%',
            }}
        >
            {/* The Active Circle Container */}
            <Box
                sx={{
                    position: 'absolute',
                    top: isActive ? '-38px' : '50%', // Move to vertical center when inactive
                    left: '50%',
                    transform: isActive
                        ? 'translateX(-50%) scale(1)'
                        : 'translate(-50%, -50%) scale(0)', // Center perfectly when hidden
                    width: '58px',
                    height: '58px',
                    borderRadius: '50%',
                    backgroundColor: '#800040',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    zIndex: 2,
                }}
            >
                <Box sx={{ fontSize: '24px', color: '#FFFFFF' }}>
                    {icon}
                </Box>
            </Box>

            {/* Inactive Icon - Centered in the bar */}
            {!isActive && (
                <Box
                    sx={{
                        fontSize: '22px',
                        color: 'rgba(255, 255, 255, 0.6)',
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)', // Perfect vertical and horizontal center
                        zIndex: 1
                    }}
                >
                    {icon}
                </Box>
            )}

            {/* Label - Only shown if active */}
            {isActive && (
                <Typography
                    sx={{
                        fontSize: '11px',
                        fontWeight: 600,
                        color: '#FFFFFF',
                        mt: 4.5, // Pushes label below the popped-up circle
                        transition: 'opacity 0.3s ease',
                    }}
                >
                    {label}
                </Typography>
            )}
        </Stack>
    );
};