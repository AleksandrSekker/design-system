import React from 'react';
import Image from 'next/image';

type Props = {
  image: string;
  width: number;
  height: number;
};
const AvatarImage = ({ image, width, height }: Props) => (
  <Image
    src={image}
    alt={'my avatar'}
    width={width}
    height={height}
    className={`order-last mx-auto mt-4 rounded-lg md:order-first lg:mx-0 lg:mt-0`}
  />
);

export default AvatarImage;
