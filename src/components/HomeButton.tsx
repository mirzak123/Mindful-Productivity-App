import { Home } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";

const HomeButton = () => {
  const router = useRouter();

  return (
    <Button
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        borderRadius: "0 0 80px 0",
        width: "80px",
        height: "80px",
        paddingRight: 4,
        paddingBottom: 4,
        paddingTop: 2,
      }}
      variant="contained"
      onClick={() => router.push("/")}
    >
      <Home />
    </Button>
  );
};

export default HomeButton;
