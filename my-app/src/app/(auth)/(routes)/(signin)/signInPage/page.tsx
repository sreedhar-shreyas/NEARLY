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

const signInSchema = z.object({
    
    email: z.string().email("Email must be valid."),
    password: z.string().min(6, "Password should be atleast 6 characters."),
})

const Page = () => {
    const form = useForm<z.infer<typeof signInSchema>> ({
        resolver: zodResolver(signInSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    })

    function onSubmit(values: z.infer<typeof signInSchema>){
        console.log(values)
    }
    return (
        <div className='signUpWrapper'>
            <div className='formWrapper'>
                <div className='left'>
                    <h3 className='title'>Nearly</h3>
                    <link href={'/signup'}>
                        <Button className='border-zinc-500 text-zinc-300 hover:border-zinc-200 hover:text-zinc-100 transition-colors border rounded-full px-8'>Sign Up</Button>
                    </link>
                </div>
                <div className='right'>
                    <h3 className='text-center text-2xl font-semibold'>Login here!</h3>
                </div>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                        
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
                        <Button type='submit' className='w-full'>Submit</Button>
                    </form>
                </Form>
            </div>
        </div>
    )
}

export default Page