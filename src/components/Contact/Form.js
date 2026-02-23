import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import Spinner from "./Spinner";

const Form = () => {
  const [formValues, setFormValues] = useState({ name: "", email: "", message: "" });
  const form = useRef();
  const [loading, setLoading] = useState({ spinner: false, tick: false });
  const [error, setError] = useState(false);

  const changeHandler = (e) => {
    // console.log(e.target.value);
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setError(false);
    // console.log(formValues);
    if (
      formValues.name.length === 0 ||
      formValues.email.length === 0 ||
      formValues.message.length === 0
    ) {
      setError(true);
      return;
    }

    setError(false);

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_USER_ID,
      )
      .then(
        (result) => {
          // console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        },
      );

    setLoading({ spinner: true, tick: false });

    setTimeout(() => {
      setLoading({ spinner: false, tick: true });
    }, 2000);

    setTimeout(() => {
      setLoading({ spinner: false, tick: false });
    }, 3400);

    setFormValues({ name: "", email: "", message: "" });
  };

  return (
    <div className=" md:w-[60%] px-4 md:px-2 py-6 " onSubmit={submitHandler}>
      <form action="" className=" " ref={form}>
        <input
          data-aos="fade-left"
          type="text"
          placeholder="Your Name"
          maxLength={25}
          className="w-full bg-transparent border-b-2 pt-10 pb-1 focus:outline-none px-2 "
          name="name"
          value={formValues.name}
          onChange={changeHandler}
        />

        <input
          data-aos="fade-left"
          type="email"
          placeholder="Your Email"
          maxLength={30}
          name="email"
          className="w-full bg-transparent border-b-2 pt-10 pb-1 focus:outline-none px-2 "
          value={formValues.email}
          onChange={changeHandler}
        />

        <textarea
          data-aos="fade-left"
          cols="30"
          rows="5"
          placeholder="Your Message"
          name="message"
          className="bg-transparent focus:outline-none pt-10 w-full border-b-2 h-48 px-2"
          value={formValues.message}
          onChange={changeHandler}
        ></textarea>

        <div className="flex">
          <button
            value="Send"
            type="submit"
            className="text-white bg-[rgb(28,69,175)]  px-8 py-2 rounded-sm duration-500 hover:bg-transparent border-[2px] border-[rgb(28,69,175)] mt-8"
          >
            Let's Talk
          </button>

          {error && (
            <p className="py-1 pl-4 opacity-70 text-[15px] text-red-500">
              Please fill all the details.{" "}
            </p>
          )}

          <Spinner loading={loading} />
        </div>
      </form>
    </div>
  );
};
export default Form;
