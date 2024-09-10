

import React from 'react';
import { auth } from "@/server/auth";
import Link from 'next/link';

import { Button } from "@/components/ui/button";
import { KeyRound } from 'lucide-react';

import UserProfileWithAuth from '@/components/userProfile/LoginProfile';
import UserProfile from "@/components/userProfile/UserProfile";


export default async function UserProfilePage() {
  
  return (
    <div className="max-w-7xl mx-auto py-20  sm:px-6 lg:px-8 bg-stone-100 ">
        <UserProfileWithAuth />
    </div>
  )
}