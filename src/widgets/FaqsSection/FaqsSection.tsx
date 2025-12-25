'use client';

import { ActionTile } from '@/shared/ui/action-tile';
import { FaqAccordion } from '@/shared/ui/faq-accordion';
import CircleRightArrowIcon from '@/shared/assets/icons/circle-right-arrow-icon.svg';
import { useTranslations } from 'next-intl';
import { FAQ_KEYS } from '@/widgets/FaqsSection/config';

export const FaqsSection = () => {
  const t = useTranslations('faq');

  const sections = FAQ_KEYS.map((key, index) => ({
    position: index + 1,
    title: t(`questions.${key}.question`),
    content: t(`questions.${key}.answer`),
  }));

  return (
    <section className="container-responsive section-spacing-top-sm">
      <h2 className="heading-section mb-8">{t('title')}</h2>

      <div className="bg-text/16 hidden h-px w-full md:mb-4 md:block xl:mb-6 2xl:mb-10" />

      <div className="w-full xl:flex xl:flex-row-reverse xl:items-start xl:justify-between">
        <FaqAccordion sections={sections} />

        <ActionTile href="/faq" icon={CircleRightArrowIcon} size="small" title={t('allQuestions')} />
      </div>
    </section>
  );
};
