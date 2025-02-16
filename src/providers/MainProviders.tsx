import { ReactNode } from 'react';
import { PAGE_TYPE_ENUM } from '../enums/page-type-enum.ts';
import { BaseLayout } from '../components/molecules/BaseLayout.tsx';

export function MainProviders(props: IProps) {
  return <BaseLayout type={props.type}>{props.children}</BaseLayout>;
}

interface IProps {
  children: ReactNode;
  type: PAGE_TYPE_ENUM;
}
