import { InputSelect } from '../atoms/InputSelect.tsx';
import { useState } from 'react';
import { IResPaginatedData } from '../../models/response/IResModel.ts';
import { MdArrowBack, MdArrowDownward, MdArrowForward } from 'react-icons/md';
import { twMerge } from 'tailwind-merge';
import { IOnchangePaginationData } from '../../models/data/IOnchangePaginationData.ts';

export function PaginationGroup(props: IProps) {
  const [selectedSize, setSelectedSize] = useState(props?.paginatedData?.size || 5);
  const [currentPage, setCurrentPage] = useState(props?.paginatedData?.page || 0);
  const [pageCount] = useState(props?.paginatedData?.page_count || 5);

  function onChangeSize(value: number) {
    setSelectedSize(value);
    setCurrentPage(0);
    props?.onChange({ page: 0, size: value });
  }

  function onClickNumber(value: number) {
    setCurrentPage(value);
    props?.onChange({ page: value, size: selectedSize });
  }

  function onClickNext() {
    if (currentPage < pageCount - 1) {
      setCurrentPage(currentPage + 1);
      props?.onChange({ page: currentPage + 1, size: selectedSize });
    }
  }

  function onClickBack() {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
      props?.onChange({ page: currentPage - 1, size: selectedSize });
    }
  }

  return (
    <div className={'flex items-center justify-between '}>
      <div className={'w-20'}>
        <InputSelect
          id="size"
          required
          endIcon={<MdArrowDownward />}
          options={[
            { label: '5', value: '5' },
            { label: '10', value: '10' },
            { label: '30', value: '30' },
            { label: '50', value: '50' },
          ]}
          value={selectedSize.toString()}
          onChange={(value) => onChangeSize(parseInt(value))}
        />
      </div>
      <div>
        <div>
          <nav aria-label="Page navigation example">
            <ul className="flex items-center -space-x-px h-8 text-sm">
              <li onClick={onClickBack}>
                <div className="flex cursor-pointer items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700">
                  <MdArrowBack />
                </div>
              </li>
              {Array.from({ length: pageCount }).map((_, index) => (
                <li key={index} onClick={() => onClickNumber(index)}>
                  <div
                    className={twMerge(
                      `flex items-center cursor-pointer justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 `,
                      `${
                        index === currentPage
                          ? 'z-10 text-black   bg-primary-main/10 hover:bg-blue-100 hover:text-blue-700'
                          : ''
                      }`,
                    )}
                  >
                    {index + 1}
                  </div>
                </li>
              ))}
              <li onClick={onClickNext}>
                <div className="flex cursor-pointer items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700">
                  <MdArrowForward />
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

interface IProps {
  paginatedData?: IResPaginatedData;
  onChange: (page: IOnchangePaginationData) => void;
}
