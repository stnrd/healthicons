import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Svg0 extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Svg0({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M22 14C19.7909 14 18 15.7909 18 18V29.3808L27.2495 14.1985C26.8567 14.0696 26.4369 14 26 14H22ZM29.9607 17.4363L20.1463 33.546C20.7006 33.8365 21.3308 34 22 34H26C28.2091 34 30 32.2091 30 30V18C30 17.8086 29.9866 17.6205 29.9607 17.4363ZM14 18C14 13.5817 17.5817 10 22 10H26C28.0477 10 29.9198 10.7719 31.3338 12.0375C32.9673 13.4995 34 15.6305 34 18V30C34 34.4183 30.4183 38 26 38H22C19.6305 38 17.4995 36.9673 16.0375 35.3338C14.7719 33.9198 14 32.0477 14 30V18Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}