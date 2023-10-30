import ProjectCard from './project-card';
const status = [
  { id: 1, name: '123', value: '123' },
  { id: 2, name: '123', value: '123' },
  { id: 3, name: '123', value: '123' },
];

export default function Newsletter() {
  return (
    <>
      <div
        className='flex flex-col items-center justify-center py-20'
        id='projects'
      >
        <h1 className='text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20'>
          My Projects
        </h1>
        <div className='h-full w-full flex flex-col md:flex-row gap-10 px-10'>
          <ProjectCard
            src='/NextWebsite.png'
            title='Modern Next.js Portfolio'
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
          />
          <ProjectCard
            src='/CardImage.png'
            title='Interactive Website Cards'
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
          />
          <ProjectCard
            src='/SpaceWebsite.png'
            title='Space Themed Website'
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
          />
        </div>
      </div>
      <section className='relative overflow-hidden'>
        <div className='w-full flex flex-1 justify-center'>
          <div className='flex flex-col md:flex-row justify-center items-center'>
            <div className=' bg-black px-10 py-12 rounded-[20px]  md:mr-10 sm:mr-5 mr-0 my-5 feedback-card'>
              <p className='font-poppins font-normal text-[18px]  text-white my-10'>
                123
              </p>

              <div className='flex flex-row'>
                <div className='flex flex-col ml-4'>
                  <h4 className='font-poppins font-semibold text-[20px] leading-[32px] text-white'>
                    123
                  </h4>
                  <p className=''>13</p>
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-col md:flex-row justify-center items-center'>
            <div className='flex bg-gray-200 justify-between flex-col  border-r-gray-500 border-r-2'>
              <p className='font-poppins font-normal text-[18px] text-white my-10'>
                123
              </p>

              <div className='flex flex-row'>
                <div className='flex flex-col ml-4'>
                  <h4 className='font-poppins font-semibold text-[20px] leading-[32px] text-white'>
                    123
                  </h4>
                  <p className=''>13</p>
                </div>
              </div>
            </div>
          </div>

          {/* <div className='flex flex-col text-black pr-10 border-r-gray-500 border-r-2 justify-start'>
            <h1>We Provide You</h1>
            <h1>We Provide You</h1>
          </div>
          <div className=' border-r-gray-500 border-r-2'>
            <h1>We Provide You</h1>
          </div>
          <div className=''>
            <h1>We Provide You</h1>
          </div>
        </div>
      </div>

      <div className='bg-white py-24 sm:py-32'>
        <div className='mx-auto w-full px-6 lg:px-8'>
          <div className='grid grid-cols-1 gap-x-1 md:grid-cols-3'>
            {status.map((stat) => (
              <div
                key={stat.id}
                className='mx-auto flex flex-col gap-y-4  border-r-gray-500 border-r-2'
              >
                <div className='text-gray-600 '>{stat.name}</div>
                <div className='order-first text-3xl font-semibold text-gray-900 sm:text-5xl'>
                  {stat.value}
                </div>
              </div>
            ))}
          </div> */}
        </div>
      </section>
    </>
  );
}
