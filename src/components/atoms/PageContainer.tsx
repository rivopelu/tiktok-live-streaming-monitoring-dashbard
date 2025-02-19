import { ReactNode } from 'react';

export function PageContainer(props: IProps) {
  return <div className="px-8 w-full mx-auto">{props.children}</div>;
}

interface IProps {
  children: ReactNode;
}
