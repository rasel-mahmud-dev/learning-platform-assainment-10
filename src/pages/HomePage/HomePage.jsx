import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar.jsx";
import { Link } from "react-router-dom";

const HomePage = (props) => {
    const categories = [
        { id: 1, name: "Web development" },
        { id: 2, name: "App development" },
        { id: 7, name: "Mechine Learning" },
        { id: 12, name: "Cyber Security" },
        { id: 21, name: "Ethical Hacking" },
        { id: 3, name: "Graphich design" },
        { id: 4, name: "Learning English" },
        { id: 5, name: "Video Editing" },
        { id: 6, name: "Logo Design" },
    ];

    return (
        <div className="">
            <Sidebar isOpen={true}>
                <div className="p-5">
                    <h1>Popular Topic </h1>
                    <div className="mt-1">
                        {categories.map((category) => (
                            <div className="text-base-700 cursor-pointer py-1 font-medium">
                                <Link to={`courses/?cat=${category.name}`}>{category.name}</Link>
                            </div>
                        ))}
                    </div>
                </div>
            </Sidebar>
            <div className="content">
                <h1>Hero</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, amet aperiam architecto
                    asperiores, beatae commodi cupiditate dolor, est et eveniet maiores nesciunt nostrum numquam
                    officiis quibusdam quos tempore voluptatum. A accusamus animi consequuntur cumque impedit laborum
                    perferendis quibusdam voluptatibus! Aspernatur distinctio dolorum earum et excepturi expedita fuga
                    illum ipsa magnam molestias natus necessitatibus nisi nostrum obcaecati odio odit officia officiis
                    quam quia quidem, quo, repellendus repudiandae unde? Blanditiis consequatur cum, dignissimos dolore
                    doloremque dolorum et exercitationem explicabo hic incidunt iure labore maxime molestias, natus
                    nihil nobis numquam perspiciatis quos ratione recusandae reiciendis similique sint tempora veniam
                    veritatis. Ad beatae blanditiis corporis dicta dignissimos eaque eligendi eum expedita labore,
                    laudantium porro quia rem tempora? At debitis et fugit impedit magni molestiae molestias nam natus
                    nemo nihil nulla officia pariatur perferendis praesentium quas rem, sit velit voluptatem. Autem
                    beatae, debitis dicta distinctio dolor est facere fugiat, iure iusto laudantium libero molestiae
                    natus provident quam quia recusandae repudiandae sapiente. At deserunt pariatur voluptate? Accusamus
                    adipisci consequuntur corporis dolorum eligendi et eum, explicabo incidunt itaque molestias numquam
                    provident rerum similique sint tenetur. Aut deleniti dicta doloremque dolores optio rerum sunt
                    tempore voluptatem? Accusantium dolore earum eos facere harum illum iste magnam minus perspiciatis
                    sint!
                </p>
            </div>
        </div>
    );
};

export default HomePage;
