import { twMerge } from 'tailwind-merge';
import { ChangeEventHandler, FocusEventHandler, HTMLInputTypeAttribute, ReactNode } from 'react';

export function InputText(props: IProps) {
  return (
    <div className="grid gap-1">
      {props.label && (
        <label className="text-sm capitalize" htmlFor={props.id}>
          {props.label} {props.required && <span className="text-red-700">*</span>}
        </label>
      )}
      <div className={twMerge('relative flex items-center bg-white')}>
        {props.startIcon && <span className="absolute left-3 flex items-center pr-3">{props.startIcon}</span>}
        <input
          onBlur={props.onBlur}
          onChange={props.onChange}
          value={props.value}
          name={props.name}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && props.onEnter) {
              props.onEnter();
            }
          }}
          type={props.type}
          placeholder={props.placeholder || 'placeholder'}
          className={twMerge(
            'py-2 px-3 w-full duration-300 bg-white outline-2 rounded-md',
            'focus:outline-black/50 focus:bg-primary-main/5',
            props.startIcon ? 'pl-9' : '',
            props.endIcon ? 'pr-9' : '',
            props.errorMessage ? ' outline-red-500 bg-red-100' : '',
          )}
          id={props.id}
        />
        {props.endIcon && <span className="absolute right-3 flex items-center pl-3">{props.endIcon}</span>}
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
  type?: HTMLInputTypeAttribute;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  onEnter?: () => void;
  errorMessage?: any;
  helperText?: string;
  name?: string;
  value?: string;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}
