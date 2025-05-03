import React, { useEffect } from "react";
import { Box, Typography, Grid, Paper, Avatar } from "@mui/material";
import { styled } from "@mui/material/styles";
import AOS from "aos";
import "aos/dist/aos.css";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
  borderRadius: "12px",
  boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
  transition: "transform 0.3s ease-in-out",
  "&:hover": {
    transform: "translateY(-5px)",
  },
}));

const IconContainer = styled("div")({
  width: 60,
  height: 60,
  margin: "0 auto 16px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#1976d2",
  borderRadius: "50%",
  color: "white",
});

export default function AboutMe() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <Box
      id="AboutMe"
      component="section"
      sx={{
        py: 8,
        px: { xs: 2, md: 6 },
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        gap: 4,
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
        }}
        data-aos="fade-right"
      >
        <Avatar
          src={process.env.PUBLIC_URL + "/img/ab1.jpg"}
          alt="Abdul Jabbar"
          sx={{
            width: { xs: 250, md: 350 },
            height: { xs: 250, md: 350 },
            border: "4px solid #1976d2",
          }}
        />
        
      </Box>

      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
        data-aos="fade-left"
      >
        <Typography
          variant="overline"
          sx={{
            color: "primary.main",
            fontWeight: "bold",
            letterSpacing: 1,
          }}
        >
          Get To Know More
        </Typography>
        <Typography variant="h3" sx={{ fontWeight: "bold", mb: 2 }}>
          About Me
        </Typography>

        <Grid container spacing={2} sx={{ mb: 3 }}>
          <Grid item xs={12} sm={6}>
            <Item>
              <IconContainer>
                <WorkIcon fontSize="medium" />
              </IconContainer>
              <Typography variant="h6" gutterBottom>
                Experience
              </Typography>
              <Typography variant="body1">
                1.8+ years
                <br />
                Full Stack Development
              </Typography>
            </Item>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Item>
              <IconContainer>
                <SchoolIcon fontSize="medium" />
              </IconContainer>
              <Typography variant="h6" gutterBottom>
                Education
              </Typography>
              <Typography variant="body1">
                B.E. Computer Science
                <br />
                Government College of Engineering
              </Typography>
            </Item>
          </Grid>
        </Grid>

        <Typography
          variant="body1"
          sx={{
            lineHeight: 1.8,
            color: "text.secondary",
            fontSize: "1.1rem",
          }}
        >
          Results-driven Full Stack Engineer with 1.8 years of hands-on experience
          developing enterprise-grade web applications. Specializes in JavaScript
          ecosystems with proven expertise in building geospatial analytics
          platforms using React, Node.js, and GraphQL. Combines deep technical
          knowledge of modern web frameworks with practical experience in
          optimizing data pipelines and containerized deployments.
        </Typography>

        <Box sx={{ mt: 2, display: "flex", gap: 1, flexWrap: "wrap" }}>
          {[
            "JavaScript",
            "React",
            "Node.js",
            "GraphQL",
            "Microservices",
            "Docker",
            "Data Visualization",
            "GIS",
          ].map((skill) => (
            <Paper
              key={skill}
              sx={{
                px: 2,
                py: 1,
                borderRadius: 20,
                backgroundColor: "primary.light",
                color: "primary.contrastText",
                fontSize: "0.8rem",
              }}
            >
              {skill}
            </Paper>
          ))}
        </Box>
      </Box>
    </Box>
  );
}