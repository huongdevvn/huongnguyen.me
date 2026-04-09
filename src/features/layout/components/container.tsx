import React from 'react';

type ContainerProps = {
  children: React.ReactNode;
};

const Container = ({ children }: ContainerProps) => {
  return <div className="max-w-6xl mx-auto border-x border-zinc-200 dark:border-zinc-900 min-h-screen relative transition-colors">{children}</div>;
};

export default Container;
