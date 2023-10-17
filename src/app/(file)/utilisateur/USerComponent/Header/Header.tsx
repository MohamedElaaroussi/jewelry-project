"use client";
import { Link } from "lucide-react";
import Image from "next/image";
import SearchBar from "./SearchBar";
import React from "react";

import { usePathname } from "next/navigation";
type HeaderProps = {
  path: string;
};

const Header = ({ path }: HeaderProps) => {
  return (
    <span className="mb-[-45px] flex flex-[3] justify-between px-[130px] ">
      <div>
        <span>
          <h1
            className="font-inter leading- px-140 py-50 pr-[3rem] text-2xl font-semibold text-gray-700"
            style={{ margin: "0 -50px" }}
          >
            {path}
          </h1>
        </span>
      </div>
      <div className="flex justify-end pl-2 ">
        {
          // Search bar
        }
        <SearchBar />
      </div>
      <div>
        <div className="flex justify-between gap-4 px-3">
          <div className="ml-8 flex justify-end gap-4 pt-2">
            <div>
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_980_3214)">
                  <path
                    d="M0.00326314 11.479C0.121382 11.2088 0.0985409 10.9145 0.144875 10.6306C0.266383 9.85225 0.458157 9.08648 0.717847 8.34269C0.890783 7.85781 1.33063 7.61896 1.8416 7.71162C2.52813 7.83561 2.89488 7.67574 3.20878 7.11516C3.47895 6.63355 3.40455 6.04557 3.01757 5.59724C2.54183 5.04581 2.54509 4.60791 3.03062 4.07018C4.93683 1.95775 7.27244 0.599067 10.0681 0.0306628C10.598 -0.0776668 11.062 0.189899 11.2337 0.704138C11.2655 0.813148 11.305 0.919776 11.3518 1.02325C11.5919 1.50551 12.0912 1.80635 12.6002 1.75349C13.1744 1.69215 13.5588 1.36586 13.7311 0.819648C13.8616 0.39677 14.1044 0.101795 14.5514 0.0143481C14.832 -0.0411219 15.1002 0.0600229 15.3665 0.122019C16.5851 0.407415 17.7539 0.874451 18.8337 1.50746C19.3558 1.81287 19.5294 2.36497 19.2572 2.85703C18.9851 3.34908 18.3984 3.50309 17.8672 3.20159C17.128 2.777 16.3443 2.43515 15.5303 2.18224C15.3645 2.13134 15.2693 2.13657 15.1557 2.29971C13.844 4.18569 11.156 4.18242 9.84625 2.29383C9.73988 2.14048 9.657 2.12807 9.49385 2.17702C7.84399 2.66918 6.33496 3.54695 5.09149 4.73777C4.96098 4.85785 4.92639 4.94074 5.01123 5.12216C5.86742 6.95462 4.83959 9.16429 2.92294 9.64068C2.8151 9.67681 2.70251 9.69682 2.58882 9.70006C2.37281 9.687 2.30494 9.79338 2.26252 9.98459C1.86053 11.6944 1.854 13.3996 2.29254 15.1028C2.31669 15.1981 2.31669 15.2849 2.46026 15.2914C4.39583 15.3828 6.02404 17.6832 5.02167 19.8746C4.94336 20.0442 4.95314 20.1323 5.08693 20.2609C6.34269 21.4622 7.86724 22.3462 9.53366 22.8393C9.66418 22.8784 9.73923 22.8699 9.82994 22.7394C11.1658 20.8078 13.8453 20.8058 15.1812 22.7349C15.2686 22.8615 15.3437 22.8837 15.4761 22.8438C17.1578 22.344 18.6949 21.4477 19.9581 20.2302C20.0756 20.118 20.0697 20.0377 20.0057 19.9039C19.1404 18.0591 20.1617 15.8422 22.094 15.3652C22.2018 15.3283 22.3148 15.3087 22.4288 15.3071C22.652 15.3254 22.7094 15.2046 22.7551 15.0187C23.1644 13.3357 23.155 11.5782 22.7277 9.89975C22.6924 9.76206 22.6402 9.72943 22.5052 9.71247C21.1523 9.54214 20.2792 8.75381 19.8615 7.49953C19.436 6.21981 19.7689 5.07647 20.7164 4.12435C21.0793 3.75955 21.6685 3.785 22.0405 4.14197C22.2223 4.31509 22.3297 4.55201 22.3402 4.80279C22.3506 5.05358 22.2633 5.29864 22.0966 5.48631C21.9009 5.70949 21.7364 5.9431 21.6731 6.23938C21.4819 7.13865 22.2193 7.90087 23.1153 7.72336C23.7027 7.60786 24.136 7.86302 24.3265 8.43078C25.2402 11.1508 25.2402 13.8699 24.3265 16.5881C24.1445 17.1317 23.7105 17.3921 23.1519 17.291C22.4915 17.1702 22.1404 17.3216 21.8206 17.8646C21.5354 18.3475 21.5909 18.9361 21.9766 19.3825C22.143 19.5783 22.3029 19.7656 22.329 20.0351C22.3479 20.1766 22.3358 20.3205 22.2935 20.4569C22.2513 20.5932 22.1799 20.7187 22.0842 20.8247C20.2067 22.9489 17.8914 24.3337 15.1192 24.9471C15.0467 24.9635 14.9528 24.9125 14.9012 25.0052H14.4614C14.0639 24.8225 13.8368 24.519 13.7011 24.0962C13.6152 23.8436 13.4509 23.625 13.2321 23.4724C13.0132 23.3198 12.7514 23.2411 12.4847 23.2478C12.2182 23.2531 11.9602 23.342 11.747 23.5019C11.5339 23.6619 11.3764 23.8848 11.297 24.1392C11.1664 24.5706 10.9237 24.8571 10.506 25.0052H10.01C9.89585 24.8988 9.74184 24.9145 9.6061 24.8812C6.98726 24.241 4.78869 22.9065 2.99277 20.9004C2.55815 20.4149 2.55227 19.9294 2.98233 19.4458C3.39868 18.9779 3.48352 18.3873 3.20551 17.8927C2.88901 17.3275 2.53596 17.1748 1.81485 17.3001C1.32019 17.3843 0.884257 17.1415 0.715237 16.6658C0.45583 15.9232 0.263846 15.1588 0.141612 14.3817C0.0933205 14.0828 0.114856 13.7722 0 13.4844L0.00326314 11.479Z"
                    fill="#787878"
                  />
                  <path
                    d="M19.3368 12.4951C19.3427 16.2651 16.2697 19.3427 12.4971 19.3407C11.1455 19.3401 9.82437 18.9388 8.70074 18.1876C7.57711 17.4364 6.70136 16.369 6.18416 15.1203C5.66695 13.8716 5.5315 12.4975 5.79491 11.1719C6.05833 9.84617 6.7088 8.6283 7.66412 7.67216C8.61944 6.71602 9.83674 6.06452 11.1622 5.79997C12.4877 5.53541 13.8618 5.66968 15.111 6.18582C16.3602 6.70195 17.4283 7.57678 18.1805 8.69976C18.9326 9.82275 19.335 11.1435 19.3368 12.4951ZM12.501 17.3895C13.4666 17.3895 14.4105 17.1032 15.2135 16.5669C16.0164 16.0305 16.6423 15.2682 17.0121 14.3762C17.3818 13.4842 17.4788 12.5026 17.2908 11.5554C17.1028 10.6083 16.6383 9.73816 15.9558 9.05501C15.2734 8.37185 14.4038 7.90636 13.4569 7.71734C12.5099 7.52833 11.5282 7.62429 10.6358 7.9931C9.74343 8.36191 8.9804 8.987 8.44319 9.78937C7.90598 10.5917 7.6187 11.5354 7.61766 12.501C7.61973 13.7958 8.13478 15.037 9.05004 15.9529C9.9653 16.8687 11.2062 17.3846 12.501 17.3875V17.3895Z"
                    fill="#787878"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_980_3214">
                    <rect width="25" height="25.0046" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>

            <div>
              <svg
                width="21"
                height="30"
                viewBox="0 0 21 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_980_3218)">
                  <path
                    d="M9.91466 29.8753C9.71268 29.7388 9.46704 29.7255 9.24479 29.6413C7.94091 29.1555 6.99965 27.8165 6.99731 26.4245C6.99731 25.7515 7.47457 25.2306 8.11403 25.2064C8.77377 25.1822 9.29547 25.6743 9.33056 26.3535C9.36722 27.0554 9.85695 27.5459 10.512 27.5389C11.1538 27.5319 11.6295 27.0437 11.6654 26.3551C11.7012 25.6665 12.2214 25.1854 12.8803 25.2064C13.5206 25.2298 14.0002 25.7523 13.9986 26.423C13.9986 28.0926 12.7018 29.5844 11.0501 29.8168C11.0103 29.823 10.9721 29.8269 10.9651 29.8737L9.91466 29.8753Z"
                    fill="#787878"
                  />
                  <path
                    d="M10.4989 22.8735C8.17504 22.8735 5.85115 22.8782 3.52726 22.8735C1.48957 22.8689 -0.0958186 21.2258 0.00477924 19.1943C0.0656059 17.9645 0.648915 17.0108 1.70792 16.3752C2.14619 16.1148 2.33178 15.7638 2.33178 15.2788C2.33178 13.7519 2.33178 12.2252 2.33178 10.6989C2.33178 6.5104 5.04558 3.2312 9.15996 2.45293C9.29097 2.42875 9.33932 2.38588 9.3362 2.25097C9.3284 1.90082 9.33074 1.54914 9.3362 1.20056C9.344 0.515089 9.84465 0.00195312 10.5013 0.00195312C11.1579 0.00195312 11.6593 0.514308 11.671 1.199C11.671 1.539 11.6796 1.87978 11.671 2.21978C11.6656 2.37575 11.7147 2.43033 11.8753 2.45373C13.45 2.7219 14.9116 3.44557 16.0795 4.53532C17.2475 5.62506 18.0705 7.03313 18.4469 8.58551C18.6035 9.23807 18.682 9.90693 18.6809 10.578C18.6809 12.1236 18.6809 13.67 18.6809 15.2156C18.6809 15.7358 18.8548 16.1109 19.3281 16.3854C20.6804 17.1738 21.3042 18.7857 20.8878 20.3118C20.487 21.7818 19.1067 22.8595 17.5735 22.8665C15.22 22.8774 12.8673 22.8665 10.5137 22.8665L10.4989 22.8735ZM10.4872 20.5395C12.8111 20.5395 15.1353 20.5395 17.4597 20.5395C18.0391 20.5395 18.4735 20.205 18.624 19.6684C18.7651 19.1545 18.5577 18.6414 18.0609 18.3544C16.8686 17.6658 16.3453 16.6084 16.3352 15.264C16.3281 13.8923 16.3352 12.5213 16.3352 11.1504C16.3478 10.7033 16.3334 10.2559 16.2923 9.81062C15.8626 6.28735 12.4235 3.95177 8.99854 4.86339C7.76494 5.19513 6.67386 5.92161 5.89204 6.93184C5.11021 7.94207 4.68063 9.18052 4.66893 10.4579C4.65801 12.101 4.68453 13.7449 4.66035 15.388C4.64164 16.6357 4.12617 17.6386 3.03207 18.2983C2.45812 18.6445 2.22339 19.1288 2.37701 19.6762C2.53298 20.2385 2.9728 20.5403 3.63488 20.5411L10.4872 20.5395Z"
                    fill="#787878"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_980_3218">
                    <rect width="21" height="29.8752" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>

          <span className="ml-6 mr-4 flex">
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

export default Header;
