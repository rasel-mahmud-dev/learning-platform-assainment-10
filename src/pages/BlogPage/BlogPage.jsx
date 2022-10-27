import React from "react";

const BlogPage = () => {
    const posts = [
        {
            id: 1,
            question: "What is CORS?",
            answer: `
	        CORS stands for the cross-origin resource sharing.
	        It is actually a mechanism which enables the sources on a webpage to get permitted from other domain
	         which is actually located outside the domain from where the source gets originated.
	        `,
        },
        {
            id: 2,
            question: "Why are you using firebase? What other options do you have to implement authentication?",
            answer: `
	            The Firebase gives use lot of services like varies ways of authenticating users. You can choose from email authentication,
	            federated identity provider integration like Google, Facebook or Twitter or you can implement authentication on custom server,
	            database access, realtime data storage, directly from client-side code, without any backend.
	            
	            All of these can save you a significant amount of development cost, as you don't need to pay as high as developing from scratch.
            `,
        },
        {
            id: 3,
            question: "How does the private route work?",
            answer: `
	        The react private route component renders child components ( children ) if the user is logged in.
	        If not logged in the user is redirected to the /login page with the return url passed in the location state property
	        `,
        },
        {
            id: 4,
            question: "What is Node? How does Node work?",
            answer: ` Node JS is a JavaScript runtime environment. Both browser and Node JS run on V8 JavaScript engine.
         Node JS uses an event-driven, non-blocking I/O model that makes it lightweight and efficient. 
         Node JS applications uses single threaded event loop architecture to handle concurrent clients
        `,
        },
    ];

    return (
        <div className="container pb-10">
            <h1 className="section-sub-title font-bold text-center mt-10">Blogs</h1>
            <div className="max-w-2xl mx-auto">
                {posts.map((post) => (
                    <div
                        key={post.id}
                        className="border dark:border-base-300/10 border-neutral/10 card bg-white dark:bg-primary-10 rounded p-4 my-10"
                    >
                        <h4 className="dark:text-base-100 text-neutral-focus py-2 text-lg font-semibold">
                            {post.question}
                        </h4>
                        <p>{post.answer}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BlogPage;
