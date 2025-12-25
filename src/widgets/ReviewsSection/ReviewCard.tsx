'use client';

import { Link } from '@/shared/config/i18n';
import { cn } from '@/shared/libs/cn';
import PersonAddIcon from '@/shared/assets/icons/person-add-icon.svg';
import { PATHS } from '@/shared/constants/paths';
import { useTranslations } from 'next-intl';

interface ReviewCardItem {
  key: string;
  name: string;
  review: string;
  order: number;
}

interface ReviewCardProps {
  item: ReviewCardItem;
  className?: string;
}

export const ReviewCard = ({ item, className }: ReviewCardProps) => {
  const t = useTranslations('home.reviews');

  return (
    <div
      className={cn(
        'relative flex min-w-[648px] items-start justify-between rounded-[16px] bg-white/80 px-[28px] pt-[20px] pb-[32px] backdrop-blur-[21px] backdrop-filter 2xl:min-w-[915px] 2xl:px-9',
        className,
      )}
    >
      <div className="flex h-full flex-1 flex-col">
        <p className="text-text text-2xl leading-[136%] font-normal tracking-[-0.02em] 2xl:text-[32px]">0{item.order}.</p>

        <span className="bg-brand-bg/10 mt-auto flex size-[69px] items-center justify-center rounded-[14px] 2xl:size-[96px]">
          <PersonAddIcon aria-hidden="true" className="text-brand size-[32px] 2xl:size-[44px]" />
        </span>
      </div>

      <div className="border-text/16 border-l pl-[32px] 2xl:pl-[46px]">
        <h4 className="text-text mb-[75px] text-2xl leading-[136%] font-normal tracking-[-0.02em] 2xl:mb-[114px] 2xl:text-[32px]">
          {item.name}
        </h4>

        <p className="text-text mt-5 mb-[26px] max-w-[348px] text-sm leading-[146%] font-normal tracking-[-0.01em] 2xl:mb-9 2xl:max-w-[489px] 2xl:text-lg">
          {item.review}
        </p>

        <Link className="link-brand-lg" href={PATHS.reviews}>
          {t('readMore')}
        </Link>
      </div>

      <span className="bg-brand absolute top-[12px] right-[12px] h-[6px] w-[6px] rounded-full" />
    </div>
  );
};
