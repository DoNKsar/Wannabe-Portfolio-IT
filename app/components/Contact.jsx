"use client"
import React, { useRef, useState } from 'react'
import { ImLocation2 } from 'react-icons/im'
import {  MdCall } from 'react-icons/md'
import { GrMail } from 'react-icons/gr'
import emailjs from '@emailjs/browser';
import Alert from '@mui/material/Alert'


export const Contact = () => {
	const form = useRef();

	const sendEmail = (e) => {
	  e.preventDefault();

	  const formFields = form.current;

	  emailjs.sendForm('service_nwrreol', 'template_7ubwj2d', form.current, '_uh733B8YOZ6xfwfq')
		.then((result) => {
			console.log(result.text);
			console.log('Message Sent')
			document.getElementById('successAlert').style.visibility = 'visible';
			setTimeout(function() {
				document.getElementById('successAlert').style.visibility = 'hidden';
			  }, 3000);
			  formFields.reset();
		}, (error) => {
			console.log(error.text);
			console.log('Message not sent')
			document.getElementById('errorAlert').style.visibility = 'visible';
			setTimeout(function() {
				document.getElementById('errorAlert').style.visibility = 'hidden';
			  }, 3000);
		});
	};
  return (
    <div id='contact' className='py-8 h-full lg:py-18 lg:h-screen flex items-center'>
	<div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
		<div className="py-6 md:py-0 md:px-6">
			<h1 className="text-4xl font-bold">Get in touch</h1>
			<p className="pt-2 pb-4">Fill in the form to start a conversation</p>
			<div className="space-y-4">
				<p className="flex items-center">
				<ImLocation2 className="w-5 h-5 mr-2 sm:mr-6"/>
					
					<span>Ilfov, Voluntari</span>
				</p>
				<p className="flex items-center">
					<MdCall className="w-5 h-5 mr-2 sm:mr-6" />
						
					<span>0733116342</span>
				</p>
				<p className="flex items-center">
					<GrMail className="w-5 h-5 mr-2 sm:mr-6" />

					<span>alexghezea98@gmail.com</span>
				</p>
			</div>
		</div>
		<form ref={form} onSubmit={sendEmail} className="flex flex-col py-6 space-y-1 md:py-0 md:px-3 ">
			<label className="block">
				<span className="mb-1">Full name</span>
				
			</label>
			<input type="text"  name="user_name" placeholder="Name" className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 p-2 focus:purple-500 bg-white" />
			
			<label className="block">
				<span className="mb-1">Email</span>
				
			</label>
			<input type="email" name="user_email" placeholder="Email@.com" className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 p-2 focus:ring-purple-500 bg-white" />

			<label className="block">
				<span className="mb-2 ">Message</span>
				<textarea name="message" rows="3" className="block w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-purple-500 bg-white p-2 mb-2"></textarea>
			</label>
			<input type="submit" value="Send" onclick={sendEmail} className="cursor-pointer self-center  px-8 py-2 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 bg-purple-700 text-gray-900 focus:ring-purple-5000 hover:ring-purple-500" />
			
			<div>
				<Alert id="successAlert" className="invisible pt-2" severity="success">Sent successfully!</Alert>
				<Alert id="errorAlert" className="invisible pt-2" severity="error">Message was not sent!</Alert>
			</div>
			
		</form>
	</div>
    </div>
  )

}
