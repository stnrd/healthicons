import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Communication extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Communication({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M48 0H0V48H48V0ZM4 20.5C4 12.4919 10.4919 6 18.5 6H29.5C37.5081 6 44 12.4919 44 20.5C44 28.5081 37.5081 35 29.5 35H28V42C28 42 4 38.5 4 20.5ZM26.5 21C26.5 22.3807 25.3807 23.5 24 23.5C22.6193 23.5 21.5 22.3807 21.5 21C21.5 19.6193 22.6193 18.5 24 18.5C25.3807 18.5 26.5 19.6193 26.5 21ZM32 23.5C33.3807 23.5 34.5 22.3807 34.5 21C34.5 19.6193 33.3807 18.5 32 18.5C30.6193 18.5 29.5 19.6193 29.5 21C29.5 22.3807 30.6193 23.5 32 23.5ZM18.5 21C18.5 22.3807 17.3807 23.5 16 23.5C14.6193 23.5 13.5 22.3807 13.5 21C13.5 19.6193 14.6193 18.5 16 18.5C17.3807 18.5 18.5 19.6193 18.5 21Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}