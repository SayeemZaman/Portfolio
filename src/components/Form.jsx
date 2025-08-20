import { ShowForm } from "../contexts/ShowForm";
import { useState, useContext } from "react";
import crossIcon from "../assets/cross.png";

function CloseBtn() {
  const { toggleForm } = useContext(ShowForm);

  return (
    <button
      onClick={toggleForm}
      className="rounded bg-veronica/20 center w-[32px] h-[32px] ml-auto"
    >
      <img src={crossIcon} alt="Close Button" className="w-[12px] h-[12px]" />
    </button>
  );
}

function Error({ error }) {
  return <p className="text-red-500 text-xs">{error}</p>;
}

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [msg, setMsg] = useState("");
  const [errors, setErrors] = useState({});

  function hideErrors() {
    setErrors({});
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newErrors = {};

    if (!name) newErrors.name = "Name is required";
    if (!email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Email is invalid";
    if (!subject) newErrors.subject = "Subject is required";
    if (!msg) newErrors.msg = "Message is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
    }
  }

  return (
    <div className="fixed z-20 top-0 left-0 w-dvw h-dvh bg-rich-black/95 py-[32px] px-[16px] flex items-center">
      <form
        onSubmit={handleSubmit}
        noValidate
        action=""
        className="w-full bg-white rounded-[16px] p-[32px] flex flex-col gap-[16px]"
      >
        <CloseBtn />
        <p className="font-bold text-xl">
          Tell Me about yourself and what you want to make.
        </p>
        <div>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            aria-label="Full Name"
            onClick={hideErrors}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <Error error={errors.name} />}
        </div>

        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            aria-label="Email"
            onClick={hideErrors}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <Error error={errors.email} />}
        </div>

        <div>
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            aria-label="Subject"
            onClick={hideErrors}
            onChange={(e) => setSubject(e.target.value)}
          />
          {errors.subject && <Error error={errors.subject} />}
        </div>

        <div>
          <textarea
            name="message"
            placeholder="Message..."
            aria-label="Message"
            onClick={hideErrors}
            onChange={(e) => setMsg(e.target.value)}
          ></textarea>
          {errors.msg && <Error error={errors.msg} />}
        </div>

        <button
          type="submit"
          name="submit"
          className="py-[14px] px-[20px] text-white font-bold bg-veronica self-start"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
