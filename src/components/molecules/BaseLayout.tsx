import { ReactNode } from 'react';
import { PAGE_TYPE_ENUM } from '../../enums/page-type-enum';
import { Sidebar } from './Sidebar';

export function BaseLayout(props: IProps) {
  switch (props.type) {
    case PAGE_TYPE_ENUM.FULL_PAGE:
      return <>{props.children}</>;
    case PAGE_TYPE_ENUM.PRIMARY:
      return (
        <div className="flex">
          <Sidebar />
          <div className="flex-1 ">{props.children}</div>
        </div>
      );
    default:
      return <></>;
  }
}

interface IProps {
  type: PAGE_TYPE_ENUM;
  children: ReactNode;
}
