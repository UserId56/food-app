import Vue from "vue";
import Vuex from "vuex";
import {
  v4 as uuidv4
} from 'uuid';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    pageName: {
      Menu: "Меню"
    },
    about: {
      social: "CO_GASTROBAR",
      phone: "+7 (499)-00-00",
      mail: "co_gastrobar@mail.ru",
      inn: "ИНН: 503457002",
      ogrn: "ОГРН: 1234000789456023",
      adress: "Адрес: 198095, Москва, ДЦ Москва-Сити, Пресненская наб. 8С1, -1 этаж",
      timeWork: "Пн-Вс с 9:00 до 20:00",
    },
    cart: {
      count: 2,
      products: [3, 6],
    },
    user: {
      login: false,
      userName: "Алексей",
    },
    bannerId: [{
        id: 1,
        title: "Предложение недели"
      },
      {
        id: 3,
        title: "Креветки по вкусу"
      }
    ],
    filter: {
      main: {
        title: "Основные блюда",
        img: '<svg viewBox="0 0 63 41" xmlns="http://www.w3.org/2000/svg"> <path d="M61.9892 26.9594C61.943 26.6644 61.8854 26.3649 61.8152 26.0641C61.1083 23.0418 58.9814 20.3842 55.9169 18.6483V10.8234C55.9348 10.5452 55.8563 10.2641 55.6836 10.0326C50.4938 3.07613 37.1551 0 28.4536 0C25.2145 0 22.0451 0.361083 19.0337 1.0731C10.14 3.17476 0.990295 9.05764 0.990295 17.9109V29.3571C0.990295 32.1637 2.31343 34.7195 4.52936 36.1935C9.14415 39.2656 14.5895 40.8893 20.2767 40.8893C23.4423 40.8893 26.5773 40.3859 29.5948 39.393C36.671 37.0638 47.4795 35.7317 58.4998 35.8301C58.5109 35.8301 58.5221 35.8302 58.5331 35.8302C60.5223 35.8302 62.126 34.2383 62.126 32.2539V27.5135C62.126 27.3133 62.0762 27.1252 61.9892 26.9594ZM59.407 26.2861C58.7249 26.2749 58.037 26.2691 57.3498 26.2691C51.8639 26.2691 46.2683 26.6243 40.9971 27.2995L47.2401 19.1048H48.7371C53.2412 19.1049 58.1854 21.9369 59.407 26.2861ZM37.6277 27.7817C33.3859 28.4563 29.6801 29.3091 26.6087 30.3195C26.1422 30.4728 25.67 30.6074 25.1946 30.7266L34.0482 19.1049H44.238L37.6277 27.7817ZM53.5288 17.5593C51.9679 17.0059 50.3367 16.7167 48.7371 16.7167H32.0358C30.719 16.7167 29.6477 15.6454 29.6477 14.3286C29.6477 13.0118 30.719 11.9405 32.0358 11.9405C34.6231 11.9405 51.3142 11.9405 53.5288 11.9405V17.5593ZM51.9601 9.55246H41.3267L44.5314 5.34627C47.5841 6.52743 50.129 7.97224 51.9601 9.55246ZM19.9713 3.30861C22.6873 2.69821 25.5384 2.38811 28.4536 2.38811C28.7807 2.38811 29.1115 2.39349 29.4437 2.40149L23.0128 10.8434C22.6131 11.3679 22.7145 12.1172 23.2392 12.5168C23.766 12.9183 24.5148 12.8127 24.9126 12.2904L32.3216 2.5646C35.6838 2.86204 39.0437 3.52927 42.162 4.5158L38.3246 9.55246H32.0358C29.4022 9.55246 27.2596 11.6951 27.2596 14.3287C27.2596 16.6471 28.9204 18.5842 31.1144 19.0149L21.7705 31.28C18.3142 31.5358 14.8596 30.8826 11.863 29.4167L19.1345 19.8739C19.5342 19.3493 19.433 18.6002 18.9083 18.2004C18.3835 17.8005 17.6345 17.9019 17.2348 18.4266L9.77653 28.2145C9.25305 27.8631 8.7482 27.484 8.26807 27.0803C6.5078 25.6019 5.204 23.9755 4.38166 22.2376L19.9713 3.30861ZM15.905 4.48942L3.51847 19.5296C3.42713 18.993 3.37841 18.4527 3.37841 17.9109C3.37841 11.3921 9.68602 6.73592 15.905 4.48942ZM59.7379 32.2539C59.7379 32.9166 59.204 33.4421 58.5325 33.4421C58.5287 33.4421 58.5249 33.4421 58.5209 33.442C47.2501 33.3427 36.1584 34.7183 28.848 37.1246C26.0719 38.038 23.1881 38.5012 20.2766 38.5012C15.0618 38.5012 10.0741 37.0159 5.85226 34.2053C4.30321 33.175 3.37841 31.3625 3.37841 29.3571V25.2634C6.75055 30.1885 13.0312 33.723 20.306 33.723C26.5413 33.723 27.1067 31.8111 38.5587 30.0525C44.5023 29.1398 51.0003 28.6574 57.3498 28.6574C58.1489 28.6574 58.9479 28.6657 59.7379 28.6813V32.2539Z"/> </svg>'
      },
      salad: {
        title: "Салаты",
        img: '<svg viewBox="0 0 59 59" xmlns="http://www.w3.org/2000/svg"> <path d="M54.4099 15.9419C53.6394 15.1714 52.7248 14.5603 51.7182 14.1433C50.7115 13.7264 49.6326 13.5117 48.5431 13.5117C47.4535 13.5117 46.3746 13.7264 45.368 14.1433C44.3613 14.5603 43.4467 15.1714 42.6762 15.9419C42.5906 16.0275 42.5227 16.1291 42.4764 16.241C42.4301 16.3528 42.4062 16.4727 42.4062 16.5938C42.4062 16.7148 42.4301 16.8347 42.4764 16.9466C42.5227 17.0584 42.5906 17.16 42.6762 17.2456L45.2837 19.853C45.4565 20.0259 45.691 20.123 45.9355 20.123C46.18 20.123 46.4144 20.0259 46.5873 19.853C47.106 19.3344 47.8094 19.043 48.5429 19.0429C49.2764 19.0429 49.9799 19.3343 50.4986 19.8529C51.0173 20.3716 51.3087 21.075 51.3087 21.8086C51.3087 22.5421 51.0174 23.2455 50.4987 23.7642C50.4131 23.8498 50.3452 23.9515 50.2989 24.0633C50.2525 24.1752 50.2287 24.295 50.2287 24.4161C50.2287 24.5372 50.2525 24.657 50.2989 24.7689C50.3452 24.8807 50.4131 24.9824 50.4987 25.068L53.1062 27.6755C53.1918 27.7611 53.2935 27.829 53.4053 27.8754C53.5172 27.9217 53.637 27.9455 53.7581 27.9455C53.8792 27.9455 53.9991 27.9217 54.1109 27.8754C54.2228 27.829 54.3244 27.7611 54.41 27.6755C55.1804 26.9051 55.7916 25.9904 56.2086 24.9838C56.6255 23.9772 56.8401 22.8983 56.8401 21.8087C56.8401 20.7191 56.6255 19.6402 56.2086 18.6336C55.7916 17.627 55.1804 16.7123 54.41 15.9419H54.4099ZM53.7114 25.6734L52.3894 24.3512C52.9748 23.4647 53.2362 22.4032 53.1293 21.3462C53.0223 20.2892 52.5536 19.3016 51.8024 18.5504C51.0512 17.7991 50.0636 17.3303 49.0066 17.2233C47.9496 17.1163 46.8881 17.3776 46.0016 17.963L44.6783 16.6399C45.9211 15.7096 47.4575 15.2585 49.0059 15.3693C50.5542 15.4801 52.0108 16.1453 53.1084 17.243C54.2061 18.3406 54.8713 19.7972 54.982 21.3456C55.0928 22.8939 54.6417 24.4304 53.7114 25.6731V25.6734Z"/> <path d="M11.9844 21.1984C13.316 21.2007 14.6349 20.94 15.8655 20.4311C17.096 19.9222 18.2139 19.1752 19.1549 18.2331C19.2406 18.1475 19.3085 18.0458 19.3548 17.934C19.4012 17.8221 19.425 17.7022 19.425 17.5811C19.425 17.4601 19.4012 17.3402 19.3548 17.2283C19.3085 17.1164 19.2406 17.0148 19.1549 16.9292L6.11768 3.89193C6.03207 3.8063 5.93043 3.73838 5.81857 3.69204C5.70671 3.64569 5.58682 3.62184 5.46574 3.62184C5.34466 3.62184 5.22476 3.64569 5.1129 3.69204C5.00104 3.73838 4.89941 3.8063 4.8138 3.89193C3.39489 5.30948 2.42844 7.11614 2.03678 9.08321C1.64512 11.0503 1.84586 13.0893 2.61358 14.9423C3.38131 16.7952 4.6815 18.3787 6.3496 19.4924C8.01769 20.606 9.97869 21.1998 11.9844 21.1984ZM10.9404 12.1064L10.5696 15.4473C9.87399 15.2242 9.24161 14.8383 8.72503 14.3217C8.20845 13.8052 7.82258 13.1728 7.59947 12.4771L10.9404 12.1064ZM7.39655 10.645C7.46407 9.88629 7.71913 9.15625 8.13877 8.52055L9.97665 10.3585L7.39655 10.645ZM12.6883 13.0702L14.5262 14.9081C13.8905 15.3277 13.1605 15.5828 12.4019 15.6503L12.6883 13.0702ZM5.50175 5.88364L6.8168 7.19858C5.88901 8.44136 5.43983 9.97671 5.55149 11.5236C5.66314 13.0705 6.32816 14.5254 7.42482 15.6221C8.52147 16.7187 9.9764 17.3837 11.5233 17.4954C13.0702 17.607 14.6055 17.1579 15.8483 16.2301L17.1632 17.5451C15.5688 18.8205 13.5601 19.4632 11.5215 19.3503C9.48291 19.2373 7.55752 18.3766 6.11379 16.9329C4.67006 15.4891 3.80936 13.5637 3.6964 11.5251C3.58343 9.4865 4.22613 7.47781 5.50152 5.88341L5.50175 5.88364Z" /> <path d="M26.4674 16.4785L24.2388 18.7073C24.0659 18.8802 23.9687 19.1147 23.9687 19.3592C23.9687 19.6037 24.0659 19.8381 24.2388 20.011C24.4117 20.1839 24.6461 20.2811 24.8906 20.2811C25.1352 20.2811 25.3696 20.1839 25.5425 20.011L27.7715 17.7825C27.9888 18.352 28.3168 18.8728 28.7367 19.3146C29.1566 19.7565 29.66 20.1106 30.2177 20.3566C30.7754 20.6025 31.3763 20.7354 31.9857 20.7475C32.5951 20.7596 33.2009 20.6507 33.7679 20.4271C34.335 20.2034 34.852 19.8695 35.2891 19.4447C35.7262 19.0199 36.0747 18.5126 36.3143 17.9522C36.554 17.3917 36.6801 16.7893 36.6854 16.1798C36.6906 15.5703 36.5749 14.9658 36.3449 14.4013C36.4414 14.3196 36.5344 14.234 36.6239 14.1445C37.4884 13.28 37.974 12.1076 37.974 10.8851C37.974 9.66262 37.4884 8.49019 36.6239 7.62576C35.7595 6.76133 34.5871 6.2757 33.3646 6.2757C32.1421 6.2757 30.9697 6.76133 30.1052 7.62576C30.0158 7.71518 29.9302 7.80818 29.8484 7.90474C29.0116 7.5769 28.0975 7.49922 27.2174 7.68115C26.3372 7.86307 25.5289 8.29677 24.8906 8.92952C24.349 9.47045 23.9508 10.1378 23.7318 10.8713C23.5129 11.6048 23.4802 12.3813 23.6367 13.1306C23.7932 13.8799 24.134 14.5784 24.6282 15.1629C25.1224 15.7475 25.7545 16.1996 26.4674 16.4785ZM26.1944 10.2328C26.6422 9.78842 27.2279 9.50963 27.8551 9.44227C28.4824 9.37492 29.1139 9.52302 29.6458 9.86223C29.7517 9.93047 29.8704 9.9763 29.9946 9.99688C30.1189 10.0175 30.246 10.0124 30.3683 9.98191C30.4905 9.95145 30.6051 9.89627 30.7052 9.81978C30.8053 9.74328 30.8886 9.6471 30.95 9.53715C31.1583 9.16361 31.4504 8.84347 31.8034 8.6019C32.1563 8.36032 32.5604 8.20389 32.9841 8.14491C33.4077 8.08592 33.8392 8.12599 34.2447 8.26196C34.6502 8.39792 35.0186 8.62609 35.3211 8.92851C35.6235 9.23094 35.8517 9.59939 35.9876 10.0049C36.1236 10.4104 36.1637 10.8419 36.1047 11.2655C36.0457 11.6891 35.8893 12.0933 35.6477 12.4462C35.4061 12.7992 35.086 13.0913 34.7124 13.2996C34.6025 13.361 34.5063 13.4443 34.4298 13.5444C34.3533 13.6444 34.2981 13.7591 34.2677 13.8813C34.2372 14.0035 34.2321 14.1307 34.2527 14.2549C34.2733 14.3792 34.3191 14.4979 34.3873 14.6038C34.7266 15.1357 34.8747 15.7673 34.8073 16.3945C34.7399 17.0218 34.4611 17.6075 34.0166 18.0553C33.6393 18.4331 33.1605 18.6935 32.6383 18.805C32.1161 18.9165 31.5727 18.8743 31.074 18.6836C30.5752 18.4928 30.1423 18.1617 29.8278 17.7302C29.5132 17.2987 29.3304 16.7853 29.3014 16.2521L32.0149 13.5384C32.1878 13.3655 32.2849 13.1311 32.2849 12.8866C32.2849 12.6421 32.1878 12.4076 32.0149 12.2347C31.842 12.0618 31.6075 11.9647 31.363 11.9647C31.1185 11.9647 30.884 12.0618 30.7111 12.2347L27.9978 14.9479C27.4647 14.9188 26.9514 14.7359 26.52 14.4213C26.0886 14.1068 25.7575 13.674 25.5667 13.1753C25.376 12.6766 25.3338 12.1334 25.4451 11.6112C25.5565 11.089 25.8168 10.6103 26.1944 10.2328Z"/> <path d="M53.4688 33.1875C53.4673 32.0612 53.0542 30.9742 52.3071 30.1313C51.56 29.2884 50.5305 28.7477 49.4125 28.6111C49.0962 27.8712 48.5918 27.227 47.9494 26.7424C47.3071 26.2579 46.5491 25.9498 45.7508 25.8489C44.9525 25.7479 44.1417 25.8576 43.399 26.1671C42.6562 26.4765 42.0074 26.9749 41.5169 27.6128C40.8883 26.3621 39.9531 25.291 38.7987 24.4995C37.6443 23.7079 36.3081 23.2216 34.9149 23.0861C33.5218 22.9505 32.1169 23.17 30.8315 23.7241C29.5461 24.2782 28.422 25.1489 27.5641 26.2549C27.302 26.1122 27.0233 26.0023 26.7344 25.9277V25.8125C26.7344 24.8345 26.3459 23.8966 25.6543 23.205C24.9628 22.5135 24.0249 22.125 23.0469 22.125C22.0689 22.125 21.131 22.5135 20.4394 23.205C19.7479 23.8966 19.3594 24.8345 19.3594 25.8125V25.927C18.8787 26.0494 18.428 26.2681 18.0344 26.57C17.6409 26.8718 17.3127 27.2504 17.0699 27.6829C14.5148 25.9083 10.9164 25.2807 6.34527 25.8188C6.121 25.8453 5.91423 25.9531 5.76418 26.1218C5.61414 26.2906 5.53125 26.5086 5.53125 26.7344C5.53125 26.8888 5.5528 30.0774 7.08265 33.1875H5.53125C5.28675 33.1875 5.05227 33.2846 4.87939 33.4575C4.7065 33.6304 4.60938 33.8649 4.60938 34.1094V37.7969C4.61352 41.463 6.07174 44.9779 8.66412 47.5703C11.2565 50.1626 14.7713 51.6209 18.4375 51.625H20.2812V54.3906C20.2812 54.6351 20.3784 54.8696 20.5513 55.0425C20.7241 55.2154 20.9586 55.3125 21.2031 55.3125H37.7969C38.0414 55.3125 38.2759 55.2154 38.4487 55.0425C38.6216 54.8696 38.7188 54.6351 38.7188 54.3906V51.625H40.5625C44.2287 51.6209 47.7435 50.1626 50.3359 47.5703C52.9283 44.9779 54.3865 41.463 54.3906 37.7969V34.1094C54.3906 33.8649 54.2935 33.6304 54.1206 33.4575C53.9477 33.2846 53.7132 33.1875 53.4688 33.1875ZM42.4924 29.7329C42.6457 29.1388 42.992 28.6125 43.477 28.2367C43.962 27.861 44.5581 27.6571 45.1716 27.6571C45.7852 27.6571 46.3813 27.861 46.8663 28.2367C47.3513 28.6125 47.6976 29.1388 47.8508 29.7329C47.904 29.9354 48.0242 30.1139 48.1917 30.2395C48.3593 30.365 48.5644 30.4301 48.7736 30.4243L48.8162 30.4227C48.8302 30.4227 48.8444 30.4213 48.8589 30.4213C49.5921 30.4222 50.2951 30.7138 50.8136 31.2323C51.332 31.7507 51.6237 32.4537 51.6245 33.1869H42.1988C42.4305 32.1699 42.4687 31.1183 42.3114 30.0871C42.3971 29.9838 42.4589 29.8628 42.4924 29.7329ZM34.1094 24.8906C35.1142 24.8914 36.1051 25.1266 37.003 25.5776C37.901 26.0286 38.6813 26.6829 39.2819 27.4886C39.8826 28.2942 40.2869 29.2288 40.4628 30.2182C40.6387 31.2075 40.5813 32.2242 40.2952 33.1875H38.3321C38.6391 32.486 38.7665 31.7191 38.7028 30.956C38.639 30.1929 38.3862 29.4577 37.9671 28.8169C37.548 28.176 36.9758 27.6496 36.3023 27.2853C35.6288 26.921 34.8751 26.7303 34.1094 26.7303C33.3436 26.7303 32.59 26.921 31.9164 27.2853C31.2429 27.6496 30.6708 28.176 30.2517 28.8169C29.8326 29.4577 29.5797 30.1929 29.516 30.956C29.4523 31.7191 29.5796 32.486 29.8866 33.1875H27.9236C27.6375 32.2242 27.5801 31.2075 27.756 30.2182C27.9318 29.2288 28.3362 28.2942 28.9368 27.4886C29.5374 26.6829 30.3178 26.0286 31.2157 25.5776C32.1137 25.1266 33.1045 24.8914 34.1094 24.8906ZM32.049 33.1875C31.6928 32.7897 31.4593 32.2972 31.3769 31.7696C31.2945 31.242 31.3665 30.7018 31.5844 30.2143C31.8023 29.7267 32.1567 29.3127 32.6047 29.0222C33.0528 28.7316 33.5754 28.577 34.1094 28.577C34.6434 28.577 35.166 28.7316 35.614 29.0222C36.0621 29.3127 36.4165 29.7267 36.6343 30.2143C36.8522 30.7018 36.9243 31.242 36.8418 31.7696C36.7594 32.2972 36.526 32.7897 36.1698 33.1875H32.049ZM18.4461 29.3254C18.4874 28.8679 18.6989 28.4426 19.0387 28.1335C19.3785 27.8244 19.8219 27.6541 20.2812 27.6562C20.5257 27.6562 20.7602 27.5591 20.9331 27.3862C21.106 27.2134 21.2031 26.9789 21.2031 26.7344V25.8125C21.2031 25.3235 21.3974 24.8545 21.7431 24.5088C22.0889 24.163 22.5579 23.9688 23.0469 23.9688C23.5359 23.9688 24.0048 24.163 24.3506 24.5088C24.6964 24.8545 24.8906 25.3235 24.8906 25.8125V26.7344C24.8906 26.9789 24.9878 27.2134 25.1606 27.3862C25.3335 27.5591 25.568 27.6562 25.8125 27.6562C26.083 27.6564 26.3502 27.7163 26.5948 27.8318C25.8116 29.503 25.6092 31.3881 26.0199 33.1875H18.6856C18.8283 32.9407 19.0261 32.7303 19.2635 32.5725C19.3901 32.4884 19.4939 32.3742 19.5657 32.2403C19.6376 32.1063 19.6752 31.9567 19.6752 31.8047C19.6752 31.6527 19.6376 31.503 19.5657 31.3691C19.4939 31.2351 19.3901 31.121 19.2635 31.0369C19.0095 30.8689 18.8012 30.6406 18.657 30.3724C18.5129 30.1042 18.4375 29.8045 18.4375 29.5C18.4375 29.445 18.4404 29.3868 18.4461 29.3254ZM16.5967 29.643C16.6265 30.4314 16.9091 31.1893 17.4027 31.8047C17.0765 32.2113 16.8406 32.6827 16.7106 33.1875H15.9953L8.86337 27.4819C12.2176 27.4 14.811 28.1239 16.5967 29.643ZM7.60547 28.8371L13.0437 33.1875H9.18107C8.28431 31.7079 7.83294 30.0853 7.60547 28.8371ZM36.875 53.4688H22.125V51.625H36.875V53.4688ZM52.5469 37.7969C52.5433 40.9742 51.2795 44.0204 49.0328 46.2671C46.786 48.5139 43.7398 49.7777 40.5625 49.7812H18.4375C15.2602 49.7777 12.214 48.5139 9.96724 46.2671C7.72052 44.0204 6.45672 40.9742 6.45312 37.7969V35.0312H52.5469V37.7969Z"/> </svg>'
      },
      poke: {
        title: "Поке",
        img: '<svg viewBox="0 0 55 55" xmlns="http://www.w3.org/2000/svg"> <g clip-path="url(#clip0)"> <path d="M53.2661 22.4859C53.9824 19.1112 52.6383 16.102 50.2844 13.7483L45.9368 18.0957C46.3043 17.1963 46.5261 16.2362 46.5835 15.2491L44.967 15.155C44.8556 17.0671 43.9717 18.8866 42.545 20.1626L40.2492 17.867C41.835 16.5703 42.2079 14.2078 41.0707 12.4952L43.3865 10.1795C44.1998 11.193 44.7209 12.3941 44.9062 13.6952L46.5093 13.467C46.187 11.204 44.9982 9.43884 43.4176 7.85836L38.8377 12.4382C40.0326 13.6332 40.8419 15.4694 39.0923 16.7101L33.167 10.7848L27.4997 16.4521L21.8324 10.7848L20.2127 12.4044C19.7771 11.6852 19.5876 11.5387 19.7621 10.659C19.9043 9.94232 20.1599 9.36706 20.1232 8.60461C19.8353 2.62111 10.5935 2.8179 10.5935 8.83886C10.5935 9.86524 11.3273 10.8186 10.9563 11.7689C10.63 12.605 10.029 13.1937 9.82498 14.1259C8.10481 12.2569 5.11246 12.0846 3.19529 13.7554C2.18424 14.6364 1.60218 15.8565 1.5563 17.1912C1.51647 18.3519 1.91404 19.5103 2.65554 20.4039C3.21796 21.0816 5.13049 21.6942 5.26856 22.4859H0C0 30.9471 3.29903 38.8852 9.84754 44.3852C16.9897 50.3837 26.951 52.3344 35.8416 49.5074L35.351 47.9642C32.8218 48.7685 30.1804 49.1763 27.5 49.1763C13.5002 49.1763 2.06096 38.0027 1.63165 24.1051H53.3682C53.0824 33.3003 47.942 41.6623 39.8082 46.0681L40.5795 47.4918C49.8454 42.1683 55 34.0722 55 22.4859H53.2661ZM50.2521 16.0705C51.6808 17.8644 52.1887 20.2605 51.6028 22.4859H48.1523C48.8212 21.2028 48.738 19.5905 47.9375 18.385L50.2521 16.0705ZM45.7972 18.4207C46.9756 19.5191 47.5582 21.28 46.1107 22.4858H44.8686L43.692 21.3092C44.448 20.6865 45.3594 19.3814 45.7972 18.4207ZM33.1673 22.1194L29.832 18.784C32.5153 18 35.3181 18.2652 36.785 18.5017L33.1673 22.1194ZM15.427 19.4804C15.3065 20.2355 15.1856 21.2834 15.1748 22.4859H12.4216L15.427 19.4804ZM42.5784 22.4859H39.4634C39.4753 21.3259 39.6002 20.3159 39.7152 19.6225L42.5784 22.4859ZM36.981 16.8884C35.245 16.6094 31.9711 16.3283 28.8436 17.3985L33.1674 13.0747L36.981 16.8884ZM25.6489 16.8908C24.8952 16.7706 23.8496 16.6496 22.6501 16.6382L22.6346 18.2573C23.7676 18.2681 24.7583 18.3875 25.4517 18.5003L21.8328 22.1192L18.4987 18.7851C19.3015 18.5501 20.1681 18.3908 21.0912 18.3131L20.9552 16.6996C19.7169 16.804 18.5614 17.0409 17.5051 17.4022L21.8328 13.0746L25.6489 16.8908ZM12.2144 12.7884C13.3164 11.4285 12.2128 10.2736 12.2128 8.83886C12.2128 4.87379 18.3157 4.72784 18.506 8.68245C18.5512 9.62203 17.9649 10.384 17.9811 11.3068C17.9977 12.2545 18.636 12.7939 19.0188 13.5987L16.1654 16.4521L14.7963 17.8211C13.8223 16.9055 12.7006 16.5589 11.4301 16.2988C11.1308 15.0768 11.4224 13.7655 12.2144 12.7884ZM4.85026 20.1405C3.80239 19.5391 3.13279 18.4732 3.17489 17.2467C3.20511 16.3654 3.59027 15.559 4.25934 14.9761C5.89563 13.55 8.55733 14.2568 9.28534 16.2911C9.6053 17.1856 10.4117 17.8262 11.3393 17.9231C12.213 18.0144 13.0089 18.374 13.6517 18.9658L11.3514 21.266L10.2364 20.1511L9.09157 21.2962L10.3145 22.4859H6.90312C6.80197 21.604 5.8449 20.7114 4.85026 20.1405ZM16.7943 22.4859C16.8058 21.3564 16.9246 20.3688 17.0368 19.6776L19.845 22.4859H16.7943ZM26.7495 19.5566C26.6332 20.3053 26.5199 21.3237 26.5095 22.4858H23.8203L26.7495 19.5566ZM28.1289 22.4859C28.1405 21.3564 28.2592 20.3688 28.3715 19.6776L31.1797 22.4859H28.1289ZM38.0842 19.5566C37.9678 20.3053 37.8546 21.3237 37.8441 22.4858H35.155L38.0842 19.5566Z" /> <path d="M6.7996 19.0045L7.9444 17.8597L9.08897 19.0043L7.94417 20.1491L6.7996 19.0045Z" /> <path d="M14.5338 13.5839H16.153V15.2041H14.5338V13.5839Z" /> <path d="M14.5338 10.3459H16.153V11.965H14.5338V10.3459Z" /> </g> <defs> <clipPath id="clip0"> <rect width="55" height="55"/> </clipPath> </defs> </svg>'
      },
      soup: {
        title: "Суп",
        img: '<svg viewBox="0 0 59 51" xmlns="http://www.w3.org/2000/svg"> <path d="M59 23.2661C59 21.1663 57.4077 18.1653 49.8226 15.7939C46.1656 14.6507 41.7105 13.8529 36.8606 13.4515C37.0624 12.6561 37.4244 11.8889 37.9476 11.1951C40.3505 8.00845 40.353 3.72763 37.9548 0.538854C37.5309 -0.0356505 36.7154 -0.17281 36.1196 0.234359C35.5168 0.646361 35.3686 1.46122 35.788 2.05336C35.7955 2.06394 35.8031 2.07452 35.8111 2.08497C37.5148 4.34445 37.5146 7.38065 35.8107 9.64013C34.9746 10.749 34.4299 11.9904 34.1751 13.2721C32.6644 13.1948 31.1245 13.1544 29.5658 13.1533C29.7776 12.4647 30.111 11.8018 30.5684 11.1951C32.9714 8.00845 32.9739 3.72763 30.5756 0.538854C30.1517 -0.0356505 29.3363 -0.17281 28.7404 0.234359C28.1377 0.646361 27.9895 1.46122 28.4088 2.05336C28.4164 2.06394 28.424 2.07452 28.432 2.08497C30.1356 4.34445 30.1355 7.38065 28.4316 9.64013C27.6128 10.7259 27.0735 11.9389 26.8121 13.1923C25.2105 13.2388 23.6363 13.3269 22.1015 13.4546C22.3032 12.6582 22.6654 11.8898 23.1893 11.1951C25.5945 8.00558 25.5946 3.71953 23.1898 0.52984C23.1828 0.520566 23.1745 0.509854 23.1672 0.500841C22.7147 -0.0672627 21.8793 -0.166671 21.3013 0.277989C20.7312 0.716247 20.6245 1.52092 21.0551 2.08798C22.7565 4.3472 22.7554 7.38157 21.0524 9.64C20.1165 10.8811 19.5465 12.2885 19.3389 13.7325C15.5756 14.1787 12.1183 14.8745 9.17735 15.7939C1.59225 18.1652 0 21.1663 0 23.2661C0 23.3004 0.000531859 23.3348 0.00132965 23.3695C0.0297841 30.7502 3.10233 37.682 8.66225 42.898C14.2315 48.1228 21.6318 51 29.4999 51C37.3681 51 44.7684 48.1226 50.3376 42.898C55.8975 37.6819 58.9701 30.7502 58.9985 23.3695C58.9995 23.3348 59 23.3004 59 23.2661ZM9.98378 18.2836C12.6959 17.4357 15.8822 16.7872 19.3598 16.3606C19.5842 17.7528 20.1483 19.1067 21.0523 20.3057C21.3132 20.6516 21.7147 20.8345 22.1217 20.8345C22.3967 20.8345 22.6742 20.751 22.9121 20.5778C23.5022 20.1484 23.6262 19.3303 23.189 18.7506C22.5762 17.9378 22.185 17.0244 22.0131 16.0831C23.5264 15.9515 25.083 15.8599 26.6695 15.8101C26.8224 17.3945 27.4085 18.9494 28.4314 20.3058C28.6923 20.6517 29.0939 20.8346 29.5009 20.8346C29.7758 20.8346 30.0533 20.7511 30.2912 20.5779C30.8813 20.1485 31.0054 19.3304 30.5682 18.7507C29.8867 17.847 29.4788 16.8191 29.3424 15.7664C29.3949 15.7662 29.4473 15.7657 29.4999 15.7657C31.0427 15.7657 32.5649 15.8051 34.0558 15.8816C34.2192 17.4411 34.8031 18.9698 35.8106 20.3057C36.0714 20.6516 36.473 20.8345 36.88 20.8345C37.155 20.8345 37.4325 20.751 37.6703 20.5778C38.2604 20.1484 38.3845 19.3303 37.9473 18.7506C37.3305 17.9326 36.9382 17.0125 36.768 16.0646C41.3661 16.4518 45.573 17.2072 49.0161 18.2837C53.5341 19.6962 56.3406 21.6053 56.3406 23.2663C56.3406 24.7286 54.1639 26.3834 50.5599 27.7223C45.1008 25.8891 37.465 24.8418 29.4995 24.8418C21.5347 24.8418 13.8991 25.8892 8.44006 27.7224C4.83592 26.3833 2.65929 24.7285 2.65929 23.2661C2.65929 21.6052 5.46578 19.6959 9.98378 18.2836ZM45.7973 29.1116C41.1083 30.1859 35.454 30.7666 29.5001 30.7666C23.5459 30.7666 17.8915 30.1859 13.2023 29.1115C17.8811 28.0445 23.5834 27.4541 29.4997 27.4541C35.4163 27.4542 41.1184 28.0447 45.7973 29.1116ZM29.4999 48.3876C16.4387 48.3876 5.52774 39.61 3.14408 28.0268C4.52465 28.9644 6.46873 29.8915 9.17735 30.7383C14.625 32.4415 21.8424 33.3793 29.5001 33.3793C37.1578 33.3793 44.3751 32.4413 49.8228 30.7383C52.5311 29.8916 54.4751 28.9647 55.8557 28.027C53.4717 39.6101 42.5611 48.3876 29.4999 48.3876Z"/> </svg>'
      },
      drink: {
        title: "Напитки",
        img: '<svg viewBox="0 0 53 53"xmlns="http://www.w3.org/2000/svg"> <g clip-path="url(#clip0)"> <path d="M5.00674 40.8053C5.00674 42.4646 6.35669 43.8146 8.01594 43.8146C9.6753 43.8146 11.0252 42.4646 11.0252 40.8053C11.0252 39.1459 9.6753 37.7959 8.01594 37.7959C6.35669 37.7959 5.00674 39.1459 5.00674 40.8053ZM9.47262 40.8053C9.47262 41.6084 8.81922 42.2618 8.01605 42.2618C7.21287 42.2618 6.55958 41.6084 6.55958 40.8053C6.55958 40.0021 7.21297 39.3487 8.01605 39.3487C8.81912 39.3487 9.47262 40.0022 9.47262 40.8053Z"/> <path d="M11.8417 36.657C13.1481 36.657 14.211 35.5942 14.211 34.2878C14.211 32.9814 13.1481 31.9186 11.8417 31.9186C10.5353 31.9186 9.47253 32.9814 9.47253 34.2878C9.47253 35.5942 10.5353 36.657 11.8417 36.657ZM11.8417 33.4713C12.292 33.4713 12.6582 33.8375 12.6582 34.2877C12.6582 34.7379 12.292 35.1041 11.8417 35.1041C11.3915 35.1041 11.0253 34.7379 11.0253 34.2877C11.0253 33.8375 11.3916 33.4713 11.8417 33.4713Z"/> <path d="M20.1035 46.3732C20.1035 45.0669 19.0406 44.0041 17.7342 44.0041C16.4279 44.0041 15.365 45.0669 15.365 46.3732C15.365 47.6796 16.4279 48.7424 17.7342 48.7424C19.0406 48.7424 20.1035 47.6796 20.1035 46.3732ZM16.9178 46.3732C16.9178 45.9231 17.284 45.5568 17.7343 45.5568C18.1846 45.5568 18.5509 45.9231 18.5509 46.3732C18.5509 46.8234 18.1846 47.1897 17.7343 47.1897C17.284 47.1897 16.9178 46.8234 16.9178 46.3732Z"/> <path d="M51.3426 33.2749C51.119 31.6486 49.7141 30.4222 48.0747 30.4222H47.5248L48.0547 29.0442C48.2086 28.644 48.0089 28.1948 47.6086 28.0409C47.2083 27.8869 46.7592 28.0868 46.6054 28.4869L45.8613 30.4222H42.6304C42.521 30.3697 42.4103 30.3205 42.2974 30.2783C41.4903 29.9775 41.0811 29.5089 41.0811 28.8858C41.0811 28.3052 42.0628 27.8342 42.4855 27.6583C43.7398 27.135 44.6388 26.028 44.8904 24.6966C45.4115 21.9319 45.6481 18.9738 45.7429 17.4556C45.7912 16.6673 45.6127 15.896 45.2269 15.2252C43.2001 11.7011 39.5286 9.3015 38.3007 8.56695V6.08423H38.3412C38.77 6.08423 39.1175 5.73663 39.1175 5.30787V2.51615C39.1175 1.12873 37.9887 0 36.6013 0H30.4527C29.0653 0 27.9365 1.12873 27.9365 2.51615V5.30787C27.9365 5.73663 28.284 6.08423 28.7129 6.08423H28.7535V8.56664C27.961 9.04064 26.1505 10.209 24.4214 11.9247V11.38C25.3058 10.9015 25.9078 9.96555 25.9078 8.89147C25.9078 7.33243 24.6394 6.06415 23.0804 6.06415H10.8133C9.25421 6.06415 7.98594 7.33253 7.98594 8.89147C7.98594 9.96576 8.58829 10.902 9.47294 11.3803V13.7557C8.41025 14.3756 5.5233 16.2184 2.98013 19.2735C2.52321 19.8239 2.23202 20.4917 2.13803 21.2053C2.01164 22.1655 1.8222 23.7331 1.63774 25.748C1.59861 26.175 1.91309 26.5528 2.34009 26.5919C2.36411 26.5941 2.38802 26.5952 2.41172 26.5952C2.8085 26.5952 3.1471 26.2926 3.18395 25.8896C3.36614 23.9 3.55278 22.3542 3.67741 21.4081C3.71799 21.1002 3.82088 20.8074 3.9774 20.5456H21.5713C21.7083 21.837 21.8996 23.2923 22.1636 24.696C22.4139 26.0275 23.3131 27.1349 24.5693 27.6585C24.9911 27.834 25.972 28.3048 25.972 28.8857C25.972 29.5091 25.5632 29.9776 24.7564 30.2784C23.3077 30.8195 22.2863 32.1542 22.1542 33.6786C21.8486 37.1949 21.6218 43.9991 23.5371 50.0616C23.6984 50.5725 23.9499 51.0341 24.2704 51.4327C24.1213 51.4418 23.972 51.4474 23.822 51.4474H10.0711C6.31758 51.4474 3.162 48.5205 2.88707 44.7841C2.53201 39.9579 2.54909 34.636 2.938 28.9663C2.96729 28.5384 2.64432 28.1679 2.2166 28.1385C1.78918 28.1089 1.41818 28.4321 1.38889 28.8599C0.995009 34.6028 0.978033 39.9987 1.33858 44.8979C1.5011 47.1078 2.48646 49.1552 4.11311 50.6633C5.7383 52.1701 7.85426 53 10.0711 53H23.8221C24.5722 53 25.3149 52.9048 26.0342 52.7176C26.5103 52.9003 27.0258 52.9995 27.561 52.9995L48.0747 53C49.7141 53 51.119 51.7737 51.3426 50.1472C52.1122 44.5494 52.1122 38.8728 51.3426 33.2749ZM50.2946 44.645C49.6762 45.0234 48.9726 45.2224 48.2392 45.2224C46.0634 45.2224 44.2933 43.4527 44.2933 41.2775C44.2933 39.1017 46.0635 37.3315 48.2392 37.3315C48.9526 37.3315 49.6386 37.5198 50.2436 37.8779C50.3868 40.1312 50.4042 42.3905 50.2946 44.645ZM44.1932 17.3597C44.1191 18.5461 43.9563 20.6331 43.6348 22.795H23.4198C23.0989 20.6351 22.9349 18.5471 22.86 17.3606C22.8304 16.8762 22.9385 16.4058 23.1731 15.999C23.2678 15.8343 23.3671 15.6723 23.4699 15.5126H43.5839C43.6868 15.6723 43.7862 15.8344 43.8809 15.9991C44.1148 16.4057 44.2227 16.8765 44.1932 17.3597ZM11.0257 11.7189H22.8687V13.4341H11.0257V11.7189ZM29.4892 2.51615C29.4892 1.98491 29.9214 1.55273 30.4527 1.55273H36.6013C37.1325 1.55273 37.5648 1.98491 37.5648 2.51615V4.5315H29.4892V2.51615ZM36.748 6.08423V8.23933H30.3063V6.08423H36.748ZM29.7346 9.79206H37.3195C37.9749 10.175 40.4384 11.6935 42.4096 13.96H24.6442C26.6154 11.6931 29.0798 10.1744 29.7346 9.79206ZM10.8133 7.61689H23.0804C23.7832 7.61689 24.3551 8.18871 24.3551 8.89147C24.3551 9.59404 23.7838 10.1655 23.0813 10.1661H10.8122C10.1098 10.1655 9.53857 9.59393 9.53857 8.89147C9.53857 8.18871 10.1104 7.61689 10.8133 7.61689ZM5.32414 18.9928C7.56463 16.6959 9.83679 15.3336 10.449 14.987H21.9688C21.9213 15.0657 21.8737 15.1441 21.8278 15.2239C21.441 15.8943 21.262 16.6659 21.3104 17.457C21.3365 17.8722 21.3736 18.3958 21.4239 18.9928H5.32414ZM48.0747 51.4473H39.4932V51.4467H38.9488C38.0857 51.4416 37.3475 50.794 37.2295 49.9358C37.1073 49.0459 37.0045 48.1503 36.9239 47.2738C36.8846 46.8469 36.5068 46.532 36.0798 46.5718C35.6528 46.611 35.3385 46.989 35.3777 47.416C35.4604 48.3154 35.5659 49.2342 35.6913 50.1472C35.7565 50.6213 35.9226 51.061 36.1652 51.4466H27.561C26.3898 51.4466 25.3678 50.7021 25.0179 49.5938C23.1836 43.7874 23.4056 37.2143 23.7012 33.8127C23.7818 32.8818 24.4093 32.0655 25.2992 31.733C26.7136 31.2057 27.5247 30.1679 27.5247 28.8856C27.5247 28.1195 27.1155 27.0359 25.1663 26.2251C24.395 25.9035 23.843 25.2247 23.6897 24.409C23.6858 24.3886 23.6821 24.368 23.6784 24.3476H43.3759C43.3721 24.3678 43.3684 24.3882 43.3646 24.4084C43.2103 25.2245 42.6582 25.9036 41.8882 26.2249C39.9376 27.0363 39.5282 28.1197 39.5282 28.8857C39.5282 29.4536 39.6881 29.9733 39.9884 30.4222H38.9589C37.3196 30.4222 35.9146 31.6486 35.6911 33.2748C35.1899 36.9137 35.014 40.6214 35.1679 44.2948C35.1859 44.7232 35.5519 45.0554 35.976 45.0379C36.4045 45.02 36.7373 44.6581 36.7193 44.2297C36.5693 40.6486 36.7408 37.0341 37.2293 33.4865C37.3479 32.6248 38.0915 31.9749 38.959 31.9749H48.0747C48.9423 31.9749 49.6858 32.6248 49.8045 33.4864C49.9241 34.3566 50.0225 35.2291 50.104 36.1026C49.5117 35.8892 48.8834 35.7787 48.2392 35.7787C45.2072 35.7787 42.7406 38.2454 42.7406 41.2775C42.7406 44.3089 45.2072 46.7751 48.2392 46.7751C48.9117 46.7751 49.5662 46.6551 50.1809 46.4229C50.089 47.5963 49.965 48.7678 49.8045 49.9356C49.6858 50.7974 48.9423 51.4473 48.0747 51.4473Z"/> </g> <defs> <clipPath id="clip0"> <rect width="53" height="53"/> </clipPath> </defs> </svg>'
      }
    },
    products: [{
        id: uuidv4(),
        img: "../assets/img/food/syr_salat.png",
        title: "Сырой салат",
        description: "",
        price: 450,
        weight: 300,
        ingredients: [],
        timeWork: 30,
        type: "main",
        valueWeek: 11,
        bannerId: null
      }, {
        id: uuidv4(),
        img: "../assets/img/food/los_grile.png",
        title: "Лосось на гриле",
        description: "",
        price: 450,
        weight: 300,
        ingredients: [],
        timeWork: 30,
        type: "main",
        valueWeek: 12,
        bannerId: 1
      }, {
        id: uuidv4(),
        img: "../assets/img/food/poke_crivet.png",
        title: "Поке с креветками",
        description: "",
        price: 450,
        weight: 300,
        ingredients: [],
        timeWork: 30,
        type: "main",
        valueWeek: 10,
        bannerId: 3
      }, {
        id: uuidv4(),
        img: "../assets/img/food/salat_ogorod.png",
        title: "Огородный салат",
        description: "",
        price: 450,
        weight: 300,
        ingredients: [],
        timeWork: 30,
        type: "main",
        valueWeek: 10,
        bannerId: null
      },
      {
        id: uuidv4(),
        img: "../assets/img/food/salat_big_green.png",
        title: "Огородный салат",
        description: "",
        price: 450,
        weight: 300,
        ingredients: [],
        timeWork: 30,
        type: "main",
        valueWeek: 15,
        bannerId: 1
      }
    ],
    fireImg: '<svg width="26" height="33" viewBox="0 0 26 33" xmlns="http://www.w3.org/2000/svg"> <path d="M0 22.3631C0 28.6087 6.02162 32.6644 6.27799 32.8341C7.02956 33.3312 8.0034 32.6276 7.75482 31.7642C6.2276 26.4595 6.40059 20.9485 10.5218 17.2108C10.0195 19.048 10.1529 20.544 10.9204 21.6627C12.3984 23.8171 15.6824 23.7647 18.2704 23.379C20.2735 25.1326 18.8444 29.198 17.6356 31.5974C17.1897 32.4825 18.2236 33.3787 19.0471 32.834C23.4119 29.9461 25.7449 26.321 25.9814 22.0592C26.4137 14.264 19.2081 5.15526 13.2885 0.227162C12.6563 -0.299151 11.6884 0.147574 11.6884 0.967752C11.6884 6.39844 8.8386 9.05134 5.82156 11.8601C2.95951 14.5245 0 17.2796 0 22.3631ZM13.5029 3.03363C18.4392 7.7082 24.412 15.215 24.036 21.9561C23.8912 24.5519 22.7998 26.8903 20.7829 28.9389C22.3628 23.283 19.1068 21.5801 18.9422 21.4985C18.7581 21.4071 18.5494 21.3761 18.3465 21.4096C15.2676 21.9189 13.2569 21.6307 12.5318 20.5763C11.5256 19.1134 12.9267 16.077 13.4977 15.1272C13.9766 14.3352 13.1644 13.3897 12.3007 13.7323C9.33016 14.9117 3.59491 19.6572 5.2135 29.3741C3.70264 27.8108 1.94807 25.3519 1.94807 22.3631C1.94807 18.1169 4.36076 15.8708 7.15436 13.2701C9.83946 10.7705 12.8412 7.97552 13.5029 3.03363Z"/> </svg>'
  },
  mutations: {},
  actions: {},
  modules: {},
});