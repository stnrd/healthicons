import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Forum extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Forum({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H48V48H0V0ZM4 18.0694C4 12.5082 8.50824 8 14.0694 8H21.9306C27.4918 8 32 12.5082 32 18.0694C32 23.6306 27.4918 28.1389 21.9306 28.1389H16V33C16 33 4 30.5694 4 18.0694ZM30.0559 32.1111C27.8907 32.1111 25.925 31.2569 24.4774 29.867C29.9208 28.6923 33.9999 23.8503 33.9999 18.0556C33.9999 17.3451 33.9079 16.6562 33.7352 16H35.9448C40.3937 16 44.0003 19.6066 44.0003 24.0556C44.0003 34.0556 33.0003 36 33.0003 36V32.1111H30.0559Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}