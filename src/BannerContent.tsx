import React from 'react';
import { styled } from '@stitches/react';
import { useSpring, animated } from 'react-spring';

const BannerContainer = styled('div', {
  width: '100%',
  height: '300px', // Adjust the height as needed
  backgroundColor: '#f0f4f8',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  padding: '20px',
  boxSizing: 'border-box',
  borderRadius: '8px',
  boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
  position: 'relative',
  overflow: 'hidden',
});

const BannerImage = styled('img', {
  width: '100%',
  height: '100%',
  position: 'absolute',
  top: 0,
  left: 0,
  objectFit: 'cover', // Ensures the image covers the container
  filter: 'brightness(50%)',
});

const BannerText = styled(animated.div, {
  color: '#fff',
  zIndex: 1,
  fontSize: '24px',
  fontWeight: 'bold',
  fontFamily: 'Zen Tokyo Zoo, sans-serif',
  position: 'relative', // Ensure text is on top of the image
  marginBottom: '8px',
});

const AnimatedButton = styled(animated.button, {
  backgroundColor: '#12614b',
  color: '#fff',
  border: 'none',
  borderRadius: '4px',
  padding: '10px 20px',
  fontSize: '16px',
  fontFamily: 'Zen Tokyo Zoo, sans-serif',
  cursor: 'pointer',
  zIndex: 1,
  marginTop: '20px',
  outline: 'none',
  boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)',
  transition: 'background-color 0.3s ease',
  '&:hover': {
    backgroundColor: '#0056b3',
  },
});

interface BannerProps {
  image: string;
  text: React.ReactNode;
}

const BannerContent: React.FC<BannerProps> = ({ image, text }) => {
  const textAnimation = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    config: { duration: 2000 },
  });

  const buttonAnimation = useSpring({
    from: { transform: 'scale(0.9)', opacity: 0 },
    to: { transform: 'scale(1)', opacity: 1 },
    config: { duration: 1000 },
  });

  return (
    <BannerContainer>
      <BannerImage src={image} alt="Banner Background" />
      <BannerText style={textAnimation}>{text}</BannerText>
      <AnimatedButton style={buttonAnimation}>Click Me</AnimatedButton>
    </BannerContainer>
  );
};

export default BannerContent;
