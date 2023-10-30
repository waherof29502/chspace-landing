import VideoThumb from '@/public/images/hero-image.png';
import ModalVideo from '@/src/components/modal-video';
import Image from 'next/image';
import HeroBg from '@/public/images/hero-image.png';

export default function Hero() {
  return (
    <section className='relative'>
      {/* Illustration behind hero content */}
      <div className='w-full min-h-screen flex items-center justify-center'>
        {/* <ModalVideo
          video='/videos/video.mp4'
          videoWidth={1920}
          videoHeight={1080}
        /> */}

        <Image
          className='p-3 rounded-2xl h-auto'
          src={HeroBg}
          layout='fill'
          objectFit='cover'
          objectPosition='center'
          alt='Features bg'
        />
      </div>
      {/* <div className='absolute left-[1200px] bottom-20'>123123123</div> */}

      {/* Hero image */}
    </section>
  );
}
