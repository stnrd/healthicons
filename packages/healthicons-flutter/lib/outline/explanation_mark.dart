import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class ExplanationMark extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const ExplanationMark({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M21 11.8182C21 10.1742 22.435 9 24 9C25.565 9 27 10.1742 27 11.8182L27 28.1818C27 29.8258 25.565 31 24 31C22.435 31 21 29.8258 21 28.1818L21 11.8182ZM24 11C23.3559 11 23 11.4539 23 11.8182L23 28.1818C23 28.5461 23.3559 29 24 29C24.6441 29 25 28.5461 25 28.1818L25 11.8182C25 11.4539 24.6441 11 24 11Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M24 35C23.4477 35 23 35.4477 23 36C23 36.5523 23.4477 37 24 37C24.5523 37 25 36.5523 25 36C25 35.4477 24.5523 35 24 35ZM21 36C21 34.3431 22.3431 33 24 33C25.6569 33 27 34.3431 27 36C27 37.6569 25.6569 39 24 39C22.3431 39 21 37.6569 21 36Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}