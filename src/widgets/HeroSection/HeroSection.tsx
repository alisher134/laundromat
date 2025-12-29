import Image from 'next/image';

import ArrowRightIcon from '@/shared/assets/icons/chevron-right-icon.svg';
import { Link } from '@/shared/config/i18n';
import { cn } from '@/shared/libs/cn';
import { useTranslations, useLocale } from 'next-intl';

interface HeroSectionProps {
  isLoaded?: boolean;
}

export const HeroSection = ({ isLoaded = false }: HeroSectionProps) => {
  const t = useTranslations('home');
  const locale = useLocale();
  const isGreek = locale === 'gr';

  return (
    <section className={cn('sticky top-0 h-screen w-full overflow-hidden', isLoaded && 'hero-entrance')}>
      <Image
        alt="Laundromat hero background"
        className="object-cover object-top"
        fill
        priority
        src="/images/hero-background.png"
      />

      <div className="p-container-mobile xl:p-container-tablet 2xl:p-container-desktop relative z-10 flex h-full items-end pb-[60px] text-white md:pb-[35px] xl:pb-[38px] 2xl:pb-[46px]">
        <div className="flex flex-col gap-8 md:w-full md:flex-row md:items-end md:justify-between">
          <h1
            className={cn(
              'text-left text-5xl leading-[106%] font-normal tracking-[-0.04em] md:text-[66px] md:leading-[96%] md:tracking-[-0.05em] xl:text-[96px] xl:leading-[96%] xl:tracking-[-0.05em] 2xl:text-[136px]',
              isGreek
                ? 'max-w-[420px] md:max-w-[700px] xl:max-w-[1000px] 2xl:max-w-[1400px]'
                : 'max-w-[317px] md:max-w-[550px] xl:max-w-[800px] 2xl:max-w-[1126px]',
              isLoaded && 'hero-fade hero-fade-1',
            )}
          >
            {t('hero.title')}
          </h1>

          <div
            className={cn(
              'rounded-card relative h-[83px] w-full max-w-[187px] overflow-hidden bg-[#F6FBFD] md:h-[147px] md:max-w-[157px] xl:h-[147px] xl:max-w-[210px] 2xl:h-[206px] 2xl:max-w-[294px]',
              isLoaded && 'hero-fade hero-fade-2',
            )}
          >
            <Image alt="Map preview" className="md:hidden" fill sizes="187px" src="/images/mobile-map-preview.png" />
            <Image
              alt="Map preview"
              className="hidden object-contain md:block"
              fill
              sizes="(max-width: 1280px) 157px, (max-width: 1536px) 210px, 294px"
              src="/images/map-preview.png"
            />
            <Link
              aria-label="View our location on map"
              className="focus-brand rounded-card relative z-10 mt-auto flex h-full w-full items-end justify-between px-[10px] pb-[8px] md:px-[14px] md:pb-[10px]"
              href="/location"
            >
              <p className="text-brand paragraph-sm-default md:font-medium 2xl:text-lg">{t('hero.locations')}</p>
              <span className="bg-brand flex size-[18px] items-center justify-center rounded-full 2xl:size-[22px]">
                <ArrowRightIcon aria-hidden="true" className="size-[6px] text-white 2xl:size-[7px]" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
