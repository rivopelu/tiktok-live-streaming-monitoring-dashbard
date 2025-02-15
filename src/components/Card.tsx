import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

export function Card(props: IProps) {
  return <div className={'border-2 bg-white rounded-lg'}>{props.children}</div>;
}

export function CardBody(props: IProps) {
  return <div className={twMerge('p-4', props.className)}>{props.children}</div>;
}

interface IProps {
  children: ReactNode;
  className?: string;
}
