import React, {useState} from "react";
import {FaAngleDown, FaAngleUp} from "react-icons/fa";

const FaQs = () => {
    const questions = [
        {
            id: 1,
            question: "What do E-Coaching courses include?",
            answer: `
			Each  E-Coaching course is created, owned and managed by the instructor(s). The foundation of each Udemy course are its lectures, which can include videos, slides, and text. In addition, instructors can add resources and various types of practice activities, as a way to enhance the learning experience of students. `,
        },
        {
            id: 2,
            question:
                "Do I have to start my E-Coaching course at a certain time? And how long do I have to complete it?",
            answer: `
			There are no deadlines to begin or complete a course. You can access life time
			`,
        },
        {
            id: 3,
            question: "Is E-Coaching  an accredited institution? Do I receive anything after I complete a course?",
            answer: `
			While E-Coaching  is not an accredited institution, we offer skills-based courses taught by real-world experts in their field. Every approved, paid course features a certificate of completion to document your accomplishment.
			`,
        },
        {
            id: 4,
            question: "How can I pay for a course?",
            answer: `
				E-Coaching  supports several different payment methods, depending on your account country and location.
			`,
        },
        {
            id: 5,
            question: "Can E-Coaching give certificate after completed course ?",
            answer: `
				Yes, E-Coaching give a certificate after completed course
			`,
        },
    ];

	const [expandItems, setExpandItems] = useState([])
	
	function handleToggle(id){
		if(expandItems.includes(id)){
			setExpandItems(expandItems.filter(a=>a !== id))
		} else {
			setExpandItems([...expandItems, id])
		}
	}
	
    return (
        <div className="container pb-20">
            <h1 className="section-sub-title font-bold text-center mt-10 uppercase">frequently asked questions</h1>
            <div className="max-w-2xl mx-auto my-10">
		        { questions.map((item=>  (
						<div className="border dark:border-base-300/10 border-neutral/10 card rounded my-4 ">
							<div className="flex justify-between items-center bg-white dark:bg-primary-5 px-4 py-2" onClick={()=>handleToggle(item.id)}>
								<h1 className="dark:text-base-100 text-neutral-focus  font-semibold cursor-pointer" >{item.question}</h1>
								{!expandItems.includes(item.id)
										? <FaAngleDown/>
										: <FaAngleUp/> }
							</div>
							
							{ expandItems.includes(item.id) && (
									<div className="p-4">
										<p className="dark:text-base-300/70 text-neutral">{item.answer}</p>
									</div>
							) }
						</div>
		        ))) }
	        </div>
	        
        </div>
    );
};

export default FaQs;
