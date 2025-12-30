import { Box, Typography, Grid } from '@mui/material';
import { ImageCarousel } from '@/components/carousels/ImageCarousel';
import { InfoCard } from '@/components/cards/InfoCard';

export default function GymPage() {
    const images = ['/assets/images/gym-1.png', '/assets/images/gym-2.png', '/assets/images/gym-3.png'];
    const features = [
        { icon: 'gym-icon', description: 'Fully equipped modern gym' },
        { icon: '24 by 7-icon', description: 'Open 24/7' },
        { icon: 'cardio-icon', description: 'Cardio machines' },
        { icon: 'strength-icon', description: 'Strength-training equipment' },
        { icon: 'routine-icon', description: 'Maintain your routine while travelling' },
        { icon: 'three-yellow', description: 'Located on Level 3' }
    ];

    return (
        <Box sx={{ pb: 10 }}>
            <ImageCarousel images={images} />
            <Typography variant="h5" sx={{ textAlign: 'center', fontWeight: 800, mb: 3 }}>
                Gym
            </Typography>
            <Grid container spacing={1.5} sx={{ width: 'calc(100% + 12px)', ml: -0.75 }}>
                {features.map((f, i) => (
                    <Grid size={6} key={i}>
                        <InfoCard
                            icon={<img src={`/assets/icons/${f.icon}.png`} width="28" alt="" />}
                            description={f.description}
                        />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}