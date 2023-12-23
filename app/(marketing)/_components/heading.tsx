'use client';

import { Button } from '@/components/ui/button';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import { useConvexAuth } from 'convex/react';
import React from 'react';
import { Spinner } from './spinner';
import Link from 'next/link';
import { SignInButton } from '@clerk/clerk-react';
import { ArrowRight } from 'lucide-react';

const Heading = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();
  return (
    <div className='max-w-3xl space-y-4'>
      <h1 className='text-3xl sm:text-5xl md:text-6xl font-bold'>
        Your Ideas, Documents, &Plans. Unified. Welcome to{' '}
        <span className='underline'>Potion</span>
      </h1>
      <h3 className='text-base sm:text-xl md:text-2xl font-medium'>
        Jotion is the connected workspace where better, faster work happens.
      </h3>
      {isLoading && (
        <div className='w-full grid place-items-center'>
          <Spinner size='lg' />
        </div>
      )}
      {isAuthenticated && !isLoading && (
        <Button>
          <Link href='/documents' className='flex items-center'>
            <span>Enter Jotion </span>{' '}
            <ArrowRightIcon className='h-4 w-4 ml-2' />
          </Link>
        </Button>
      )}
      {!isAuthenticated && !isLoading && (
        <SignInButton mode='modal'>
          <Button>
            <span>Get Jotion free</span> <ArrowRight className='h-4 w-4 ml-2' />
          </Button>
        </SignInButton>
      )}
    </div>
  );
};

export default Heading;
