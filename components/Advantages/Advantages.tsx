import React from 'react';
import { AdvantagesProps } from './Advantages.props';
import { CheckIcon } from '@heroicons/react/24/outline';

export const Advantages = ({ advantages }: AdvantagesProps): JSX.Element => {
  return (
    <ul className="mt-7 grid grid-cols-1 gap-8">
      {advantages.map((advantage) => (
        <li
          key={advantage._id}
          className="grid grid-cols-[50px_1fr] gap-x-10 gap-y-3"
        >
          {advantage.title && (
            <>
              <span className=" flex h-10 w-10 items-center justify-center justify-self-center rounded-full  bg-green-100">
                <CheckIcon className="h-6 w-6 text-green-500" />
              </span>

              <h3 className="text-xl font-bold leading-7 text-gray-800">
                {advantage.title}
              </h3>

              <span className="justify-self-center border-r border-gray-300"></span>
            </>
          )}

          {advantage.description && (
            <p className="text-base font-light leading-7 text-gray-700">
              {advantage.description}
            </p>
          )}
        </li>
      ))}
    </ul>
  );
};
