import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class BabyMale0203M extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const BabyMale0203M({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M16 15C16 17.7614 13.7614 20 11 20C8.23858 20 6 17.7614 6 15C6 12.2386 8.23858 10 11 10C12.1697 10 13.2455 10.4016 14.0972 11.0745L17.1718 8H15C14.4477 8 14 7.55228 14 7C14 6.44772 14.4477 6 15 6H19.5C20.0523 6 20.5 6.44772 20.5 7V12C20.5 12.5523 20.0523 13 19.5 13C18.9477 13 18.5 12.5523 18.5 12V9.50025L15.3919 12.6082C15.7796 13.3187 16 14.1336 16 15ZM14 15C14 16.6569 12.6569 18 11 18C9.34315 18 8 16.6569 8 15C8 13.3431 9.34315 12 11 12C12.6569 12 14 13.3431 14 15Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M30 17C33.0376 17 35.5 14.5376 35.5 11.5C35.5 8.46243 33.0376 6 30 6C26.9624 6 24.5 8.46243 24.5 11.5C24.5 14.5376 26.9624 17 30 17ZM30 15C31.933 15 33.5 13.433 33.5 11.5C33.5 9.567 31.933 8 30 8C28.067 8 26.5 9.567 26.5 11.5C26.5 13.433 28.067 15 30 15Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M24.0001 28.9404C24.0001 29.0621 24.011 29.1939 24.0329 29.3331C22.1795 30.9237 21 33.2526 21 35.857C21 36.8138 21.1894 38.2459 21.7366 39.4775C22.278 40.6958 23.3185 42 25.1111 42C26.8561 42 28.3333 40.6268 28.3333 38.8571C28.3333 38.1042 28.0307 37.4535 27.8257 37.0127L27.7963 36.9494C27.5603 36.4396 27.4444 36.1513 27.4444 35.857C27.4444 35.5681 27.6103 35.0855 27.9708 34.5333C28.1803 34.2124 28.4186 33.9246 28.6448 33.6983C29.1135 33.8794 29.5736 34 30.0001 34C30.4265 34 30.8866 33.8794 31.3552 33.6984C31.5814 33.9246 31.8197 34.2124 32.0292 34.5333C32.3897 35.0855 32.5556 35.5681 32.5556 35.857C32.5556 36.1432 32.4392 36.4376 32.2018 36.9561L32.1707 37.024C31.9676 37.4656 31.6667 38.1198 31.6667 38.8571C31.6667 40.6268 33.1439 42 34.8889 42C36.6755 42 37.7062 40.6115 38.2383 39.4107C38.7876 38.1712 39 36.7442 39 35.857C39 33.2527 37.8205 30.9238 35.9672 29.3332C35.9891 29.194 36.0001 29.0621 36.0001 28.9404V23.8011C36.3962 23.7232 36.798 23.6379 37.2062 23.5456C38.0383 23.3573 38.8978 23.1394 39.7951 22.8928C41.3927 22.4536 42.3318 20.8026 41.8927 19.205C41.4536 17.6073 39.8025 16.6682 38.2049 17.1073C34.8409 18.0319 32.3863 18.4245 30.0125 18.4144C27.629 18.4044 25.1619 17.9881 21.7595 17.0978C20.1566 16.6783 18.5172 17.6377 18.0977 19.2406C17.6783 20.8434 18.6377 22.4829 20.2405 22.9023C21.5636 23.2485 22.8059 23.5416 24.0001 23.7749V28.9404ZM39.0276 21.0291C39.1064 21.0077 39.1855 20.9861 39.265 20.9643C39.7976 20.8179 40.1106 20.2675 39.9642 19.735C39.8179 19.2025 39.2675 18.8894 38.735 19.0358C35.2703 19.9881 32.6237 20.4255 30.004 20.4144C27.3811 20.4033 24.7304 19.9425 21.2532 19.0326C20.7189 18.8928 20.1724 19.2126 20.0326 19.7469C19.8928 20.2812 20.2126 20.8276 20.7468 20.9675C22.3444 21.3855 23.7962 21.7177 25.1721 21.958C25.6508 22.0416 26.0001 22.4572 26.0001 22.9431V26H34.0001V22.9697C34.0001 22.4835 34.3497 22.0678 34.8287 21.9845C36.1376 21.7567 37.5173 21.4385 39.0276 21.0291ZM24.8853 31.273C23.711 32.4776 23 34.0912 23 35.857C23 36.6148 23.1594 37.7542 23.5643 38.6654C23.9751 39.5899 24.4901 40 25.1111 40C25.8207 40 26.3333 39.4544 26.3333 38.8571C26.3333 38.5831 26.2219 38.309 25.9815 37.7898L25.9598 37.743C25.7511 37.2934 25.4444 36.6327 25.4444 35.857C25.4444 34.9942 25.8547 34.116 26.2961 33.4399C26.4355 33.2265 26.5886 33.0169 26.7509 32.8173C25.9209 32.4138 25.313 31.8512 24.8853 31.273ZM33.2491 32.8173C33.4114 33.0169 33.5645 33.2265 33.7039 33.4399C34.1453 34.116 34.5556 34.9942 34.5556 35.857C34.5556 36.6219 34.2498 37.2885 34.0423 37.7408L34.0204 37.7885C33.7778 38.3186 33.6667 38.5955 33.6667 38.8571C33.6667 39.4544 34.1793 40 34.8889 40C35.4479 40 35.9729 39.5864 36.4098 38.6004C36.8296 37.6531 37 36.5087 37 35.857C37 34.0912 36.289 32.4777 35.1148 31.2731C34.6871 31.8513 34.0792 32.4139 33.2491 32.8173ZM34 28.9404C34 29.0303 33.9332 29.415 33.646 29.8785C33.3754 30.3153 32.9403 30.7688 32.2726 31.0661C32.0445 31.1677 31.8209 31.2789 31.5973 31.3901L31.4883 31.4442C31.2432 31.5654 31.0246 31.6706 30.8099 31.7616C30.3441 31.9589 30.0958 32 30 32C29.9042 32 29.6559 31.9589 29.1901 31.7616C28.9751 31.6704 28.7561 31.5651 28.5106 31.4437L28.3835 31.3807C28.1875 31.2833 27.9469 31.1638 27.7274 31.0661C27.0597 30.7688 26.6246 30.3153 26.354 29.8785C26.0668 29.415 26 29.0303 26 28.9404V28H33.982L34 28.9404Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}