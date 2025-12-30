import { Box, Typography, Grid } from '@mui/material';
import { ImageCarousel } from '@/components/carousels/ImageCarousel';
import { InfoCard } from '@/components/cards/InfoCard';

export default function PoolPage() {
    const images = ['/assets/images/pool-1.png', '/assets/images/pool-2.png', '/assets/images/pool-3.png'];
    const features = [
        { icon: 'length-icon', description: '20m heated outdoor pool' },
        { icon: 'sun-icon', description: 'Great for morning or evening swims' },
        { icon: 'three-yellow', description: 'Located on Level 3 terrace' },
        { icon: 'fresh-air-icon', description: 'Fresh coastal air & open views' },
        { icon: 'relax-icon', description: 'Relax and recharge' },
        { icon: 'exercise-icon', description: 'Ideal for light exercise' }
    ];

    return (
        <Box sx={{ pb: 10 }}>
            <ImageCarousel images={images} />
            <Typography variant="h5" sx={{ textAlign: 'center', fontWeight: 800, mb: 3 }}>
                Outdoor Pool
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