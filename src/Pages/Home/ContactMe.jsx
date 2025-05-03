import React from 'react';
import { 
  Box, 
  Typography, 
  Link, 
  Paper, 
  Grid,
  Button,
  useTheme,
  useMediaQuery,
  TextField
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import PhoneIcon from '@mui/icons-material/Phone';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader'; // Assume you have this component

const ContactMe = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const contactMethods = [
    {
      icon: <EmailIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
      text: 'abduljabbarcse2001@gmail.com',
      href: 'mailto:abduljabbarcse2001@gmail.com',
      action: 'Send Email'
    },
    {
      icon: <LinkedInIcon sx={{ fontSize: 40, color: '#0A66C2' }} />,
      text: 'LinkedIn Profile',
      href: 'https://www.linkedin.com/in/abdul-jabbar-427331288/',
      action: 'Connect'
    },
    {
      icon: <GitHubIcon sx={{ fontSize: 40, color: theme.palette.mode === 'dark' ? '#fff' : '#000' }} />,
      text: 'GitHub Profile',
      href: 'https://github.com/abduljabbarcse',
      action: 'View Repos'
    },
    {
      icon: <PhoneIcon sx={{ fontSize: 40, color: theme.palette.success.main }} />,
      text: '+919150896893',
      href: 'tel:+919150896893',
      action: 'Call Me'
    }
  ];

  return (
    <Box 
      id="Contact"
      component="section"
      sx={{
        py: 10,
        px: isMobile ? 2 : 5,
        backgroundColor: theme.palette.background.default,
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Decorative elements */}
      <Box
        sx={{
          position: 'absolute',
          top: -100,
          right: -100,
          width: 300,
          height: 300,
          borderRadius: '50%',
          backgroundColor: theme.palette.primary.light,
          opacity: 0.1,
          zIndex: 0
        }}
      />
      
      <Box
        sx={{
          position: 'absolute',
          bottom: -50,
          left: -50,
          width: 200,
          height: 200,
          borderRadius: '50%',
          backgroundColor: theme.palette.secondary.light,
          opacity: 0.1,
          zIndex: 0
        }}
      />

      <Box position="relative" zIndex={1}>
        <SectionHeader 
          title="Contact Me"
          subtitle="Get In Touch"
          description="Feel free to reach out for collaborations or just a friendly hello"
        />

        <Grid container spacing={4} justifyContent="center" sx={{ mt: 6 }}>
          {contactMethods.map((method, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <Paper
                  elevation={3}
                  sx={{
                    p: 3,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    borderRadius: 4,
                    background: theme.palette.background.paper,
                    border: `1px solid ${theme.palette.divider}`,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: theme.shadows[6]
                    }
                  }}
                >
                  <Box mb={2}>{method.icon}</Box>
                  <Typography variant="h6" gutterBottom>
                    {method.text}
                  </Typography>
                  <Button
                    component={Link}
                    href={method.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="outlined"
                    color="primary"
                    sx={{
                      mt: 2,
                      px: 3,
                      py: 1,
                      borderRadius: 50,
                      textTransform: 'none',
                      fontWeight: 'bold'
                    }}
                  >
                    {method.action}
                  </Button>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Contact Form (optional) */}
        <Box sx={{ mt: 8, maxWidth: 800, mx: 'auto' }}>
          <Typography variant="h5" align="center" gutterBottom>
            Or send me a message directly
          </Typography>
          <Box
            component="form"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 3,
              mt: 4,
              p: 4,
              borderRadius: 4,
              background: theme.palette.background.paper,
              boxShadow: theme.shadows[2]
            }}
          >
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Your Name"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Your Email"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Subject"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Message"
                  variant="outlined"
                  multiline
                  rows={4}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              sx={{
                alignSelf: 'center',
                px: 6,
                py: 1.5,
                borderRadius: 50,
                fontWeight: 'bold',
                fontSize: '1rem'
              }}
            >
              Send Message
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactMe;