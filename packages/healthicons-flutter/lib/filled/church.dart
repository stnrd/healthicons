import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Church extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Church({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M23 13.6429V11L20 11V9L23 9V6H25V9L28 9V11L25 11V13.6429L30.2222 17C30.2222 17 31 17.5 31 18.5V42H27V33C27 31.3431 25.6569 30 24 30C22.3431 30 21 31.3431 21 33V42H17V18.5C17 17.5 17.7778 17 17.7778 17L23 13.6429Z" fill="#333333"/>
<path d="M7.5 26.5C6.53902 26.7782 6 27.5797 6 28.5V42H15V24L7.5 26.5Z" fill="#333333"/>
<path d="M42 28.5C42 27.5797 41.461 26.7782 40.5 26.5L33 24V42H42V28.5Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}