/* eslint-disable jsx-a11y/anchor-is-valid */
import Login from "../Auth/Login";
import { Button } from "../Shared/Button";
import { Logo } from "./Logo";
import Navlink from "./Navlink";

const Header = (prop: propType) => {
  return (
    <header className='flex justify-between items-center w-[100vw] bg-inherit md:mt-1 h-[4rem] bg-gradient-to-b from-slate-400 to-lightOrange'>
      <Logo />
      <Navlink handleActive={prop.handleActive} />
      <div className='md:flex hidden  w-[20rem] justify-center items-center '>
        <Login />
        <Button width='10rem'>Get started</Button>
      </div>
    </header>
  );
};
export default Header;

export type propType = {
  handleActive: () => void;
};

//mobile sidebar
export const MobileSideBar: React.FC<propType> = (props) => {
  return (
    <div className='absolute inset-0 z-50 w-auto bg-textColor overflow-auto h-screen m-auto p-2 text-white'>
      <div className='mx-auto max-w-screen-xs'>
        <div className='flex w-full py-2'>
          <a className='z-10 relative font-medium underline ' href='/'>
            <img
              data-testid='logo-dark-icon'
              width='26'
              height='26'
              alt='Wealthfront Logo'
              loading='eager'
              src='https://www.wealthfront.com/next/contenthash/next/svg/optimized/logo-surface-dark.contenthash.6a217cf7ba5c76ea3f152b02f943e570c478e64b.svg'
            />
          </a>
          <div className='flex-shrink flex-grow'></div>
          <button
            type='button'
            onClick={() => {
              props.handleActive();
            }}>
            <img
              width='22'
              height='22'
              alt='Close menu'
              loading='eager'
              src='https://www.wealthfront.com/next/contenthash/next/svg/optimized/x-default.contenthash.1e1c59fb472999945ac6114d661d56270a014d73.svg'
            />
          </button>
        </div>

        <div className='flex flex-col py-4 text-center'>
          <a
            href='https://www.wealthfront.com/cash'
            className='group relative py-4 text-2xl font-normal text-white'
            data-testid='https://www.wealthfront.com/cash'>
            Cash
          </a>
          <a
            href='https://www.wealthfront.com/automated-bond-portfolio'
            className='group relative py-4 text-2xl font-normal text-white'
            data-testid='https://www.wealthfront.com/automated-bond-portfolio'>
            Bonds
          </a>

          <a
            role='button'
            href='#'
            className='group relative py-4 text-2xl font-normal text-white group'>
            Automated Investing
            <svg
              fill='none'
              viewBox='0 0 9 6'
              xmlns='http://www.w3.org/2000/svg'
              data-testid='chevron-down'
              className='inline h-1.5'>
              <path
                d='M.47 1.624A.754.754 0 111.58.602l2.552 2.772a.5.5 0 00.736 0L7.42.602a.754.754 0 111.11 1.022L5.236 5.201a1 1 0 01-1.472 0L.47 1.624z'
                fill='currentColor'
                fill-rule='evenodd'></path>
            </svg>
            <div
              className='overflow-hidden hidden rounded text-center font-medium group-hover:flex flex-col'
              style={{ height: "0px" }}>
              <div className='bg-white'>
                <div className='flex flex-col items-center justify-center py-4 px-8'>
                  <img
                    width='120'
                    height='120'
                    alt='hourglass'
                    loading='eager'
                    src='https://www.wealthfront.com/next/contenthash/next/optimized/hourglass.contenthash.a39b6b5c4ee7aefbae8df8c13688ea731c570ba3.png'
                  />
                  <a
                    href='/investing'
                    className='group relative whitespace-nowrap  text-xl font-bold'>
                    Automated Index Investing
                    <div className='absolute left-0 right-0 h-0.5 transition-all bg-eggplant w-full group-hover:w-full bottom-0'></div>
                    <div className='pointer-events-none absolute -bottom-0.5 -right-4 font-serif'>
                      ↗
                    </div>
                  </a>
                  <div className='copy-body max-w-[250px] font-normal'>
                    We’ll build and manage a diversified portfolio of low-cost
                    index funds personalized for you.
                  </div>
                </div>
              </div>
              <div className='flex flex-col items-center gap-6 bg-gray-100 py-6 px-8'>
                <a
                  href='https://www.wealthfront.com/socially-responsible-investing'
                  className='group relative whitespace-nowrap  font-medium'>
                  Socially Responsible (SRI)
                  <div className='absolute left-0 right-0 h-0.5 transition-all bg-eggplant w-full group-hover:w-full bottom-0.5'></div>
                </a>
                <a
                  href='https://www.wealthfront.com/retirement'
                  className='group relative whitespace-nowrap  font-medium'>
                  Retirement (IRAs)
                  <div className='absolute left-0 right-0 h-0.5 transition-all bg-eggplant w-full group-hover:w-full bottom-0.5'></div>
                </a>
                <a
                  href='https://www.wealthfront.com/college'
                  className='group relative whitespace-nowrap  font-medium'>
                  College (529s)
                  <div className='absolute left-0 right-0 h-0.5 transition-all bg-eggplant w-full group-hover:w-full bottom-0.5'></div>
                </a>
                <hr className='w-full border-gray-300' />
                <a
                  href='https://www.wealthfront.com/explore'
                  className='group relative whitespace-nowrap  font-medium'>
                  Explore all investments
                  <div className='absolute left-0 right-0 h-0.5 transition-all bg-eggplant w-full group-hover:w-full bottom-0.5'></div>
                </a>
              </div>
            </div>
          </a>

          <a
            href='https://www.wealthfront.com/stock-investing'
            className='group relative py-4 text-2xl font-normal text-white'
            data-testid='https://www.wealthfront.com/stock-investing'>
            Stocks
          </a>
          <a
            role='button'
            href='#'
            className='group relative py-4 text-2xl font-normal text-white'>
            Learn
            <svg
              fill='none'
              viewBox='0 0 9 6'
              xmlns='http://www.w3.org/2000/svg'
              data-testid='chevron-down'
              className='inline h-1.5'>
              <path
                d='M.47 1.624A.754.754 0 111.58.602l2.552 2.772a.5.5 0 00.736 0L7.42.602a.754.754 0 111.11 1.022L5.236 5.201a1 1 0 01-1.472 0L.47 1.624z'
                fill='currentColor'
                fill-rule='evenodd'></path>
            </svg>
          </a>
          <div
            className='overflow-hidden rounded text-center font-medium '
            style={{ height: "0px" }}>
            <div className='bg-white'>
              <div className='flex flex-col items-center justify-center py-4 px-8'>
                <img
                  width='120'
                  height='120'
                  alt='hourglass'
                  loading='eager'
                  src='https://www.wealthfront.com/next/contenthash/next/alchemist/construction_graph.contenthash.42645559e7876700b86eac51b45b804e48380450.png'
                />
                <a
                  href='https://blog.wealthfront.com/'
                  className='group relative whitespace-nowrap  text-xl font-bold'>
                  Blog
                  <div className='absolute left-0 right-0 h-0.5 transition-all bg-eggplant w-full group-hover:w-full bottom-0'></div>
                  <div className='pointer-events-none absolute -bottom-0.5 -right-4 font-serif'>
                    ↗
                  </div>
                </a>
                <div className='copy-body max-w-[250px] font-normal'>
                  Nerd out with us and learn more about investing
                </div>
              </div>
            </div>
            <div className='flex flex-col items-center gap-6 bg-gray-100 py-6 px-8'>
              <a
                href='https://support.wealthfront.com/hc/en-us'
                className='group relative whitespace-nowrap  font-medium'>
                Help Center
                <div className='absolute left-0 right-0 h-0.5 transition-all bg-eggplant w-full group-hover:w-full bottom-0.5'></div>
              </a>
              <a
                href='/pricing'
                className='group relative whitespace-nowrap  font-medium'>
                Pricing
                <div className='absolute left-0 right-0 h-0.5 transition-all bg-eggplant w-full group-hover:w-full bottom-0.5'></div>
              </a>
              <a
                href='/tax-loss-harvesting'
                className='group relative whitespace-nowrap  font-medium'>
                Tax-Loss Harvesting
                <div className='absolute left-0 right-0 h-0.5 transition-all bg-eggplant w-full group-hover:w-full bottom-0.5'></div>
              </a>
              <a
                href='/historical-performance'
                className='group relative whitespace-nowrap  font-medium'>
                Historical Performance
                <div className='absolute left-0 right-0 h-0.5 transition-all bg-eggplant w-full group-hover:w-full bottom-0.5'></div>
              </a>
              <a
                href='/https://www.wealthfront.comreviews'
                className='group relative whitespace-nowrap  font-medium'>
                Reviews
                <div className='absolute left-0 right-0 h-0.5 transition-all bg-eggplant w-full group-hover:w-full bottom-0.5'></div>
              </a>
            </div>
          </div>
          <div className='my-4 flex flex-col space-y-4'>
            <a
              className='z-10 relative   items-center justify-center rounded-md transition-all font-medium 2xl:px-6 2xl:py-3.5 px-5 py-3 copy-body button_secondaryButtonOnDark__7qK6q hover:border-transparent border border-lavender text-lavender inline-flex whitespace-nowrap'
              href='https://www.wealthfront.com/login'
              data-testid='mobile-logged-out-header-login'>
              Log in
            </a>
            <a
              className='z-10 relative   items-center justify-center rounded-md transition-all font-medium 2xl:px-6 2xl:py-3.5 px-5 py-3 buttonBorderStly text-buttonPrimary bg-white  overflow-hidden inline-flex whitespace-nowrap'
              href='https://www.wealthfront.com/start/account-type?intent=investing'>
              Get started
            </a>
            <div className='flex items-center justify-between gap-2'>
              <a
                className='z-10 relative font-medium underline '
                href='https://apps.apple.com/us/app/wealthfront-save-and-invest/id816020992'>
                <img
                  width='150'
                  height='50'
                  className='h-[50px] w-[150px] object-contain object-center'
                  alt='Download Wealthfront on the App Store'
                  loading='eager'
                  src='https://www.wealthfront.com/next/contenthash/next/svg/optimized/app-store-badge.contenthash.6fcb118c0caf6afdc248ade0f1f7cf31a368fc77.svg'
                />
              </a>
              <a
                className='z-10 relative font-medium underline '
                href='https://play.google.com/store/apps/details?id=com.wealthfront'>
                <img
                  width='150'
                  height='50'
                  className='h-[50px] w-[150px] object-contain object-center'
                  alt='Get Wealthfront on Google Play'
                  loading='eager'
                  src='https://www.wealthfront.com/next/contenthash/next/svg/optimized/google-play-badge.contenthash.92218e88ff049ebb93aec59cd7a8ff1f41a6baa5.svg'
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
