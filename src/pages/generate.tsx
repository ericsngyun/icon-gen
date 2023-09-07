import { type NextPage } from "next";
import Head from "next/head";

import { api } from "@/utils/api";
import { Card, CardHeader, CardDescription, CardContent, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form } from "@/components/ui/form";
// import { zodResolver } from "@hookform/resolvers,zod";
import { ModeToggle } from "@/components/theme-toggle";

import * as z from "zod";
import { FormGroup } from "@/components/FormGroup";
import React, { useState } from "react";

// const formSchema = z.object({
//     prompt: z.string(),
// });

const GeneratePage: NextPage = () => {
  const [form, setForm] = useState({
    prompt: "",
  });

  function handleFormSubmit(e: React.FormEvent) {
    e.preventDefault();
    // console.log(form);
    // TODO: submit the form data to the backend
      // no backend endpoint to send data to at the moment
  }

  function updateForm(key: string) {
    return function (e: React.ChangeEvent<HTMLInputElement>) {
      setForm({
        ...form,
        [key]: e.target.value,
      });
      // console.log([key]);
    }
  }

  return (
    <>
      <Head>
        <title>Icon Generator</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center">
        {/* <ModeToggle /> */}
        <Card className = "p-6 lg:min-w-[500px]">
          <form className = "flex flex-col gap-4" onSubmit = {handleFormSubmit}>
            <FormGroup>
              <label className = "font-bold text-xl">Prompt</label>
              <Input type = "text" className = "max-w-xl italic" value = {form.prompt} 
              onChange = {updateForm("prompt")}></Input>
            </FormGroup>
            <CardFooter className = "flex justify-end -p-4">
              <Button variant = "default">
                Submit
              </Button>
            </CardFooter>
          </form>
        </Card>
      </main>
    </>
  );
};

export default GeneratePage;
