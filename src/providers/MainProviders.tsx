import { ReactNode } from 'react';
import { PAGE_TYPE_ENUM } from '../enums/page-type-enum.ts';

export function MainProviders(props: IProps) {
  return <>{props.children}</>;
}

interface IProps {
  children: ReactNode;
  type: PAGE_TYPE_ENUM;
}
