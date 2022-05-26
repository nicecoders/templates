import React from 'react';

interface IBlankLayout {
  children: React.ReactNode
}

const BlankLayout: React.FC<IBlankLayout> = ({ children }) => (<>{children}</>);

export default BlankLayout;
