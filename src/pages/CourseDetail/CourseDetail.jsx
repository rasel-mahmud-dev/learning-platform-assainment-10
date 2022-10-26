import React, {useState} from "react";
import { Link, useLoaderData } from "react-router-dom";
import Rating from "../../components/Rating";
import { BsCalendarDate, BsGlobe } from "react-icons/bs";
import { MdSubtitles } from "react-icons/md";
import api from "../../axios";
import Button from "../../components/Button/Button";
import ReactToPdf from "react-to-pdf";
import GeneratePDF from "../../components/GeneratePDF/GeneratePDF";

const CourseDetail = (props) => {
    const details = useLoaderData();
	
	const [downloadPdf, setDownloadPdf]  = useState(false)

    const ref = React.createRef();
    const timeOutId = React.createRef();

    function handleDownloadPdf() {
		// prevent multiple download before 1s
	    timeOutId.current && clearTimeout(timeOutId.current);
	    setDownloadPdf(true)

	    // after click 1 second download button download will be start
	    timeOutId.current = setTimeout(()=>{
			let downloadPdf = document.getElementById("downloadPdf");
			downloadPdf.click();
			setDownloadPdf(false)
		}, 1000)
	   
    }

    return (
        <div className="container">
	        
	        {downloadPdf && <GeneratePDF className="fixed top-full" id="pdf-frame" ref={ref} details={details} /> }
	        
            <div className="grid grid-cols-7 mt-8">
                <div className="col-span-3">
                    <img src={details.thumb} className="w-full" />
                </div>
                <div className="col-span-4 pl-5">
                    <h1 className="font-bold text-3xl">{details.title}</h1>
                    <p>{details.description}</p>
                    <div className="flex items-center gap-x-2 mt-2">
                        <Rating rate={details?.rating?.rate} id={details.id} />
                        <span className="text-sm font-bold text-orange-400">{details?.rating?.rate}</span>
                        <span className="text-sm">({details?.rating?.total}) Ratings</span>
                    </div>
                    <h4>{details.totalEnrolled} already enrolled</h4>
                    <h4>Instructor {details.instructor.name}</h4>
                    <div className="flex items-center gap-x-2">
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

                        <Button onClick={handleDownloadPdf} className="bg-primary-400">
                            Download Details
                        </Button>
                    </div>
                </div>
            </div>

            <h1 className="text-center mt-20 font-semibold text-lg">What you'll learn</h1>
            <div className="max-w-4xl mx-auto">
                {details.achievements.map((achievement) => (
                    <div className="mt-3">
                        <li className="whitespace-pre-line">{achievement}</li>
                    </div>
                ))}
            </div>
        </div>
    );
};

export function fetchCourseDetail({ params }) {
    return api
        .get("/api/course/" + params.courseId)
        .then(({ data }) => {
            return data;
        })
        .catch((ex) => {
            return null;
        });
}

export default CourseDetail;


