import React from 'react';
import { Box, Typography, useTheme, useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';

const SectionHeader = ({ title, subtitle, description }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ textAlign: 'center', mb: 6 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Typography
          variant="overline"
          component="p"
          sx={{
            color: theme.palette.primary.main,
            fontWeight: 'bold',
            letterSpacing: 2,
            fontSize: isMobile ? '0.7rem' : '0.8rem',
            mb: 1,
            display: 'inline-block',
            position: 'relative',
            '&:after': {
              content: '""',
              position: 'absolute',
              width: '40%',
              height: 2,
              bottom: -4,
              left: '30%',
              backgroundColor: theme.palette.primary.main,
            }
          }}
        >
          {subtitle}
        </Typography>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Typography
          variant="h2"
          component="h2"
          sx={{
            fontWeight: 'bold',
            fontSize: isMobile ? '2rem' : '3rem',
            mb: 2,
            background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.secondary.main} 90%)`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            lineHeight: 1.2
          }}
        >
          {title}
        </Typography>
      </motion.div>

      {description && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Typography
            variant="body1"
            sx={{
              maxWidth: 700,
              mx: 'auto',
              color: theme.palette.text.secondary,
              fontSize: isMobile ? '1rem' : '1.1rem',
              lineHeight: 1.6
            }}
          >
            {description}
          </Typography>
        </motion.div>
      )}
    </Box>
  );
};

export default SectionHeader;