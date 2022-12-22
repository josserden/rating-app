import axios from 'axios';
import classNames from 'classnames';
import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Button, Input, Paragraph, Rating, TextArea, Notification } from '..';
import { IReviewForm, IReviewResponse } from './ReviewForm.interface';
import { ReviewFormProps } from './ReviewForm.props';

export const ReviewForm = ({
  productId,
  className,
  ...props
}: ReviewFormProps): JSX.Element => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IReviewForm>();
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const onSubmit = async (formData: IReviewForm) => {
    try {
      const { data } = await axios.post<IReviewResponse>(
        process.env.NEXT_PUBLIC_DOMAIN + '/api/review/create-demo',
        {
          ...formData,
          productId,
        }
      );

      if (data.message) {
        setIsSuccess(true);
        setIsError(false);

        reset();
      }
    } catch (error) {
      setIsSuccess(false);
      setIsError(true);
    }
  };

  return (
    <>
      <form
        className={classNames(className)}
        onSubmit={handleSubmit(onSubmit)}
        {...props}
      >
        <div className="mb-7 grid grid-cols-1 items-center gap-7 md:grid-cols-2 lg:grid-cols-[auto_auto_1fr]">
          <Input
            {...register('name', {
              required: { value: true, message: 'Заполните имя' },
            })}
            placeholder="Name"
            error={errors.name}
          />

          <Input
            {...register('title', {
              required: { value: true, message: 'Заполните заголовок' },
            })}
            placeholder="Title"
            error={errors.title}
          />

          <div className="relative flex gap-2 lg:justify-self-end">
            <Paragraph size="md">Оценка</Paragraph>
            <Controller
              control={control}
              name="rating"
              rules={{ required: { value: true, message: 'Укажите рейтинг' } }}
              render={({ field }) => (
                <Rating
                  isEditable
                  rating={field.value}
                  setRating={field.onChange}
                  className="flex"
                  ref={field.ref}
                  error={errors.rating}
                />
              )}
            />
          </div>
        </div>

        <TextArea
          {...register('description', {
            required: { value: true, message: 'Заполните ваш отзыв' },
          })}
          placeholder="Enter your feedback"
          className="mb-5"
          error={errors.description}
        />

        <Button appearance="primary">Отправить</Button>
        <span className="ml-3 text-sm font-light text-gray-600">
          * Перед публикацией отзыв пройдет предварительную модерацию и проверку
        </span>
      </form>

      {isSuccess && (
        <Notification
          status="success"
          title="Success"
          message="Your review successfully added"
          onClose={() => {
            setIsSuccess(false);
          }}
        />
      )}

      {isError && (
        <Notification
          status="error"
          title="Error"
          message="Something went wrong"
          onClose={() => {
            setIsError(false);
          }}
        />
      )}
    </>
  );
};
