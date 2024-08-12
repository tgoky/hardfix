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

interface BannerProps {
  image: string;
  text: React.ReactNode;
}

const Banner: React.FC<BannerProps> = ({ image, text }) => {
  const textAnimation = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    config: { duration: 5000 },
  });

  return (
    <BannerContainer>
      <BannerImage src={image} alt="Banner Background" />
      <BannerText style={textAnimation}>{text}</BannerText>
    </BannerContainer>
  );
};

export default Banner;
