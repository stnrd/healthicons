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
<path fill-rule="evenodd" clip-rule="evenodd" d="M7 10C5.34315 10 4 11.3431 4 13V17H44V13C44 11.3431 42.6569 10 41 10H7ZM44 23H4V35C4 36.6569 5.34315 38 7 38H41C42.6569 38 44 36.6569 44 35V23Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}