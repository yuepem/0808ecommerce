'use client';
import React from 'react';
import avatar from '@/public/avatar.png';
import { User, Mail, Phone, MapPin } from 'lucide-react';
// Mock data
const user = {
    name: "Xiao Yue",
    email: "xiao.yue@example.com",
    phone: "+1 234 567 8900",
    address: "123 Main St, Stockholm, Sweden 16565",
    avatar: { avatar },
}

export default function Profile() {
  return (
    <div className="space-y-4">
      <div className="flex items-center">
        <User size={20} className="text-gray-400 mr-2" />
        <span>{user.name}</span>
      </div>
      <div className="flex items-center">
        <Mail size={20} className="text-gray-400 mr-2" />
        <span>{user.email}</span>
      </div>
      <div className="flex items-center">
        <Phone size={20} className="text-gray-400 mr-2" />
        <span>{user.phone}</span>
      </div>
      <div className="flex items-center">
        <MapPin size={20} className="text-gray-400 mr-2" />
        <span>{user.address}</span>
      </div>
    </div>
  );
}