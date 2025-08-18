import email from "../assets/email.png";

export default function Footer() {
  return (
    <footer className="sect bg-veronica gap-[8px] py-[32px]">
      <div className="flex flex-col gap-[8px]">
        <img src={email} alt="Email Icon" className="w-[32px]" />
        <p className="text-white font-bold">sayeemzaman00@gmail.com</p>
      </div>
      <hr className="opacity-20" />
      <p className="text-white">© Copyright 2025, All rights reserved.</p>
    </footer>
  );
}
