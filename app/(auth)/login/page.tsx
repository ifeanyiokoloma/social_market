"use client";

import { Input } from "@/components/ui/input";
import { login } from "../../actions";
import { Button } from "@/components/ui/button";
import { useFormState } from "react-dom";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import Logo from "@/app/components/Logo";

const Login = () => {
  const [state, action] = useFormState(login, undefined);

  return (
    <section className="h-screen items-center justify-center flex">
      <Logo clx="absolute z-50 top-5 left-3" />
      <Image src="/wood.jpg" fill alt="login background" />
      <Card className="w-[350px] !backdrop-blur-xl shadow-slate-800 opacity-70 bg-black sm:flex flex-col gap-7 hidden">
        <CardHeader>
          <CardTitle className="text-zinc-50 text-3xl">Login</CardTitle>
          <CardDescription className="text-zinc-500">
            Members, log in with your email. Non-members,{" "}
            <span className="text-zinc-300">create&nbsp;account</span> with us
          </CardDescription>
        </CardHeader>

        <form action={action} className="flex flex-col gap-7">
          <CardContent>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label className="text-zinc-50" htmlFor="email">
                  Email
                </Label>
                <Input
                  className="text-white"
                  type="email"
                  placeholder="Email"
                  name="email"
                />

                {state?.errors?.email && (
                  <Alert variant="destructive" className="bg-black">
                    <ExclamationTriangleIcon className="h-4 w-4" />
                    <AlertTitle>Error</AlertTitle>
                    <AlertDescription>{state.errors.email}</AlertDescription>
                  </Alert>
                )}
              </div>

              <div className="flex flex-col space-y-1.5">
                <Label className="text-zinc-50" htmlFor="password">
                  Password
                </Label>
                <Input
                  className="text-white"
                  type="password"
                  placeholder="Password"
                  name="password"
                />

                {state?.errors?.password && (
                  <Alert
                    variant="destructive"
                    className="bg-black bg-opacity-80"
                  >
                    <ExclamationTriangleIcon className="h-4 w-4" />
                    <AlertTitle>Error</AlertTitle>
                    <AlertDescription>Password must:</AlertDescription>
                    <ul>
                      {state.errors.password.map(error => (
                        <li key={error}>- {error}</li>
                      ))}
                    </ul>
                  </Alert>
                )}
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button className="bg-dark-gold uppercase" type="submit">
              Login
            </Button>
          </CardFooter>
        </form>
      </Card>

      <form action={action} className="flex flex-col gap-7 sm:hidden absolute px-4">
        <h2 className="text-3xl">Login</h2>
        <p className="text-zinc-400">
          Members, log in with your email. Non-members,{" "}
          <span className="text-zinc-300">create&nbsp;account</span> with us
        </p>
        <div className="grid w-full items-center gap-4">
          <div className="flex flex-col space-y-1.5">
            <Label className="text-zinc-50" htmlFor="email">
              Email
            </Label>
            <Input
              className="text-white"
              type="email"
              placeholder="Email"
              name="email"
            />

            {state?.errors?.email && (
              <Alert variant="destructive" className="bg-black">
                <ExclamationTriangleIcon className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{state.errors.email}</AlertDescription>
              </Alert>
            )}
          </div>

          <div className="flex flex-col space-y-1.5">
            <Label className="text-zinc-50" htmlFor="password">
              Password
            </Label>
            <Input
              className="text-white"
              type="password"
              placeholder="Password"
              name="password"
            />

            {state?.errors?.password && (
              <Alert variant="destructive" className="bg-black bg-opacity-80">
                <ExclamationTriangleIcon className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>Password must:</AlertDescription>
                <ul>
                  {state.errors.password.map(error => (
                    <li key={error}>- {error}</li>
                  ))}
                </ul>
              </Alert>
            )}
          </div>
        </div>

        <Button className="bg-gold uppercase mt-4" type="submit">
          Login
        </Button>
      </form>
    </section>
  );
};

export default Login;
