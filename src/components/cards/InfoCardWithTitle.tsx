import { Box, Typography } from '@mui/material';
interface ParkingCardProps {
    icon: string;
    title: string;
    description: string;
}

const InfoCardWithTitle = ({ icon, title, description }: ParkingCardProps) => {
    return (
        <Box sx={{
            p: 2,
            borderRadius: '20px',
            bgcolor: '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            gap: 2,
            boxShadow: '0px 8px 20px rgba(0,0,0,0.08)',
            border: '1px solid #F0F0F0'
        }}>
            <Box sx={{ minWidth: '70px', display: 'flex', justifyContent: 'center' }}>
                <img src={icon} style={{ maxWidth: '60px', height: 'auto' }} alt="" />
            </Box>
            <Box>
                <Typography sx={{ color: '#800040', fontWeight: 700, fontSize: '1rem', mb: 0.5 }}>
                    {title}
                </Typography>
                <Typography sx={{
                    fontSize: '0.85rem',
                    fontWeight: 500,
                    lineHeight: 1.4,
                    whiteSpace: 'pre-line', // Respects the \n for bullets
                    color: '#333'
                }}>
                    {description}
                </Typography>
            </Box>
        </Box>
    );
};

export default InfoCardWithTitle;