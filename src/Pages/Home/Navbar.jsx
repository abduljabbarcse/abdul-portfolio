import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import {
  AppBar,
  Toolbar,
  IconButton,
  Box,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  Typography,
  useTheme,
  useMediaQuery,
  Fade
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import TerminalIcon from "@mui/icons-material/Terminal"; // More relevant icon

function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const [scrolled, setScrolled] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleSetActive = (to) => {
    setActiveLink(to);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900) {
        setMobileOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navItems = [
    { name: "Home", to: "heroSection" },
    { name: "Portfolio", to: "MyPortfolio" },
    { name: "About", to: "AboutMe" },
    { name: "Testimonials", to: "testimonial" }
  ];

  const drawer = (
    <Box
      sx={{
        width: 280,
        height: "100%",
        backgroundColor: theme.palette.background.paper,
        display: "flex",
        flexDirection: "column",
        p: 2
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
        <Box display="flex" alignItems="center">
          <TerminalIcon color="primary" sx={{ mr: 1, fontSize: 32 }} />
          <Typography variant="h6" color="primary" fontWeight="bold">
            Portfolio
          </Typography>
        </Box>
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>
      
      <List sx={{ flexGrow: 1 }}>
        {navItems.map((item) => (
          <ListItem key={item.to} disablePadding sx={{ mb: 1 }}>
            <ListItemButton
              component={ScrollLink}
              to={item.to}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={handleDrawerToggle}
              onSetActive={() => handleSetActive(item.to)}
              sx={{
                borderRadius: 1,
                color: activeLink === item.to 
                  ? theme.palette.primary.main 
                  : theme.palette.text.primary,
                fontWeight: "medium",
                "&:hover": {
                  backgroundColor: theme.palette.action.hover,
                  color: theme.palette.primary.main
                }
              }}
            >
              {item.name}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      
      <Button
        component={ScrollLink}
        to="Contact"
        variant="contained"
        fullWidth
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        onClick={handleDrawerToggle}
        sx={{
          py: 1.5,
          borderRadius: 1,
          fontWeight: "bold",
          textTransform: "none",
          fontSize: "1rem"
        }}
      >
        Contact Me
      </Button>
    </Box>
  );

  return (
    <Fade in={!scrolled || mobileOpen}>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: scrolled ? theme.palette.background.paper : "transparent",
          backdropFilter: scrolled ? "blur(8px)" : "none",
          boxShadow: scrolled ? theme.shadows[1] : "none",
          transition: "all 0.3s ease",
          borderBottom: scrolled ? `1px solid ${theme.palette.divider}` : "none",
          py: 1
        }}
      >
        <Toolbar sx={{ 
          maxWidth: 1280,
          width: "100%",
          mx: "auto",
          px: { xs: 2, sm: 4 },
          justifyContent: "space-between"
        }}>
          {/* Logo with text */}
          <Box display="flex" alignItems="center">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="logo"
              sx={{ mr: 1 }}
            >
              <TerminalIcon fontSize="medium" color="primary" />
            </IconButton>
            <Typography 
              variant="h6" 
              color="primary" 
              fontWeight="bold"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              AJ
            </Typography>
          </Box>

          {isMobile ? (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              {navItems.map((item) => (
                <Typography
                  key={item.to}
                  component={ScrollLink}
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onSetActive={() => handleSetActive(item.to)}
                  sx={{
                    px: 2,
                    py: 1,
                    borderRadius: 1,
                    color: activeLink === item.to 
                      ? theme.palette.primary.main 
                      : theme.palette.text.primary,
                    fontWeight: "medium",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                    "&:hover": {
                      color: theme.palette.primary.main,
                      backgroundColor: theme.palette.action.hover
                    }
                  }}
                >
                  {item.name}
                </Typography>
              ))}
              <Button
                component={ScrollLink}
                to="Contact"
                variant="contained"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                sx={{
                  px: 3,
                  py: 1,
                  borderRadius: 1,
                  fontWeight: "bold",
                  textTransform: "none",
                  fontSize: "1rem",
                  ml: 1
                }}
              >
                Contact
              </Button>
            </Box>
          )}
        </Toolbar>

        {/* Mobile Drawer */}
        <Drawer
          anchor="right"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true
          }}
          sx={{
            "& .MuiDrawer-paper": {
              backgroundColor: theme.palette.background.paper
            }
          }}
        >
          {drawer}
        </Drawer>
      </AppBar>
    </Fade>
  );
}

export default Navbar;