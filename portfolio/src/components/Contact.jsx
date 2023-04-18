import React from "react";

const Contact = () => {
  return (
    <div
      id="contact"
      className="max-w-[1040px] m-auto md:pl-20 p-4 py-16 bg-gradient-to-r from-sky-100 to-amber-100"
    >
      <h1 className="py-4 text-4xl font-bold text-center text-[#273558] mb-6">
        Contact
      </h1>
      <form action="" method="POST" encType="multipart/form-data">
        <div>
          <div>
            <label>Name</label>
            <input type="text" name="name" />
          </div>
          <div>
            <label>Phone Number</label>
            <input type="text" name="phone" />
          </div>
        </div>
        <div>
          <label>Email</label>
          <input type="email" name="name" />
        </div>
        <div>
          <label>Subject</label>
          <input type="text" name="subject" />
        </div>
        <div>
          <label>Message</label>
          <textarea name="message" rows="10"></textarea>
        </div>
      </form>
    </div>
  );
};

export default Contact;
