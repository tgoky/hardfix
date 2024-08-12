import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { styled } from '@stitches/react';

const CardContainer = styled(animated.div, {
  width: '300px',
  border: 'solid 4px white',
  borderRadius: '10px',
  overflow: 'hidden',
  boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
  transition: 'box-shadow 0.3s ease, transform 0.3s ease',
  '&:hover': {
    boxShadow: '0px 12px 24px rgba(0, 0, 0, 0.5)', // Enhanced glow
    transform: 'scale(1.1)', // Increased zoom
  },
});

const CardImage = styled('img', {
  width: '100%',
  height: '200px',
  objectFit: 'cover',
});

const CardText = styled('div', {
  padding: '20px',
  backgroundColor: '#fafafa',
  color: 'black',
  textAlign: 'center',
  fontFamily: 'Zen Tokyo Zoo, sans-serif',
  fontWeight: 600,
  transition: 'opacity 0.3s ease',
});

const Card: React.FC<{ image: string; text: string; hoverText: string }> = ({ image, text, hoverText }) => {
  const [hovered, setHovered] = useState(false);

  const props = useSpring({
    from: { opacity: 0, transform: 'scale(0.9)' },
    to: { opacity: 1, transform: 'scale(1)' },
    config: { tension: 300, friction: 15 },
  });

  return (
    <CardContainer
      style={props}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <CardImage src={image} alt="Card Image" />
      <CardText>{hovered ? hoverText : text}</CardText>
    </CardContainer>
  );
};

export default Card;
