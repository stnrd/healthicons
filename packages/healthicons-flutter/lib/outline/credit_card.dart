import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class CreditCard extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const CreditCard({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7 38C5.34315 38 4 36.6569 4 35V13C4 11.3431 5.34315 10 7 10H41C42.6569 10 44 11.3431 44 13V35C44 36.6569 42.6569 38 41 38H7ZM6 13C6 12.4477 6.44772 12 7 12H41C41.5523 12 42 12.4477 42 13V16H6V13ZM7 36C6.44772 36 6 35.5523 6 35V24H42V35C42 35.5523 41.5523 36 41 36H7Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}