import React from 'react';
import Head from 'next/head';

interface PageHeaderProps {
  title?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title = 'dev' }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link
          rel="icon"
        // href={require('@static/favicon.ico')}
        />
      </Head>
    </div>
  );
};

export default PageHeader;
