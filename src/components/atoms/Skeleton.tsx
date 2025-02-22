import { twMerge } from 'tailwind-merge';

export function Skeleton(props: IProps) {
  return <div className={twMerge('h-2.5 bg-gray-200 rounded-full w-48 ', props.className)}></div>;
}

interface IProps {
  className?: string;
}
