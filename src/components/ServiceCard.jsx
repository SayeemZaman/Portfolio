export default function ServiceCard({ title, content }) {
  return (
    <div className="w-full p-[32px] border border-raisin-black bg-gradient-to-b from-rich-black-2 to-rich-black flex flex-col gap-[8px]">
      <h3 className="text-white font-bold text-xl">{title}</h3>
      <p className="text-paynes-gray">{content}</p>
    </div>
  );
}
