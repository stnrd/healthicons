import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class B extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const B({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M14 12C14 10.8954 14.8954 10 16 10L26 10C30.4183 10 34 13.5817 34 18C34 20.3894 32.9525 22.5341 31.2916 24C32.9525 25.4659 34 27.6106 34 30C34 34.4183 30.4183 38 26 38H16C15.4696 38 14.9609 37.7893 14.5858 37.4142C14.2107 37.0391 14 36.5304 14 36L14 12ZM26 22C28.2091 22 30 20.2091 30 18C30 15.7909 28.2091 14 26 14L18 14L18 22L26 22ZM18 26L26 26C28.2091 26 30 27.7909 30 30C30 32.2091 28.2091 34 26 34H18L18 26Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}