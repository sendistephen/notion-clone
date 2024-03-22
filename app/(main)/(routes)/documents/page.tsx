'use client';

import Image from 'next/image';
import { useUser } from '@clerk/clerk-react';
import { PlusCircle } from 'lucide-react';
import { useMutation } from 'convex/react';

import { api } from '@/convex/_generated/api';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const DocumentsPage = () => {
  const user = useUser();

  const create = useMutation(api.documents.create);

  const onCreate = () => {
    const promise = create({ title: 'untitles' });

    toast.promise(promise, {
      loading: 'Creating a new note',
      success: 'New note created',
      error: 'Failed to create new note',
    });
  };
  return (
    <div className='h-full flex flex-col justify-center items-center space-y-4'>
      <Image
        src='/empty.png'
        alt='empty'
        width='300'
        height='300'
        className='dark:hidden'
      />
      <Image
        src='/empty.png'
        alt='empty'
        width='300'
        height='300'
        className='hidden dark:block'
      />
      <h2 className='text-lg font-medium'>
        Welcome to {user.user?.firstName}&apos;s Jotion
      </h2>
      <Button onClick={onCreate}>
        <PlusCircle className='mr-2 h-4 w-4' />
        Create a ntote
      </Button>
    </div>
  );
};

export default DocumentsPage;
