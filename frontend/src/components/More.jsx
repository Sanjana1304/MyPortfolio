import React, { useState } from 'react'

const More = () => {
    const lng = [1,2,3];
    const [currentIndex, setCurrentIndex] = useState(0);

    const moreData = [
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