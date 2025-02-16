import { ReactNode } from 'react';

export function ListItem(props: IProps) {
  return (
    <button className="list-item-sidebar p-4 w-full text-start cursor-pointer active:bg-primary-main/10 hover:bg-primary-main/30 duration-200 border-b">
      <div className="text flex items-center gap-2 text-2xl">
        {props.icon}
        <div>{props.label}</div>
      </div>
    </button>
  );
}

interface IProps {
  label: string;
  icon: ReactNode;
}
