import { ReactNode } from 'react';
import { BaseLayout } from '../components/molecules/BaseLayout.tsx';
import { PAGE_TYPE_ENUM } from '../enums/page-type-enum.ts';

export function MainProviders(props: IProps) {
  return <BaseLayout type={props.type}>{props.children}</BaseLayout>;
}

interface IProps {
  children: ReactNode;
  type: PAGE_TYPE_ENUM;
}
