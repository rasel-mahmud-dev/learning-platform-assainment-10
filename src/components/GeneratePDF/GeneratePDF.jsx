import React from "react";
import ReactToPdf from "react-to-pdf";
import Rating from "../Rating";
import {BsCalendarDate, BsGlobe} from "react-icons/bs";
import {MdSubtitles} from "react-icons/md";
import {Link} from "react-router-dom";
import Button from "../Button/Button";

const GeneratePDF = React.forwardRef(({details, id="", className=""}, ref) => {
	return (
			<div className={className} id={id}>
            <ReactToPdf targetRef={ref} filename="react-document.pdf">
                {({ toPdf }) => <button id="downloadPdf" onClick={toPdf}>Generate pdf</button>}
            </ReactToPdf>
	        
            <div style={{ width: 800, height: 1800, background: "white" }} ref={ref}>
     
                <div className="grid grid-cols-1 text-neutral-focus">
                    <div className="w-full">
                        <img src={details.thumb} className="w-full" />
                    </div>
                    <div className="p-4">
                        <h1 className="font-bold text-3xl text-neutral-focus">{details.title}</h1>
                        <p className="text-neutral">{details.description}</p>
                        <div className="flex items-center gap-x-2 mt-2">
                            <Rating rate={details?.rating?.rate} id={details.id} />
                            <span className="text-sm font-bold text-orange-400">{details?.rating?.rate}</span>
                            <span className="text-sm text-neutral">({details?.rating?.total}) Ratings</span>
                        </div>
                        <h4 className="text-neutral">{details.totalEnrolled} already enrolled</h4>
                        <h4 className="text-neutral">Instructor {details.instructor.name}</h4>
                        <div className="flex items-center gap-x-2 text-neutral">
                            <BsCalendarDate />
                            <span>Created {new Date(details.createdAt).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center gap-x-2">
                            <BsCalendarDate />
                            <span>Last updated {new Date(details.updatedAt).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center gap-x-2">
                            <BsGlobe />
                            <span className="text-gray-700">{details.language}</span>
                        </div>

                        <div className="flex items-center gap-x-2">
                            <MdSubtitles />
                            <span className="text-gray-700">{details.subtitle}</span>
                        </div>

                        <div className="mt-6 flex gap-x-4">
                            <Link to={`/checkout/${details.id}`}>
                                <Button className="bg-primary-400">Purchase Now</Button>
                            </Link>
                        </div>
                    </div>
	                
	                <h1 className="text-center mt-10 font-semibold text-lg">What you'll learn</h1>
		            <div className="max-w-4xl mx-auto">
		                {details.achievements.map((achievement) => (
				                <div className="mt-3">
		                        <li className="whitespace-pre-line">{achievement}</li>
		                    </div>
		                ))}
		            </div>
			             
                </div>
            </div>
        </div>
	);
});

export default GeneratePDF