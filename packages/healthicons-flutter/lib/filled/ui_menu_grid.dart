import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class UiMenuGrid extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const UiMenuGrid({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 8C6 6.89543 6.89543 6 8 6H14C15.1046 6 16 6.89543 16 8V14C16 15.1046 15.1046 16 14 16H8C6.89543 16 6 15.1046 6 14V8Z" fill="#333333"/>
<path d="M6 21C6 19.8954 6.89543 19 8 19H14C15.1046 19 16 19.8954 16 21V27C16 28.1046 15.1046 29 14 29H8C6.89543 29 6 28.1046 6 27V21Z" fill="#333333"/>
<path d="M6 34C6 32.8954 6.89543 32 8 32H14C15.1046 32 16 32.8954 16 34V40C16 41.1046 15.1046 42 14 42H8C6.89543 42 6 41.1046 6 40V34Z" fill="#333333"/>
<path d="M19 8C19 6.89543 19.8954 6 21 6H27C28.1046 6 29 6.89543 29 8V14C29 15.1046 28.1046 16 27 16H21C19.8954 16 19 15.1046 19 14V8Z" fill="#333333"/>
<path d="M19 21C19 19.8954 19.8954 19 21 19H27C28.1046 19 29 19.8954 29 21V27C29 28.1046 28.1046 29 27 29H21C19.8954 29 19 28.1046 19 27V21Z" fill="#333333"/>
<path d="M19 34C19 32.8954 19.8954 32 21 32H27C28.1046 32 29 32.8954 29 34V40C29 41.1046 28.1046 42 27 42H21C19.8954 42 19 41.1046 19 40V34Z" fill="#333333"/>
<path d="M32 8C32 6.89543 32.8954 6 34 6H40C41.1046 6 42 6.89543 42 8V14C42 15.1046 41.1046 16 40 16H34C32.8954 16 32 15.1046 32 14V8Z" fill="#333333"/>
<path d="M32 21C32 19.8954 32.8954 19 34 19H40C41.1046 19 42 19.8954 42 21V27C42 28.1046 41.1046 29 40 29H34C32.8954 29 32 28.1046 32 27V21Z" fill="#333333"/>
<path d="M32 34C32 32.8954 32.8954 32 34 32H40C41.1046 32 42 32.8954 42 34V40C42 41.1046 41.1046 42 40 42H34C32.8954 42 32 41.1046 32 40V34Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}