import { useAuth } from "@/hooks/useAuth";
import { Logout } from "@mui/icons-material";
import { Button } from "@mui/material";

const LogoutButton = () => {
  const { logout } = useAuth();

  return (
    <Button
      sx={{
        position: "absolute",
        top: 0,
        right: 0,
        borderRadius: "0 0 0 80px ",
        width: "80px",
        height: "80px",
        paddingLeft: 4,
        paddingBottom: 4,
        paddingTop: 2,
      }}
      variant="contained"
      onClick={() => logout()}
    >
      <Logout />
    </Button>
  );
};

export default LogoutButton;
