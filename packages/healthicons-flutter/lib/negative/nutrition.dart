import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Nutrition extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Nutrition({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H48V48H0V0ZM32.6508 21.0274C31.542 18.4345 31.7342 15.68 33.7071 13.7071L32.2929 12.2929C29.9635 14.6222 29.559 17.6703 30.3403 20.4708C25.7646 18.4006 21 22.2077 21 28C21 33.5228 25.9249 38 32 38C38.0751 38 43 33.5228 43 28C43 21.7798 37.5055 17.849 32.6508 21.0274ZM39.2425 29.0298C39.7783 29.1638 40.1041 29.7067 39.9701 30.2425C39.3806 32.6008 37.6008 34.3805 35.2425 34.9701C34.7067 35.1041 34.1638 34.7783 34.0299 34.2425C33.8959 33.7067 34.2217 33.1638 34.7575 33.0298C36.3992 32.6194 37.6194 31.3992 38.0299 29.7574C38.1638 29.2216 38.7067 28.8959 39.2425 29.0298ZM34 18C37 18 39 16 39 13C36 13 34 15 34 18ZM18.9353 17.3875C20.057 16.3609 20.8229 14.6951 20.973 12.004C21.0038 11.4526 20.5508 10.9983 19.9986 11.0063C18.3705 11.0297 17.0774 11.1286 16.0686 11.4677C15.6522 10.3693 14.8114 9.33225 13.5463 8.38555C13.223 8.14368 12.7769 8.14368 12.4537 8.38555C11.1988 9.32456 10.3614 10.3524 9.94159 11.4409C8.96196 11.152 7.67913 11.0374 6.004 11.0081C5.4518 10.9984 4.99623 11.4526 5.02699 12.004C5.17711 14.6951 5.94305 16.361 7.06476 17.3876C6.51708 17.7955 6.19955 18.4802 6.31613 19.2205C6.43566 19.9795 6.59264 20.9154 6.79293 22H11V24H7.17984C7.6912 26.5303 8.39515 29.6086 9.34086 33H12V35H9.91672C10.3229 36.3669 10.7673 37.7746 11.2528 39.209C11.8358 40.9314 14.1643 40.9314 14.7473 39.209C15.984 35.5554 16.9537 32.0755 17.7046 29H12V27H18.176C18.9286 23.6895 19.4069 20.98 19.684 19.2205C19.8005 18.4802 19.483 17.7954 18.9353 17.3875ZM14.1985 12.1766L14.8809 13.9769L16.7059 13.3634C17.2091 13.1943 17.8899 13.0933 18.8597 13.0424C18.5629 14.9746 17.8475 15.7906 17.1954 16.2123C16.2589 16.818 14.8922 17 13 17H13C11.1078 17 9.74105 16.818 8.80459 16.2123C8.15311 15.791 7.43847 14.9761 7.14116 13.048C8.1419 13.1027 8.8542 13.2054 9.37585 13.3592L11.1442 13.8807L11.8076 12.1606C11.9982 11.6664 12.3665 11.1115 13 10.5265C13.6402 11.1177 14.0095 11.6782 14.1985 12.1766Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}