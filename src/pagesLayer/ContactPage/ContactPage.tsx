'use client';

import { useTranslations } from 'next-intl';
import { ContactForm } from './ui/ContactForm';
import { ContactInfo } from './ui/ContactInfo';

export const ContactPage = () => {
  const t = useTranslations('contact');

  return (
    <section className="relative min-h-screen w-full">
      <div className="relative">
        <div className="absolute inset-x-0 -top-[141px] bottom-0 -z-10 bg-[url(/images/contact-background.png)] bg-cover bg-left md:bg-center" />

        <div className="relative z-10">
          <h1 className="hidden leading-[110%] font-normal tracking-[-0.04em] text-white md:ml-4 md:block md:pt-[136px] md:text-[45px] xl:ml-6 xl:pt-[147px] 2xl:ml-9 2xl:pt-[208px] 2xl:text-[64px]">
            {t('title')}
          </h1>

          <ContactInfo />
        </div>
      </div>

      <div className="container-responsive pt-[64px] md:pt-[86px] xl:flex xl:items-start xl:gap-[86px] xl:pt-[112px] 2xl:gap-[231px] 2xl:pt-[86px]">
        <h2 className="paragraph-heading-md text-text mb-9 max-w-[262px] md:mb-[46px] md:max-w-[360px] md:text-[45px] md:leading-[110%] xl:max-w-[360px] xl:text-[45px] 2xl:mb-[56px] 2xl:max-w-[546px] 2xl:text-[64px]">
          {t.rich('subTitle', {
            span: (chunks) => <span className="text-brand">{chunks}</span>,
          })}
        </h2>

        <ContactForm />
      </div>
    </section>
  );
};
