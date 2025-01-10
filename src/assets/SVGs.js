import React from "react";

import COLORS from "constants/colors";

export const DiscoverIcon = ({ color = COLORS.GRAY }) => (
  <svg
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_2501_833)">
      <path
        d="M19.3998 15.4328C20.339 15.4328 21.2825 15.3714 22.2156 15.4442C25.4783 15.6975 27.9481 18.3702 27.9858 21.6311C28.0234 24.8973 25.5361 27.6866 22.3286 27.9741C19.0186 28.2713 16.0565 26.0228 15.5045 22.7838C15.4441 22.4297 15.4038 22.0677 15.4011 21.7091C15.3897 20.1032 15.3906 18.4964 15.3985 16.8897C15.4029 15.9798 15.9908 15.4065 16.9089 15.3995C17.7386 15.3933 18.5692 15.3986 19.3989 15.3986C19.3989 15.41 19.3989 15.4205 19.3989 15.4319L19.3998 15.4328ZM18.2003 18.2624C18.2003 19.3476 18.2003 20.4495 18.2003 21.5522C18.2003 21.7162 18.2047 21.8801 18.2152 22.044C18.2205 22.1308 18.2424 22.2167 18.2573 22.3026C18.542 24.0111 20.1138 25.2909 21.8196 25.2024C23.6814 25.1068 25.0902 23.6999 25.1953 21.8327C25.2908 20.1313 24.0169 18.4623 22.3015 18.2896C20.9628 18.1546 19.5995 18.2624 18.2003 18.2624Z"
        fill={color}
      />
      <path
        d="M8.61673 15.3994C9.45781 15.3994 10.2989 15.3915 11.14 15.402C11.9767 15.4125 12.5908 15.956 12.597 16.7721C12.611 18.6182 12.6495 20.4687 12.5505 22.3095C12.4025 25.062 10.0921 27.4945 7.36125 27.9118C3.73497 28.4658 0.534499 26.0692 0.0508793 22.4366C-0.377545 19.2231 1.94944 16.0209 5.15429 15.5317C6.29062 15.3582 7.46025 15.4029 8.61498 15.3477C8.61498 15.3652 8.61673 15.3827 8.61761 15.3994H8.61673ZM9.7443 18.2045C9.69786 18.2045 9.62427 18.2045 9.55068 18.2045C8.46866 18.2045 7.38665 18.1974 6.30464 18.2062C4.17917 18.2246 2.60127 20.0216 2.84221 22.1403C3.03583 23.8418 4.47968 25.1462 6.23192 25.2031C7.92547 25.2584 9.54717 24.0057 9.71714 22.3174C9.85206 20.9771 9.7443 19.6123 9.7443 18.2036V18.2045Z"
        fill={color}
      />
      <path
        d="M12.6089 8.42732C12.6089 9.30216 12.6115 10.177 12.6089 11.0518C12.6054 12.031 12.0359 12.6113 11.0616 12.6078C9.26997 12.6008 7.47392 12.6534 5.68663 12.549C2.93122 12.3886 0.535029 10.1095 0.103101 7.37366C-0.435714 3.96023 1.67925 0.86762 5.05407 0.136545C8.65931 -0.645372 12.2777 2.02647 12.5572 5.70727C12.6255 6.60928 12.5677 7.52093 12.5677 8.4282C12.5817 8.4282 12.5957 8.4282 12.6089 8.4282V8.42732ZM9.80528 9.74483C9.80528 8.6193 9.81404 7.47359 9.80353 6.32789C9.78425 4.17061 8.00135 2.59888 5.86273 2.8417C4.15692 3.03542 2.83923 4.51598 2.80857 6.27267C2.77966 7.95747 4.03952 9.56075 5.70415 9.71941C7.04462 9.8474 8.40611 9.74483 9.80616 9.74483H9.80528Z"
        fill={color}
      />
      <path
        d="M19.5776 12.6097C18.7033 12.6097 17.8289 12.6124 16.9545 12.6097C15.975 12.6062 15.3941 12.0364 15.3985 11.0634C15.4055 9.27081 15.3512 7.47293 15.4563 5.68556C15.6184 2.92431 17.8937 0.52859 20.6272 0.0973084C24.0537 -0.443547 27.1517 1.68744 27.871 5.08072C28.6332 8.67385 25.9602 12.281 22.298 12.558C21.3965 12.6264 20.4853 12.5685 19.5785 12.5685C19.5785 12.5826 19.5785 12.5966 19.5785 12.6106L19.5776 12.6097ZM18.2573 9.80465C19.3989 9.80465 20.5554 9.81342 21.7119 9.8029C23.8207 9.78274 25.3968 7.98836 25.1629 5.88805C24.971 4.16556 23.5298 2.86032 21.7583 2.80509C20.0718 2.7525 18.4509 4.01478 18.2836 5.70397C18.1504 7.0434 18.2564 8.40737 18.2564 9.80553L18.2573 9.80465Z"
        fill={color}
      />
    </g>
    <defs>
      <clipPath id="clip0_2501_833">
        <rect width="28" height="28" fill={COLORS.WHITE} />
      </clipPath>
    </defs>
  </svg>
);

export const ChatIcon = ({ color = COLORS.GRAY }) => (
  <svg
    viewBox="0 0 27 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_2501_826)">
      <path
        d="M23.5373 24.4182C23.5373 25.2599 23.5426 26.0631 23.5357 26.8662C23.5304 27.4766 23.1726 27.9093 22.6184 27.9903C22.2977 28.0367 22.0293 27.9093 21.7783 27.7134C20.4477 26.6766 19.1179 25.6391 17.7782 24.6157C17.6326 24.504 17.4234 24.4285 17.2429 24.4269C15.5878 24.4127 13.9327 24.4198 12.2777 24.4182C10.5354 24.4167 9.35415 23.1966 9.35036 21.3952C9.34884 20.4827 9.35036 19.571 9.35036 18.5988C9.23664 18.679 9.15475 18.7317 9.07742 18.7923C8.01067 19.6214 6.94696 20.456 5.87642 21.2788C5.25548 21.7563 4.45636 21.5337 4.22588 20.8218C4.17053 20.6495 4.15992 20.456 4.1584 20.2711C4.15158 19.3783 4.15537 18.4855 4.15537 17.5919C4.15537 17.4857 4.15537 17.3803 4.15537 17.2348C3.77401 17.2348 3.41767 17.245 3.06133 17.2332C1.59199 17.1836 0.406213 16.1705 0.0832317 14.6837C0.031676 14.4462 0.0058982 14.1976 0.0058982 13.9545C0.00134917 10.4021 -0.0047162 6.8497 0.0058982 3.29808C0.0104472 1.69415 0.98773 0.430039 2.46086 0.0878564C2.72622 0.0264995 3.00447 0.00447394 3.27665 0.00368732C8.01522 -0.000245821 12.7538 -0.00103245 17.4916 0.00132743C19.0913 0.00211406 20.3294 0.975959 20.6744 2.50988C20.7381 2.79307 20.757 3.09277 20.7578 3.38461C20.7646 5.36691 20.7616 7.34921 20.7616 9.33151V9.70123C20.873 9.70123 20.9724 9.70123 21.0717 9.70123C22.0929 9.70123 23.115 9.69808 24.1362 9.70123C25.7724 9.70673 26.9801 10.9244 26.9892 12.622C27.0044 15.5758 27.0036 18.5295 26.9892 21.4825C26.9809 23.1895 25.7663 24.4104 24.1142 24.4182C23.9353 24.419 23.7571 24.4182 23.5373 24.4182ZM6.23352 18.2975C6.35103 18.2133 6.42079 18.1661 6.48751 18.1142C7.63689 17.219 8.78931 16.3293 9.93112 15.4247C10.2397 15.1801 10.5657 15.0684 10.9524 15.07C13.1556 15.0778 15.3589 15.0747 17.5621 15.0731C18.2521 15.0731 18.6797 14.6578 18.6804 13.9569C18.6865 10.3958 18.6865 6.83476 18.6804 3.27291C18.6789 2.58618 18.249 2.16455 17.5826 2.16455C12.7788 2.16298 7.9758 2.16298 3.17202 2.16455C2.5162 2.16455 2.08784 2.60742 2.08784 3.28786C2.08556 6.83948 2.08556 10.3903 2.08784 13.9419C2.08784 14.642 2.51014 15.0692 3.19249 15.0731C3.82632 15.0763 4.4594 15.07 5.09323 15.0755C5.81425 15.081 6.232 15.5223 6.23352 16.2727C6.23503 16.9288 6.23352 17.5848 6.23352 18.2975ZM21.4531 24.7651C21.4531 24.2751 21.45 23.8566 21.4531 23.4381C21.4591 22.7073 21.8837 22.2637 22.5835 22.2582C23.0748 22.2542 23.5668 22.2582 24.0581 22.2574C24.6722 22.255 24.9088 22.0064 24.9096 21.3622C24.9096 18.4981 24.9096 15.634 24.9096 12.7706C24.9096 12.0989 24.6692 11.8471 24.0217 11.8456C23.0293 11.8432 22.0368 11.8448 21.0436 11.8456C20.9542 11.8456 20.864 11.8542 20.7616 11.8597C20.7616 12.552 20.7624 13.208 20.7616 13.8648C20.7578 15.8424 19.4227 17.2285 17.5136 17.2379C16.1239 17.245 14.7341 17.2552 13.3452 17.2615C12.7144 17.2647 12.0836 17.2615 11.4376 17.2615C11.4293 17.4039 11.4202 17.4904 11.4202 17.5762C11.4194 18.8411 11.4171 20.1067 11.4202 21.3716C11.4217 22.0001 11.6734 22.2527 12.2905 22.2534C14.0396 22.2542 15.7888 22.2645 17.5371 22.2464C18.0072 22.2416 18.3938 22.3706 18.7646 22.6696C19.6296 23.3665 20.5144 24.0359 21.4531 24.7644V24.7651Z"
        fill={color}
      />
      <path
        d="M15.5596 7.52808H5.22266V5.41992H15.5596V7.52808Z"
        fill={color}
      />
      <path
        d="M10.361 11.8312H5.2168V9.7207H10.361V11.8312Z"
        fill={color}
      />
    </g>
    <defs>
      <clipPath id="clip0_2501_826">
        <rect width="27" height="28" fill={COLORS.WHITE} />
      </clipPath>
    </defs>
  </svg>
);

export const PinIcon = ({ fillColor = null, color = COLORS.GRAY }) => (
  <svg
    viewBox="0 0 13 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_2501_1102)">
      <path
        d="M5.60807 11.1936C5.50488 11.1936 5.43124 11.1936 5.3571 11.1936C3.88233 11.1936 2.40757 11.1796 0.933304 11.2001C0.31765 11.2086 -0.0214859 10.7868 0.00105633 10.2433C0.0741935 8.4645 0.715396 6.93563 1.99129 5.6948C2.29836 5.39624 2.47469 5.10119 2.40406 4.67389C2.38903 4.58272 2.39655 4.48654 2.40256 4.39336C2.43662 3.87138 2.36349 3.39399 2.08897 2.91609C1.72779 2.28741 1.61759 1.56556 1.60707 0.838698C1.60005 0.347777 1.93218 0.00313087 2.42059 0.00262993C5.07607 -0.000876644 7.73205 -0.000876644 10.3875 0.00262993C10.8759 0.00313087 11.2141 0.347777 11.2016 0.837195C11.1785 1.75141 10.9696 2.61553 10.4707 3.39699C10.4301 3.46011 10.4116 3.54778 10.4106 3.62392C10.4051 4.10482 10.4121 4.58622 10.4046 5.06713C10.4021 5.20889 10.4401 5.31209 10.5453 5.41027C11.189 6.0119 11.7396 6.68516 12.1288 7.48266C12.5716 8.38986 12.7945 9.34815 12.8046 10.356C12.8096 10.856 12.4679 11.1911 11.95 11.1921C10.4501 11.1951 8.95084 11.1931 7.45103 11.1931C7.37739 11.1931 7.30325 11.1931 7.20156 11.1931C7.20156 11.2833 7.20156 11.3554 7.20156 11.4276C7.20156 12.6774 7.20607 13.9267 7.19905 15.1766C7.19555 15.8073 6.56236 16.1935 6.02635 15.8984C5.7313 15.7356 5.60506 15.4746 5.60607 15.138C5.61007 13.9072 5.60757 12.6759 5.60757 11.4451C5.60757 11.3709 5.60757 11.2973 5.60757 11.1931L5.60807 11.1936ZM3.30625 1.60213C3.40394 1.99537 3.51665 2.34853 3.77513 2.63557C3.93343 2.8114 4.00607 3.01378 4.00556 3.25022C4.00306 4.01215 4.00206 4.77408 4.00607 5.53601C4.00757 5.802 3.9174 6.02091 3.72754 6.20576C3.48208 6.44571 3.23913 6.68917 2.99968 6.93563C2.43312 7.52023 2.03587 8.20551 1.80594 8.98597C1.74883 9.17984 1.71277 9.37971 1.66417 9.58961H11.1249C11.1214 9.53651 11.1229 9.49292 11.1149 9.45185C10.9626 8.6799 10.6666 7.96706 10.1661 7.35942C9.8375 6.96068 9.4648 6.5975 9.10112 6.2288C8.90024 6.02542 8.79855 5.7985 8.80156 5.51046C8.80907 4.81115 8.81308 4.11133 8.80005 3.41202C8.79404 3.08341 8.87069 2.80889 9.09411 2.55542C9.32604 2.29192 9.42372 1.95629 9.49686 1.60213H3.30625Z"
        fill={color}
      />
      <path
        d="M3 5.5V2.5L2.5 1L3.5 0.5L8.5 1L10.5 1.5L9.5 4L10 5.5L11 7.5L11.5 10L8 10.5L0.5 10L1 7.5L3 5.5Z"
        fill={fillColor}
      />
    </g>
    <defs>
      <clipPath id="clip0_2501_1102">
        <rect width="12.805" height="16" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export const AddIcon = ({ fillColor = COLORS.SKY_BLUE_DARKER }) => (
  <svg
    width="800px"
    height="800px"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    stroke={fillColor}
  >
    <g id="SVGRepo_bgCarrier" strokeWidth="0" />
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <g id="SVGRepo_iconCarrier">
      {" "}
      <path
        d="M6 12H18M12 6V18"
        stroke={fillColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />{" "}
    </g>
  </svg>
);

export const SentimeterIcon = ({ fillColor = COLORS.WHITE }) => (
  <svg
    width="122"
    height="36"
    viewBox="0 0 122 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M97.0466 36.0049C95.5929 34.2802 94.2952 32.925 93.2029 31.422C91.5192 29.106 89.3839 28.2929 86.5175 28.3093C64.4327 28.3996 42.3561 28.3586 20.2795 28.3504C18.2674 28.3504 16.2552 28.3996 14.2512 28.3257C5.93962 28.0301 -0.113371 21.8539 0.00161079 13.8298C0.10838 5.94526 6.1778 0.048311 14.4565 0.0318849C45.5099 -0.00918015 76.5633 -0.0173931 107.617 0.048311C115.945 0.0647371 122.293 6.68443 121.99 14.7332C121.735 21.6157 116.068 27.8822 108.84 28.1204C104.364 28.2682 101.523 30.0258 99.1984 33.4342C98.6728 34.2062 97.9993 34.8715 97.0466 36.0049ZM96.6934 31.6191C97.4737 30.9785 97.8022 30.8061 97.9911 30.535C100.373 27.0527 103.56 25.1966 107.888 25.5579C108.348 25.599 108.824 25.4922 109.292 25.4183C115.14 24.4574 119.246 19.5953 119.115 13.8051C118.992 8.1792 114.803 3.54706 109.07 2.75861C107.789 2.58613 106.475 2.60256 105.186 2.60256C75.6791 2.59708 46.1752 2.59708 16.674 2.60256C15.3846 2.60256 14.0705 2.57792 12.7893 2.75039C7.09766 3.5142 2.84331 8.18741 2.68727 13.7723C2.52301 19.4885 6.71165 24.4902 12.5182 25.3855C14.0212 25.6236 15.5735 25.599 17.1093 25.599C39.1695 25.6154 61.2379 25.6976 83.3062 25.5415C88.7761 25.5087 93.7614 25.7961 96.6934 31.6191Z"
      fill={fillColor}
    />
    <path
      d="M17.4321 10.7326C18.1768 11.3568 18.6422 12.1918 18.8284 13.2376H16.3973C16.2987 12.7448 16.077 12.3505 15.732 12.0549C15.3871 11.7592 14.9381 11.6114 14.3851 11.6114C13.9416 11.6114 13.5994 11.7154 13.3585 11.9235C13.1121 12.137 12.9889 12.4217 12.9889 12.7776C12.9889 13.0569 13.0875 13.2841 13.2846 13.4593C13.4817 13.629 13.7253 13.7632 14.0155 13.8617C14.3112 13.9603 14.7355 14.078 15.2885 14.2149C16.066 14.3846 16.6957 14.5653 17.1775 14.757C17.6648 14.9486 18.0837 15.2497 18.4341 15.6604C18.7845 16.071 18.9598 16.6268 18.9598 17.3276C18.9598 18.1982 18.6175 18.9045 17.9331 19.4466C17.2542 19.9887 16.3371 20.2597 15.1818 20.2597C13.8513 20.2597 12.789 19.9613 11.9951 19.3645C11.1957 18.7676 10.7084 17.9162 10.5332 16.8102H13.0217C13.082 17.3139 13.3037 17.7109 13.687 18.0011C14.0648 18.2913 14.5631 18.4364 15.1818 18.4364C15.6253 18.4364 15.962 18.3269 16.192 18.1079C16.4274 17.8943 16.5451 17.6151 16.5451 17.2701C16.5451 16.9745 16.4438 16.7363 16.2412 16.5556C16.0387 16.3694 15.7868 16.2271 15.4857 16.1285C15.1845 16.03 14.7574 15.9123 14.2044 15.7754C13.4433 15.6056 12.8246 15.4304 12.3483 15.2497C11.8774 15.0745 11.4722 14.7898 11.1328 14.3956C10.7988 14.0014 10.6318 13.462 10.6318 12.7776C10.6318 11.8906 10.9685 11.1706 11.642 10.6176C12.3154 10.0646 13.249 9.78809 14.4426 9.78809C15.6855 9.78809 16.682 10.1029 17.4321 10.7326Z"
      fill={fillColor}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M30.4007 15.5208H22.9187C22.957 16.4297 23.2034 17.1004 23.6579 17.533C24.1123 17.96 24.6763 18.1736 25.3497 18.1736C25.952 18.1736 26.453 18.0257 26.8527 17.7301C27.2524 17.4344 27.5098 17.0347 27.6247 16.531H30.3679C30.231 17.2482 29.9408 17.8889 29.4973 18.4528C29.0593 19.0168 28.4926 19.4575 27.7972 19.7751C27.1018 20.0982 26.3298 20.2597 25.4811 20.2597C24.4846 20.2597 23.6004 20.0461 22.8283 19.6191C22.0563 19.1975 21.454 18.5924 21.0215 17.804C20.5944 17.021 20.3809 16.0929 20.3809 15.0198C20.3809 13.9521 20.5944 13.0213 21.0215 12.2274C21.454 11.4389 22.0563 10.8339 22.8283 10.4123C23.6004 9.99615 24.4846 9.78809 25.4811 9.78809C26.4886 9.78809 27.3701 9.99615 28.1257 10.4123C28.8813 10.8339 29.4645 11.4088 29.8751 12.137C30.2912 12.8707 30.4993 13.703 30.4993 14.6338C30.4993 14.8911 30.4664 15.1868 30.4007 15.5208ZM27.2223 12.482C26.7514 12.0494 26.171 11.8331 25.4811 11.8331C24.7803 11.8331 24.1917 12.0494 23.7153 12.482C23.2335 12.909 22.968 13.5414 22.9187 14.3792H27.8793C27.9177 13.5414 27.6987 12.909 27.2223 12.482Z"
      fill={fillColor}
    />
    <path
      d="M41.2428 10.9295C41.9436 11.707 42.294 12.7939 42.294 14.1901V20.1281H39.7151V14.4858C39.7151 13.6754 39.5043 13.0457 39.0827 12.5968C38.6666 12.1478 38.0972 11.9233 37.3744 11.9233C36.6353 11.9233 36.0439 12.1642 35.6004 12.646C35.1569 13.1224 34.9352 13.8095 34.9352 14.7075V20.1281H32.3398V9.91932H34.9352V11.9644C35.2089 11.2745 35.6552 10.7379 36.2739 10.3546C36.8926 9.96586 37.6099 9.77148 38.4257 9.77148C39.6029 9.77148 40.5419 10.1575 41.2428 10.9295Z"
      fill={fillColor}
    />
    <path
      d="M50.0307 17.8941V20.128H48.6673C47.5284 20.128 46.6524 19.8515 46.0391 19.2985C45.4314 18.7455 45.1275 17.8229 45.1275 16.5307V12.1121H43.7148V9.91926H45.1275V7.38965H47.731V9.91926H50.0142V12.1121H47.731V16.5718C47.731 17.0646 47.8296 17.4095 48.0267 17.6066C48.2238 17.7983 48.5551 17.8941 49.0205 17.8941H50.0307Z"
      fill={fillColor}
    />
    <path
      d="M52.0412 5.96063C52.3368 5.69781 52.7228 5.56641 53.1992 5.56641C53.681 5.56641 54.0698 5.69781 54.3654 5.96063C54.6611 6.22892 54.8089 6.57113 54.8089 6.98726C54.8089 7.39243 54.6611 7.72643 54.3654 7.98925C54.0698 8.25754 53.681 8.39168 53.1992 8.39168C52.7228 8.39168 52.3368 8.25754 52.0412 7.98925C51.7455 7.72643 51.5977 7.39243 51.5977 6.98726C51.5977 6.57113 51.7455 6.22892 52.0412 5.96063ZM54.4886 9.9193V20.1281H51.8933V9.9193H54.4886Z"
      fill={fillColor}
    />
    <path
      d="M72.5254 10.9453C73.2481 11.7119 73.6095 12.8015 73.6095 14.2141V20.1275H71.507V14.4359C71.507 13.5488 71.2852 12.8617 70.8417 12.3744C70.3982 11.8926 69.7905 11.6516 69.0184 11.6516C68.1917 11.6516 67.5374 11.9117 67.0555 12.4319C66.5682 12.9575 66.3246 13.7213 66.3246 14.7233V20.1275H64.222V14.4359C64.222 13.5488 64.0003 12.8617 63.5568 12.3744C63.1188 11.8926 62.511 11.6516 61.7335 11.6516C60.9122 11.6516 60.2579 11.9117 59.7706 12.4319C59.2888 12.9575 59.0478 13.7213 59.0478 14.7233V20.1275H56.9453V9.97618H59.0478V12.0951C59.3052 11.356 59.735 10.7893 60.3373 10.395C60.9396 10.0008 61.6459 9.80371 62.4562 9.80371C63.3049 9.80371 64.0386 10.0145 64.6573 10.4361C65.276 10.8522 65.7278 11.4545 66.0125 12.243C66.3081 11.4764 66.7818 10.8796 67.4333 10.4525C68.0849 10.02 68.8213 9.80371 69.6426 9.80371C70.8472 9.80371 71.8081 10.1842 72.5254 10.9453Z"
      fill={fillColor}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M85.4193 15.4634H77.6005C77.6389 16.5092 77.9291 17.284 78.4711 17.7877C79.0132 18.2914 79.6839 18.5433 80.4833 18.5433C81.1787 18.5433 81.77 18.3653 82.2573 18.0094C82.7446 17.6535 83.043 17.1799 83.1525 16.5886H85.4029C85.266 17.3004 84.9813 17.9328 84.5487 18.4858C84.1217 19.0388 83.5632 19.4741 82.8733 19.7917C82.1889 20.1038 81.4223 20.2598 80.5736 20.2598C79.5881 20.2598 78.7175 20.049 77.9619 19.6274C77.2063 19.2113 76.615 18.6117 76.1879 17.8288C75.7553 17.0403 75.5391 16.1122 75.5391 15.0445C75.5391 13.9878 75.7553 13.0652 76.1879 12.2768C76.615 11.4883 77.2063 10.886 77.9619 10.4699C78.7175 10.0538 79.5881 9.8457 80.5736 9.8457C81.5647 9.8457 82.4325 10.051 83.1772 10.4617C83.9218 10.8723 84.494 11.4363 84.8937 12.1536C85.2934 12.8763 85.4932 13.6784 85.4932 14.56C85.4932 14.9049 85.4686 15.2061 85.4193 15.4634ZM83.0293 12.8352C82.7775 12.3917 82.4353 12.0605 82.0027 11.8415C81.5647 11.6279 81.0883 11.5212 80.5736 11.5212C79.7469 11.5212 79.057 11.773 78.504 12.2768C77.951 12.7805 77.6498 13.5251 77.6005 14.5107H83.3743C83.3962 13.8427 83.2812 13.2842 83.0293 12.8352Z"
      fill={fillColor}
    />
    <path
      d="M92.6229 18.3049V20.1282H91.3335C90.2548 20.1282 89.4363 19.8681 88.8778 19.3479C88.3193 18.8223 88.04 17.9517 88.04 16.7362V11.7591H86.5781V9.97687H88.04V7.44727H90.159V9.97687H92.6065V11.7591H90.159V16.7773C90.159 17.3522 90.2658 17.7491 90.4793 17.9681C90.6928 18.1926 91.0706 18.3049 91.6127 18.3049H92.6229Z"
      fill={fillColor}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M103.964 15.4634H96.1454C96.1838 16.5092 96.4712 17.284 97.0078 17.7877C97.5499 18.2914 98.2206 18.5433 99.02 18.5433C99.7208 18.5433 100.315 18.3653 100.802 18.0094C101.284 17.6535 101.58 17.1799 101.689 16.5886H103.94C103.808 17.3004 103.526 17.9328 103.094 18.4858C102.661 19.0388 102.103 19.4741 101.418 19.7917C100.728 20.1038 99.959 20.2598 99.1104 20.2598C98.1303 20.2598 97.2624 20.049 96.5068 19.6274C95.7512 19.2113 95.1572 18.6117 94.7246 17.8288C94.2975 17.0403 94.084 16.1122 94.084 15.0445C94.084 13.9878 94.2975 13.0652 94.7246 12.2768C95.1572 11.4883 95.7512 10.886 96.5068 10.4699C97.2624 10.0538 98.1303 9.8457 99.1104 9.8457C100.107 9.8457 100.977 10.051 101.722 10.4617C102.467 10.8723 103.039 11.4363 103.439 12.1536C103.838 12.8763 104.038 13.6784 104.038 14.56C104.038 14.9049 104.014 15.2061 103.964 15.4634ZM101.574 12.8352C101.322 12.3917 100.977 12.0605 100.539 11.8415C100.107 11.6279 99.6305 11.5212 99.1104 11.5212C98.2891 11.5212 97.6019 11.773 97.0489 12.2768C96.4959 12.7805 96.1947 13.5251 96.1454 14.5107H101.911C101.938 13.8427 101.826 13.2842 101.574 12.8352Z"
      fill={fillColor}
    />
    <path
      d="M109.639 10.3868C110.275 9.99809 111.011 9.80371 111.849 9.80371V12.0951H111.225C110.299 12.0951 109.557 12.3169 108.999 12.7604C108.44 13.2094 108.161 13.9513 108.161 14.9861V20.1275H106.059V9.97618H108.161V11.9637C108.506 11.3012 108.999 10.7756 109.639 10.3868Z"
      fill={fillColor}
    />
  </svg>
);

export const ArrowDownIcon = ({ fillColor = COLORS.WHITE }) => (
  <svg
    width="800px"
    height="800px"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="SVGRepo_bgCarrier" strokeWidth="0" />
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <g id="SVGRepo_iconCarrier">
      {" "}
      <path
        d="M7 10L12 15L17 10"
        stroke={fillColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />{" "}
    </g>
  </svg>
);

export const AvatarIcon = ({ fillColor = COLORS.SKY_BLUE_DARK }) => (
  <svg
    width="60"
    height="60"
    viewBox="0 0 60 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="30"
      cy="30"
      r="29"
      fill={COLORS.WHITE}
      stroke={fillColor}
      strokeWidth="2"
    />
    <mask
      id="mask0_2501_719"
      style={{ maskType: "alpha" }}
      maskUnits="userSpaceOnUse"
      x="2"
      y="3"
      width="56"
      height="56"
    >
      <circle cx="30" cy="31" r="28" fill="#E3F2FF" />
    </mask>
    <g mask="url(#mask0_2501_719)">
      <path
        d="M30.452 48.801C34.9504 48.9871 35.4037 45.4188 35.3868 43.846C33.8282 43.3649 32.2049 43.1265 30.5738 43.1392C28.9641 43.1307 27.3619 43.3586 25.8184 43.8156C25.7101 45.2936 25.9706 48.6184 30.452 48.801Z"
        fill="#C66767"
      />
      <path
        d="M35.3871 43.8453C35.3871 45.4316 34.9508 48.9864 30.4524 48.8003C25.954 48.6143 25.7173 45.293 25.8187 43.8115C15.5536 46.8725 13 59.4003 13 59.4003H46.6906C46.6906 59.4003 45.2701 46.9739 35.3871 43.8453Z"
        fill={fillColor}
      />
      <path
        d="M21.189 20.7953C21.189 20.7953 17.9116 24.1776 21.189 27.5599C24.4665 30.9421 40.4442 27.3907 40.4442 27.3907C40.4442 27.3907 42.8118 22.7266 38.9966 19.4154C35.1814 16.1042 26.2861 17.1324 26.1711 17.1324C26.0561 17.1324 21.189 20.7953 21.189 20.7953Z"
        fill="#823F0E"
      />
      <path
        d="M20.227 31.4461C21.6877 31.4461 22.8719 30.2619 22.8719 28.8012C22.8719 27.3404 21.6877 26.1562 20.227 26.1562C18.7662 26.1562 17.582 27.3404 17.582 28.8012C17.582 30.2619 18.7662 31.4461 20.227 31.4461Z"
        fill="#CE8282"
      />
      <path
        d="M39.8715 31.4461C41.3322 31.4461 42.5164 30.2619 42.5164 28.8012C42.5164 27.3404 41.3322 26.1562 39.8715 26.1562C38.4107 26.1562 37.2266 27.3404 37.2266 28.8012C37.2266 30.2619 38.4107 31.4461 39.8715 31.4461Z"
        fill="#CE8282"
      />
      <path
        d="M33.4667 38.4038L33.0203 32.5322L28.4305 33.1613L27.6797 41.7523C28.824 41.6269 29.9297 41.2644 30.9261 40.6879C31.9225 40.1113 32.7878 39.3334 33.4667 38.4038Z"
        fill="#D19582"
      />
      <path
        d="M20.9678 26.2817C20.8916 27.3599 20.9359 28.4433 21.0997 29.5117C21.4075 32.2886 22.7367 34.7069 25.2531 36.0496C27.7695 37.3924 31.2228 37.8727 33.9117 36.7667C34.9266 36.3712 35.8504 35.7732 36.6267 35.0091C37.4029 34.2451 38.0155 33.3309 38.427 32.3224C39.3639 29.9548 39.374 26.9717 39.2489 24.435C38.7788 15.0458 31.1315 15.1845 31.1315 15.1845C31.1315 15.1845 20.9306 14.3998 20.9678 26.2817Z"
        fill="#E5B5A3"
      />
      <path
        d="M27.6781 41.7484L27.3398 45.5297C27.3398 45.5297 27.4751 47.417 30.5327 47.7789C33.5903 48.1408 33.9522 44.9446 33.9522 44.9446L33.455 38.4033C32.7768 39.3311 31.913 40.1077 30.9184 40.6836C29.9239 41.2594 28.8204 41.6221 27.6781 41.7484Z"
        fill="#E5B5A3"
      />
      <path
        d="M26.3836 28.1727C26.3836 28.6902 26.1739 29.1096 25.9135 29.1096C25.6531 29.1096 25.4434 28.6902 25.4434 28.1727C25.4434 27.6552 25.6531 27.2324 25.9135 27.2324C26.1739 27.2324 26.3836 27.6552 26.3836 28.1727Z"
        fill="#823F0E"
      />
      <path
        d="M35.0789 28.3309C35.0789 28.8484 34.8659 29.2712 34.6088 29.2712C34.3517 29.2712 34.1387 28.8484 34.1387 28.3309C34.1387 27.8134 34.3484 27.3906 34.6088 27.3906C34.8692 27.3906 35.0789 27.8134 35.0789 28.3309Z"
        fill="#823F0E"
      />
      <path
        d="M30.195 28.8115L29.6471 29.1497C29.4848 29.2614 29.3089 29.4169 29.2886 29.5286C29.2886 29.5759 29.3089 29.63 29.39 29.6977C29.4538 29.7616 29.5313 29.8102 29.6167 29.8397C29.7149 29.8627 29.8168 29.8656 29.9162 29.8482C30.0156 29.8307 30.1105 29.7933 30.195 29.7383C30.1293 29.839 30.0371 29.9198 29.9285 29.9717C29.8199 30.0236 29.6992 30.0446 29.5795 30.0325C29.455 30.0133 29.3381 29.9607 29.2412 29.8803C29.1793 29.8395 29.1288 29.7837 29.0945 29.718C29.0602 29.6523 29.0432 29.579 29.0451 29.5049C29.0713 29.3695 29.1473 29.2488 29.2581 29.1667C29.3505 29.0944 29.4516 29.0342 29.5592 28.9874C29.7595 28.8929 29.9746 28.8334 30.195 28.8115Z"
        fill="#823F0E"
      />
      <path
        d="M28.8906 31.0029C29.0948 31.1338 29.3098 31.247 29.5333 31.3411C29.747 31.4353 29.9764 31.4892 30.2097 31.5001C30.4367 31.5158 30.6638 31.4727 30.8692 31.3749C31.088 31.2722 31.2945 31.1451 31.4848 30.9961C31.4188 31.1045 31.3441 31.2074 31.2616 31.3039C31.1722 31.3987 31.0711 31.4817 30.9606 31.5508C30.7344 31.6993 30.4662 31.7705 30.1962 31.7537C29.9359 31.7354 29.6833 31.6584 29.4571 31.5283C29.231 31.3982 29.0373 31.2186 28.8906 31.0029Z"
        fill="#823F0E"
      />
      <path
        d="M25.4427 31.6832C25.9881 31.6832 26.4303 31.2411 26.4303 30.6956C26.4303 30.1502 25.9881 29.708 25.4427 29.708C24.8973 29.708 24.4551 30.1502 24.4551 30.6956C24.4551 31.2411 24.8973 31.6832 25.4427 31.6832Z"
        fill="#CE8282"
      />
      <path
        d="M34.6068 31.9909C35.1522 31.9909 35.5944 31.5487 35.5944 31.0032C35.5944 30.4578 35.1522 30.0156 34.6068 30.0156C34.0613 30.0156 33.6191 30.4578 33.6191 31.0032C33.6191 31.5487 34.0613 31.9909 34.6068 31.9909Z"
        fill="#CE8282"
      />
      <path
        d="M29.3291 32.1055C29.3291 32.1055 30.7395 32.5283 31.3584 32.1055C31.3584 33.482 31.2671 34.7707 30.8477 34.6625C30.4283 34.5542 30.4418 33.8812 30.4418 33.8812C30.4418 33.8812 30.4858 35.1326 30.0157 35.0244C29.5455 34.9161 29.5252 33.482 29.5252 33.482C29.5252 33.482 29.5252 34.3716 28.9807 34.1585C28.4361 33.9454 29.3291 32.1055 29.3291 32.1055Z"
        fill="#823F0E"
      />
      <path
        d="M27.9766 28.3315C27.9766 28.3315 30.4524 26.61 32.3058 28.3315"
        stroke="white"
        strokeMiterlimit="10"
      />
      <path
        d="M33.1309 26.1565C33.2482 25.8359 33.4548 25.5554 33.7261 25.3481C34.0108 25.1297 34.3502 24.9939 34.707 24.9558C35.0703 24.9115 35.4383 24.9863 35.7555 25.1689C35.9057 25.2544 36.0434 25.3603 36.1647 25.4834C36.2797 25.6098 36.3775 25.7508 36.4556 25.9028C36.1174 25.8183 35.8434 25.7067 35.5661 25.6661C35.3061 25.6102 35.0387 25.5976 34.7746 25.6289C34.2033 25.721 33.6491 25.8989 33.1309 26.1565Z"
        fill="#823F0E"
      />
      <path
        d="M27.3512 25.9033C26.8793 25.5071 26.2756 25.303 25.6601 25.3317C25.3564 25.3477 25.0545 25.3873 24.757 25.4501C24.6014 25.4941 24.4357 25.5178 24.2733 25.5583C24.1036 25.6043 23.9306 25.6371 23.7559 25.6564C23.868 25.5149 23.9913 25.3826 24.1245 25.2607C24.2653 25.1486 24.4134 25.0457 24.5676 24.9529C24.8971 24.7721 25.2642 24.6702 25.6398 24.6553C26.0355 24.6368 26.4263 24.7485 26.7525 24.9732C26.9111 25.0786 27.0461 25.2156 27.1491 25.3757C27.2522 25.5357 27.321 25.7154 27.3512 25.9033Z"
        fill="#823F0E"
      />
      <path
        d="M27.9808 25.3447H20.9355V30.4722H27.9808V25.3447Z"
        stroke={COLORS.WHITE}
        strokeMiterlimit="10"
      />
      <path
        d="M39.3079 25.5107H32.3066V30.6382H39.3079V25.5107Z"
        stroke={COLORS.WHITE}
        strokeMiterlimit="10"
      />
      <path
        d="M39.7208 24.4417C39.4637 23.6942 39.3825 22.8994 39.1424 22.1384C38.9625 21.3588 38.5133 20.6678 37.8741 20.1868C37.1757 19.7872 36.3564 19.6539 35.5674 19.8114C33.4602 20.109 31.6439 21.4112 29.6349 22.1214C27.3993 22.9041 24.9704 22.9421 22.7114 22.2297C21.9184 22.0011 21.1782 21.6184 20.5332 21.1034C19.9003 20.5512 19.4355 19.8321 19.1921 19.0282C18.9486 18.2243 18.9364 17.3682 19.1567 16.5576C19.2253 16.2614 19.3725 15.9892 19.5828 15.7696C19.6895 15.6616 19.8256 15.5874 19.9741 15.5561C20.1226 15.5249 20.2771 15.5379 20.4182 15.5937C20.8546 15.8068 20.8782 16.3716 20.9526 16.7876C21.0541 17.3389 21.2165 18.1202 21.602 18.5396C21.8997 18.0492 21.7306 17.2476 21.7914 16.6895C21.8054 16.3642 21.8848 16.0449 22.0249 15.7509C22.1649 15.4569 22.3627 15.194 22.6066 14.9781C22.7201 14.883 22.8644 14.8325 23.0124 14.8361C23.3946 14.8834 23.4386 15.4077 23.4183 15.7899C23.3895 16.4718 23.4976 17.1527 23.7362 17.7922C23.699 16.6185 23.6923 15.3468 24.389 14.4099C24.4555 14.2906 24.5542 14.1925 24.6738 14.1267C24.7934 14.0609 24.9292 14.0301 25.0655 14.0379C25.3631 14.1021 25.4916 14.464 25.495 14.7684C25.453 15.0729 25.4749 15.3827 25.5593 15.6783C25.6464 15.8331 25.7747 15.9609 25.9298 16.0474C26.085 16.134 26.2611 16.1759 26.4387 16.1687C26.7889 16.1501 27.1328 16.0675 27.4533 15.9252C29.9542 14.9658 32.5692 14.336 35.2325 14.0514C36.2472 13.9601 37.3363 13.9465 38.2766 14.3896C39.1006 14.8014 39.7723 15.4648 40.1943 16.2837C40.6086 17.1033 40.8993 17.9798 41.0568 18.8846C41.4041 20.5935 41.5516 22.3369 41.4965 24.0798C41.4965 24.5398 41.625 25.9197 40.9079 25.8859C40.316 25.8622 39.8764 24.905 39.7208 24.4417Z"
        fill="#823F0E"
      />
    </g>
  </svg>
);

export const RightAngleIcon = ({ fillColor = COLORS.WHITE }) => (
  <svg
    width="11"
    height="11"
    viewBox="0 0 11 11"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.84739 9.26319C2.84739 9.07792 2.91783 8.89266 3.05919 8.7513L6.40744 5.40353L3.05919 2.05576C2.77695 1.77304 2.77695 1.31471 3.05919 1.03199C3.34191 0.749753 3.80025 0.749753 4.08296 1.03199L7.94262 4.89164C8.22486 5.17436 8.22486 5.6327 7.94262 5.91542L4.08296 9.77507C3.80025 10.0573 3.34191 10.0573 3.05919 9.77507C2.91783 9.63371 2.84739 9.44845 2.84739 9.26319Z"
      fill="#AFAFAF"
    />
  </svg>
);

export const LeftAngleIcon = ({ fillColor = COLORS.WHITE }) => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.1175 2.36785C11.1175 2.62048 11.0215 2.87312 10.8287 3.06588L6.26294 7.63102L10.8287 12.1962C11.2136 12.5817 11.2136 13.2067 10.8287 13.5922C10.4432 13.9771 9.8182 13.9771 9.43268 13.5922L4.16951 8.32904C3.78464 7.94352 3.78464 7.31852 4.16951 6.93299L9.43268 1.66982C9.8182 1.28496 10.4432 1.28496 10.8287 1.66982C11.0215 1.86259 11.1175 2.11522 11.1175 2.36785Z"
      fill="#CCCCCC"
    />
  </svg>
);

export const UserIcon = ({ fillColor = COLORS.DARK_BLUE }) => (
  <svg
    width="34"
    height="33"
    viewBox="0 0 34 33"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_2501_1716)">
      <path
        d="M17.477 33.0002H15.5427C15.4491 32.9817 15.3554 32.9591 15.261 32.9445C14.3609 32.8049 13.4462 32.7298 12.5631 32.5183C4.09549 30.4896 -1.36092 21.9792 0.296429 13.4116C0.985039 9.84985 2.64884 6.81367 5.3274 4.37407C9.14906 0.893078 13.6658 -0.494637 18.7831 0.155224C22.0429 0.569359 24.9144 1.90702 27.3775 4.08264C30.278 6.64495 32.092 9.83209 32.7596 13.6554C32.8678 14.2754 32.9299 14.9034 33.0131 15.5283V17.4625C32.9929 17.5763 32.9695 17.6893 32.9541 17.804C32.8758 18.3998 32.8298 19.0012 32.7176 19.5897C32.0928 22.8769 30.5969 25.7178 28.2453 28.092C25.779 30.5816 22.8163 32.1494 19.3547 32.7459C18.7331 32.8533 18.1034 32.9163 17.4778 33.0002H17.477ZM15.8212 18.6968C15.504 18.7348 15.1851 18.7663 14.8686 18.8139C14.5506 18.8615 14.2309 18.9075 13.9193 18.9858C10.0694 19.953 7.3569 22.2618 5.76979 25.9018C5.67453 26.1206 5.69229 26.2578 5.86263 26.433C9.29518 29.9544 13.4494 31.5059 18.3408 30.9344C21.846 30.5243 24.7829 28.942 27.2015 26.3813C27.3193 26.257 27.3557 26.1569 27.2814 25.9882C25.4287 21.7556 22.2222 19.333 17.6336 18.7509C17.4858 18.7324 17.3389 18.7162 17.1912 18.6993C20.4478 18.2157 22.533 15.3991 22.2884 12.421C22.0413 9.40504 19.5331 7.09541 16.522 7.08572C13.5164 7.07604 11.005 9.36225 10.7321 12.3944C10.4674 15.3353 12.5106 18.202 15.8196 18.6993L15.8212 18.6968Z"
        fill={fillColor}
      />
      <path
        d="M15.8203 18.6975C12.512 18.2003 10.468 15.3336 10.7328 12.3927C11.0056 9.36055 13.5171 7.07433 16.5226 7.08402C19.5338 7.0937 22.0412 9.40414 22.289 12.4193C22.5328 15.3974 20.4484 18.214 17.1918 18.6975C17.3396 18.7145 17.4873 18.7306 17.6342 18.7492C22.2228 19.3313 25.4293 21.7539 27.282 25.9865C27.3563 26.156 27.32 26.2553 27.2021 26.3796C24.7835 28.9411 21.8466 30.5234 18.3414 30.9327C13.4509 31.505 9.29583 29.9535 5.86327 26.4313C5.69293 26.2569 5.67517 26.1189 5.77043 25.9001C7.35674 22.2601 10.07 19.9521 13.9199 18.9841C14.2307 18.9058 14.5512 18.8598 14.8693 18.8122C15.1857 18.7646 15.5038 18.7339 15.8219 18.6951L15.8203 18.6975Z"
        fill={COLORS.WHITE}
      />
    </g>
    <defs>
      <clipPath id="clip0_2501_1716">
        <rect width="33.0121" height="33" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export const HamburgerIcon = ({ fillColor = COLORS.DARK_BLUE }) => (
  <svg
    width="27"
    height="20"
    viewBox="0 0 27 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_2501_821)">
      <path
        d="M10.7859 4.00217C7.9177 4.00217 5.04951 4.00384 2.18133 4.00134C1.10069 4.0005 0.311768 3.42626 0.0657062 2.47225C-0.244619 1.27285 0.651689 0.072615 1.90483 0.0100159C2.00968 0.00500793 2.11538 0.00333862 2.22107 0.00333862C7.94645 0.00333862 13.6718 0.00584258 19.398 0C19.9688 0 20.4838 0.118521 20.9184 0.497454C21.5509 1.05 21.7699 1.90969 21.4807 2.68842C21.1864 3.47884 20.4567 3.98548 19.5486 3.99883C18.6523 4.01219 17.7559 4.00217 16.8596 4.00217C14.8353 4.00217 12.8102 4.00217 10.7859 4.00217Z"
        fill={fillColor}
      />
      <path
        d="M10.8131 8.00134C13.7024 8.00134 16.5918 7.998 19.4811 8.00301C20.6725 8.00468 21.5637 8.81346 21.6043 9.9102C21.6449 11.0211 20.8112 11.9125 19.6536 11.9943C19.5589 12.001 19.4642 11.9993 19.3686 11.9993C13.6534 11.9993 7.93816 11.9993 2.22293 11.9993C1.15159 11.9993 0.358441 11.466 0.0895487 10.5721C-0.296878 9.28754 0.640017 8.02054 2.01915 8.00718C3.89632 7.98799 5.77265 8.00217 7.64982 8.00134C8.70425 8.00134 9.75868 8.00134 10.8131 8.00134Z"
        fill={fillColor}
      />
      <path
        d="M6.7335 19.9955C5.20471 19.9955 3.67591 19.9988 2.14711 19.9947C1.1468 19.9913 0.3638 19.4488 0.0940625 18.5874C-0.310121 17.2971 0.635229 16.0159 2.03043 16.0025C3.92789 15.985 5.82536 15.9975 7.72367 15.9975C8.99964 15.9975 10.2748 15.9858 11.5507 16.005C12.5088 16.02 13.2664 16.6752 13.4634 17.6084C13.6486 18.4856 13.2038 19.4071 12.3591 19.776C12.042 19.9145 11.6691 19.9805 11.3207 19.9855C9.79279 20.0072 8.26315 19.9947 6.73519 19.9947L6.7335 19.9955Z"
        fill={fillColor}
      />
      <path
        d="M27.0003 2.00639C26.9961 3.11564 26.0795 4.0129 24.9659 3.99954C23.8624 3.98619 22.961 3.0906 22.9551 2.00388C22.9492 0.901303 23.8599 0.00404874 24.9836 0.00488339C26.1133 0.00571805 27.0046 0.890452 27.0003 2.00639Z"
        fill={fillColor}
      />
    </g>
    <defs>
      <clipPath id="clip0_2501_821">
        <rect width="27" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
