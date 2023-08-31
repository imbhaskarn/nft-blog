import React from "react";
import CardComponent from "./Card";
import data from "../../data/data.json";
const Main = () => {
  const blogs = data.blogs;
  return (
    <main className="h-auto w-full bg-slate-50 flex justify-center items-center py-24 flex-grow">
      <div className="relative m-auto flex h-auto  sm:w-8/12 justify-center text-center  flex-wrap p-4 gap-8">
        {blogs.map((blog) => {
          return (
            <div className=" text-gray-900 flex-grow flex justify-center">
              {" "}
              <CardComponent
                title={blog.title}
                imageSrc={blog.cover}
                content={blog.content}
                id={blog.id}
              />
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default Main;
