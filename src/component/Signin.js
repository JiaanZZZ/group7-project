import HighlightIcon from "@mui/icons-material/Highlight";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/authContext";


const theme = createTheme({
  typography: {
    fontFamily: "Inconsolata",
  },
  palette: {
    primary: {
      light: "#757ce8",
      main: "#3f50b5",
      dark: "#002884",
      contrastText: "#fff",
    },
  },
});

export default function Signin() {
  const { googleSignIn, user } = UserAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (e) {
      console.log(e);
    }
  };

  const handleViewNews = () => {
    navigate("/topArticles");
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <ThemeProvider theme={theme}>
        <span>
          <Typography
            variant="h1"
            component="div"
            gutterBottom
            color={theme.palette.primary.light}
          >
            News Feed
          </Typography>
          {user ? (
            <Button
              variant="contained"
              onClick={handleViewNews}
              size="large"
              style={{
                marginLeft: "30%",
              }}
            >
              View Top News
            </Button>
          ) : (
            <Button
              variant="contained"
              onClick={handleGoogleSignIn}
              size="large"
              style={{
                marginLeft: "30%",
              }}
            >
              Sign In with Google
            </Button>
          )}
        </span>
      </ThemeProvider>
    </div>
  );
}
