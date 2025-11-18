import { Box } from "@mui/material";
import Header from "./Header";
import Footer from "./Footer";
import type { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => (
  <Box 
    sx={{ 
      display: 'flex', 
      flexDirection: 'column', 
      
      margin: "0rem",
      padding: 0
    }}
  >
    <Header />
    <Box 
      component="main" 
      sx={{ 
        flexGrow: 1,
        margin: 0,
        padding: 0
      }}
    >
      {children}
    </Box>
    <Footer />
  </Box>
);

export default Layout;