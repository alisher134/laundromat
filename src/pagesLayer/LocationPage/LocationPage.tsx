'use client';

import { LocationCard } from './LocationCard';
import { useState } from 'react';
import { SliderButtons } from '@/shared/ui/slider-buttons';
import { useSlider } from '@/shared/hooks/useSlider';

import { useTranslations } from 'next-intl';

import { LOCATION_KEYS } from '@/pagesLayer/LocationPage/config';
import { GoogleLocationMap } from '@/pagesLayer/LocationPage/GoogleLocationMap';

export const LocationPage = () => {
  const t = useTranslations('location');
  const [locationId, setLocationId] = useState<number | null>(null);

  const slider = useSlider({
    slides: {
      perView: 'auto',
      spacing: 8,
    },
  });

  const onClickLocation = (locationId: number) => {
    setLocationId(locationId);
  };

  const locations = LOCATION_KEYS.map((key, index) => ({
    id: index + 1,
    title: t(`items.${key}.address`),
    phone: t(`items.${key}.phone`),
    storeHours: t(`items.${key}.hours`),
  }));

  return (
    <div className="mx-4 pt-[124px] md:mx-4 md:pt-[136px] xl:pt-[147px] 2xl:pt-[208px]">
      <h1 className="paragraph-heading-md text-text mb-[33px] max-w-[328px] md:max-w-[576px] md:text-[45px] md:leading-[110%] xl:max-w-[463px] xl:text-[45px] 2xl:max-w-[501px] 2xl:text-[64px]">
        {t.rich('title', {
          span: (chunks) => <span className="text-brand">{chunks}</span>,
        })}
      </h1>

      <div className="flex flex-col gap-[6px] md:flex-row md:gap-6">
        {/* <LocationMap activeLocationId={locationId} onLocationSelect={onClickLocation} /> */}
        <GoogleLocationMap activeLocationId={locationId} onLocationSelect={onClickLocation} />
        <div className="custom-scrollbar hidden h-[409px] w-full scroll-m-3 overflow-y-auto md:order-1 md:block md:h-[409px] md:w-[360px] md:shrink-0 md:pr-2 xl:h-[474px] xl:w-[425px] 2xl:h-[784px] 2xl:w-[605px] 2xl:pr-3">
          <div className="flex flex-col gap-[6px]">
            {locations.map((locationItem) => (
              <LocationCard
                key={locationItem.id}
                locationId={locationId}
                locationItem={locationItem}
                onClickLocation={onClickLocation}
              />
            ))}
          </div>
        </div>

        <div className="block md:hidden">
          <div className="keen-slider" ref={slider.sliderRef}>
            {locations.map((locationItem) => (
              <LocationCard
                className="keen-slider__slide"
                key={locationItem.id}
                locationId={locationId}
                locationItem={locationItem}
                onClickLocation={onClickLocation}
              />
            ))}
          </div>

          <div className="flex-center mt-6">
            <SliderButtons className="md:hidden" {...slider} />
          </div>
        </div>
      </div>
    </div>
  );
};
