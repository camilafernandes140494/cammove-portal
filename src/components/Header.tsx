// Header.tsx
import { useState } from 'react';
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import LogoImage from '../assets/logo_1024_round.png';

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const navItems = [
    { text: 'Marketing', link: '/marketing' },
    { text: 'Suporte ao usuário', link: '/support' },
    { text: 'Política de Privacidade', link: '/privacy-policy' },
  ];

  const toggleDrawer = (open: boolean) => (e: React.KeyboardEvent | React.MouseEvent) => {
    if (
      e.type === 'keydown' &&
      ((e as React.KeyboardEvent).key === 'Tab' || (e as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const drawerContent = (
    <Box
      sx={{
        width: 250,
        display: 'flex',
        flexDirection: 'column',
      }}
      role="presentation"
    >
      {/* Close Button */}
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 2 }}>
        <IconButton onClick={toggleDrawer(false)}>
          <CloseIcon />
        </IconButton>
      </Box>

      {/* Menu Items */}
      <List>
        {navItems.map((item) => (
          <ListItem key={item.link} disablePadding>
            <ListItemButton
              href={item.link}
              onClick={() => setDrawerOpen(false)}
              sx={{
                py: 1.5,
                px: 3,
                '&:hover': {
                  backgroundColor: '#f8f7ff',
                  color: '#8b5cf6',
                },
              }}
            >
              <ListItemText
                primary={item.text}
                primaryTypographyProps={{
                  sx: {
                    fontWeight: 600,
                    fontSize: '0.95rem',
                  },
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="static"
        elevation={0}
        sx={{
          background: '#ffffff',
          borderBottom: '1px solid #e0e0e0',
        }}
      >
        <Toolbar sx={{ py: 1.5, px: { xs: 2, sm: 4 } }}>
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
              },
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
            <Typography variant="h5" color="primary">
              CamMove
            </Typography>
          </Box>

          {/* Espaçador */}
          <Box sx={{ flexGrow: 1 }} />

          {/* Menu de Navegação - Desktop */}
          {!isMobile && (
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
                    },
                  }}
                >
                  {item.text}
                </Button>
              ))}
            </Box>
          )}

          {/* Menu Icon - Mobile */}
          {isMobile && (
            <IconButton
              edge="end"
              onClick={toggleDrawer(true)}
              sx={{ color: '#64748b' }}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* Drawer - Mobile */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
      >
        {drawerContent}
      </Drawer>
    </>
  );
};

export default Header;