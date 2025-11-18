// Footer.tsx
import { Box, Typography } from "@mui/material";

const Footer = () => (
  <Box mt={5} py={3} textAlign="center" bgcolor="#f5f5f5">
    <Typography variant="body2"> © {new Date().getFullYear()} CamMove — Todos os direitos reservados.
</Typography>
  </Box>
);

export default Footer;