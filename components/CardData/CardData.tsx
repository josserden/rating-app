import { StarIcon } from '@heroicons/react/24/solid';
import { convertPrice } from 'helpers/convertPrice';
import { Card } from '..';
import { CardDataProps } from './CardData.props';

export const CardData = ({
  count,
  juniorSalary,
  middleSalary,
  seniorSalary,
}: CardDataProps): JSX.Element => {
  return (
    <div className="grid-col mt-5 grid gap-7 lg:grid-cols-[180px_1fr] xl:grid-cols-[260px_1fr]">
      <Card className="flex flex-col items-center gap-3">
        <span className="font-light text-gray-700">Всего вакансий</span>
        <span className="text-4xl font-bold leading-[48px] text-blue-700">
          {count}
        </span>
      </Card>

      <Card className="grid divide-y md:grid-cols-3 md:divide-x md:divide-y-0 md:px-0">
        <div className="flex flex-col items-center px-6 py-6 md:gap-3 md:py-0">
          <span className="font-light text-gray-700">Начальный</span>
          <span className=" text-[26px] font-bold leading-9 text-gray-800">
            {convertPrice(juniorSalary)}
          </span>
          <div className="flex justify-center gap-1 text-gray-400">
            <StarIcon className="h-5 w-5 fill-amber-500" />
            <StarIcon className="h-5 w-5 fill-current" />
            <StarIcon className="h-5 w-5 fill-current" />
          </div>
        </div>

        <div className="flex flex-col items-center px-6 py-6 md:gap-3 md:py-0">
          <span className="font-light text-gray-700">Средний</span>
          <span className=" text-[26px] font-bold leading-9 text-gray-800">
            {convertPrice(middleSalary)}
          </span>

          <div className="flex justify-center gap-1 text-gray-400">
            <StarIcon className="h-5 w-5 fill-amber-500" />
            <StarIcon className="h-5 w-5 fill-amber-500" />
            <StarIcon className="h-5 w-5 fill-current" />
          </div>
        </div>

        <div className="flex flex-col items-center px-6 py-6 md:gap-3 md:py-0">
          <span className="font-light text-gray-700">Профессионал</span>
          <span className=" text-[26px] font-bold leading-9 text-gray-800">
            {convertPrice(seniorSalary)}
          </span>

          <div className="flex justify-center gap-1 text-gray-400">
            <StarIcon className="h-5 w-5 fill-amber-500" />
            <StarIcon className="h-5 w-5 fill-amber-500" />
            <StarIcon className="h-5 w-5 fill-amber-500" />
          </div>
        </div>
      </Card>
    </div>
  );
};
