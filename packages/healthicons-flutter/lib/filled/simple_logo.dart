import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class SimpleLogo extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const SimpleLogo({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.0886 29.3442C10.0886 37.3775 16.5607 43.8896 24.5444 43.8896C32.5281 43.8896 39.0001 37.3775 39.0001 29.3442C39.0001 18.4351 24.5444 3.88965 24.5444 3.88965C24.5444 3.88965 10.0886 18.4351 10.0886 29.3442ZM30.3753 33.4584C30.9685 32.6823 32.0749 32.5369 32.8464 33.1335C33.618 33.7302 33.7626 34.8431 33.1693 35.6193L32.9266 35.9369C28.6942 41.4743 20.3947 41.4743 16.1623 35.9369L15.9195 35.6193C15.3264 34.8431 15.4709 33.7302 16.2425 33.1335C17.0141 32.5369 18.1204 32.6823 18.7136 33.4584L18.9564 33.7759C21.7779 37.4675 27.3109 37.4675 30.1325 33.7759L30.3753 33.4584Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}