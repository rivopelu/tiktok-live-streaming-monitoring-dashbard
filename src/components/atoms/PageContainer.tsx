import { ReactNode } from 'react';

export function PageContainer(props: IProps) {
  return <div className="max-w-7xl w-full mx-auto">{props.children}</div>;
}

interface IProps {
  children: ReactNode;
}
