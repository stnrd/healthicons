import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class CervicalCancer extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const CervicalCancer({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22.7203 11.4C22.6695 11.4 22.6207 11.4212 22.5848 11.4589C22.1183 11.9487 22.0986 12.7362 22.5399 13.251L24.0002 14.9546L25.4604 13.251C25.9017 12.7362 25.882 11.9487 25.4155 11.4589C25.3796 11.4212 25.3309 11.4 25.28 11.4H22.7203Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M37.295 6H10.705C7.57899 13.8479 5.99214 20.1062 6.00003 25.8515C6.00774 31.4661 7.53757 36.5114 10.5043 42.0001H37.4957C40.4624 36.5114 41.9923 31.4661 42 25.8515C42.0079 20.1062 40.421 13.8479 37.295 6ZM25.1533 16.3L26.7346 14.4552C27.7858 13.2287 27.7389 11.3529 26.6277 10.1861C26.2703 9.81084 25.7855 9.6 25.28 9.6H22.7203C22.2148 9.6 21.73 9.81084 21.3726 10.1861C20.2614 11.3529 20.2145 13.2287 21.2657 14.4552L22.847 16.3L19.0773 20.6979L20.3515 21.9021L24.0002 17.6454L27.6488 21.9021L28.923 20.6979L25.1533 16.3ZM24.8571 31.5462L31.8792 24.1731L30.667 22.9003L24 29.9006L17.333 22.9003L16.1208 24.1731L23.1429 31.5462V41.9999H24.8571V31.5462Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}