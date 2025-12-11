// StoreButton.tsx
import { Box } from "@mui/material";
import type { ReactNode } from "react";

interface StoreButtonProps {
  icon: ReactNode;
  title: string;
  subtitle: string;
  url: string;
}

export default function StoreButton({ icon, title, subtitle, url }: StoreButtonProps) {
  return (
    <Box
      onClick={() => window.open(url, "_blank")}
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
        background: "linear-gradient(135deg, #6A00F5, #A35BFF)",
        color: "#fff",
        borderRadius: "14px",
        padding: "10px 18px",
        cursor: "pointer",
        width: "fit-content",
        transition: "all 0.25s ease",
        "&:hover": {
          opacity: 0.92,
        },
      }}
    >
      {icon}

      <Box sx={{ display: "flex", flexDirection: "column", lineHeight: 1.1 }}>
        <span style={{ fontSize: "12px", opacity: 0.9 }}>{title}</span>
        <span style={{ fontSize: "20px", fontWeight: 700 }}>{subtitle}</span>
      </Box>
    </Box>
  );
}
