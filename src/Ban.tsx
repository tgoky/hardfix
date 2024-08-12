import React from 'react';
import { styled } from '@stitches/react';
import { useSpring, animated } from '@react-spring/web';

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
  position: 'absolute',
  overflow: 'hidden',
});

const BannerImage = styled(animated.img, {
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
  fontFamily: 'Zen Tokyo Zoo, sans-serif',
  fontSize: '24px',
  fontWeight: 'bold',
  position: 'absolute', // Ensure text is on top of the image
});

const Ban: React.FC<{ image: string; text: string }> = ({ image, text }) => {
  // React Spring animations
  const [imageProps, apiImage] = useSpring(() => ({
    opacity: 1,
    config: { duration: 1000 },
  }));

  const [textProps, apiText] = useSpring(() => ({
    opacity: 1,
    transform: 'translateY(0px)',
    config: { duration: 1000 },
  }));

  // Trigger animations
  React.useEffect(() => {
    apiImage.start({ opacity: 1 });
    apiText.start({ opacity: 1, transform: 'translateY(0px)' });
  }, [apiImage, apiText]);

  return (
    <BannerContainer>
      <BannerImage
        src={image}
        alt="Banner Background"
        style={imageProps}
      />
      <BannerText style={textProps}>
        {text}
      </BannerText>
    </BannerContainer>
  );
};

export default Ban;
