'use client';

import { Button } from 'flowbite-react';
import Link from 'next/link';



export default function Home(){
  return <div className="flex flex-wrap gap-2">
      <Button color="success" pill>
       <Link href='/terminal'>Start Lab</Link>
      </Button>
      </div>
}
