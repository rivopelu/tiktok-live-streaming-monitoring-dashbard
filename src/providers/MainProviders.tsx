import React from 'react';
import { PAGE_TYPE_ENUM } from '../enums/page-type-enum.ts';

export function MainProviders(props: IProps) {
  return <>{props.children}</>;
}

interface IProps {
  children: React.ReactNode;
  type: PAGE_TYPE_ENUM;
}
