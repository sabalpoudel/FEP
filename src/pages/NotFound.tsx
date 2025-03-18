import { Container, Typography, Button, Box } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

export default function NotFound() {
  return (
    <Container
      maxWidth="sm"
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <ErrorOutlineIcon color="error" sx={{ fontSize: 80, mb: 2 }} />
      <Typography variant="h1" component="h1" color="text.primary" gutterBottom>
        404
      </Typography>
      <Typography
        variant="h5"
        component="p"
        color="text.secondary"
        gutterBottom
      >
        Oops! The page you’re looking for doesn’t exist.
      </Typography>
      <Box mt={4}>
        <Button
          variant="contained"
          color="primary"
          component={RouterLink}
          to="/"
          size="large"
        >
          Go Back Home
        </Button>
      </Box>
    </Container>
  );
}
