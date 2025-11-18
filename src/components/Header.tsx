// Header.tsx
import { AppBar, Avatar, Box, Button, Toolbar, Typography } from "@mui/material";

const Header = () => { 
  const navItems = [
    { text: 'Marketing', link: '/marketing' },
    { text: 'Suporte ao usuário', link: '/support' },
    { text: 'Política de Privacidade', link: '/privacy-policy' },

  ];

  return (
    <AppBar position="static">
      <Toolbar>
        {/* Logo e Nome */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
          <Avatar 
            alt="Logo CamMove" 
            src="/src/assets/logo_1024.png"
            sx={{ width: 40, height: 40 }}
          />
          <Typography 
            variant="h6" 
            component="div"
            sx={{ fontWeight: 600 }}
          >
            CamMove
          </Typography>
        </Box>

        {/* Espaçador para empurrar os itens para a direita */}
        <Box sx={{ flexGrow: 1 }} />

        {/* Menu de Navegação */}
        <Box sx={{ display: 'flex', gap: 1 }}>
          {navItems.map((item) => (
            <Button
              key={item.link}
              href={item.link}
              sx={{ 
                color: 'white',
                textTransform: 'none',
                fontSize: '0.95rem',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
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