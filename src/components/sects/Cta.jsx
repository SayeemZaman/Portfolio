import { useContext } from "react";
import { ShowForm } from "../../contexts/ShowForm";

export default function Cta() {
  const { toggleForm } = useContext(ShowForm);

  return (
    <div id="contact" className="sect bg-rich-black">
      <h3 className="text-white text-3xl font-bold">Have a project in Mind?</h3>
      <button
        onClick={toggleForm}
        className="py-[16px] px-[24px] self-start bg-veronica text-white font-bold hover:bg-veronica-2 transition"
      >
        Make It Real
      </button>
    </div>
  );
}
