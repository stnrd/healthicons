import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Overweight extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Overweight({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M23.9999 6C22.343 6 20.9999 7.34315 20.9999 9C20.9999 10.6569 22.343 12 23.9999 12C25.6567 12 26.9999 10.6569 26.9999 9C26.9999 7.34315 25.6567 6 23.9999 6ZM18.9999 9C18.9999 6.23858 21.2385 4 23.9999 4C26.7613 4 28.9999 6.23858 28.9999 9C28.9999 11.7614 26.7613 14 23.9999 14C21.2385 14 18.9999 11.7614 18.9999 9ZM23.9862 15.0003C28.0341 14.9822 31.9951 15.708 36.8393 17.1198C38.43 17.5834 39.3437 19.2487 38.8801 20.8394C38.4165 22.4301 36.7512 23.3438 35.1605 22.8802C34.4252 22.6659 33.721 22.4712 33.0431 22.2956C33.5237 23.8811 33.9364 25.5323 33.9932 27.1493C34.0694 29.3201 33.508 31.4571 31.7064 33.3648L30.9876 41.2716C30.8424 42.869 29.4663 44.0696 27.864 43.9969C26.2616 43.9242 24.9999 42.604 24.9999 41V35.9951C24.6728 36 24.3445 36 24.0179 36H23.9819C23.6553 36 23.327 36 22.9999 35.9951V41C22.9999 42.604 21.7382 43.9242 20.1358 43.9969C18.5335 44.0696 17.1574 42.869 17.0122 41.2716L16.2934 33.3648C14.4977 31.4633 13.9339 29.3336 14.006 27.1694C14.0598 25.5544 14.4696 23.9057 14.9486 22.3222C14.2618 22.4944 13.5479 22.6838 12.802 22.8908C11.2055 23.3338 9.55213 22.3987 9.10913 20.8021C8.66613 19.2056 9.60125 17.5522 11.1978 17.1092C16.0012 15.7764 19.9489 15.0184 23.9862 15.0003ZM36.2797 19.0399C31.5405 17.6587 27.7823 16.9833 23.9952 17.0003C20.2115 17.0173 16.4579 17.7252 11.7325 19.0364C11.2004 19.1841 10.8886 19.7352 11.0363 20.2674C11.184 20.7995 11.7351 21.1113 12.2673 20.9636C13.6741 20.5732 14.981 20.2409 16.2166 19.9668L17.9211 19.5887L17.3848 21.2502C16.6959 23.385 16.067 25.3697 16.0049 27.236C15.9449 29.0344 16.4141 30.6897 17.9578 32.206L18.2197 32.4632L19.004 41.0905C19.0524 41.623 19.5111 42.0232 20.0452 41.999C20.5793 41.9747 20.9999 41.5347 20.9999 41V33.8871L22.0673 33.9591C22.667 33.9996 23.2957 34 23.9999 34C24.7041 34 25.3328 33.9996 25.9326 33.9591L26.9999 33.8871V41C26.9999 41.5347 27.4205 41.9747 27.9546 41.999C28.4887 42.0232 28.9474 41.623 28.9958 41.0905L29.7801 32.4632L30.042 32.206C31.5902 30.6854 32.0578 29.0246 31.9944 27.2195C31.9286 25.3459 31.2941 23.3544 30.6027 21.2122L30.0644 19.5443L31.7742 19.9296C33.0098 20.208 34.3155 20.5507 35.7201 20.9601C36.2503 21.1146 36.8054 20.81 36.96 20.2798C37.1145 19.7496 36.8099 19.1945 36.2797 19.0399Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}