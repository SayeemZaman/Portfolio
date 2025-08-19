export default function Form() {
  return (
    <div className="fixed z-20 top-0 left-0 w-dvw h-dvh bg-rich-black/95 py-[32px] px-[16px] flex items-center">
      <form
        novalidate
        action=""
        className="w-full bg-white rounded-[16px] p-[32px] flex flex-col gap-[16px]"
      >
        <p className="font-bold text-xl">
          Tell Me about yourself and what you want to make.
        </p>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          aria-label="Full Name"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          aria-label="Email"
          required
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          aria-label="Subject"
          required
        />
        <textarea
          name="message"
          placeholder="Message..."
          aria-label="Message"
        ></textarea>
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
