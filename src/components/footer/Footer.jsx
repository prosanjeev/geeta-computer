import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div>
       <iframe
           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3590.1356918305883!2d85.7824551120685!3d25.865011077192555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed9191996e93fd%3A0x95600d90273c4f41!2sGeeta%20Second%20Laptop!5e0!3m2!1sen!2sin!4v1715277894519!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      <footer className="text-gray-600 body-font bg-gray-300">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap md:text-left text-center order-first">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Home</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Order</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Local For Vocal</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Cart</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3 uppercase">Customer Service</h2>
              <nav className="list-none mb-10">
                <li>
                  <Link to={'/returnpolicy'} className="text-gray-600 hover:text-gray-800">Return Policy</Link>
                </li>
                <li>
                  <Link to={'/about'} className="text-gray-600 hover:text-gray-800">About</Link>
                </li>
                <li>
                  <Link to={'/contact'} className="text-gray-600 hover:text-gray-800">Contact Us</Link>
                </li>
              </nav>
            </div>

            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Services</h2>
              <nav className="list-none mb-10">
                <li>
                  <Link to={'/privacypolicy'} className="text-gray-600 hover:text-gray-800">Privacy</Link>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <img src="https://ecommerce-sk.vercel.app/pay.png" alt="" />
            </div>
          </div>
        </div>

        <div className="bg-gray-200">
          <div className="container px-5 py-3 mx-auto flex items-center sm:flex-row flex-col">
            <Link to={'/'} className='flex'>
              <div className="flex ">
                <h1 className=' text-2xl font-bold text-black  px-2 py-1 rounded'>Geeta second laptop</h1>
              </div>
            </Link>
            <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">© 2020 Geeta second laptop —
              <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">www.geetasecondlaptop.com</a>
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
              <a className="text-gray-500">
                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a className="ml-3 text-gray-500">
                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </a>
              <a className="ml-3 text-gray-500">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                  <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                </svg>
              </a>
              <a className="ml-3 text-gray-500">
                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={0} className="w-5 h-5" viewBox="0 0 24 24">
                  <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                  <circle cx={4} cy={4} r={2} stroke="none" />
                </svg>
              </a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
