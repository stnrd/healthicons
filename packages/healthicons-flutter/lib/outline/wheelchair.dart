import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Wheelchair extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Wheelchair({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="48" height="48" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M27.0263 14.5263C29.3808 14.5263 31.2895 12.6176 31.2895 10.2632C31.2895 7.90868 29.3808 6 27.0263 6C24.6718 6 22.7632 7.90868 22.7632 10.2632C22.7632 12.6176 24.6718 14.5263 27.0263 14.5263ZM27.0263 12.5263C28.2762 12.5263 29.2895 11.5131 29.2895 10.2632C29.2895 9.01325 28.2762 8 27.0263 8C25.7764 8 24.7632 9.01325 24.7632 10.2632C24.7632 11.5131 25.7764 12.5263 27.0263 12.5263Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M23.5265 13.5945C22.35 13.4256 21.3203 13.9496 20.5739 14.6032C19.8234 15.2605 19.243 16.1422 18.9153 16.973C18.7387 17.4207 18.5216 18.3523 18.3101 19.4241C18.2339 19.8102 18.1561 20.2266 18.0789 20.6634V17.1053L14.8368 14.6737L13.6368 16.2737L16.0789 18.1053V23.679C12.5236 25.044 10 28.4904 10 32.5263C10 37.7585 14.2415 42 19.4737 42C24.3705 42 28.3996 38.2847 28.896 33.5193L28.9523 33.5152L29.1114 33.7925C29.4017 34.2978 29.801 34.99 30.2369 35.7377C31.1029 37.2228 32.1326 38.9595 32.7345 39.8686C33.6679 41.2785 35.3 41.33 36.4039 40.7703C36.964 40.4862 37.4675 40.0173 37.7482 39.3933C38.0387 38.7475 38.0621 37.9939 37.7382 37.2472C37.3137 36.2687 36.3116 33.9179 35.4137 31.8075C34.9652 30.7532 34.5433 29.7603 34.2335 29.031L34.0081 28.5001C34.4413 28.537 34.7838 28.5613 34.986 28.5695C35.6333 28.5956 36.1647 28.2725 36.5173 27.9287C36.8791 27.5759 37.1538 27.11 37.2981 26.618C37.442 26.1275 37.4776 25.5321 37.2463 24.9617C37.0023 24.3598 36.5083 23.9048 35.8265 23.6672C34.9042 23.3457 33.2807 22.9122 31.9254 22.5668C31.2397 22.392 30.6095 22.2366 30.1508 22.1248C30.0377 22.0973 29.935 22.0724 29.8444 22.0505C29.7257 21.8284 29.5621 21.5248 29.3643 21.1652C28.94 20.3938 28.3561 19.3597 27.7205 18.3154C27.0883 17.2765 26.3907 16.2039 25.7397 15.3672C25.4157 14.9508 25.0832 14.5667 24.7591 14.2697C24.4751 14.0096 24.0444 13.6688 23.5265 13.5945ZM28.8939 31.5143L30.0654 31.4304L30.3772 31.9781L30.503 32.1984C30.5841 32.3402 30.7013 32.545 30.8457 32.7963C31.1344 33.299 31.5315 33.9873 31.9647 34.7303C32.8372 36.2267 33.8375 37.9118 34.4021 38.7645C34.6351 39.1164 35.0554 39.2116 35.4993 38.9865C35.7131 38.8781 35.8573 38.7216 35.9242 38.5728C35.9814 38.4457 36.0057 38.2789 35.9034 38.0431C35.4755 37.0566 34.47 34.6981 33.5734 32.5905C33.1246 31.5357 32.7026 30.5424 32.3927 29.8128L31.8778 28.6L31.8763 28.598C31.8724 28.593 31.8668 28.5864 31.8591 28.5791L31.8583 28.5784C31.844 28.5647 31.7571 28.4812 31.4822 28.4812C31.1197 28.4812 30.5648 28.4052 30.0105 28.3149C29.4299 28.2203 28.7656 28.0951 28.1426 27.9715C28.0054 27.9442 27.8699 27.917 27.7374 27.8901C28.3515 28.9824 28.7553 30.2088 28.8939 31.5143ZM24.4924 24.4897L24.1299 22.9701L26.0547 22.4442L26.0582 22.4431L26.0585 22.4441L26.0602 22.4496L26.0677 22.4735C26.0745 22.4951 26.0849 22.5278 26.0985 22.5699C26.1258 22.6544 26.1661 22.7767 26.2172 22.9255C26.3196 23.2243 26.4634 23.6241 26.6306 24.0346C26.7996 24.4498 26.9831 24.8527 27.1624 25.1679C27.252 25.3255 27.3303 25.4427 27.3935 25.522C27.4134 25.5469 27.4287 25.5642 27.4395 25.5756C27.4751 25.5879 27.5585 25.6156 27.7104 25.6534C27.9281 25.7076 28.2151 25.7659 28.559 25.8262C29.2449 25.9465 30.1066 26.0662 30.9893 26.1739C32.7235 26.3857 34.4661 26.5429 35.0288 26.5695C35.0452 26.5606 35.0764 26.5403 35.1209 26.4969C35.226 26.3945 35.327 26.2321 35.379 26.055C35.4314 25.8764 35.4126 25.7617 35.3929 25.7131L35.3923 25.7117C35.3845 25.6922 35.3562 25.6213 35.1682 25.5558C34.3408 25.2674 32.8015 24.854 31.4315 24.5048C30.7545 24.3323 30.1313 24.1786 29.6774 24.068C29.4505 24.0127 29.266 23.9683 29.1385 23.9377L28.9917 23.9026L28.4959 23.785L28.2846 23.3791L28.2735 23.3578L28.239 23.2921C28.2085 23.2341 28.1633 23.1485 28.1049 23.0391C27.9883 22.8202 27.8194 22.5065 27.6118 22.129C27.196 21.373 26.6273 20.3661 26.0121 19.3552C25.3936 18.3389 24.7424 17.3423 24.1612 16.5954C23.8691 16.22 23.6147 15.9338 23.4079 15.7443C23.2843 15.631 23.2115 15.584 23.1853 15.5676C22.8056 15.5337 22.3615 15.6963 21.8916 16.1078C21.4021 16.5365 20.9974 17.1451 20.7758 17.7067C20.6778 17.9553 20.4913 18.7016 20.2722 19.8115C20.0865 20.7521 19.8899 21.8873 19.7168 23.0557C21.4681 23.0998 23.1014 23.6192 24.4924 24.4897ZM19.4507 25.0526L19.4737 25.0526C23.3074 25.0526 26.4668 27.9391 26.8974 31.6573L23.7382 31.8836L23.7188 31.886L23.7176 31.8861L23.7165 31.8862L23.6968 31.8881C23.6762 31.8899 23.6417 31.8927 23.5949 31.8953C23.5012 31.9006 23.3597 31.9053 23.1836 31.9012C22.8282 31.893 22.3491 31.8495 21.8438 31.7134C20.8463 31.4447 19.8084 30.8424 19.3061 29.4465C19.2786 29.37 19.2357 29.1544 19.2187 28.7469C19.2026 28.3634 19.2116 27.8842 19.2433 27.3312C19.2826 26.6437 19.3556 25.8656 19.4507 25.0526ZM17.4056 25.3424C17.3351 26.0005 17.2799 26.6351 17.2465 27.2169C17.2128 27.8064 17.2006 28.3569 17.2204 28.8304C17.2392 29.2798 17.2891 29.7483 17.4242 30.1236C18.2141 32.3189 19.9101 33.2638 21.3236 33.6445C22.0237 33.8331 22.6694 33.8898 23.1373 33.9007C23.3729 33.9061 23.5677 33.9 23.7074 33.8922C23.7773 33.8882 23.8338 33.8838 23.8749 33.8801C23.8942 33.8784 23.9102 33.8768 23.9226 33.8755L26.8612 33.665C26.3128 37.2522 23.2141 40 19.4737 40C15.3461 40 12 36.6539 12 32.5263C12 29.1161 14.284 26.2394 17.4056 25.3424Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}