import React from "react";
import {Link} from "react-router-dom";
import {Link as ScrollLink} from "react-scroll";
import {menuOptions} from "./constants";

function FrontPage(){
    const itemsLayout = [];
    let url = "/";
    for (const [index, value] of menuOptions.entries()) {
        if(index === 0){
            itemsLayout.push(
            <p className="font-inter text-lg text-gray-900 font-light hover:font-normal px-8">
                <Link to={url}>
                    {value}
                </Link>
            </p>
        )
        }
        else if(index>0 && value !== "Contact"){
            url = "/".concat(value.toLowerCase().replace(" ", "_"))
            itemsLayout.push(
            <p className="font-inter text-lg text-gray-900 font-light hover:font-normal px-8">
                <Link to={url}>
                    {value}
                </Link>
            </p>
        )
        }
        else if( value === "Contact"){
            itemsLayout.push(
            <p className="font-inter text-lg text-gray-900 font-light hover:font-normal px-8">
                <ScrollLink to={"Contact"} spy={true} smooth={true}>
                    {value}
                </ScrollLink>
            </p>
        )
        }
    }
return (
    <div>
      <div className="font-inter text-center text-sm py-24 font-light uppercase overflow-x-auto">
          <a href={"https://minjul0501.github.io/website"}>Megan Minju Lee</a>
      </div>
      <div className="flex flex-row justify-evenly pb-14">
          {itemsLayout}
      </div>
      <div className="grid flex-wrap grid-cols-1 md:grid-cols-2 lg:grid-cols-3
      grid-flow-row gap-24 content-evenly justify-items-center pb-24">
          <Link to={"/first_blog"}>
              <div className="bg-sky-300 w-56 h-56 rounded-2xl
              shadow-xl hover:ring hover:ring-sky-300 hover:ring-opacity-60 hover:ring-4"></div>
          </Link>
          <div className="bg-sky-300 w-56 h-56 rounded-2xl shadow-xl"> </div>
          <div className="bg-sky-300 w-56 h-56 rounded-2xl shadow-xl"></div>
          <div className="bg-sky-300 w-56 h-56 rounded-2xl shadow-xl"></div>
          <div className="bg-sky-300 w-56 h-56 rounded-2xl shadow-xl"></div>
          <div className="bg-sky-300 w-56 h-56 rounded-2xl shadow-xl"></div>
          <div className="bg-sky-300 w-56 h-56 rounded-2xl shadow-xl"></div>
          <div className="bg-sky-300 w-56 h-56 rounded-2xl shadow-xl"></div>
          <div className="bg-sky-300 w-56 h-56 rounded-2xl shadow-xl"></div>
          <div className="bg-sky-300 w-56 h-56 rounded-2xl shadow-xl"></div>
          <div className="bg-sky-300 w-56 h-56 rounded-2xl shadow-xl"></div>
          <div className="bg-sky-300 w-56 h-56 rounded-2xl shadow-xl"></div>
      </div>

        <div id={"Contact"} className="bg-gray-200">
          <div className="flex flex-row justify-evenly items-center h-64">
              <div className="bg-gray-700 h-48 w-48"></div>
              <div>My name is sexy girl</div>
          </div>
      </div>
    </div>
  );
}

export default FrontPage;