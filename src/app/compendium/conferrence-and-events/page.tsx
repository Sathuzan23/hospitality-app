'use client';
import React, { useState } from 'react';
import { Box, Typography, Stack, useMediaQuery, IconButton, Dialog } from '@mui/material';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import CloseIcon from '@mui/icons-material/Close';
import InfoCardWithTitle from '@/components/cards/InfoCardWithTitle';
import { GroupedImageCarousel } from '@/components/carousels/GroupedImageCarousel';

export default function ConferencePage() {
    const [openGallery, setOpenGallery] = useState(false);
    const isMobile = useMediaQuery('(max-width:480px)');

    const heroImage = '/assets/images/conference-hero.png';
    const galleryImages = [
        '/assets/images/conf-setup-1.png',
        '/assets/images/conf-setup-2.png',
        '/assets/images/conf-setup-3.png',
        '/assets/images/conf-setup-4.png'
    ];

    if (!isMobile) return <Box sx={{ p: 10 }}>Desktop View Placeholder</Box>;

    return (
        <Box sx={{ pb: 15, width: '100%', overflowX: 'hidden', bgcolor: '#800040', minHeight: '100vh' }}>
            <Stack>
                {/* 1. SEPARATE HERO IMAGE */}
                <Box sx={{ position: 'relative', width: '100%' }}>
                    <Box
                        component="img"
                        src={heroImage}
                        sx={{ width: '100%', height: 'auto', display: 'block' }}
                        alt="Conference Hero"
                    />
                    {/* Gallery Trigger Icon */}
                    <IconButton
                        onClick={() => setOpenGallery(true)}
                        sx={{
                            position: 'absolute', bottom: 50, right: 20,
                            bgcolor: 'rgba(255,255,255,0.9)',
                            '&:hover': { bgcolor: '#FFF' },
                            boxShadow: '0px 4px 10px rgba(0,0,0,0.3)'
                        }}
                    >
                        <PhotoLibraryIcon sx={{ color: '#800040' }} />
                    </IconButton>
                </Box>

                {/* 2. CONTENT CONTAINER */}
                <Box sx={{ bgcolor: '#FFFFFF', borderRadius: '40px 40px 0 0', mt: -4, position: 'relative', zIndex: 2, px: 2, pt: 4 }}>
                    <Typography variant="h4" sx={{ textAlign: 'center', fontWeight: 800, mb: 4, color: '#800040' }}>
                        Conference & Events
                    </Typography>

                    <Stack spacing={2}>
                        {conferenceData.map((item, index) => (
                            <InfoCardWithTitle key={index} {...item} />
                        ))}
                    </Stack>
                </Box>
            </Stack>

            {/* --- 3. POP-UP GALLERY (Grouped Horizontal Scroll) --- */}
            <Dialog
                open={openGallery}
                onClose={() => setOpenGallery(false)}
                fullScreen // Full screen feels more like a native app gallery
                PaperProps={{ sx: { bgcolor: 'rgba(0,0,0,0.75)' } }}
            >
                <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <IconButton
                        onClick={() => setOpenGallery(false)}
                        sx={{ position: 'absolute', top: 20, right: 20, color: '#FFF', zIndex: 10, bgcolor: 'rgba(0,0,0,0.5)' }}
                    >
                        <CloseIcon />
                    </IconButton>

                    <Typography variant="h6" sx={{ color: '#FFF', textAlign: 'center', mb: 4, fontWeight: 700 }}>
                        Venue Gallery
                    </Typography>

                    {/* Using the Grouped Scroll logic here */}
                    <GroupedImageCarousel images={galleryImages} />

                    <Typography sx={{ color: 'rgba(255,255,255,0.6)', textAlign: 'center', mt: 4, fontSize: '0.9rem' }}>
                        Swipe left or right to view more
                    </Typography>
                </Box>
            </Dialog>
        </Box>
    );
}

const conferenceData = [
    { icon: '/assets/icons/conf-13.png', title: '13 flexible conference & event spaces', description: 'Versatile rooms designed to suit events of any size or style.' },
    { icon: '/assets/icons/conf-av.png', title: 'Modern Inbuilt AV Solutions', description: 'Integrated AV equipment for seamless presentations and events.' },
    { icon: '/assets/icons/conf-food.png', title: 'Premium Food & Beverage Offerings', description: 'Quality catering options tailored to your event needs.' },
    { icon: '/assets/icons/conf-breakout.png', title: 'Expansive Pre-Function & Breakout Areas', description: 'Open spaces ideal for registration, networking, and breaks.' },
    { icon: '/assets/icons/conf-m2.png', title: '1100m² of Total Function Space', description: 'A spacious conference floor offering extensive flexibility.' },
    { icon: '/assets/icons/conf-rooms.png', title: '168 Accommodation Rooms', description: 'Comfortable guest rooms available for onsite stay.' },
    { icon: '/assets/icons/conf-theatre.png', title: 'Theatre Style Capacity – 350 Guests', description: 'Largest room accommodates up to 350 attendees.' },
    { icon: '/assets/icons/conf-banquet.png', title: 'Banquet Style Capacity – 250 Guests', description: 'Elegant banquet setup available for up to 250 guests.' },
    { icon: '/assets/icons/conf-level3.png', title: 'Level 3 – Dedicated Conference Floor', description: 'All event spaces conveniently located together on one level.' }
];