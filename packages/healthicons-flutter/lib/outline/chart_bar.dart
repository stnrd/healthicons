import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class ChartBar extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const ChartBar({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8 40V7H6V41C6 41.5523 6.44772 42 7 42H41V40H8Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11 25C11 24.4477 11.4477 24 12 24H18C18.5523 24 19 24.4477 19 25V41C19 41.5523 18.5523 42 18 42H12C11.4477 42 11 41.5523 11 41V25ZM13 26V40H17V26H13Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M21 21C21 20.4477 21.4477 20 22 20H28C28.5523 20 29 20.4477 29 21V41C29 41.5523 28.5523 42 28 42H22C21.4477 42 21 41.5523 21 41V21ZM23 22V40H27V22H23Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M31 13C31 12.4477 31.4477 12 32 12H38C38.5523 12 39 12.4477 39 13V41C39 41.5523 38.5523 42 38 42H32C31.4477 42 31 41.5523 31 41V13ZM33 14V40H37V14H33Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}