'use client';

import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import { Input } from "@/components/ui/input.jsx";
import { Button } from "@/components/ui/button.jsx";
import { useToast } from "@/components/ui/use-toast";
import { Loader } from "lucide-react";
import AppIcon from "@/components/custom/core/AppIcon";

const EmailSignUp = () => {
    const form = useRef();
    const { toast } = useToast();
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_0o7ifsm', 'template_avitq2w', form.current, {
                publicKey: 'NY8-arIuysHAX_GRn',
            })
            .then(
                () => {
                    setEmail('');
                    setLoading(false);
                    toast({
                        description: 'Email successfully submitted.',
                        duration: 5000,
                    });
                },
                (error) => {
                    setLoading(false);
                    toast({
                        description: "Couldn't submit email.",
                        duration: 5000,
                    });
                },
            );
    };

    return (
        <>
            <div className={`mt-8 mb-12 w-full flex justify-start items-center content-center`}>
                <form ref={form} onSubmit={sendEmail} className={"flex w-full"}>
                    <Input
                        type={"email"}
                        name={"user_email"}
                        placeholder={"Email"}
                        className={"mr-2 w-[280px] text-neutral-800"}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Button
                        className=""
                        type="submit"
                        onClick={() => setLoading(true)}
                    >
                        {loading ? <Loader size={20} className="animate-spin"/> : <>👍</>}
                    </Button>
                </form>
            </div>
            <AppIcon/>
        </>
    );
};

export default EmailSignUp;