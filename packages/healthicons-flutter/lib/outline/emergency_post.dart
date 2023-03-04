import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class EmergencyPost extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const EmergencyPost({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.9158 20.7595L6.03573 34.7491C5.87591 35.3365 6.31672 36 7.05433 36H29.2589C29.7467 36 30.1448 35.6872 30.2697 35.2782L30.2814 35.2398L35.6105 20H11.9381C11.4503 20 11.0522 20.3128 10.9273 20.7218L10.9158 20.7595ZM36.9848 22.1289L42.0296 33.3511C42.2269 33.8682 42.8134 34.1302 43.3395 33.9363C43.8657 33.7424 44.1322 33.166 43.9349 32.6489L37.5827 18H11.9381C10.5901 18 9.40179 18.869 9.01446 20.138L4.13073 34.138C3.54321 36.0628 5.00969 38 7.05433 38H29.2589C30.6069 38 31.7952 37.131 32.1825 35.862L36.9848 22.1289Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M34.5 34.5L42.7059 32.0442L43.2941 33.9557L33.5 37L34.5 34.5Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M37 21C36.4477 21 36 20.5523 36 20V13C36 12.4477 36.4477 12 37 12C37.5523 12 38 12.4477 38 13V20C38 20.5523 37.5523 21 37 21Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M36 12H31V14H36V12ZM29 10V16H38V10H29Z" fill="#333333"/>
<path d="M19.7575 32.9704C19.2217 32.8364 18.8959 32.2935 19.0299 31.7577L19.7193 29H17C16.4477 29 16 28.5523 16 28C16 27.4477 16.4477 27 17 27H20.2193L21.0299 23.7577C21.1638 23.2219 21.7067 22.8961 22.2425 23.0301C22.7783 23.164 23.1041 23.707 22.9701 24.2428L22.2808 27H25C25.5523 27 26 27.4477 26 28C26 28.5523 25.5523 29 25 29H21.7808L20.9701 32.2428C20.8362 32.7786 20.2933 33.1043 19.7575 32.9704Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}