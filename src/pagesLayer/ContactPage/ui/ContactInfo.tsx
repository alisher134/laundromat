import { useTranslations } from 'next-intl';

export const ContactInfo = () => {
  const t = useTranslations('contact.information');

  return (
    <div className="container-responsive pt-[382px] pb-4 md:pt-[476px] md:pb-[80px] xl:flex xl:items-start xl:gap-[271px] xl:pt-[281px] xl:pb-6 2xl:gap-[587px] 2xl:pt-[381px] 2xl:pb-[120px]">
      <div className="paragraph-sm-default mb-8 flex items-center gap-[11px] text-white md:max-w-[175px] md:text-base 2xl:max-w-[195px] 2xl:text-lg">
        {t('title')} <span className="size-1 rounded-full bg-white" />
      </div>

      <ul className="ml-auto flex flex-1 flex-col gap-1 md:grid md:max-w-[736px] md:grid-cols-2 md:gap-2 xl:max-w-[872px] 2xl:max-w-[1066px]">
        <li className="order-2 flex h-[71px] w-full flex-col justify-between rounded-[8px] bg-[#4B9FBD]/12 px-[14px] py-[12px] backdrop-blur-[60px] md:order-1 md:h-[139px] md:max-w-[364px] md:p-5 xl:max-w-[432px] 2xl:max-w-[529px] 2xl:px-[28px] 2xl:pt-6 2xl:pb-5">
          <p className="paragraph-xs-default text-left text-white/70 md:mb-8 md:text-base">{t('address')}</p>
          <p className="paragraph-sm-default ml-auto max-w-[159px] text-right text-white md:max-w-[233px] md:text-lg">
            Ethniki Palaiokastritsas, Kerkira 491 00, Greece
          </p>
        </li>

        <li className="order-4 h-[71px] w-full rounded-[8px] bg-[#4B9FBD]/12 px-[14px] py-[12px] backdrop-blur-[60px] md:order-2 md:h-[139px] md:max-w-[364px] md:p-5 xl:max-w-[432px] 2xl:max-w-[529px] 2xl:px-[28px] 2xl:pt-6 2xl:pb-5">
          <p className="paragraph-xs-default text-left text-white/70 md:mb-[44px] md:text-base">{t('phone')}</p>
          <div className="text-right text-[21px] leading-[136%] font-normal tracking-[-0.02em] text-white md:text-[31px]">
            <a className="block" href="tel:+88006001441">
              8 800 600 14 41
            </a>
          </div>
        </li>

        <li className="order-1 h-[71px] w-full rounded-[8px] bg-[#4B9FBD]/12 px-[14px] py-[12px] backdrop-blur-[60px] md:order-3 md:h-[139px] md:max-w-[364px] md:p-5 xl:max-w-[432px] 2xl:max-w-[529px] 2xl:px-[28px] 2xl:pt-6 2xl:pb-5">
          <p className="paragraph-xs-default text-left text-white/70 md:mb-8 md:text-base">{t('social')}</p>
          <div className="paragraph-sm-default ml-auto max-w-[92px] text-right text-white md:text-lg">
            <a className="block" href="https://www.facebook.com/laundromatgr">
              Facebook
            </a>
            <a className="block" href="https://www.instagram.com/laundromatgr">
              Instagram
            </a>
          </div>
        </li>

        <li className="order-3 h-[71px] w-full rounded-[8px] bg-[#4B9FBD]/12 px-[14px] py-[12px] backdrop-blur-[60px] md:order-4 md:h-[139px] md:max-w-[364px] md:p-5 xl:max-w-[432px] 2xl:max-w-[529px] 2xl:px-[28px] 2xl:pt-6 2xl:pb-5">
          <p className="paragraph-xs-default text-left text-white/70 md:mb-[44px] md:text-base">{t('email')}</p>
          <div className="text-right text-[21px] leading-[136%] font-normal tracking-[-0.02em] text-white md:text-[31px]">
            <a className="block" href="mailto:info@laundromat.gr">
              info@laundromat.gr
            </a>
          </div>
        </li>
      </ul>
    </div>
  );
};
