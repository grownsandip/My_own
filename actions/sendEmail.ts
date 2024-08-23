"use server";
import React from 'react';
import { Resend } from "resend";
import { validateString } from "@/lib/utils";
import { getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-email";

const resend=new Resend(process.env.RESEND_API_KEY)

export const sendEmail= async (formData:FormData)=>{
    const mail_id=formData.get("senderEmail");
    const message=formData.get("senderMsg");

    if(!validateString(mail_id,500)){
        return {
            res:null,
            error:"Invalid senderEmail",
        }
    }
    if(!validateString(message,5000)){
        return {
            res:null,
            error:"Invalid Message",
        }
    }

  try{
       const res = await  resend.emails.send({
        from:"Portfolio Contact <onboarding@resend.dev>",
        to:"roysandip33290@gmail.com",
        replyTo:mail_id as string,
        subject:"Message from Contact Form",
        react:React.createElement(ContactFormEmail,{
            message:message as string,
            senderEmail:mail_id as string,
        }),
    });
    if(res.error){
        return {res:null,error:res.error.message}
    }
    return {res,error:null}
}catch(error:unknown){

    return{res:null, error:getErrorMessage(error)}
}

}