import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class BackPain extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const BackPain({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H48V48H0V0ZM32 30.8333C32 29.1764 33.3431 27.8333 35 27.8333C36.6569 27.8333 38 29.1764 38 30.8333V42.9999C38 43.5522 37.5523 43.9999 37 43.9999C36.4477 43.9999 36 43.5522 36 42.9999V30.8333C36 30.281 35.5523 29.8333 35 29.8333C34.4477 29.8333 34 30.281 34 30.8333V31.0555C34 31.6078 33.5523 32.0555 33 32.0555C32.4477 32.0555 32 31.6078 32 31.0555V30.8333ZM26 31C26 30.9789 25.9997 30.9579 25.999 30.937C26.0744 27.9158 26.7441 24.8753 27.6378 22.2691C27.8522 21.6439 28.0765 21.0523 28.3045 20.4994L29.0611 23.4905C29.2181 24.1112 29.6628 24.6192 30.2572 24.857L35.2572 26.857C36.2828 27.2672 37.4467 26.7683 37.857 25.7428C38.2672 24.7172 37.7683 23.5533 36.7428 23.143L32.689 21.5215L30.9389 14.6028C30.7144 13.7151 29.9157 13.0933 29 13.0933C25.3262 13.0933 22.7468 15.1192 21.179 17.6861C19.6492 20.1907 19 23.2998 19 26C19 26.9337 19.3301 27.8428 19.6507 28.5394C19.9905 29.2774 20.4249 29.9974 20.8305 30.6073C21.2403 31.2237 21.6462 31.7659 21.9479 32.1524L22 32.219V42C22 43.1046 22.8954 44 24 44C25.1046 44 26 43.1046 26 42V31ZM11.4694 9.66168C10.9817 9.40245 10.3762 9.58763 10.117 10.0753C9.85777 10.563 10.043 11.1684 10.5306 11.4277L14.2449 13.4021L12.574 14.1017C12.2202 14.2498 11.9823 14.5872 11.9616 14.9702C11.9409 15.3532 12.1411 15.7143 12.4769 15.8996L17.4136 18.6243C17.8971 18.8911 18.5054 18.7155 18.7723 18.232C19.0392 17.7484 18.8635 17.1401 18.38 16.8733L15.2539 15.1479L16.9638 14.432C17.3203 14.2828 17.5588 13.9416 17.5766 13.5556C17.5944 13.1697 17.3882 12.808 17.047 12.6266L11.4694 9.66168ZM9.8317 19.9784C9.94248 19.4179 10.4551 19.0511 10.9766 19.1591L14.6432 19.9182C14.9946 19.991 15.2755 20.2674 15.3723 20.6357C15.4691 21.0041 15.3657 21.4034 15.1041 21.6721L14.3066 22.4914L16.2447 22.9956C16.7605 23.1297 17.069 23.6882 16.9339 24.243C16.7987 24.7978 16.2711 25.1387 15.7553 25.0046L12.1302 24.0615C11.7906 23.9731 11.526 23.6934 11.4394 23.331C11.3527 22.9685 11.4577 22.5806 11.7134 22.3179L12.4374 21.5742L10.5754 21.1887C10.0539 21.0807 9.72093 20.5388 9.8317 19.9784ZM33 12C35.2091 12 37 10.2091 37 8C37 5.79086 35.2091 4 33 4C30.7909 4 29 5.79086 29 8C29 10.2091 30.7909 12 33 12Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}