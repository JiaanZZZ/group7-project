import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import ScreenSearchDesktopIcon from "@mui/icons-material/ScreenSearchDesktop";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HighlightIcon from "@mui/icons-material/Highlight";
import MoreIcon from "@mui/icons-material/MoreVert";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Avatar from "@mui/material/Avatar";

import { useContext } from "react";
import { SearchContext } from "../context/searchContext";
import { UserAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function PrimarySearchAppBar() {
  const { user, logOut } = UserAuth();
  
  const navigate = useNavigate();
  const handleSignOut = async () => {
    try {
      await logOut();
      console.log("Logged out");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  // const {displayName,photoURL} = user;

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const { setSearchTerm } = useContext(SearchContext);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
<<<<<<< Updated upstream
=======

  const [searchUrl, setSearchUrl] = useState({
    query: "https://newsapi.org/v2/everything?",
    q: "q=climate&",
    pageSize: "pageSize=15&",
    key: "apiKey=644c0248558246f5929da6bafb4ba056",
  });

  const changeSearchArticles = () => {
    //console.log(Object.values(searchUrl).join().replaceAll(",", ""))

    fetch(Object.values(searchUrl).join().replaceAll(",", ""))
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        console.log(searchArticles);
        setSearchArticles(result.articles);
        console.log(searchArticles);
      });
  };

>>>>>>> Stashed changes
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    // console.log(e.target.value);
    // console.log(searchTerm);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      {user ? (
        <MenuItem onClick={handleMenuClose}>{user.displayName}</MenuItem>
      ) : (
       ""
      )}
      {user ? (
        <MenuItem onClick={handleSignOut}>Sign Out</MenuItem>
      ) : (""
      )}
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 4 new mails"
          color="inherit"
          onClick={handleSignOut}
        >
          SignOut
        </IconButton>
      </MenuItem>
      {user ? (
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          
            <Avatar alt="Remy Sharp" src={user.photoURL} />
        </IconButton>
      </MenuItem>):( <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          
            <Avatar alt="Remy Sharp" />
        </IconButton>
      </MenuItem>)
      }
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <HighlightIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            News Feed
          </Typography>
          {user ? (
            <React.Fragment>
              <Search>
                <SearchIconWrapper>
                  <ScreenSearchDesktopIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search News…"
                  inputProps={{ "aria-label": "search" }}
                  onChange={handleSearch}
                />
              </Search>
              <Box sx={{ flexGrow: 1 }} />
              <Box sx={{ display: { xs: "none", md: "flex" } }}>
                <IconButton
                  size="large"
                  aria-label="show 4 new mails"
                  color="inherit"
                >
                  <Badge color="error">
                    <Link to="/likedNews">
                      <FavoriteIcon />
                    </Link>
                  </Badge>
                </IconButton>

                <IconButton
                  size="large"
                  edge="end"
                  aria-label="account of current user"
                  aria-controls={menuId}
                  aria-haspopup="true"
                  onClick={handleProfileMenuOpen}
                  color="inherit"
                >
                  <Avatar alt="Remy Sharp" src={user.photoURL} />
                </IconButton>
              </Box>
            </React.Fragment>
          ) : (
            ""
          )}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
      <Outlet />
    </Box>
  );
}
