import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class CallCentre extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const CallCentre({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.4036 22.2023C21.3982 22.2023 22.2044 21.3961 22.2044 20.4015C22.2044 19.407 21.3982 18.6007 20.4036 18.6007C19.409 18.6007 18.6028 19.407 18.6028 20.4015C18.6028 21.3961 19.409 22.2023 20.4036 22.2023Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.4094 30.0084V42H28.5218V35.4881H32.8147C33.0828 35.4881 33.3386 35.4353 33.5723 35.3396L31.1912 33.4881H26.5218V40H13.4094V29.2018L12.8499 28.621C11.2078 26.916 8.00006 22.9314 8 17.975C7.99998 16.3445 8.61533 13.8485 10.4657 11.7854C12.0994 9.96398 14.839 8.32041 19.4031 8.04155V15.0927C16.8979 15.5616 15.002 17.7597 15.002 20.4004C15.002 23.3827 17.4201 25.8004 20.4031 25.8004C21.5383 25.8004 22.5918 25.4503 23.4612 24.8521L37.5319 35.7745C37.5103 35.8998 37.499 36.0285 37.499 36.1599C37.499 37.4028 38.5066 38.4104 39.7495 38.4104C40.9924 38.4104 42 37.4028 42 36.1599C42 34.917 40.9924 33.9094 39.7495 33.9094C39.3764 33.9094 39.0245 34.0002 38.7147 34.1609L24.8803 23.4218C25.4636 22.5595 25.8043 21.5197 25.8043 20.4004C25.8043 17.7596 23.9083 15.5616 21.4031 15.0927V8.00543C23.9459 8.05191 25.708 8.39317 27.041 8.89279C28.4532 9.42213 29.4998 10.172 30.5547 11.1502L30.6966 11.2817C31.7311 12.2404 32.0395 12.5262 32.214 12.9911C33.5165 16.4607 35.3287 21.2847 36.4473 24.2616L32.8147 24.2616V27.15L34.8147 28.7052V26.2616H36.4472C37.8442 26.2616 38.8118 24.8685 38.3204 23.5608C37.202 20.5841 35.3891 15.7586 34.0864 12.2882C33.7374 11.3586 33.0615 10.7378 32.2118 9.95751C32.1149 9.86854 32.0158 9.77749 31.9146 9.68367C29.5512 7.49217 26.859 6 20.7981 6C9.0056 6 5.99995 13.8752 6 17.975C6.00007 23.7421 9.68312 28.216 11.4094 30.0084ZM20.4031 23.8004C22.2819 23.8004 23.8043 22.2778 23.8043 20.4004C23.8043 18.523 22.2819 17.0004 20.4031 17.0004C18.5243 17.0004 17.002 18.523 17.002 20.4004C17.002 22.2778 18.5243 23.8004 20.4031 23.8004Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}