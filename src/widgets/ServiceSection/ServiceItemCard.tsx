'use client';

import { PATHS } from '@/shared/constants/paths';
import { cn } from '@/shared/libs/cn';
import { ActionTile } from '@/shared/ui/action-tile';
import CircleRightArrowIcon from '@/shared/assets/icons/circle-right-arrow-icon.svg';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

interface ServiceCardItem {
  key: string;
  title: string;
  description: string;
  image: string;
  price: number;
  duration: string;
}

interface ServiceItemCardProps {
  item: ServiceCardItem;
  isFirst?: boolean;
  isLast?: boolean;
  className?: string;
}

export const ServiceItemCard = ({ item, isFirst, isLast, className }: ServiceItemCardProps) => {
  const t = useTranslations('home.experience.card');

  return (
    <div className={cn('border-t-text/16 border-t', isLast && 'border-b-text/16 border-b', className)}>
      <div
        className={cn(
          'flex items-start justify-start lg:py-3 xl:py-4 2xl:py-4',
          isFirst && 'justify-between lg:pb-0 xl:pb-0 2xl:pb-0',
        )}
      >
        <div className="lg:min-w-[400px] xl:min-w-[558px] 2xl:min-w-[777px]">
          <h3 className="text-text mb-7 max-w-[290px] text-[45px] leading-[110%] font-normal tracking-[-0.04em] lg:mt-5 xl:mt-[27px] xl:mb-[75px] 2xl:mt-10 2xl:mb-10 2xl:mb-[75px] 2xl:text-[64px]">
            {item.title}
          </h3>

          <p className="text-text/80 mb-[46px] max-w-[326px] text-base leading-[132%] font-normal tracking-[-0.01em] 2xl:mb-[56px] 2xl:max-w-[455px] 2xl:text-[21px]">
            {item.description}
          </p>

          <ActionTile href={PATHS.services} icon={CircleRightArrowIcon} title={t('learnMore')} />

          {isFirst && (
            <div className="mt-[100px] flex items-stretch gap-7 lg:mt-[100px] xl:mt-[133px] xl:h-[77px] 2xl:mt-[200px] 2xl:h-[101px] 2xl:gap-[46px]">
              <div>
                <p className="price-label">{t('priceFrom')}</p>
                <p className="price-value">{item.price} $</p>
              </div>

              <div className="bg-text/16 w-px" />

              <div>
                <p className="price-label">{t('timeFrom')}</p>
                <p className="price-value">{item.duration}</p>
              </div>
            </div>
          )}
        </div>

        <div
          className={cn(
            'relative lg:h-[280px] lg:w-[350px] xl:h-[390px] xl:w-[475px] 2xl:h-[520px] 2xl:w-[720px]',
            isFirst && 'lg:h-[508px] lg:w-full xl:h-[580px] xl:w-full 2xl:h-[790px] 2xl:w-[1120px]',
          )}
        >
          <Image alt={`${item.title} service`} className="rounded-card object-cover" fill priority src={item.image} />
        </div>
      </div>
    </div>
  );
};
