import React, { useEffect } from 'react';
import {
  Box,
  Typography,
  Button,
  Stack,
  IconButton,
  useTheme,
  useMediaQuery
} from '@mui/material';
import {
  LinkedIn,
  GitHub,
  FileDownload,
  Email
} from '@mui/icons-material';
import { Link as ScrollLink } from 'react-scroll';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function HeroSection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    AOS.init();
  }, []);

  const openResume = () => {
    window.open(process.env.PUBLIC_URL + "/img/ab_resume.pdf", "_blank");
  };

  return (
    <Box
      id="heroSection"
      component="section"
      sx={{
        display: 'flex',
        flexDirection: isMobile ? 'column-reverse' : 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 4,
        py: 10,
        px: isMobile ? 2 : 10,
        backgroundColor: theme.palette.background.default,
      }}
    >
      {/* Content Box */}
      <Box
        sx={{
          maxWidth: 600,
          textAlign: isMobile ? 'center' : 'left'
        }}
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        <Typography
          variant="h5"
          color="primary"
          gutterBottom
          sx={{ fontWeight: 'bold' }}
        >
          Hey, I'm Abdul Jabbar
        </Typography>

        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          sx={{
            fontWeight: 'bold',
            lineHeight: 1.2,
            mb: 2
          }}
        >
          <Box
            component="span"
            color="primary.main"
          >
            Full Stack
          </Box>{' '}
          Developer
        </Typography>

        <Typography
          variant="body1"
          color="text.secondary"
          paragraph
          sx={{ mb: 4 }}
        >
          Results-driven Full Stack Engineer with 1.8 years of hands-on experience developing enterprise-grade web applications.
          Specializes in JavaScript ecosystems with proven expertise in building geospatial analytics platforms using React,
          Node.js, and GraphQL. Demonstrated ability to architect scalable micro-frontend solutions and implement complex
          data visualization systems. Combines deep technical knowledge of modern web frameworks with practical experience
          in optimizing data pipelines and containerized deployments for maritime analytics applications
        </Typography>

        <Stack
          direction={isMobile ? 'column' : 'row'}
          spacing={2}
          sx={{ mb: 4 }}
          justifyContent={isMobile ? 'center' : 'flex-start'}
        >
          <Button
            variant="contained"
            color="primary"
            size="large"
            startIcon={<FileDownload />}
            onClick={openResume}
            sx={{
              px: 4,
              py: 1.5,
              borderRadius: 50,
              fontWeight: 'bold'
            }}
          >
            Download CV
          </Button>

          <ScrollLink
            to="Contact"
            smooth={true}
            duration={500}
            offset={-70}
          >
            <Button
              variant="outlined"
              color="primary"
              size="large"
              startIcon={<Email />}
              sx={{
                px: 4,
                py: 1.5,
                borderRadius: 50,
                fontWeight: 'bold'
              }}
            >
              Contact Info
            </Button>
          </ScrollLink>
        </Stack>

        <Stack
          direction="row"
          spacing={2}
          justifyContent={isMobile ? 'center' : 'flex-start'}
        >
          <IconButton
            href="https://www.linkedin.com/in/abdul-jabbar-427331288/"
            target="_blank"
            rel="noopener noreferrer"
            color="primary"
            sx={{
              backgroundColor: theme.palette.action.hover,
              '&:hover': {
                backgroundColor: theme.palette.primary.light,
                color: theme.palette.primary.main
              }
            }}
          >
            <LinkedIn fontSize="large" />
          </IconButton>

          <IconButton
            href="https://github.com/abduljabbarcse"
            target="_blank"
            rel="noopener noreferrer"
            color="primary"
            sx={{
              backgroundColor: theme.palette.action.hover,
              '&:hover': {
                backgroundColor: theme.palette.primary.light,
                color: theme.palette.primary.main
              }
            }}
          >
            <GitHub fontSize="large" />
          </IconButton>
        </Stack>
      </Box>

      {/* Image Box */}
      <Box
        data-aos="fade-left"
        data-aos-duration="1000"
        sx={{
          width: isMobile ? '100%' : '40%',
          maxWidth: 500,
          borderRadius: 4,
          overflow: 'hidden',
          boxShadow: theme.shadows[10]
        }}
      >
        <Box
          component="img"
          src={process.env.PUBLIC_URL + "/img/abdul.png"}
          alt="Abdul Jabbar"
          sx={{
            width: '100%',
            height: 'auto',
            display: 'block'
          }}
        />
      </Box>
    </Box>
  );
}