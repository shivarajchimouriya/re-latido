"use client"
import React from 'react';
import TouchSweep from 'touchsweep';
import { Text } from '@chakra-ui/react';
import "./index.css";
import AppImage from '@/components/AppImage';

export interface CarouselItem {
  alt?: string;
  content: React.ReactNode;
  image: string;
  title: string;
}

export interface CarouselProps {
  classNamePrefix?: string;
  items: CarouselItem[];
  itemWidth?: number;
  nextButtonContent?: string | React.ReactNode;
  prevButtonContent?: string | React.ReactNode;
  showControls?: boolean;
  changeHandler?: (e: void) => void;
}

export const Carousel: React.FC<any> = (props: any) => {
  const itemWidth = props.itemWidth;
  const len = props.items.length;
  const radius = Math.round((itemWidth || 210) / 2 / Math.tan(Math.PI / len));
  const theta = 360 / len;

  const ref = React.useRef<HTMLDivElement>(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const [itemSelected, setItemSelected] = React.useState(0);

  const getSlideStyle = (index: number): React.CSSProperties => {
    const style: React.CSSProperties = {};

    if (index < len) {
      const cellAngle = theta * index;
      // rotateY(360deg) translateZ(-30px) translate(-145px, 30px) //last child

      style.opacity = 1;
      style.transform = `rotateY(${cellAngle}deg) translateZ(${radius}px)`;
    } else {
      style.opacity = 0;
      style.transform = 'none';
    }

    return style;
  };

  const getItemStyle = (): React.CSSProperties => {
    const angle = theta * selectedIndex * -1;
    return {
      transform: `translateZ(${
        -1 * radius
      }px) rotateX(${len < 10 ? -15: -7}deg) rotateY(${angle}deg) `,
    };
  };

  const getClassName = (parts: string | string[]) =>
    Array.isArray(parts)
      ? parts.map((part: string) => `${props.classNamePrefix}${part}`).join(' ')
      : `${props.classNamePrefix}${parts}`;

  const prev = () => {
    setItemSelected(
      itemSelected === 0 ? props?.items?.length - 1 : itemSelected - 1,
    );
    setSelectedIndex(selectedIndex - 1);
  };
  const next = () => {
    setItemSelected(
      itemSelected === props?.items?.length - 1 ? 0 : itemSelected + 1,
    );
    setSelectedIndex(selectedIndex + 1);
  };
  // const next = () => setSelectedIndex(selectedIndex === len ? 0 : selectedIndex + 1);

  React.useEffect(() => {
    const area = ref?.current;
    const touchsweep = new TouchSweep(area || undefined);

    area?.addEventListener('swipeleft', next);
    area?.addEventListener('swiperight', prev);

    return () => {
      touchsweep.unbind();

      area?.removeEventListener('swipeleft', next);
      area?.removeEventListener('swiperight', prev);
    };
  });

  React.useEffect(() => {
    props.onChange(itemSelected);
  }, [itemSelected]);

  return (
    <>
      <div className={getClassName('')} ref={ref}>
        <div className={getClassName('__container')} style={getItemStyle()}>
          {props.items.map((item: CarouselItem, index: number) => {
            return (
              <div
                className={getClassName('__slide')}
                key={index}
                style={getSlideStyle(index)}>
                {/* <img src={item.image} alt={item.alt} /> */}
                <AppImage src={item.image} height={400} width={400} alt="leather image" />
                {itemSelected === index && (
                        <Text
                            align='center'
                            fontWeight='bold'
                            color='base'
                            fontSize={'1.6rem'}
                        >
                    {item.title}
                  </Text>
                )}

                {/* <div className={getClassName('__slide-overlay')}>{item.content}</div> */}
              </div>
            );
          })}
        </div>
      </div>

      {props.showControls && (
        <div className={getClassName('__controls')}>
          <button
            className={getClassName(['__control', '__control--prev'])}
            onClick={prev}>
            {props.prevButtonContent}
          </button>

          <button
            className={getClassName(['__control', '__control--next'])}
            onClick={next}>
            {props.nextButtonContent}
          </button>
        </div>
      )}
    </>
  );
};

Carousel.defaultProps = {
  itemWidth: 210,
  showControls: true,
  classNamePrefix: 'carousel',
  prevButtonContent: 'Previous',
  nextButtonContent: 'Next',
};

export default Carousel;
