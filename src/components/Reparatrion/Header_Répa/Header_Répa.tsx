"use client";

import Link from 'next/link';

import React from "react";

import { usePathname } from "next/navigation";
import Image from 'next/image';
import Search_Répa from './Search_Répa';
type HeaderProps = {
  path: string;
};


const Header_Répa = ({ path }: HeaderProps) => {

  const formattedPath = path.charAt(0).toUpperCase() + path.slice(1);

  return (
    <span className="mb-[-45px] pl-[40px] flex flex-[3] justify-between px-[130px] ">
      <div className="pl-4">
        <span>
          <h1
            className="font-inter leading- px-130  py-50  text-2xl font-semibold text-gray-700"
            style={{ margin: "0 -50px" }}
          >
            {formattedPath}
          </h1>
        </span>
      </div>
      <div className="flex justify-end pl-2 ">
        {
          // Search bar
        }
        <Search_Répa  />
      </div>
      <div className="ml-8">
        <div className="flex justify-between gap-4 px-3">
          <div className="ml-8 flex justify-end gap-4 pt-2">
            <div>

              <Image src={"/setting.svg"} alt="" width={25} height={25}></Image>

            </div>
            <Link href={'/notification'}  >

              <Image src={"/notification.svg"} alt="" width={21} height={30}></Image>

            </Link>
            <div>

            </div>
          </div>

          <span className="ml-6 mr-[-140px] flex">
            <div>
              <h4 className="pt-2">Hi Andrei,</h4>
            </div>

            <div className="ml-2 flex h-8 w-8 justify-center rounded-full bg-[white] pt-1 ">
              <svg
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1020_3721)">
                  <path
                    d="M20.5704 19.163C19.8213 18.6676 19.0251 18.2476 18.1932 17.9091C18.1287 17.8752 18.0667 17.8353 17.9996 17.8064C14.7396 16.4025 11.1502 15.9442 7.64185 16.4838C5.96833 16.7226 4.33828 17.2027 2.80255 17.9091C1.97647 18.2394 1.20558 18.6782 0.449126 19.1417C0.27681 19.2488 0.145301 19.4105 0.0755645 19.601C-0.00417127 19.7984 -0.020448 20.0157 0.0290001 20.2227C0.0784483 20.4298 0.191166 20.6163 0.351489 20.7563C0.699579 21.0543 1.16483 21.0806 1.61735 20.8064C3.82 19.4595 6.30015 18.6311 8.87019 18.3839C11.4402 18.1367 14.0329 18.4771 16.4519 19.3794C17.4977 19.7803 18.5052 20.2744 19.4625 20.8557C19.6862 20.9931 19.9547 21.0377 20.2109 20.9799C20.467 20.9222 20.6905 20.7667 20.8336 20.5467C21.1282 20.0916 21.0289 19.4618 20.5704 19.163Z"
                    fill="#A3AED0"
                  />
                  <path
                    d="M5.38267 10.3183C5.42794 10.389 5.47697 10.4573 5.52954 10.5229C7.09425 12.3276 9.06393 13.1128 11.4318 12.7894C13.2215 12.5449 14.658 11.6638 15.7073 10.1824C16.3454 9.35312 16.741 8.36313 16.8501 7.32251C17.0042 6.40936 16.9354 5.47251 16.6497 4.59161C16.4215 3.7405 15.9956 2.95524 15.4068 2.29959C15.3604 2.22942 15.3096 2.16223 15.2548 2.0984C13.5084 0.289405 11.3995 -0.363396 8.95186 0.196027C7.45584 0.526954 6.1439 1.41939 5.28673 2.68923C4.73873 3.45091 4.36428 4.32338 4.18974 5.24529C4.01519 6.1672 4.04478 7.11615 4.27642 8.0254C4.4629 8.86493 4.84157 9.64978 5.38267 10.3183ZM6.17648 5.47956C6.4159 4.54577 6.91256 3.76139 7.58837 3.07973C7.68091 2.98635 7.8142 2.96937 7.89061 2.86496C9.31693 1.9074 10.8222 1.78516 12.4005 2.44051C13.3455 2.92591 14.1029 3.71073 14.5544 4.67226C14.8006 5.35731 14.9526 6.05765 14.8821 6.7945C14.866 6.97192 14.8439 7.14764 14.8252 7.32421C14.5833 8.37514 13.9889 9.3116 13.1408 9.97786C13.1561 9.9872 13.1714 9.99484 13.1867 10.0025L13.14 9.97786C12.2392 10.5925 11.2535 10.9023 10.154 10.8208C9.4254 10.7599 8.72158 10.5272 8.10031 10.1417C7.33212 9.61706 6.73163 8.88195 6.3709 8.02455C6.09513 7.2059 6.02915 6.33115 6.17903 5.48041L6.17648 5.47956Z"
                    fill="#A3AED0"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1020_3721">
                    <rect width="21" height="21" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </span>
        </div>
      </div>
    </span>
  );
};

export default Header_Répa;
