import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

export function Table(props: IProps) {
  return (
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
          {props.data.map((item: any, i) => (
            <tr key={i}>
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
                  {column.content && column.content(item)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
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
}
