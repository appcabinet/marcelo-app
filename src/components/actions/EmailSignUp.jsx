'use client';

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import { Input } from "@/components/ui/input.jsx";
import { Button } from "@/components/ui/button.jsx";
import { useToast } from "@/components/ui/use-toast";

const EmailSignUp = () => {
    const form = useRef();
    const { toast } = useToast();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_0o7ifsm', 'template_avitq2w', form.current, {
                publicKey: 'NY8-arIuysHAX_GRn',
            })
            .then(
                () => {
                    console.log('Success');
                },
                (error) => {
                    console.log('Failed');
                },
            );
    };

    return (
        <div className={"mt-8 w-full flex justify-start items-center content-center"}>
            <form ref={form} onSubmit={sendEmail} className={"flex w-96"}>
                <Input type={"email"} name={"user_email"} placeholder={"Email"} className={"mr-2"}/>
                <Button
                    className=""
                    type="submit"
                    onClick={() => {
                        toast({
                            title: 'Success',
                            description: 'You have lucked out.',
                            variant: "success"
                        });
                    }}
                >
                    👍
                </Button>
            </form>
        </div>
    );
};

export default EmailSignUp;