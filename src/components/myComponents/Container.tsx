import React, { ReactNode } from 'react';

interface ContainerProps {
  classes?: string;
  children: ReactNode; // Specify the type for 'children'
}

const Container: React.FC<ContainerProps> = ({ classes = '', children }) => {
  return (
    <div className={`container ${classes}`}>
      {children}
    </div>
  );
};

export default Container;
