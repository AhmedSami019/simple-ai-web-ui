import React from "react";
import firstImg from "../../assets/image-1.png"
import secondImg from "../../assets/image.png"

const Courses = () => {
  return (
    <div className="px-20 py-10">
      <div className="flex items-center justify-between">
        <div className="w-10/12 space-y-6">
          <h1 className="text-5xl font-medium">Our Courses</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget
            elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum
            eget habitasse in velit fringilla feugiat senectus in.
          </p>
        </div>
        <button className="btn bg-blue-800 text-white">View all</button>
      </div>
      <div className="flex gap-10 mt-10">
        <div className="card p-10 bg-gray-100 shadow-sm">
          <figure className="mb-5">
            <img
              src={secondImg}
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="flex items-center justify-between">
            <div className="flex gap-5">
                <button className="btn  text-gray-500">4 weeks</button>
                <button className="btn  text-gray-500">Beginner</button>
            </div>
            <h2 className="text-xl font-medium ">By Jhon smith</h2>
            
          </div>
          <div className="card-body ">
            <h2 className="card-title">Web Design Fundamentals</h2>
            <p>
            Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.
            </p>
            <div className="card-actions mt-5">
              <button className="btn w-full bg-blue-800 text-white">Get it Now</button>
            </div>
          </div>
        </div>

        <div className="card p-10 bg-gray-100 shadow-sm">
          <figure className="mb-5">
            <img
              src={secondImg}
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="flex items-center justify-between">
            <div className="flex gap-5">
                <button className="btn  text-gray-500">4 weeks</button>
                <button className="btn  text-gray-500">Beginner</button>
            </div>
            <h2 className="text-xl font-medium ">By Jhon smith</h2>
            
          </div>
          <div className="card-body ">
            <h2 className="card-title">Web Design Fundamentals</h2>
            <p>
            Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.
            </p>
            <div className="card-actions mt-5">
              <button className="btn w-full bg-blue-800 text-white">Get it Now</button>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
};

export default Courses;
