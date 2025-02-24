import React, { useState } from 'react'

const More = () => {
    const lng = [1,2,3,4,5];
    const [currentIndex, setCurrentIndex] = useState(0);

    const moreData = [
        {
            heading: 'How I Cracked IBM',
            datee: 'Dec 2024',
            content: 'Excited to share my journey of cracking IBM through college campus placements! I had the opportunity to interview for the role of Software Engineer at IBM, where I went through Technical MCQs, Coding, Technical and HR Round. The coding round consisted of DSA Questions and one question was expected to be written in C compulsorily. In the MCQ round, it was about DBMS, Networking and Linux Commands. During the interview, I discussed my experience working on various projects, including developing web applications using React and Node.js. I was asked about my understanding of JWT Authentication, data structures & algorithms and SQL. Overall, it was a great experience.',

        },
        {
            heading: 'My Interview Experience at EY',
            datee: '...and How I Cracked it (Sep 2024)',
            content: 'Excited to share my interview experience at EY through college campus placements! I had the opportunity to interview for the role of Consulting Engineer at EY, where I went through Aptitude, Coding, Communication, Technical and HR Round. During the interview, I discussed my experience working on various projects, including developing web applications using React and Node.js. I was asked about SAP, ERP and Abap Programming Language. Overall, it was a great experience.',
        },
        {
            heading: 'Woohoo! Got My IBM Certification',
            datee: 'Sep 2024',
            content: 'Excited to share that I have completed the Developing Frontend Apps with React course as part of the IBM Full Stack Software Developer Professional Certificate program. During this course, I gained valuable skills in building dynamic web applications using React, including: 1. Mastering function components, 2. Leveraging hooks like useState and useEffect for efficient state and side-effect management, 3. Understanding advanced concepts like Redux for global state management, 4. Completing a final project by building a React shopping cart app using a combination of components, actions, and reducers',
        },
        {
            heading: 'My First Open Source Contribution',
            datee: 'Aug 2024',
            content: 'Excited to Share About My Latest Open Source Contribution! I had the incredible opportunity to contribute to GrapplTech platform, Grabbit & Go, by designing and developing a stunning hero section component. Using React and Bootstrap, I created a responsive and visually appealing hero section that effectively captures user attention across all device views—desktop, mobile, and tablet. This component is now part of a curated selection of reusable web components, helping developers build websites more efficiently and collaboratively.',
        },
        {
            heading: 'Gold Badge in Problem Solving on HackerRank',
            datee: 'Aug 2023',
            content: 'Thrilled to share that I have earned the Gold Badge in Problem Solving on HackerRank! This journey has been a rewarding challenge, helping me sharpen my analytical and coding skills. I am excited to apply these skills in real-world projects and keep pushing my boundaries. Here is to continuous learning and growth! ',
        },

    ];

    const handleDotClick = (index) => {
        setCurrentIndex(index);
    };
  return (

    <section id='more' className='rounded-lg p-3 mt-3 bg-[#ffd2df] pt-7'>
    <h1 className='font-bold text-3xl text-center'>More About Me</h1>
    <div className="testimonial-container relative overflow-hidden w-full flex flex-col justify-center items-center align-items-center">
        {moreData.length>0 && moreData.map((testimonial, index) => (
            <div
                key={index}
                className={`testimonial ${index === currentIndex ? 'block' : 'hidden'}`}
            >
                <h1 className="mt-3 text-xl font-semibold text-center mb-2">{`${testimonial.heading}`}</h1>
                <p className="mt-1 text-gray-800 font-semibold text-center mb-2">{`${testimonial.datee}`}</p>
                <p className="text-gray-600 text-center mx-auto w-[75%] mb-3"><i>{`"${testimonial.content}"`}</i></p>
            </div>
        ))}
    </div>
    <div className="dots flex justify-center mt-4">
        {lng.length>0 && lng.map((_, index) => (
            <span
                key={index}
                className={`dot h-4 w-4 mx-1 rounded-full cursor-pointer ${index === currentIndex ? 'bg-black' : 'bg-gray-300'}`}
                onClick={() => handleDotClick(index)}
            ></span>
        ))}
    </div>
    </section>
  )
}

export default More