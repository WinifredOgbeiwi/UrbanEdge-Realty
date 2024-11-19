import React from 'react'
import { FooterLinks } from '../../utils/data-arrays'

const Footer = () => {
  return (
    <>
      <footer className="flex flex-col md:flex-row justify-between px-10 md:px-20 py-10 bg-secondary2">
        <div className="mb-5 md:mb-0 font-extrabold text-center sm:text">UrbanEdge</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5   gap-10 m-auto text-center">
          {FooterLinks.map((item) => (
            <div>
              <h3 className="mb-5 uppercase font-bold">{item.title}</h3>
              <ul>
                {" "}
                {item.list.map((listItem) => (
                  <li className="flex flex-col capitalize mb-2">{listItem}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>

  
    </>
  );
}

export default Footer