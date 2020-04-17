import React from 'react';
import Hello from './Hello';

type ContainerProps = {
  padding?: string | 0;
  margin?: string | 0;
};

export default function App() {
  return <Hello />;
}
