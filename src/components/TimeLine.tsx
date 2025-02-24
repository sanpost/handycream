import React, { useState } from 'react';
import styles from './TimelineTile.module.scss';

interface TimelineTileProps {
  day: string;
  image: string;
  description: string;
}

const TimelineTile: React.FC<TimelineTileProps> = ({ day, image, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={styles.tile}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={image} alt={`Day ${day}`} className={styles.image} />
      {isHovered && (
        <div className={styles.description}>
          <h3>{day}</h3>
          <p>{description}</p>
        </div>
      )}
    </div>
  );
};

export default TimelineTile;