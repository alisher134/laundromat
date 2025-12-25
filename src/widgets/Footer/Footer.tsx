'use client';

import { LanguageSwitcher } from '@/features/language-switcher';
import { FOOTER_VISIBLE_ROUTES, isRouteInList } from '@/shared/config/navigation';
import { CONTACTS } from '@/shared/constants/contacts';
import { Link } from '@/shared/config/i18n';
import ArrowRightIcon from '@/shared/assets/icons/arrow-right-icon.svg';
import { useTranslations } from 'next-intl';
import { usePathname } from '@/shared/config/i18n';
import { PATHS } from '@/shared/constants/paths';
import { FooterNav } from './FooterNav';

export const Footer = () => {
  const t = useTranslations('common.footer');
  const pathname = usePathname();

  const shouldShowFooter = isRouteInList(pathname, FOOTER_VISIBLE_ROUTES);

  if (!shouldShowFooter) {
    return null;
  }

  return (
    <footer className="xl:mx-container-tablet xl:mb-container-tablet 2xl:mx-container-desktop 2xl:mb-container-desktop mx-[6px] mt-[120px] mb-[6px] md:mt-[164px] xl:mt-[200px] 2xl:mt-[256px]">
      <div className="bg-brand px-container-mobile pb-container-mobile xl:px-container-tablet relative overflow-hidden rounded-[20px] pt-9 xl:py-[34px]">
        <div className="mb-[32px] flex items-start justify-between xl:mb-[83px] 2xl:mb-[180px]">
          <address className="flex flex-col items-start gap-[6px] not-italic xl:gap-[8px] 2xl:gap-[10px]">
            <a
              className="text-[36px] leading-[136%] font-normal tracking-[-0.04em] text-white md:text-[45px] xl:text-[64px] xl:leading-[110%] 2xl:text-[64px]"
              href={CONTACTS.phoneLink}
            >
              {CONTACTS.phone}
            </a>
            <a
              className="text-[21px] leading-[136%] font-normal tracking-[-0.02em] text-white underline xl:text-[24px] 2xl:text-[36px]"
              href={CONTACTS.emailLink}
            >
              {CONTACTS.email}
            </a>
          </address>

          <FooterNav variant="desktop" />

          <div className="hidden md:block">
            <LanguageSwitcher variant="footer" />
          </div>
        </div>

        <FooterNav variant="mobile" />

        <div className="mb-[29px] block md:hidden">
          <LanguageSwitcher variant="footer" />
        </div>

        <form
          className="rounded-card flex items-center justify-between border border-white/20 py-[10px] pr-[10px] pl-[21px] md:w-[316px] xl:w-[332px] 2xl:w-[467px] 2xl:py-[14px] 2xl:pr-[14px] 2xl:pl-[26px]"
          role="search"
        >
          <label className="sr-only" htmlFor="newsletter-email">
            {t('subscribePlaceholder')}
          </label>
          <input
            className="paragraph-sm-default w-full text-white outline-none xl:text-base 2xl:text-lg"
            id="newsletter-email"
            placeholder={t('subscribePlaceholder')}
            type="email"
          />

          <button
            className="flex-center rounded-badge focus-brand h-[34px] w-[34px] bg-white 2xl:h-[48px] 2xl:w-[48px]"
            type="submit"
          >
            <ArrowRightIcon aria-hidden="true" className="text-brand h-[7px] w-[7px]" />
          </button>
        </form>
        <span aria-hidden className="footer-circle-1" />
        <span aria-hidden className="footer-circle-2" />
      </div>

      <div className="mx-container-mobile bg-brand-light/71 xl:px-container-tablet rounded-b-[16px] px-4 pt-6 pb-5 xl:pt-[60px] xl:pb-[20px] 2xl:mx-[40px]">
        <Link
          className="mb-5 inline-block text-[12px] leading-[132%] font-normal tracking-[-0.01em] text-white/60 md:hidden"
          href={PATHS.privacyPolicy}
        >
          {t('privacyPolicy')}
        </Link>

        <div className="flex items-center justify-between">
          <p className="max-w-[120px] text-[12px] leading-[132%] font-normal tracking-[-0.01em] text-white/60 md:max-w-full 2xl:text-lg">
            {t('copyright')}
          </p>

          <Link
            className="hidden text-[12px] leading-[132%] font-normal tracking-[-0.01em] text-white/60 md:inline-block 2xl:text-lg"
            href={PATHS.privacyPolicy}
          >
            {t('privacyPolicy')}
          </Link>

          <p className="w-[77px] text-[12px] leading-[132%] font-normal tracking-[-0.01em] text-white/60 md:w-fit 2xl:text-lg">
            {t('websiteBy')} <span className="font-medium text-white">AVA Digital</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
