import Image from 'next/image';

import LocationPointIcon from '@/shared/assets/icons/map-point-icon.svg';
import LocationPointOutlineIcon from '@/shared/assets/icons/map-point-outline-icon.svg';

const MOBILE_LOCATIONS = [
  { id: 0, top: '21%', left: '47%' },
  { id: 1, top: '32%', left: '54%' },
  { id: 2, top: '45%', left: '55%' },
];

const DESKTOP_LOCATIONS = [
  { id: 0, top: '21%', left: '36%' },
  { id: 1, top: '32%', left: '42%' },
  { id: 2, top: '45%', left: '34%' },
];

interface LocationSectionMapProps {
  activeLocationId: number | null;
  onLocationSelect: (index: number) => void;
}

export const LocationSectionMap = ({ activeLocationId, onLocationSelect }: LocationSectionMapProps) => {
  return (
    <div className="z-background absolute top-[200px] right-0 left-0 h-[698px] w-[809px] md:top-[150px] md:h-[751px] md:w-[1018px] xl:top-0 xl:h-[952px] xl:w-[1104px] 2xl:h-[1337px] 2xl:w-[1551px]">
      <div className="absolute h-full w-full -translate-x-[260px] -translate-y-[20px] min-[360px]:-translate-x-[240px] min-[360px]:-translate-y-[60px] min-[375px]:-translate-x-[220px] min-[375px]:-translate-y-[55px] min-[390px]:-translate-x-[200px] min-[390px]:-translate-y-[50px] min-[425px]:-translate-x-[178px] min-[425px]:-translate-y-[40px] md:hidden">
        <Image
          alt="Map showing laundromat locations in the area"
          className="object-contain"
          fill
          priority
          src="/images/big-map-preview.png"
        />
        {MOBILE_LOCATIONS.map((position) => (
          <div
            className="absolute z-10 flex -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center justify-center transition-transform hover:scale-110"
            key={position.id}
            onClick={() => onLocationSelect(position.id)}
            style={{ top: position.top, left: position.left }}
          >
            {activeLocationId === position.id ? <LocationPointIcon className="text-brand" /> : <LocationPointOutlineIcon />}
          </div>
        ))}
      </div>

      <div className="absolute hidden h-full w-full -translate-x-[50px] md:block xl:translate-x-[503px] xl:translate-y-[-50px] 2xl:translate-x-[800px]">
        <Image alt="" aria-hidden="true" className="object-contain" fill priority src="/images/desktop-map-preview.png" />
        {DESKTOP_LOCATIONS.map((position) => (
          <div
            className="absolute z-10 flex -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center justify-center transition-transform hover:scale-110"
            key={position.id}
            onClick={() => onLocationSelect(position.id)}
            style={{ top: position.top, left: position.left }}
          >
            {activeLocationId === position.id ? (
              <LocationPointIcon className="text-brand transition-opacity duration-300" />
            ) : (
              <LocationPointOutlineIcon />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
