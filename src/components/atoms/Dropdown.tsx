import { ReactNode, useEffect, useRef, useState } from 'react';

export function Dropdown({ toggle, children }: IProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      {isOpen && <div className="fixed inset-0 bg-black/10 z-20" onClick={() => setIsOpen(false)}></div>}

      <div className="relative z-20" ref={dropdownRef}>
        <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
          {toggle}
        </div>
        {isOpen && <div className="absolute right-0 mt-2  rounded-md">{children}</div>}
      </div>
    </>
  );
}

interface IProps {
  toggle: ReactNode;
  children: ReactNode;
}
