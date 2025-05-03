import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Divider, 
  List, 
  ListItem, 
  IconButton,
  useTheme,
  useMediaQuery,
  Grid
} from '@mui/material';
import { Link as ScrollLink } from 'react-scroll';
import { 
  LinkedIn, 
  GitHub,
  Favorite
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const navLinks = [
    { name: 'Home', to: 'heroSection' },
    { name: 'Portfolio', to: 'MyPortfolio' },
    { name: 'About Me', to: 'AboutMe' },
    { name: 'Contact', to: 'Contact' },
    { name: 'Testimonials', to: 'testimonial' }
  ];

  const policyLinks = [
    { name: 'Privacy Policy', to: 'Privacy_Policy' },
    { name: 'Terms of Service', to: 'Terms_of_Service' },
    { name: 'Cookies Settings', to: 'Cookies_Settings' }
  ];

  const socialIcons = [
    
    { icon: <LinkedIn />, url: 'https://linkedin.com/in/abdul-jabbar-427331288' },
    { icon: <GitHub />, url: 'https://github.com/abduljabbarcse' }
  ];

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.primary,
        pt: 8,
        pb: 4,
        borderTop: `1px solid ${theme.palette.divider}`
      }}
    >
      <Container maxWidth="lg">
        {/* Main Footer Content */}
        <Grid container spacing={4}>
          {/* Logo Section */}
          <Grid item xs={12} md={3}>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Box 
                component="img"
                src={process.env.PUBLIC_URL + "/img/logo.svg"}
                alt="Logo"
                sx={{ 
                  height: 40,
                  filter: theme.palette.mode === 'dark' ? 'brightness(0) invert(1)' : 'none'
                }}
              />
            </motion.div>
            <Typography variant="body2" sx={{ mt: 2, color: 'text.secondary' }}>
              Creating digital experiences that matter.
            </Typography>
          </Grid>

          {/* Navigation Links */}
          <Grid item xs={12} md={6}>
            <Grid container spacing={4}>
              <Grid item xs={6} sm={4}>
                <Typography variant="h6" gutterBottom>
                  Navigation
                </Typography>
                <List dense>
                  {navLinks.map((link) => (
                    <ListItem key={link.to} disableGutters>
                      <ScrollLink
                        activeClass="active"
                        to={link.to}
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        style={{
                          color: theme.palette.text.secondary,
                          textDecoration: 'none',
                          cursor: 'pointer',
                          '&:hover': {
                            color: theme.palette.primary.main
                          }
                        }}
                      >
                        <Typography variant="body2">{link.name}</Typography>
                      </ScrollLink>
                    </ListItem>
                  ))}
                </List>
              </Grid>

              <Grid item xs={6} sm={4}>
                <Typography variant="h6" gutterBottom>
                  Policies
                </Typography>
                <List dense>
                  {policyLinks.map((link) => (
                    <ListItem key={link.to} disableGutters>
                      <ScrollLink
                        activeClass="active"
                        to={link.to}
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        style={{
                          color: theme.palette.text.secondary,
                          textDecoration: 'none',
                          cursor: 'pointer'
                        }}
                      >
                        <Typography variant="body2">{link.name}</Typography>
                      </ScrollLink>
                    </ListItem>
                  ))}
                </List>
              </Grid>
            </Grid>
          </Grid>

          {/* Social Links */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom>
              Connect With Me
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              {socialIcons.map((social, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <IconButton
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.icon.type.displayName}
                    sx={{
                      color: theme.palette.text.secondary,
                      '&:hover': {
                        color: theme.palette.primary.main
                      }
                    }}
                  >
                    {social.icon}
                  </IconButton>
                </motion.div>
              ))}
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4 }} />

        {/* Copyright Section */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <Typography variant="body2" color="text.secondary">
            Made with <Favorite sx={{ color: 'error.main', fontSize: 14 }} /> by Abdul
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: isMobile ? 1 : 0 }}>
            © {new Date().getFullYear()} All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;