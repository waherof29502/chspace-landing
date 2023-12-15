'use client';

import { useRouter } from 'next/navigation';
import * as Yup from 'yup';
import { useFormik } from 'formik';

interface FormValues {
  name: string;
  phone: string;
  email: string;
  line?: string;
  message?: string;
}

export default function ContactForm() {
  const router = useRouter();
  const formik = useFormik<FormValues>({
    initialValues: {
      name: '',
      phone: '',
      email: '',
      line: '',
      message: ''
    },
    validationSchema: Yup.object({
      name: Yup.string().max(5, '請輸入正確姓名格式').required('名稱為必填欄位。'),
      phone: Yup.string().max(10, '請輸入正確手機格式').required('手機為必填欄位。'),
      email: Yup.string().email('錯誤的Email格式').required('Email為必填欄位'),
      line: Yup.string().max(10, '請輸入正確Line帳號格式'),
      message: Yup.string().max(400, '文字敘述上限400字').required('需求說明為必填欄位。')
    }),
    onSubmit: async (values) => {
      //  const queryParams: FormValues = {
      //   name: values.name,
      //   phone: values.phone,
      //   email: values.email,
      //   line: values.line,
      //   message: values.message
      // };
      try {
        // Add your API POST logic here
        const response = await fetch('your-email-api-endpoint', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        });

        if (response.ok) {
          console.log('Email sent successfully');
          router.push('/success');
        } else {
          console.error('Failed to send email');
          // Handle error case, e.g., show an error message to the user
        }
      } catch (error) {
        console.error('Error occurred while sending email', error);
        // Handle error case, e.g., show an error message to the user
      }
      console.log('form submitted', values);
    }
  });
  const OnSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    formik.handleSubmit();
  };
  return (
    <>
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col md:flex-row rounded-lg flex-1 w-full lg:w-3/4 3xl:w-2/3 justify-center items-center  mb-10 md:mb-2 lg:mb-10"
      >
        <div className="flex-1 w-full text-[#1b1b1b] px-5 xxxl:px-20 ">
          <div className="mt-6 p-5 lg:p-0">
            {/* Name input field */}
            <div className="pb-4 mb-10">
              <label htmlFor="email" className="block pb-2">
                <span className="font-syne text-[18px] mr-2">Name</span>
                <span className="font-sansCjk text-[14px]">
                  {' '}
                  姓名 <span className="text-red-400 pl-1">※</span>
                </span>
              </label>
              <input
                className="border-[#CBCBCB]  border-b-1 border-t-0 border-r-0 border-l-0 p-2 w-full focus:border-b-1 focus:border-t-0 focus:border-r-0 focus:border-l-0 focus:border-b-[#1b1b1b] focus:ring-transparent"
                type="text"
                name="name"
                onChange={formik.handleChange}
                value={formik.values.name}
                onBlur={formik.handleBlur}
              />
              <span
                className={` font-sansCjk text-[10px] tracking-wide ${
                  formik.touched.name && formik.errors.name ? 'text-red-400' : ''
                } `}
              >
                {' '}
                {formik.touched.name && formik.errors.name ? formik.errors.name : ''}
              </span>
            </div>
            {/* Email input field */}
            <div className="pb-4 mb-10">
              <label htmlFor="email" className="block pb-2">
                <span className="font-syne text-[18px] mr-2">Phone</span>
                <span className="font-sansCjk text-[14px]">
                  電話 <span className="text-red-400 pl-1">※</span>
                </span>
              </label>
              <input
                className="border-[#CBCBCB]  border-b-1 border-t-0 border-r-0 border-l-0 p-2 w-full focus:border-b-1 focus:border-t-0 focus:border-r-0 focus:border-l-0 focus:border-b-[#1b1b1b] focus:ring-transparent"
                type="text"
                name="phone"
                onChange={formik.handleChange}
                value={formik.values.phone}
                onBlur={formik.handleBlur}
              />
              <span
                className={` font-sansCjk text-[10px] tracking-wide ${
                  formik.touched.phone && formik.errors.phone ? 'text-red-400' : ''
                } `}
              >
                {' '}
                {formik.touched.phone && formik.errors.phone ? formik.errors.phone : ''}
              </span>
            </div>

            {/* Email input field */}
            <div className="pb-4 mb-10">
              <label htmlFor="email" className="block pb-2">
                <span className="font-syne text-[18px] mr-2">E-Mail</span>
                <span className="font-sansCjk text-[14px]">
                  信箱 <span className="text-red-400 pl-1">※</span>
                </span>
              </label>
              <input
                className="border-[#CBCBCB]  border-b-1 border-t-0 border-r-0 border-l-0 p-2 w-full focus:border-b-1 focus:border-t-0 focus:border-r-0 focus:border-l-0 focus:border-b-[#1b1b1b] focus:ring-transparent"
                type="email"
                name="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                onBlur={formik.handleBlur}
              />
              <span
                className={` font-sansCjk text-[10px] tracking-wide ${
                  formik.touched.email && formik.errors.email ? 'text-red-400' : ''
                } `}
              >
                {' '}
                {formik.touched.email && formik.errors.email ? formik.errors.email : ''}
              </span>
            </div>
            {/* Line input field */}
            <div className="pb-4 mb-10">
              <label htmlFor="email" className="block pb-2">
                <span className="font-syne text-[18px] mr-2">Line ID</span>
              </label>
              <input
                className="border-[#CBCBCB]  border-b-1 border-t-0 border-r-0 border-l-0 p-2 w-full focus:border-b-1 focus:border-t-0 focus:border-r-0 focus:border-l-0 focus:border-b-[#1b1b1b] focus:ring-transparent"
                type="text"
                name="line"
                onChange={formik.handleChange}
                value={formik.values.line}
                onBlur={formik.handleBlur}
              />
            </div>
          </div>
        </div>
        {/* Message input field */}
        <div className="w-full md:w-1/2  h-[400px] pb-6 lg:ml-8 px-10 lg:px-8">
          <label htmlFor="email" className="block pb-6">
            <span className="font-syne mr-2">Message</span>
            <span className="font-sansCjk">
              需求說明<span className="text-red-400 pl-1">※</span>
            </span>
          </label>

          <textarea
            className="w-full h-full bg-[#F8F8F8] border-[#CBCBCB] focus:border-[#1b1b1b] focus:ring-[#1b1b1b]"
            name="message"
            onChange={formik.handleChange}
            value={formik.values.message}
            onBlur={formik.handleBlur}
          />
          <span
            className={`mt-0 font-sansCjk text-[10px] tracking-wide ${
              formik.touched.message && formik.errors.message ? 'text-red-400' : ''
            } `}
          >
            {' '}
            {formik.touched.message && formik.errors.message ? formik.errors.message : ''}
          </span>
        </div>
      </form>
      <button
        type="submit"
        className="flex items-center justify-center bg-[#1b1b1b]  my-14 md:my-0 p-4 w-1/2 lg:w-1/4 xl:w-1/6 rounded-xl group"
        onClick={OnSubmit}
      >
        <div className="w-0 group-hover:w-10 h-[1.2px] bg-white transform transition-transform group-hover:ease-in-out group-hover:translate-x-2 duration-1000" />
        <p className="font-syne font-bold text-white text-[14px] lg:text-[16px] translate-x-0 transform transition-transform group-hover:translate-x-3 md:group-hover:translate-x-6 duration-1000">
          Send Now
        </p>
      </button>
    </>
  );
}
