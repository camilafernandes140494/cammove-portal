// Header.tsx
import { AppBar, Avatar, Box, Button, Toolbar, Typography } from "@mui/material";
import LogoImage from '../assets/logo_1024_round.png';

const Header = () => { 
  const navItems = [
    { text: 'Marketing', link: '/marketing' },
    { text: 'Suporte ao usuário', link: '/support' },
    { text: 'Política de Privacidade', link: '/privacy-policy' },
  ];

  return (
    <AppBar 
      position="static"
      elevation={0}
      sx={{
        background: '#ffffff',
        borderBottom: '1px solid #e0e0e0',
      }}
    >
      <Toolbar sx={{ py: 1.5, px: 4 }}>
        {/* Logo e Nome */}
        <Box 
          sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: 2,
            cursor: 'pointer',
            transition: 'transform 0.2s',
            '&:hover': {
              transform: 'scale(1.02)',
            }
          }}
        >
         <Avatar 
              alt="Logo CamMove" 
              src={LogoImage}
              sx={{ 
                width: 38, 
                height: 38,
              }}
            />
          <Typography 
            variant="h5" 
            color="primary"            
          >
            CamMove
          </Typography>
        </Box>

        {/* Espaçador */}
        <Box sx={{ flexGrow: 1 }} />

        {/* Menu de Navegação */}
        <Box sx={{ display: 'flex', gap: 1 }}>
          {navItems.map((item) => (
            <Button
              key={item.link}
              href={item.link}
              sx={{ 
                color: '#64748b',
                textTransform: 'none',
                fontSize: '0.95rem',
                fontWeight: 600,
                px: 3,
                py: 1.2,
                borderRadius: '10px',
                position: 'relative',
                transition: 'all 0.3s ease',
                '&:hover': {
                  color: '#8b5cf6',
                  backgroundColor: '#f8f7ff',
                  transform: 'translateY(-2px)',
                },
                '&:after': {
                  content: '""',
                  position: 'absolute',
                  bottom: 0,
                  left: '50%',
                  width: 0,
                  height: '3px',
                  background: 'linear-gradient(90deg, #6366f1, #8b5cf6)',
                  transform: 'translateX(-50%)',
                  transition: 'width 0.3s ease',
                  borderRadius: '2px',
                },
                '&:hover:after': {
                  width: '70%',
                }
              }}
            >
              {item.text}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;