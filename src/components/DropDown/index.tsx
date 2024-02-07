import { memo, useState, useEffect, useRef } from "react";

interface Props {
  onDelete: () => void;
  children: React.ReactNode;
}

const DropDown = ({ children, onDelete }: Props) => {
  const dropRef = useRef<HTMLDivElement | null>(null);
  const [drop, setDrop] = useState(false);

  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [drop]);

  const handleClick = (e: MouseEvent) => {
    if (!dropRef) return;
    const outSide = dropRef.current?.contains(e.target as any);
    if (outSide) return;
    if (drop) setDrop(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setDrop(!drop)}
        className="inline-block text-gray-400 hover:bg-gray-700 focus:outline-none rounded-lg text-sm p-2"
        type="button"
      >
        {children}
      </button>
      {drop && (
        <>
          <div
            id="dropdown"
            ref={dropRef}
            className={`absolute mt-[10px] right-[15px] w-[150px] z-10 text-base bg-white divide-y divide-gray-100 rounded-lg shadow w-44 bg-gray-700 bg-zinc-500 ${
              !drop && "hidden list-none"
            }`}
          >
            <ul className="p-2">
              <li onClick={onDelete}>
                <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:bg-gray-600 text-gray-200">
                  삭제
                </a>
              </li>
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default memo(DropDown);
