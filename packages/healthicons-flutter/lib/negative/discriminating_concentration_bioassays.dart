import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class DiscriminatingConcentrationBioassays extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const DiscriminatingConcentrationBioassays({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M48 0H0V48H48V0ZM26 8C26 6.89543 26.8954 6 28 6H37C38.1046 6 39 6.89543 39 8V12H37.4667V14.1949C37.4667 15.0557 37.8364 15.875 38.4818 16.4444L40.3081 18.0559C41.3838 19.005 42 20.3705 42 21.8051V37C42 39.7614 39.7614 42 37 42H28C25.2386 42 23 39.7614 23 37V21.8051C23 20.3705 23.6162 19.005 24.6919 18.0559L26.5182 16.4444C27.1636 15.875 27.5333 15.0557 27.5333 14.1949V12H26V8ZM29.5333 12H35.4667V14.1949C35.4667 15.6295 36.0829 16.995 37.1586 17.9441L38.9849 19.5556C39.6303 20.125 40 20.9443 40 21.8051V37C40 38.6569 38.6569 40 37 40H28C26.3431 40 25 38.6569 25 37V21.8051C25 20.9443 25.3697 20.125 26.0151 19.5556L27.8414 17.9441C28.9171 16.995 29.5333 15.6295 29.5333 14.1949V12ZM32.5 21C32.7761 21 33 21.2239 33 21.5V24.2276C33.2805 24.492 33.5227 24.9726 33.6985 25.5944L34.5 24.7929V23.5C34.5 23.3674 34.5527 23.2402 34.6464 23.1464L36.1464 21.6464C36.3417 21.4512 36.6583 21.4512 36.8535 21.6464C37.0488 21.8417 37.0488 22.1583 36.8535 22.3536L35.5 23.7071V25C35.5 25.1326 35.4473 25.2598 35.3535 25.3536L33.9287 26.7784C33.9398 26.8707 33.9497 26.9644 33.9583 27.0595L38.7624 27.8571C38.9189 28.5714 38.6686 30 36.4159 30C35.1129 30 34.3752 29.3309 33.9847 28.5732C33.9733 28.7854 33.9556 28.9922 33.9322 29.1922L36.2867 30.8404C36.4769 30.9735 36.5505 31.2201 36.4642 31.4357L36.1473 32.228L37.1923 32.6635C37.4472 32.7697 37.5677 33.0624 37.4615 33.3173C37.3553 33.5722 37.0626 33.6927 36.8077 33.5865L35.3077 32.9615C35.0554 32.8564 34.9342 32.5681 35.0358 32.3143L35.3886 31.4323L33.7341 30.2742C33.6997 30.4066 33.6625 30.5332 33.6225 30.6534L33.9794 31.858C33.9931 31.9041 34 31.9519 34 32V32.9496L35.3904 34.6877C35.5629 34.9033 35.528 35.2179 35.3123 35.3904C35.0967 35.5629 34.7821 35.528 34.6096 35.3123L33.1096 33.4373C33.0386 33.3487 33 33.2385 33 33.125V32.0725L32.9293 31.8338C32.7933 31.9419 32.6492 32 32.5 32C32.367 32 32.238 31.9538 32.1152 31.8672L32 32.3135V33.125C32 33.2385 31.9614 33.3487 31.8904 33.4373L30.3904 35.3123C30.2179 35.528 29.9033 35.5629 29.6877 35.3904C29.472 35.2179 29.4371 34.9033 29.6096 34.6877L31 32.9496V32.25C31 32.2079 31.0053 32.1659 31.0159 32.1251L31.3878 30.6839C31.3355 30.5301 31.2877 30.3655 31.2449 30.1913L29.6066 31.4201L29.9642 32.3143C30.0658 32.5681 29.9446 32.8564 29.6923 32.9615L28.1923 33.5865C27.9374 33.6927 27.6447 33.5722 27.5385 33.3173C27.4323 33.0624 27.5528 32.7697 27.8077 32.6635L28.8527 32.228L28.5358 31.4357C28.4518 31.2258 28.5191 30.9856 28.7 30.85L31.0556 29.0833C31.0239 28.7812 31.005 28.4647 31.0009 28.1382C30.6834 29.0542 29.9332 30 28.3841 30C26.1314 30 25.8811 28.5714 26.0376 27.8571L31.0448 27.0258C31.0526 26.9422 31.0615 26.8597 31.0712 26.7784L29.6464 25.3536C29.5527 25.2598 29.5 25.1326 29.5 25V23.7071L28.1464 22.3536C27.9512 22.1583 27.9512 21.8417 28.1464 21.6464C28.3417 21.4512 28.6583 21.4512 28.8535 21.6464L30.3535 23.1464C30.4473 23.2402 30.5 23.3674 30.5 23.5V24.7929L31.3015 25.5944C31.4772 24.9726 31.7195 24.492 32 24.2276V21.5C32 21.2239 32.2239 21 32.5 21ZM27.1801 28.6811C27.3152 28.8112 27.6338 29 28.3841 29C29.1571 29 29.5596 28.683 29.8083 28.3151C29.8257 28.2893 29.8425 28.263 29.8586 28.2364L27.1801 28.6811ZM36.4159 29C37.1662 29 37.4848 28.8112 37.6199 28.6811L34.9414 28.2364C34.9575 28.263 34.9743 28.2893 34.9917 28.3151C35.2404 28.683 35.6429 29 36.4159 29ZM6.74999 14.1429H6V9H20V14.1429H19.25V15.2447C19.25 15.9052 18.9841 16.5379 18.5123 17.0001C18.4245 17.0861 18.375 17.2038 18.375 17.3267V30.6733C18.375 30.7962 18.4245 30.9139 18.5123 30.9999C18.9841 31.4621 19.25 32.0948 19.25 32.7553V33.8571H20V39H6V33.8571H6.74999V32.7553C6.74999 32.0948 7.01589 31.4621 7.48771 30.9999C7.57552 30.9139 7.62499 30.7962 7.62499 30.6733V17.3267C7.62499 17.2038 7.57552 17.0861 7.48771 17.0001C7.01589 16.5379 6.74999 15.9052 6.74999 15.2447V14.1429ZM17.25 32.7553V33.8571H16V35C16 35.5523 15.5523 36 15 36C14.4477 36 14 35.5523 14 35V33.8571H12V35C12 35.5523 11.5523 36 11 36C10.4477 36 9.99998 35.5523 9.99998 35V33.8571H8.74999V32.7553C8.74999 32.6324 8.79947 32.5147 8.88727 32.4287C9.3591 31.9665 9.62499 31.3338 9.62499 30.6733V17.3267C9.62499 16.6663 9.3591 16.0336 8.88727 15.5714C8.79947 15.4854 8.74999 15.3676 8.74999 15.2447V14.1429H9.99998V12.4286C9.99998 11.8763 10.4477 11.4286 11 11.4286C11.5523 11.4286 12 11.8763 12 12.4286V14.1429H14V12.4286C14 11.8763 14.4477 11.4286 15 11.4286C15.5523 11.4286 16 11.8763 16 12.4286V14.1429H17.25V15.2447C17.25 15.3676 17.2005 15.4854 17.1127 15.5714C16.6409 16.0336 16.375 16.6663 16.375 17.3267V30.6733C16.375 31.3338 16.6409 31.9665 17.1127 32.4287C17.2005 32.5147 17.25 32.6324 17.25 32.7553Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}