"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { loginUser as handleLogin, UserState } from "@/store/slices/AuthSlice"
import { useDispatch, useSelector } from "react-redux"
import React, { useState } from "react"
import { AppDispatch } from "@/store"
import { useNavigate } from "react-router-dom"
const formSchema = z.object({
    username: z.string().min(1, 'Username is required'),
    email: z.string().email('Invalid email address').min(1, 'Email is required'),
    password: z.string().min(5, 'Password must be at least 5 characters long'),
})
type LoginFormProps = {
    className: string,
}
export const LoginForm : React.FC<LoginFormProps> = ({className}) => {
  // ...
  const dispatch = useDispatch<AppDispatch>();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: ""
    },
  })
   const [errorMessage, setErrorMessage] = useState<string | null>(null);
   const navigate = useNavigate();
   const user  = useSelector((state: UserState) => state.user)
  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
            // Dispatch login action using data from the form
            const response = await dispatch(handleLogin({ username: values.username, password: values.password, email: values.email })).unwrap();
      
            // If the response is successful, navigate to the profile page
            if (response) {
              console.log(response)
              navigate("/dashboard"); // Redirect only if login is successful
            } else {
              throw new Error("Invalid login credentials.");
            }
          } catch (error: unknown) {
            // Here we handle the 'unknown' type for the error
            if (error instanceof Error) {
              setErrorMessage("Login failed: " + error.message); // Set error message if login fails
            } else {
              setErrorMessage("An unexpected error occurred.");
            }
    console.log(user)

  }}
  return (
    <Form {...form} >
      <form onSubmit={form.handleSubmit(onSubmit)} className={`space-y-8 ${className}`}>
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-primary-foreground">Username</FormLabel>
              <FormControl>
                <Input placeholder="username" {...field} className="text-black border-black focus:border-none shadow-none" />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-primary-foreground">email</FormLabel>
              <FormControl>
                <Input placeholder="email" {...field} className="text-black border-black focus:border-none shadow-none" />
              </FormControl>
              <FormDescription>
                This is your public email.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
        //   type="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-primary-foreground">password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="password" {...field} className="text-black border-black focus:border-none shadow-none" />
              </FormControl>
              <FormDescription>
                This is your password.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
        {errorMessage&&<p>{errorMessage}</p>}
      </form>
    </Form>
  )
}
