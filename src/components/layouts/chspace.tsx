'use client';
import React from 'react';
import Image from 'next/image';
import { CHSPACE } from '@/src/constants';
import Link from 'next/link';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { easeIn, motion } from 'framer-motion';
export default function Chspace() {
  const fadeInAnimationVariants = {
    // bottom to up
    initial: {
      opacity: 0,
      x: 0,
      y: 100
    },
    animate: (index: number) => ({
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 1,
        motion: easeIn,
        delay: 0.25 * index
      }
    })
  };
  return (
    <section className="relative overflow-hidden">
      <div className="py-2 3md:p-12 3xl:p-20 w-full">
        <ResponsiveMasonry columnsCountBreakPoints={{ 375: 1, 750: 2, 991: 3 }}>
          <Masonry>
            {CHSPACE.map((item, index) => (
              <>
                <motion.div
                  variants={fadeInAnimationVariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{
                    once: false
                  }}
                  custom={index}
                  className="flex flex-col justify-start items-start px-6 md:px-5 xl:px-6 py-6"
                  key={item.id}
                >
                  <Link href={`/chspace/chspace1`}>
                    <Image src={item.src} alt="image" width={1925} height={325} />
                    <h2 className="font-sansCjk text-[1rem] font-semibold text-primary tracking-[1.76px] pt-6 pb-2">
                      {item.title}
                    </h2>
                    <span className="font-syne text-[0.875rem] text-primary font-normal tracking-[0.42px]">
                      {item.date}
                    </span>
                  </Link>
                </motion.div>
              </>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </section>
  );
}
