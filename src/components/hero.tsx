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
          className='pl-3 pr-3 pt-3 rounded-2xl h-auto'
          src={HeroBg}
          layout='fill'
          objectFit='cover'
          objectPosition='center'
          alt='hero-bg'
        />
      </div>
      <Image
      className='absolute inset-0 mx-auto top-[530px] p-10 xl:top-[650px] xl:left-[400px] '
      src={Slogan}
      width={930}
      height={72}
      alt='slogan'
    />
    </section>
  );
}
