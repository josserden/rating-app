import {
  AcademicCapIcon,
  CloudIcon,
  BookOpenIcon,
  InboxIcon,
} from '@heroicons/react/24/solid';
import { FirstLevelMenu } from 'interfaces/menu.interface';
import { TopLevelCategory } from 'interfaces/course.interface';

export const firstLevelMenu: FirstLevelMenu[] = [
  {
    route: 'courses',
    name: 'Курсы',
    icon: <AcademicCapIcon />,
    id: TopLevelCategory.Courses,
  },
  {
    route: 'services',
    name: 'Сервисы',
    icon: <CloudIcon />,
    id: TopLevelCategory.Services,
  },
  {
    route: 'books',
    name: 'Книги',
    icon: <BookOpenIcon />,
    id: TopLevelCategory.Books,
  },
  {
    route: 'products',
    name: 'Продукты',
    icon: <InboxIcon />,
    id: TopLevelCategory.Products,
  },
];
