import React,{useRef} from 'react'
import '../index.css'
import emailjs from 'emailjs-com';

const HeroLeft = () => {
    // color code: f6cfc9
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_bxysvq5', 'template_kl2gip9', form.current, '5YVgMxAb8LuTuwb_3')
            .then((result) => {
                console.log(result.text);
                alert('Message sent successfully!');
            }, (error) => {
                console.log(error.text);
                alert('Failed to send message, please try again later.');
            });

        e.target.reset();  // Optionally reset the form
    };
  return (
    <div>
        <div className='flex justify-between'>
            <div className='w-[59%] py-[40px] sm:py-[90px] px-10 text-xl sm:text-3xl  xl:text-4xl rounded-lg flex items-center justify-center gradient-anim-2'>
                <p><span className='font-custom-weight'>Full Stack Developer</span> <i>Crafting</i> Intelligent Solutions with <span className='font-custom-weight'>MERN & AI</span></p>
            </div>

            <div 
                className=' w-[40%] bg-[#ffd2df] rounded-lg bg-cover flex justify-center image-animation'>
                    <img src="/picme.jpeg" alt="" className=' h-full md:h-[400px] rounded-lg ' />
            </div>
        </div>

        <div className='mt-2 flex flex-col md:flex-row justify-between'>
            <div className='py-[30px] px-10 w-full mb-2 md:w-[49%] text-gray-600 bg-[#ffd2df] rounded-lg'>
               <h1 className='text-black text-2xl font-slight-bold mb-2 md:mb-3'>Let's Connect !</h1>
               
               <div className='flex flex-col sm:flex-row justify-between md:flex-col gap-2 text-black'>
                <div className="flex md:flex-col gap-1 sm:w-1/2 md:w-full">
                    <a href='tel:+918838202521' target='_blank' className=' p-3 text-[12px] lg:py-2 md:text-sm rounded-lg px-4 cursor-pointer w-1/2 md:w-full gradient-anim'>+918838202521</a>
                    <a href='mailto:sensanjana072@gmail.com' target='_blank' className='p-3 rounded-lg lg:py-2 px-4 cursor-pointer w-1/2 md:w-full gradient-anim'>Mail</a>
                </div>

                <div className="flex md:flex-col gap-1 sm:w-1/2 md:w-full">
                <a href='https://github.com/Sanjana1304/' target='_blank' className=' p-3 rounded-lg lg:py-2 px-4 cursor-pointer w-1/2 md:w-full gradient-anim'>GitHub</a>
               <a href='https://www.linkedin.com/in/sanjana-acharya-a84b03231' target='_blank' className=' p-3 rounded-lg lg:py-2 px-4 cursor-pointer w-1/2 md:w-full gradient-anim'>LinkedIn</a>
               
                </div>
               
               
               </div>
               <p></p>
            </div>
            <div className='rounded-lg p-4 py-6 w-full md:w-1/2 gradient-anim'>
                <h1 className='text-2xl font-slight-bold px-3'>Contact me</h1>
                <form className='mt-3 px-3' ref={form} onSubmit={sendEmail} >
                    <div className='md:mt-5'>
                        <div className="flex w-full justify-between">
                        <input type="text" name="user_name" placeholder='Name' className='w-[49%] p-1 px-2 text-sm rounded my-1' required />
                        <input type="email" name="user_email" placeholder='Email' className='w-[50%] p-1 px-2 text-sm rounded my-1' required />
                    
                    </div>
                    
                    <textarea name="message" placeholder='Message' rows={3} className='w-full p-1 px-2 text-sm rounded my-1' required/>
                    <button type='submit' className='bg-[#ffd2df] p-2 rounded w-full'>Send</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default HeroLeft