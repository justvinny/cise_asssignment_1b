import { Button } from "@mui/material";

const CustomButton = ({ label, onClick, isLoading }) => (
    <Button
        variant="contained"
        size="large"
        sx={{
            bgcolor: "#111",
            ":hover": { bgcolor: "#111", opacity: 0.8 },
        }}
        onClick={onClick}
        disabled={isLoading}
    >
        {label}
    </Button>
);

export default CustomButton;
