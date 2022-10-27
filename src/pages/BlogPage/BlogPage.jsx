import React from "react";

const BlogPage = () => {
    const posts = [
        { id: 1, question: "what is cors?", answer: "" },
        {
            id: 2,
            question: "Why are you using firebase? What other options do you have to implement authentication?",
            answer: "",
        },
        { id: 3, question: "How does the private route work?", answer: "" },
        { id: 4, question: "What is Node? How does Node work?", answer: "" },
    ];

    return (
        <div className="container">
            <h1 className="section-sub-title font-bold text-center mt-10">Blogs</h1>
            <div className="max-w-2xl mx-auto">
                {posts.map((post) => (
                    <div key={post.id} className="border dark:border-base-300/10 border-neutral/10 card rounded p-4 my-10">
                        <h4>{post.question}</h4>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BlogPage;
