"use client"
import React from 'react'
import * as z from "zod"
import { Button } from '@/components/ui/button'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from 'react-hook-form'

import{
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import Link from 'next/link'

const signUpSchema = z.object({
    name: z.string().min(2, "Name should have atleast 2 characters.").max(50, "Name should not exceed 50 characters.").refine((value) => /^[a-zA-Z]+[-'s']?[a-zA-Z]+$/.test(value), 'Name should contain only alphabets.'),
    nuid: z.string().max(6, "NUID must be valid"),
    email: z.string().email("Email must be valid."),
    password: z.string().min(6, "Password should be atleast 6 characters."),
    confirmPassword: z.string().min(6, "Password should be atleast 6 characters.")
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match!",
    path: ["confirmPassword"],
});

const Page = () => {
    const form = useForm<z.infer<typeof signUpSchema>> ({
        resolver: zodResolver(signUpSchema),
        defaultValues: {
            name: "",
            nuid: "",
            email: "",
            password: "",
            confirmPassword: "",
        },
    })

    function onSubmit(values: z.infer<typeof signUpSchema>){
        console.log(values)
    }
    return (
        <div className='signUpWrapper'>
            <div className='formWrapper'>
                <div className='left'>
                    <h3 className='title'>Nearly for first-time users</h3>
                    <link href={'/signin'}>
                        <Button className='border-zinc-500 text-zinc-300 hover:border-zinc-200 hover:text-zinc-100 transition-colors border rounded-full px-8'>Sign In</Button>
                    </link>
                </div>
                <div className='right'>
                    <h3 className='text-center text-2xl font-semibold'>Register here!</h3>
                </div>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                        <FormField
                            control={form. control}
                            name="name"
                            render={({ field }) => (
                                <FormItem className='space-y-0 mb-2'>
                                    <FormLabel>Name</FormLabel>
                                    <FormControl>
                                        <input placeholder='Enter your name'
                                        {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form. control}
                            name="nuid"
                            render={({ field }) => (
                                <FormItem className='space-y-0 mb-2'>
                                    <FormLabel>NUID</FormLabel>
                                    <FormControl>
                                        <input placeholder='Enter your NUID'
                                        {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form. control}
                            name="email"
                            render={({ field }) => (
                                <FormItem className='space-y-0 mb-2'>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <input placeholder='Enter your email address'
                                        {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form. control}
                            name="password"
                            render={({ field }) => (
                                <FormItem className='space-y-0 mb-2'>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <input placeholder='Enter your password'
                                        {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form. control}
                            name="confirmPassword"
                            render={({ field }) => (
                                <FormItem className='space-y-0 mb-2'>
                                    <FormLabel>Confirm Password</FormLabel>
                                    <FormControl>
                                        <input placeholder='Enter your confirm password'
                                        {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type='submit' className='w-full'>Submit</Button>
                    </form>
                </Form>
            </div>
        </div>
    )
}



export default Page