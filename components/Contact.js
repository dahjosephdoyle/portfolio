import { useState } from "react";
import emailjs from "@emailjs/browser";
import * as Yup from 'yup';
import { useFormik } from 'formik';

export default function Contact() {
// useEffect(() => emailjs.init("LGzTC7ihOs2j3UsvA"), []);
// const serviceId = "service_h26feta";
// const templateId = "template_d25yk6b";
const [buttonState, setButtonState] = useState('Send Message');
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const formik = useFormik({
  //we have created our initailValues object in a format EmailJS accepts
  initialValues: {
    name: '', //user name
    phone: '', //user phone number
    email: '', //user email
    message: '' // message of email
  },
  validationSchema: Yup.object({
    name: Yup.string()
      .required('* Name field is required'),
    phone: Yup.string().matches(phoneRegExp, 'Phone number is not valid'),
    email: Yup.string().email('Invalid email address')
      .required('* Email field is required'),
    message: Yup.string().required('* Message field is required')
  }),
  onSubmit: (values, {setSubmitting, resetForm}) => {
     try{
      emailjs.send(service_h26feta , template_d25yk6b, values, LGzTC7ihOs2j3UsvA)
        .then(() => {
           setButtonState('Send Email');
           setSubmitting(false);
           resetForm();
              });
       }
       catch {
        console.log(error);
          setButtonState('Send Email');
          setSubmitting(false);
      }
 },
});
    return (
      <div className="relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
        <svg
          className="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
              width={200}
              height={200}
              x="50%"
              y={-64}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-64} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M299.5 800h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect width="100%" height="100%" strokeWidth={0} fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)" />
        </svg>
        <div className="mx-auto max-w-xl lg:max-w-4xl">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900">Let’s talk about your project</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            We help companies and individuals build out their brand guidelines.
          </p>
          <div className="mt-16 flex flex-col gap-16 sm:gap-y-20 lg:flex-row">
            
            
            
            
            <form className="lg:flex-auto" onSubmit={formik.handleSubmit}>
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
                    Name
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      onChange={formik.handleChange}
         	            value={formik.values.name}
                      autoComplete="given-name"
                      placeholder="Your Full Name"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    <div className={`expandable ${formik.touched.name && formik.errors.name ? 'show' : ''}`}>
                    {formik.errors.name}
                </div>
                  </div>
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold leading-6 text-gray-900">
                    Phone Number
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="tel"
                      onChange={formik.handleChange}
		                  value={formik.values.phone}
                      placeholder="Your Phone Number"
                      name="phone"
                      id="phone"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    {formik.errors.phone}
       
                  </div>
                </div>
                <div className="col-span-2">
                  <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                    Email Address
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="email"
                      onChange={formik.handleChange}
		                  value={formik.values.email}
                      placeholder="Your Email Address"
                      name="email"
                      id="email"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    {formik.errors.email}
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                    Message
                  </label>
                  <div className="mt-2.5">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Your Message"
                      onChange={formik.handleChange}
		                  value={formik.values.message}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    {formik.errors.message}
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <button
                  type="submit"
                  disabled={formik.isSubmitting}
                  className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  {buttonState}
                </button>

              </div>
            </form>
          </div>
        </div>
      </div>
      
    )
  }
  