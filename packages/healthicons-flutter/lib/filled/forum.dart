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
<path d="M4 20.0694C4 14.5082 8.50824 10 14.0694 10H21.9306C27.4918 10 32 14.5082 32 20.0694C32 25.6306 27.4918 30.1389 21.9306 30.1389H16V35C16 35 4 32.5694 4 20.0694Z" fill="#333333"/>
<path d="M24.4774 31.867C25.925 33.2569 27.8907 34.1111 30.0559 34.1111H33.0003V38C33.0003 38 44.0003 36.0556 44.0003 26.0556C44.0003 21.6066 40.3937 18 35.9448 18H33.7352C33.9079 18.6562 33.9999 19.3451 33.9999 20.0556C33.9999 25.8503 29.9208 30.6923 24.4774 31.867Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}