import React from 'react';
import Head from 'next/head';

interface PageHeaderProps {
  title?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title = 'Uni-Ubi' }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link
          rel="icon"
          href={require('../../../public/favicon.ico')}
        />
      </Head>
    </div>
  );
};

export default PageHeader;
