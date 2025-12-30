import { Providers } from '@/components/Providers';
import Navbar from '@/components/navbar/Navbar';
import { Box } from '@mui/material';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Box component="main" sx={{ minHeight: '100vh' }}>
            {children}
          </Box>
          <Navbar />
        </Providers>
      </body>
    </html>
  );
}