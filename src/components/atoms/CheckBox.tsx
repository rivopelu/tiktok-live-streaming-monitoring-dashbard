import { twMerge } from 'tailwind-merge';

export function CheckBox({ label, checked = false, onChange }: IProps) {
  const uniqueId = `checkbox-${Math.random().toString(36).substring(2, 9)}`;

  return (
    <div className="inline-flex items-center">
      <input
        type="checkbox"
        id={uniqueId}
        checked={checked}
        onChange={(e) => onChange?.(e.target.checked)}
        className={twMerge('peer hidden')}
      />
      <label htmlFor={uniqueId} className="flex items-center cursor-pointer relative">
        <div
          className={twMerge(
            'h-5 w-5 rounded border border-slate-300 flex items-center justify-center',
            'shadow hover:shadow-md transition-all',
            checked ? 'bg-slate-800 border-slate-800' : 'bg-white',
          )}
        >
          {checked && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3.5 w-3.5 text-white"
              viewBox="0 0 20 20"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="1"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          )}
        </div>
        {label && <span className="cursor-pointer ml-2 text-slate-600 text-sm">{label}</span>}
      </label>
    </div>
  );
}

interface IProps {
  label?: string;
  checked?: boolean;
  onChange?: (value: boolean) => void;
}
