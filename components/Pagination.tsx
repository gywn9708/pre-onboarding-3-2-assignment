import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

const USER_NUM = 15;
const PAGENATION = 5;

const PREV = 'prev';
const NEXT = 'next';

interface PaginationProps {
  totalItems: number;
}

export default function Pagination({ totalItems }: PaginationProps) {
  const router = useRouter();
  const { page } = router.query;
  const [index, setIndex] = useState(0);
  const pages = [1, 2, 3, 4, 5].map((item) => index * PAGENATION + item);
  const totalPage = Math.ceil(totalItems / USER_NUM);
  const isFirstIndex = index === 0;
  const isLastIndex = index === Math.floor(totalPage / PAGENATION);
  const currPage = page || '1';
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { name } = e.currentTarget;
    if (name === PREV) {
      setIndex((prev) => prev - 1);
    } else if (name === NEXT) {
      setIndex((prev) => prev + 1);
    }
  };

  return (
    <nav className="flex justify-center py-5">
      <ul className="inline-flex items-center -space-x-px">
        {!isFirstIndex && (
          <button
            className="px-3"
            name={PREV}
            type="button"
            onClick={handleClick}
          >
            <AiOutlineArrowLeft />
          </button>
        )}

        {pages.map((item) => {
          if (item <= totalPage) {
            return (
              <li key={item}>
                <Link
                  href={{
                    pathname: router.route,
                    query: {
                      ...router.query,
                      page: item,
                    },
                  }}
                  className={`${
                    item.toString() === currPage && 'bg-blue-200'
                  } py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
                >
                  {item}
                </Link>
              </li>
            );
          }
        })}
        {!isLastIndex && (
          <button
            className="ml-2 px-3"
            name={NEXT}
            type="button"
            onClick={handleClick}
          >
            <AiOutlineArrowRight />
          </button>
        )}
      </ul>
    </nav>
  );
}
