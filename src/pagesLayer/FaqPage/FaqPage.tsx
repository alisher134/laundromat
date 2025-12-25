'use client';

import { FaqAccordion } from '@/shared/ui/faq-accordion';
import { Pagination } from '@/shared/ui/Pagination';
import { Category } from '@/shared/ui/category';
import { useKeenSlider } from 'keen-slider/react';

import { useMemo, useState } from 'react';
import 'keen-slider/keen-slider.min.css';
import { ALL_FAQ_SECTIONS } from '@/pagesLayer/FaqPage/config';

export const FaqPage = () => {
  const [activeCategory, setActiveCategory] = useState<string>('washing');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages] = useState<number>(10);

  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: false,
    mode: 'free-snap',
    rtl: false,
    slides: {
      perView: 'auto',
      spacing: 6,
    },
  });

  const categories = useMemo(
    () => [
      { key: 'washing', label: 'General' },
      { key: 'drying', label: 'Prices and payment' },
      { key: 'stainRemoval', label: 'Location' },
      { key: 'fabricCare', label: 'Safety and convenience' },
    ],
    [],
  );

  const handleCategoryClick = (key: string) => {
    setActiveCategory(key);
  };

  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="mx-container-mobile md:mx-container-mobile pt-[124px] md:pt-[136px] xl:pt-[147px] 2xl:pt-[208px]">
      <h1 className="paragraph-heading-md text-text mb-[56px] text-left uppercase md:text-center md:text-[64px] md:leading-[110%] xl:text-[45px] 2xl:text-[64px]">
        Faq
      </h1>

      <div className="md:flex md:flex-col md:items-center md:justify-center">
        <div className="-mx-container-mobile mb-[56px] md:hidden">
          <div className="keen-slider pl-container-mobile" ref={sliderRef}>
            {categories.map(({ key, label }) => (
              <Category
                activeCategory={activeCategory}
                category={key}
                className="keen-slider__slide"
                key={key}
                label={label}
                onClick={() => handleCategoryClick(key)}
              />
            ))}
          </div>
        </div>

        <div className="mb-[56px] hidden gap-2 md:flex">
          {categories.map(({ key, label }) => (
            <Category
              activeCategory={activeCategory}
              category={key}
              className="hidden text-sm md:block 2xl:text-lg"
              key={key}
              label={label}
              onClick={() => handleCategoryClick(key)}
            />
          ))}
        </div>
      </div>

      <FaqAccordion
        className="mx-auto mb-[56px] md:mb-[86px] xl:mb-[86px] xl:w-[1067px] 2xl:mb-[116px] 2xl:w-[1091px]"
        isBig
        sections={ALL_FAQ_SECTIONS}
      />

      <div className="flex flex-col items-center gap-6">
        <Pagination
          className="hidden md:flex"
          current={currentPage}
          onChange={onPageChange}
          siblingCount={3}
          total={totalPages}
        />

        <button className="border-text/20 text-text flex h-[70px] w-[220px] items-center justify-center rounded-[8px] border text-sm leading-[132%] font-normal tracking-[-0.01em] 2xl:h-[83px] 2xl:w-[278px]">
          Load more
        </button>
      </div>
    </div>
  );
};
