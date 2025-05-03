import React, { useEffect } from 'react';
import { 
  Box, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  Avatar,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

const skills = [
  {
    name: "React.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    experience: "3 projects including Marisec-AI and Ride Booking App"
  },
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    experience: "2 projects including Marisec-AI"
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    experience: "All projects including Industrial Dashboard"
  },
  {
    name: "Material-UI",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
    experience: "Marisec-AI and Portfolio"
  },
  {
    name: "GraphQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
    experience: "Marisec-AI project"
  },
  {
    name: "React Native",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    experience: "Ride Booking App"
  },
  {
    name: "Git/GitHub",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    experience: "All projects"
  },
  {
    name: "Redux",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
    experience: "Ride Booking App"
  },
  {
    name: "Mapbox",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mapbox/mapbox-original.svg",
    experience: "Marisec-AI project"
  },
  {
    name: "Express.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    experience: "Marisec-AI backend"
  },
  {
    name: "HTML/CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    experience: "All web projects"
  },
  {
    name: "Docker",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    experience: "Marisec-AI deployment"
  }
];

export default function MySkills() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true
    });
  }, []);

  return (
    <Box
      id="mySkills"
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
          My Skills
        </Typography>
        <Typography 
          variant="h3" 
          sx={{
            fontWeight: 'bold',
            background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.secondary.main} 90%)`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >
          My Expertise
        </Typography>
      </Box>

      {/* Skills Grid */}
      <Grid container spacing={4}>
        {skills.map((skill, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: theme.shadows[6]
                  }
                }}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Avatar
                      src={skill.icon}
                      alt={skill.name}
                      sx={{ 
                        width: 40, 
                        height: 40,
                        backgroundColor: 'transparent',
                        mr: 2
                      }}
                    />
                    <Typography variant="h6" fontWeight="bold">
                      {skill.name}
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary">
                    {skill.experience}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}