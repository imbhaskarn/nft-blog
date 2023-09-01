import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import blog from "../../data/data.json";

const CardComponent = ({title, content, imageSrc, id} :any) => {
  return (
    <div className="max-w-sm bg-white 0 rounded-lg shadow relative">
      <a href="#">
        <img className="rounded-t-lg" src={imageSrc} alt="cover" />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
           {title}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 truncate overflow-hidden">
          {content}
        </p>
        <a
          href={`/blog/${id}`}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
        >
          Read more
          <svg
            className="w-3.5 h-3.5 ml-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default CardComponent;
