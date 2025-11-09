import { AiOutlineProduct } from "react-icons/ai";

export default function Header() {
  return (
    <div className="flex bg-indigo-200 items-center justify-center gap-2 h-[124px]">
      <AiOutlineProduct fontSize="40px" />
      <span className="text-4xl font-bold text-center">Product</span>
    </div>
  );
}
