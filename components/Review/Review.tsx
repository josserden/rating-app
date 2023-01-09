import { UserCircleIcon } from '@heroicons/react/24/outline';
import { formatDate } from 'helpers/formatDate';
import React from 'react';
import { Paragraph, Rating } from '..';
import { ReviewProps } from './Review.props';

export const Review = ({ review }: ReviewProps): JSX.Element => {
  const { _id, name, title, createdAt, rating, description } = review;

  return (
    <>
      <div
        key={_id}
        className="grid grid-cols-1 items-center gap-2 md:grid-flow-col md:grid-cols-[auto_auto_1fr_auto] "
      >
        <UserCircleIcon className="h-8 w-8 text-blue-600" />

        <h4 className=" text-sm font-bold">{name}</h4>
        <Paragraph size="md">{title}</Paragraph>
        <Paragraph size="md">{formatDate(createdAt)}</Paragraph>
        <Rating rating={rating} className="flex" />
      </div>

      <Paragraph size="md">{description}</Paragraph>

      <span className="border-b"></span>
    </>
  );
};
