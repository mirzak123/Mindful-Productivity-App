import { useAuth } from "@/hooks/useAuth";
import { VerifiedUser } from "@mui/icons-material";
import { Button, Menu, MenuItem } from "@mui/material";
import { useState } from "react";

const AccountButton = () => {
  const { logout } = useAuth();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
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
      onClick={handleClick}
    >
      <VerifiedUser />
    </Button>
    <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={logout}>Logout</MenuItem>
      </Menu>
    </>
  );
};

export default AccountButton;
