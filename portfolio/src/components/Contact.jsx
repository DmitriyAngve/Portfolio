import React from "react";

const Contact = () => {
  return (
    <div
      id="contact"
      className="w-full m-auto md:pl-20 p-4 py-16 bg-gradient-to-r from-sky-100 to-amber-100"
    >
      <h1 className="py-4 text-4xl font-bold text-center text-[#273558] mb-6">
        Contact
      </h1>
      <form
        action="https://getform.io/f/e5721c1d-0d42-4211-99de-8b0d94b2e352"
        method="POST"
        encType="multipart/form-data"
      >
        <div className="grid md:grid-cols-2 gap-4 w-full py-2">
          <div className="flex flex-col">
            <label className="uppercase text-sm font-semibold py-2 text-[#273558]">
              Name
            </label>
            <input
              type="text"
              name="name"
              className="border-2 rounded-lg p-3 flex border-amber-200 focus:border-sky-800 focus:bg-sky-100 outline-none"
            />
          </div>
          <div className="flex flex-col">
            <label className="uppercase text-sm font-semibold py-2 text-[#273558]">
              Phone Number
            </label>
            <input
              type="text"
              name="phone"
              className="border-2 rounded-lg p-3 flex border-amber-200 focus:border-sky-800 focus:bg-sky-100 outline-none"
            />
          </div>
        </div>
        <div className="flex flex-col py-2">
          <label className="uppercase text-sm font-semibold py-2 text-[#273558]">
            Email
          </label>
          <input
            type="email"
            name="name"
            className="border-2 rounded-lg p-3 flex border-amber-200 focus:border-sky-800 focus:bg-sky-100 outline-none"
          />
        </div>
        <div className="flex flex-col py-2">
          <label className="uppercase text-sm font-semibold py-2 text-[#273558]">
            Subject
          </label>
          <input
            type="text"
            name="subject"
            className="border-2 rounded-lg p-3 flex border-amber-200 focus:border-sky-800 focus:bg-sky-100 outline-none"
          />
        </div>
        <div className="flex flex-col py-2">
          <label className="uppercase text-sm font-semibold py-2 text-[#273558]">
            Message
          </label>
          <textarea
            name="message"
            rows="10"
            className="border-2 rounded-lg p-3 border-amber-200 focus:border-sky-800 focus:bg-sky-100 outline-none"
          ></textarea>
        </div>
        <button className="bg-amber-300 text-[#273558] font-semibold mt-4 w-full p-4 rounded-lg">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
