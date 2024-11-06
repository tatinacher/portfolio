import { Chip } from "@mui/material";
import Link from "next/link";

export const ConnectChip = ({ icon, label, link }) => {
  console.log(link);
  return (
    <Link href={link}>
      <Chip
        label={
          <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            {label}
            {icon}
          </div>
        }
        sx={{
          backgroundColor: "secondary.main",
          border: "1px solid",
          borderColor: "secondary.dark",
          padding: "20px 25px",
          borderRadius: "50px",
        }}
      />
    </Link>
  );
};
