'use client';

import useScrollTop from '@/hooks/use-scroll-top';
import { cn } from '@/lib/utils';
import React from 'react';
import { Logo } from './logo';
import { ModeToggle } from '@/components/mode-toggle';
import { useConvexAuth } from 'convex/react';
import { SignInButton } from '@clerk/clerk-react';
import { Button } from '@/components/ui/button';
import { Spinner } from './spinner';

const Navbar = () => {
  const scrolled = useScrollTop();
  const { isAuthenticated, isLoading } = useConvexAuth();
  return (
    <div
      className={cn(
        'z-50 bg-background dark:bg-[#1F1F1F] fixed top-0 flex items-center w-full px-6 py-2',
        scrolled && 'border-b shadow-sm'
      )}
    >
      <Logo />
      <div className='md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2'>
        {isLoading && <Spinner />}
        {!isAuthenticated && !isLoading && (
          <>
            <SignInButton>
              <Button variant='ghost' size='sm'>
                Login
              </Button>
            </SignInButton>
            <SignInButton mode='modal'>
              <Button size='sm'>Get Jotion Free</Button>
            </SignInButton>
          </>
        )}
        <ModeToggle />
      </div>
    </div>
  );
};

export default Navbar;
