

import EmptyState from "@/app/components/EmptyState";
import ClientOnly from "@/app/components/ClientOnly";
import prisma from "@/app/libs/prismadb";
import getCurrentUser from "@/app/actions/getCurrentUser";
import getReservations from "@/app/actions/getReservations";
import { Fragment } from 'react'
import {
  BriefcaseIcon,
  CalendarIcon,
  CheckIcon,
  ChevronDownIcon,
  CurrencyDollarIcon,
  LinkIcon,
  MapPinIcon,
  PencilIcon,
} from '@heroicons/react/20/solid'
import { Menu, Transition } from '@headlessui/react'

function classNames(...classes:any) {
  return classes.filter(Boolean).join(' ')
}



import React, { useState, useEffect } from "react";
import axios from "axios";
import getUsers from "../actions/getUsers";
interface User {
    email: string;
    name: string;
  }
  export default async function AdminPanel() {
    try {
      const currentUser = await getUsers();
  
      if (!currentUser) {
        return [];
      }

  return (
    <div className="flex flex-col gap-4">
      {currentUser.map((usersData) => (
        <div key={usersData.email} className="rounded-md bg-gray-100 p-4 shadow-sm">
          <h2 className="text-xl font-bold">{usersData.name}</h2>
          <p className="text-sm text-gray-500">{usersData.email}</p>
          <button className="bg-blue-400 p-1">Delete User </button>
        </div>
      ))}
    </div>
  );
}
catch (error: any) {
    throw new Error(error);
  }
  }










