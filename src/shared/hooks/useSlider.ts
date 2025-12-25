import { useState, useMemo } from 'react';
import { useKeenSlider, KeenSliderOptions } from 'keen-slider/react';

export interface UseSliderReturn {
  sliderRef: (node: HTMLDivElement | null) => void;
  currentSlide: number;
  totalSlides: number;
  onPrev: () => void;
  onNext: () => void;
  moveTo: (idx: number) => void;
  isFirstSlide: boolean;
  isLastSlide: boolean;
}

export const useSlider = (config: KeenSliderOptions = {}): UseSliderReturn => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [totalSlides, setTotalSlides] = useState(0);
  const [maxIdx, setMaxIdx] = useState(0);

  const sliderConfig: KeenSliderOptions = useMemo(
    () => ({
      loop: false,
      mode: 'free-snap',
      rtl: false,
      slides: {
        perView: 'auto',
        spacing: 8,
      },
      ...config,
      created(slider) {
        setTotalSlides(slider.track.details.slides.length);
        setMaxIdx(slider.track.details.maxIdx);
        config.created?.(slider);
      },
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
        setMaxIdx(slider.track.details.maxIdx);
        config.slideChanged?.(slider);
      },
    }),
    [config],
  );

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(sliderConfig);

  const controls = useMemo(
    () => ({
      onPrev: () => instanceRef.current?.prev(),
      onNext: () => instanceRef.current?.next(),
      moveTo: (idx: number) => instanceRef.current?.moveToIdx(idx),
      isFirstSlide: currentSlide === 0,
      isLastSlide: currentSlide >= maxIdx,
      currentSlide,
      totalSlides,
    }),
    [currentSlide, totalSlides, maxIdx, instanceRef],
  );

  return {
    sliderRef,
    ...controls,
  };
};
