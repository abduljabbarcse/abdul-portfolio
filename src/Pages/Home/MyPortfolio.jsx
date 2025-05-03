import React, { useEffect } from 'react';
import {
  Box,
  Typography,
  Button,
  Chip,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { GitHub } from '@mui/icons-material';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from "framer-motion";
import CodeIcon from '@mui/icons-material/Code';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import DashboardIcon from '@mui/icons-material/Dashboard';
import DirectionsBoatIcon from '@mui/icons-material/DirectionsBoat';

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};



export default function MyPortfolio() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true
    });
  }, []);

  return (
    <Box
      id="MyPortfolio"
      component="section"
      sx={{
        py: 10,
        px: isMobile ? 2 : 10,
        backgroundColor: theme.palette.background.default,
      }}
    >
      {/* Header Section */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: 6
        }}
      >
        <Box>
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
            Recent Projects
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
            My Portfolio
          </Typography>
        </Box>

        <Button
          variant="outlined"
          color="primary"
          size="large"
          startIcon={<GitHub />}
          href="https://github.com/abduljabbarcse"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            mt: isMobile ? 3 : 0,
            px: 4,
            py: 1.5,
            borderRadius: 50,
            fontWeight: 'bold'
          }}
        >
          Visit My GitHub
        </Button>
      </Box>


      <Box sx={{  py: 4 }}>
        {/* Marisec-AI */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <Box
            sx={{
              backgroundColor: theme.palette.background.paper,
              borderRadius: 4,
              p: 4,
              mb: 4,
              boxShadow: theme.shadows[2]
            }}
          >
            <motion.div variants={itemVariants}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <DirectionsBoatIcon sx={{
                  width: 40,
                  height: 40,
                  mr: 2,
                  color: theme.palette.primary.main
                }} />
                <Box>
                  <Typography variant="h6" fontWeight="bold">
                    Marisec-AI
                  </Typography>
                  <Typography variant="subtitle2" color="text.secondary">
                    Apr 2024 - Present · Heinwig Technologies Pvt Ltd
                  </Typography>
                </Box>
              </Box>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Typography variant="body1" paragraph>
                Working on Marisec-AI, a vessel analysis platform using React, Apollo GraphQL, and Node.js
              </Typography>
            </motion.div>

            <motion.ul
              style={{ paddingLeft: 20 }}
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
            >
              <motion.li variants={itemVariants}>
                <Typography variant="body2">Contributed to two micro-frontend apps built using React.js, Vite module federation, Apollo Client, and MaterialUI</Typography>
              </motion.li>
              <motion.li variants={itemVariants}>
                <Typography variant="body2">Developed advanced map features with React Map GL, Mapbox GL, and D3 for real-time/historical ship monitoring</Typography>
              </motion.li>
              <motion.li variants={itemVariants}>
                <Typography variant="body2">Created dynamic map styling with conditional layer visibility and GeoJSON uploads</Typography>
              </motion.li>
              <motion.li variants={itemVariants}>
                <Typography variant="body2">Built GraphQL endpoints for data fetching and configured Apollo Client state management</Typography>
              </motion.li>
              <motion.li variants={itemVariants}>
                <Typography variant="body2">Gained experience with Docker and Nginx for deployment</Typography>
              </motion.li>
            </motion.ul>

            <motion.div
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.05
                  }
                }
              }}
              sx={{ mt: 2 }}
            >
              {[
                'Apollo GraphQL', 'Mapbox', 'React.js', 'Material-UI',
                'Express.js', 'Docker', 'Nginx', 'Vite'
              ].map((skill, i) => (
                <motion.span key={i} variants={itemVariants}>
                  <Chip
                    label={skill}
                    size="small"
                    sx={{ mr: 1, mb: 1, backgroundColor: theme.palette.action.selected }}
                  />
                </motion.span>
              ))}
            </motion.div>
          </Box>
        </motion.div>

        {/* Industrial Dashboard */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <Box
            sx={{
              backgroundColor: theme.palette.background.paper,
              borderRadius: 4,
              p: 4,
              mb: 4,
              boxShadow: theme.shadows[2]
            }}
          >
            <motion.div variants={itemVariants}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <DashboardIcon sx={{
                  width: 40,
                  height: 40,
                  mr: 2,
                  color: theme.palette.primary.main
                }} />
                <Box>
                  <Typography variant="h6" fontWeight="bold">
                    Industrial Dashboard for Role-Based Access Control
                  </Typography>
                  <Typography variant="subtitle2" color="text.secondary">
                    Jan 2024 - Apr 2024 · Ascending Software
                  </Typography>
                </Box>
              </Box>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Typography variant="body1" paragraph>
                Developed a role-based access control dashboard for industrial data management using Blazor Server
              </Typography>
            </motion.div>

            <motion.ul
              style={{ paddingLeft: 20 }}
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
            >
              <motion.li variants={itemVariants}>
                <Typography variant="body2">Worked on front-end development, designing interactive data visualizations and UI components</Typography>
              </motion.li>
              <motion.li variants={itemVariants}>
                <Typography variant="body2">Leveraged C# and Blazor Server for server-side logic and dynamic content generation</Typography>
              </motion.li>
              <motion.li variants={itemVariants}>
                <Typography variant="body2">Implemented real-time communication features using SignalR</Typography>
              </motion.li>
              <motion.li variants={itemVariants}>
                <Typography variant="body2">Integrated role-based access control features for secure data access</Typography>
              </motion.li>
            </motion.ul>

            <motion.div
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.05
                  }
                }
              }}
              sx={{ mt: 2 }}
            >
              {[
                'Blazor', 'C#', 'SQL', 'SignalR',
                'HTML5', 'CSS', 'JavaScript', 'Chart.js',
                'DataTables', 'jQuery', 'Bootstrap'
              ].map((skill, i) => (
                <motion.span key={i} variants={itemVariants}>
                  <Chip
                    label={skill}
                    size="small"
                    sx={{ mr: 1, mb: 1, backgroundColor: theme.palette.action.selected }}
                  />
                </motion.span>
              ))}
            </motion.div>
          </Box>
        </motion.div>

        {/* Ride Booking App */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <Box
            sx={{
              backgroundColor: theme.palette.background.paper,
              borderRadius: 4,
              p: 4,
              mb: 4,
              boxShadow: theme.shadows[2]
            }}
          >
            <motion.div variants={itemVariants}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <DirectionsCarIcon sx={{
                  width: 40,
                  height: 40,
                  mr: 2,
                  color: theme.palette.primary.main
                }} />
                <Box>
                  <Typography variant="h6" fontWeight="bold">
                    Mobile and Web App for Ride Booking
                  </Typography>
                  <Typography variant="subtitle2" color="text.secondary">
                    Sep 2023 - Apr 2024 · Ascending Software
                  </Typography>
                </Box>
              </Box>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Typography variant="body1" paragraph>
                Developed a comprehensive solution for ride, logistics booking, and hiring drivers using React.js and React Native
              </Typography>
            </motion.div>

            <motion.ul
              style={{ paddingLeft: 20 }}
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
            >
              <motion.li variants={itemVariants}>
                <Typography variant="body2">Designed and implemented a seamless user experience for booking taxis, bike taxis, and professional drivers</Typography>
              </motion.li>
              <motion.li variants={itemVariants}>
                <Typography variant="body2">Developed visualizations to present data insights effectively</Typography>
              </motion.li>
              <motion.li variants={itemVariants}>
                <Typography variant="body2">Implemented real-time communication with Socket.IO</Typography>
              </motion.li>
            </motion.ul>

            <motion.div
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.05
                  }
                }
              }}
              sx={{ mt: 2 }}
            >
              {[
                'React Native', 'React.js', 'Socket.io', 'Redux.js',
                'REST APIs', 'Bootstrap', 'HTML5', 'JavaScript',
                'CSS', 'SASS', 'Git'
              ].map((skill, i) => (
                <motion.span key={i} variants={itemVariants}>
                  <Chip
                    label={skill}
                    size="small"
                    sx={{ mr: 1, mb: 1, backgroundColor: theme.palette.action.selected }}
                  />
                </motion.span>
              ))}
            </motion.div>
          </Box>
        </motion.div>

        {/* Portfolio Website */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <Box
            sx={{
              backgroundColor: theme.palette.background.paper,
              borderRadius: 4,
              p: 4,
              mb: 4,
              boxShadow: theme.shadows[2]
            }}
          >
            <motion.div variants={itemVariants}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <CodeIcon sx={{
                  width: 40,
                  height: 40,
                  mr: 2,
                  color: theme.palette.primary.main
                }} />
                <Box>
                  <Typography variant="h6" fontWeight="bold">
                    My Personal Portfolio Website
                  </Typography>
                  <Typography variant="subtitle2" color="text.secondary">
                    Aug 2023
                  </Typography>
                </Box>
              </Box>

            </motion.div>

            <motion.div variants={itemVariants}>
              <Typography variant="body1" paragraph>
                Designed and built my personal portfolio website to showcase my skills and projects
              </Typography>
            </motion.div>

            <motion.div
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.05
                  }
                }
              }}
              sx={{ mt: 2 }}
            >
              {[
                'HTML5', 'CSS', 'JavaScript', 'React.js',
                'Material-UI', 'Responsive Design'
              ].map((skill, i) => (
                <motion.span key={i} variants={itemVariants}>
                  <Chip
                    label={skill}
                    size="small"
                    sx={{ mr: 1, mb: 1, backgroundColor: theme.palette.action.selected }}
                  />
                </motion.span>
              ))}
            </motion.div>
          </Box>
        </motion.div>
      </Box>

      {/* Other experiences would follow the same pattern */}
    </Box>
  );
}