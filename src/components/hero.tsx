import ModalVideo from '@/src/components/modal-video';
import Image from 'next/image';
import HeroBg from '@/public/images/hero-image.png';
import Slogan from '@/public/images/slogan.png';
export default function Hero() {
  return (
    <section className='relative'>
      <div className='w-full min-h-screen flex items-center justify-center relative'>
      {/* Hero video */}
        {/* <ModalVideo
          video='/videos/video.mp4'
          videoWidth={1920}
          videoHeight={1080}
        /> */}
      {/* Hero image */}
        <Image
          className='pl-2 pr-2 pt-2 pb-2 md:pb-0 rounded-2xl h-auto object-cover'
          src={HeroBg}
          fill
          alt='hero-bg'
        />
      </div>
      <Image
      className='absolute inset-0 mx-auto top-[530px] left-0 p-10 md:top-[530px] lg:top-[330px] xl:top-[550px] 2xl:top-[800px] md:left-[10px] lg:left-[100px] xl:left-[370px] 2xl:left-[770px] '
      src={Slogan}
      width={930}
      height={72}
      alt='slogan'
    />
    </section>
  );
}
