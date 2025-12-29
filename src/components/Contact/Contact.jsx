import emailjs from '@emailjs/browser';
import { useRef } from "react";
import Swal from 'sweetalert2';

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(`${import.meta.env.VITE_EMAIL_JS_SERVICE_ID}`, `${import.meta.env.VITE_EMAIL_JS_TEMPLATE_ID}`, form.current, {
                publicKey: `${import.meta.env.VITE_EMAIL_JS_PUBLIC_KEY}`,
            })
            .then(
                () => {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Email Sent Successful.",
                        showConfirmButton: false,
                        timer: 1500
                    });

                    e.target.user_name.value = '';
                    e.target.user_email.value = '';
                    e.target.message.value = '';

                    return;
                },
                () => {
                    return Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Something went wrong!",
                    });
                },
            );
    };

    return (
        <div className="sm:w-3/5 mx-4 sm:mx-auto p-4 my-6 bg-slate-800 rounded-md">
            <div>
                <h1 className="text-4xl font-bold pt-4 text-center text-slate-200">Get In <span className="text-teal-600">Touch</span></h1>
            </div>
            <form ref={form} onSubmit={sendEmail} className="py-2 flex flex-col gap-2">
                <label className="text-white">Name:</label>
                <input className="p-2 rounded-md" type="text" name="user_name" required />
                <label className="text-white">Email:</label>
                <input className="p-2 rounded-md" type="email" name="user_email" required />
                <label className="text-white">Your Text:</label>
                <textarea className="p-2 rounded-md min-h-[100px] max-h-[200px]" name="message" required></textarea>
                <input className="btn mt-2 text-xl" type="submit" value='Send' />
            </form>
        </div>
    );
};

export default Contact;