import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';
import { Skeleton } from '../atoms/Skeleton.tsx';
import { IResPaginatedData } from '../../models/response/IResModel.ts';
import { PaginationGroup } from './PaginationGroup.tsx';

export function Table(props: IProps) {
  function tableRow(i: number, item: any, loading?: boolean) {
    return (
      <>
        {props.columns.map((column, idx) => (
          <td
            className={twMerge(
              'text-start  bg-white py-5 ',
              `${i !== props.data.length - 1 ? 'border-b' : ' '}`,
              `${idx == 0 ? 'px-4' : ' '}`,
              `${i % 2 === 0 ? 'bg-primary-main/5' : 'bg-white'}`,
            )}
            key={idx}
          >
            {loading ? <Skeleton className={'h-4'} /> : column.content && column.content(item)}
          </td>
        ))}
      </>
    );
  }

  return (
    <div>
      <div>
        <PaginationGroup />
      </div>

      <div className={'border rounded-md overflow-hidden'}>
        <table className="table-auto  w-full bg-white ">
          <thead className={'border-b '}>
            <tr>
              {props.columns.map((column, i) => (
                <th key={i} className={twMerge('text-start  py-2 uppercase', i == 0 ? 'px-4' : ' ')}>
                  {column?.title || ''}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {props.loading
              ? Array.from({ length: 10 }).map((item, i) => <tr key={i}>{tableRow(i, item, true)}</tr>)
              : props.data.map((item: any, i) => <tr key={i}>{tableRow(i, item)}</tr>)}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export interface ITableColumns<T> {
  title?: string;
  content: (e: T) => ReactNode;
}

interface IProps {
  columns: ITableColumns<any>[];
  data: any[];
  loading?: boolean;
  paginatedData?: IResPaginatedData;
}
