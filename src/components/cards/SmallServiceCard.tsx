import { Box, Typography } from "@mui/material";

const SmallServiceCard = ({ icon, title, description }: { icon: string, title: string, description: string }) => (
    <Box sx={{
        p: 2,
        height: '100%',
        borderRadius: '15px',
        bgcolor: '#FFFFFF',
        boxShadow: '0px 4px 15px rgba(0,0,0,0.08)',
        border: '1px solid #F0F0F0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center'
    }}>
        <Box component="img" src={icon} sx={{ width: '40px', mb: 1 }} />
        <Typography sx={{ color: '#800040', fontWeight: 700, fontSize: '0.9rem' }}>
            {title}
        </Typography>
        <Typography sx={{ fontSize: '0.8rem', fontWeight: 500, color: '#333' }}>
            {description}
        </Typography>
    </Box>
);

export default SmallServiceCard;