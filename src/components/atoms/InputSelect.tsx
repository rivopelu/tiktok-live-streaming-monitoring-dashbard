import { ReactNode, useEffect, useRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';

export function InputSelect(props: IProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(props.value || '');
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (option: { label: string; value: string }) => {
    setSelected(option.value);
    props.onChange?.(option.value);
    setIsOpen(false);
  };

  return (
    <div className="grid gap-1" ref={dropdownRef}>
      {props.label && (
        <label className="text-sm capitalize" htmlFor={props.id}>
          {props.label} {props.required && <span className="text-red-700">*</span>}
        </label>
      )}
      <div className="relative">
        <div
          className={twMerge(
            'flex items-center w-full py-2 px-3 duration-300 bg-white outline-2 outline-slate-300 rounded-md cursor-pointer',
            'focus-within:outline-black/50 focus-within:bg-primary-main/5',
            props.startIcon ? 'pl-9' : '',
            props.endIcon ? 'pr-9' : '',
            props.errorMessage ? ' outline-red-500 bg-red-100' : '',
          )}
          onClick={() => setIsOpen(!isOpen)}
        >
          {props.startIcon && <span className="absolute left-3 flex items-center pr-3">{props.startIcon}</span>}
          <span className="flex-grow text-gray-700">
            {selected ? props.options.find((opt) => opt.value === selected)?.label : props.placeholder}
          </span>
          {props.endIcon && <span className="absolute right-3 flex items-center pl-3">{props.endIcon}</span>}
        </div>
        {isOpen && (
          <div className="absolute mt-1 w-full bg-white border border-gray-300 rounded-md shadow-md z-10">
            {props.options.map((option) => (
              <div
                key={option.value}
                className="px-3 py-2 hover:bg-gray-200 cursor-pointer"
                onClick={() => handleSelect(option)}
              >
                {option.label}
              </div>
            ))}
          </div>
        )}
      </div>
      {(props.errorMessage || props.helperText) && (
        <p className={twMerge('text-xs mt-1', props.errorMessage ? 'text-red-500' : 'text-gray-500')}>
          {props.errorMessage || props.helperText}
        </p>
      )}
    </div>
  );
}

interface IProps {
  id: string;
  label?: string;
  required?: boolean;
  placeholder?: string;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  errorMessage?: string;
  helperText?: string;
  name?: string;
  value?: string;
  options: { label: string; value: string }[];
  onChange?: (value: string) => void;
}
