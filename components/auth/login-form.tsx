"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Link from "next/link";

import { loginSchema } from "@/stores/types/login-schema";
import { AuthCard } from "./authCard";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

export default function LoginForm() {
  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // test code
  const onsubmit = (data: z.infer<typeof loginSchema>) => {
    console.log(data);
  };

  return (
    <AuthCard
      cardTitle="Welcome back"
      backButtonHref="./api/v1/auth/signin"
      backButtonLabel="Create an account"
      showSocials={true}
    >
      <div className="px-2">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onsubmit)}>
            <div>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        {...field}
                        placeholder="youremail@email.com"
                        autoComplete="email"
                      />
                    </FormControl>
                    <FormDescription />
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        {...field}
                        placeholder="********"
                        autoComplete="current-password"
                      />
                    </FormControl>
                    <FormDescription />
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button size={"sm"} variant={"link"}>
                <Link href="/auth/reset">Forgot your password?</Link>
              </Button>
            </div>
            <Button type="submit" className="my-5 w-full" >
              {"Login"}
            </Button>
          </form>
        </Form>
      </div>
    </AuthCard>
  );
}
