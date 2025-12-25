'use client';

import { useSlider } from '@/shared/hooks/useSlider';
import Image from 'next/image';

import CircleRightArrowIcon from '@/shared/assets/icons/circle-right-arrow-icon.svg';
import StarsIcon from '@/shared/assets/icons/stars-icon.svg';
import { ActionTile } from '@/shared/ui/action-tile';
import { SliderButtons } from '@/shared/ui/slider-buttons';
import { REVIEWS_DATA } from '@/shared/data';
import { ReviewSlide } from './ReviewSlide';
import { ReviewCard } from './ReviewCard';
import 'keen-slider/keen-slider.min.css';
import { useTranslations } from 'next-intl';

export const ReviewsSection = () => {
  const t = useTranslations('home.reviews');
  const slider = useSlider({
    slides: { perView: 'auto', spacing: 8, origin: 0 },
  });

  const reviews = REVIEWS_DATA.map((item) => ({
    ...item,
    name: t(`items.${item.key}.name`),
    review: t(`items.${item.key}.description`),
  }));

  return (
    <section className="container-responsive section-spacing-top-md pb-[52px] xl:flex xl:items-start xl:justify-between">
      <div className="w-full xl:w-auto xl:min-w-[424px] 2xl:max-w-[596px] 2xl:min-w-[596px]">
        <h2 className="heading-section w-full md:max-w-[300px] xl:max-w-[300px] 2xl:max-w-[396px]">
          {t.rich('title', {
            span: (chunks) => <span className="text-brand">{chunks}</span>,
          })}
        </h2>

        <div className="mt-[46px] mb-[246px] hidden xl:block 2xl:mt-[56px] 2xl:mb-[353px]">
          <ActionTile href="/" icon={CircleRightArrowIcon} title={t('allReviews')} />
        </div>

        <div className="hidden min-h-[72px] w-fit min-w-[194px] items-center justify-start gap-[10px] rounded-[14px] bg-white py-[12px] pr-[14px] pl-[10px] md:min-h-[94px] md:min-w-[240px] md:gap-[14px] xl:flex">
          <Image
            alt="Google"
            className="h-[55px] w-[53px] md:h-[78px] md:w-[81px] xl:h-[78px] xl:w-[81px] 2xl:h-[99px] 2xl:w-[94px]"
            height={70}
            src="/images/google-logo.png"
            width={68}
          />

          <div>
            <StarsIcon
              aria-hidden="true"
              className="text-brand mb-[6px] h-[8px] w-[15px] xl:mb-[17px] xl:h-[11px] xl:w-[20px] 2xl:mb-[17px] 2xl:h-[13px] 2xl:w-[24px]"
            />
            <h4 className="text-text font-noral mb-[2px] text-sm leading-[132%] tracking-[-0.01em] xl:mb-1 2xl:mb-1 2xl:text-base">
              {t('ratingGoogle')}
            </h4>
            <p className="paragraph-body-xs text-text/60 xl:text-xs 2xl:text-sm">
              {t.rich('ratingGoogleDescription', {
                span: (chunks) => <span className="text-brand">{chunks}</span>,
              })}
            </p>
          </div>
        </div>
      </div>

      <div className="my-8 flex items-center justify-between gap-4">
        <div className="flex min-h-[72px] w-fit min-w-[194px] items-center justify-start gap-[10px] rounded-[14px] bg-white py-[12px] pr-[14px] pl-[10px] md:min-h-[94px] md:min-w-[240px] md:gap-[14px] lg:hidden">
          <Image alt="Google" height={55} sizes="(max-width: 768px) 78px, 81px" src="/images/google-logo.png" width={53} />

          <div>
            <StarsIcon aria-hidden="true" className="text-brand mb-[6px] h-[8px] w-[15px]" />
            <h4 className="text-text mb-[2px] text-sm leading-[132%] font-normal tracking-[-0.01em]">
              {t('ratingGoogle')}
            </h4>
            <p className="paragraph-body-xs text-text/60 text-xs">
              {t.rich('ratingGoogleDescription', {
                span: (chunks) => <span className="text-brand">{chunks}</span>,
              })}
            </p>
          </div>
        </div>

        <SliderButtons className="md:hidden" {...slider} />
      </div>

      <div className="-mx-container-mobile xl:hidden">
        <div className="keen-slider pl-container-mobile" ref={slider.sliderRef}>
          {reviews.map((item) => (
            <ReviewSlide item={item} key={item.key} />
          ))}
        </div>
      </div>

      <div className="hidden xl:grid xl:grid-cols-1 xl:gap-4">
        {reviews.map((item) => (
          <ReviewCard item={item} key={item.key} />
        ))}
      </div>

      <ActionTile className="mt-9 xl:hidden" icon={CircleRightArrowIcon} size="small" title={t('allReviews')} />
    </section>
  );
};
