import H3 from "@/components/custom/core/H3";
import Link from "next/link";
import EmailSignUp from "@/components/custom/EmailSignUp";
import AppIcon from "@/components/custom/core/AppIcon";

export default function Contact() {
    return (
        <div className={"w-full"}>
            <H3>Receive my updates</H3>
            <p className={"text-neutral-600 leading-7"}>
                You can reach me on {" "}
                <Link className={"underline hover:text-orange-400"} href={"https://x.com/marcelodotapp"}>
                    Twitter
                </Link>, {" "}
                <Link className={"underline hover:text-orange-400"}
                      href={"https://www.linkedin.com/in/marcelo-mantilla-080410143/"}>
                    LinkedIn
                </Link>, {" "}
                <Link className={"underline hover:text-orange-400"} href={"https://www.github.com/appcabinet"}>
                    GitHub
                </Link>, {" "} or by {" "}
                <Link className={"underline hover:text-orange-400"} href={"mailto:marcelo@appcabinet.com"}>
                    email
                </Link>. {" "}
                Subscribe to my newsletter below for updates on projects and new articles!
            </p>
            <EmailSignUp/>
        </div>
    );
}