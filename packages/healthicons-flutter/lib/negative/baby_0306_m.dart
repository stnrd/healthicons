import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Baby0306M extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Baby0306M({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M48 0.25H0V48.25H48V0.25ZM18.8481 31.2843C19.9716 29.7114 19.6073 27.5255 18.0343 26.4019C16.4614 25.2784 14.2755 25.6427 13.1519 27.2157L11.6988 29.25H9.5C7.567 29.25 6 30.817 6 32.75C6 34.683 7.567 36.25 9.5 36.25H13.5C14.6303 36.25 15.6911 35.7041 16.3481 34.7843L18.8481 31.2843ZM39.474 30.6434H36.2699L35.7002 30.3813C35.2718 29.9052 34.7654 29.2651 34.2137 28.5675C32.8856 26.8886 31.2946 24.8773 29.895 24.0219C29.0572 23.5097 28.1152 23.244 27.1587 23.2501H27.154H21.5L22.0859 36.25H26.8148H26.8159C27.5967 36.2486 28.3694 36.0731 29.0878 35.7336C29.8066 35.3942 30.4566 34.8977 30.999 34.2737L31.5685 33.6186C31.7926 33.8676 32.0114 34.217 32.2386 34.58C32.7407 35.3818 33.2843 36.25 34.0189 36.25H39.6078C40.2779 36.25 40.7864 35.9547 41.2603 35.429C41.7339 34.9032 42.0001 34.1901 42.0001 33.4467C42.0001 32.7033 41.7339 31.9902 41.2603 31.4646C40.7864 30.9387 40.144 30.6434 39.474 30.6434ZM33.5 22.25C37.0899 22.25 40 19.3399 40 15.75C40 12.1601 37.0899 9.25 33.5 9.25C29.9101 9.25 27 12.1601 27 15.75C27 19.3399 29.9101 22.25 33.5 22.25Z" fill="#333333"/>
</g>
<defs>
<clipPath id="clip0">
<rect width="48" height="48" fill="white" transform="translate(0 0.25)"/>
</clipPath>
</defs>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}