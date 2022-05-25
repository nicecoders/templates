import React from 'react';
import PageHeader from '@/components/PageHeader';

const BasicLayout: React.FC = ({ children }) => {
  return (
    <div>
      <PageHeader />

      <main>{children}</main>
    </div>
  );
};

export default BasicLayout;
