import React from 'react';
import { useRouter } from 'next/router';

export const GoBack = () => {
  const router = useRouter();
  return (
    <a href='#' onClick={() => router.back()}>
      Back
    </a>
  );
};
