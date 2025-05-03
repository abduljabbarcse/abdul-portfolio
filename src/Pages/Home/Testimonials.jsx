import React, { useEffect } from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  Avatar,
  useTheme,
  useMediaQuery,
  Divider
} from '@mui/material';
import { Star } from '@mui/icons-material';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Testimonial() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true
    });
  }, []);

  // Add the Heinwig testimonial to your data
  const testimonials = [
    {
      id: "1",
      count: "5",
      description: "Abdul Jabbar has shown exceptional dedication and hard work in completing projects on time, often working late into the night. His commitment to timely delivery and going the extra mile has been appraised by both his team lead and manager.",
      author_name: "Team Lead",
      author_designation: "Ascending Software"
    },
    {
      id: "2",
      count: "5",
      description: "Abdul has demonstrated exceptional technical skills and dedication in developing our Marisec-AI platform. His ability to quickly grasp complex requirements and implement elegant solutions has been invaluable to our team.",
      author_name: "Krishnan Unni S",
      author_designation: "Co-Founder, Heinwig Technologies Pvt Ltd"
    }
  ];

  return (
    <Box
      id="testimonial"
      component="section"
      sx={{
        py: 10,
        px: isMobile ? 2 : 10,
        backgroundColor: theme.palette.background.default,
      }}
    >
      {/* Header Section */}
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography
          variant="overline"
          color="primary"
          sx={{
            fontWeight: 'bold',
            letterSpacing: 2,
            display: 'block',
            mb: 1
          }}
        >
          Company Feedback
        </Typography>
        <Typography
          variant="h3"
          sx={{
            fontWeight: 'bold',
            background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.secondary.main} 90%)`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            mb: 2
          }}
        >
          What People Say
        </Typography>
      </Box>

      {/* Testimonials Grid */}
      <Grid
        container
        spacing={4}
        justifyContent="center"
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000"
      >
        {testimonials.map((item, index) => (
          <Grid item xs={12} md={6} lg={4} key={index}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                p: 3,
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: theme.shadows[6]
                }
              }}
            >
              {/* Star Ratings */}
              <Box sx={{ display: 'flex', mb: 2 }}>
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    sx={{
                      color: theme.palette.primary.main,
                      fontSize: '1.8rem'
                    }}
                  />
                ))}
              </Box>

              {/* Testimonial Text */}
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ mb: 3, fontStyle: 'italic' }}
              >
                "{item.description}"
              </Typography>

              <Divider sx={{ my: 2 }} />

              {/* Author Info */}
              <Box sx={{ display: 'flex', alignItems: 'center', mt: 'auto' }}>
                <Avatar
                  sx={{
                    width: 56,
                    height: 56,
                    mr: 2,
                    backgroundColor: theme.palette.primary.main
                  }}
                >
                  {item.author_name.charAt(0)}
                </Avatar>
                <Box>
                  <Typography variant="subtitle1" fontWeight="bold">
                    {item.author_name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.author_designation}
                  </Typography>
                </Box>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}