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
<path fill-rule="evenodd" clip-rule="evenodd" d="M14 8H8L8 14H14V8ZM8 6C6.89543 6 6 6.89543 6 8V14C6 15.1046 6.89543 16 8 16H14C15.1046 16 16 15.1046 16 14V8C16 6.89543 15.1046 6 14 6H8Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14 21H8L8 27H14V21ZM8 19C6.89543 19 6 19.8954 6 21V27C6 28.1046 6.89543 29 8 29H14C15.1046 29 16 28.1046 16 27V21C16 19.8954 15.1046 19 14 19H8Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14 34H8L8 40H14V34ZM8 32C6.89543 32 6 32.8954 6 34V40C6 41.1046 6.89543 42 8 42H14C15.1046 42 16 41.1046 16 40V34C16 32.8954 15.1046 32 14 32H8Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M27 8H21V14H27V8ZM21 6C19.8954 6 19 6.89543 19 8V14C19 15.1046 19.8954 16 21 16H27C28.1046 16 29 15.1046 29 14V8C29 6.89543 28.1046 6 27 6H21Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M27 21H21V27H27V21ZM21 19C19.8954 19 19 19.8954 19 21V27C19 28.1046 19.8954 29 21 29H27C28.1046 29 29 28.1046 29 27V21C29 19.8954 28.1046 19 27 19H21Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M27 34H21V40H27V34ZM21 32C19.8954 32 19 32.8954 19 34V40C19 41.1046 19.8954 42 21 42H27C28.1046 42 29 41.1046 29 40V34C29 32.8954 28.1046 32 27 32H21Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M40 8H34V14H40V8ZM34 6C32.8954 6 32 6.89543 32 8V14C32 15.1046 32.8954 16 34 16H40C41.1046 16 42 15.1046 42 14V8C42 6.89543 41.1046 6 40 6H34Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M40 21H34V27H40V21ZM34 19C32.8954 19 32 19.8954 32 21V27C32 28.1046 32.8954 29 34 29H40C41.1046 29 42 28.1046 42 27V21C42 19.8954 41.1046 19 40 19H34Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M40 34H34V40H40V34ZM34 32C32.8954 32 32 32.8954 32 34V40C32 41.1046 32.8954 42 34 42H40C41.1046 42 42 41.1046 42 40V34C42 32.8954 41.1046 32 40 32H34Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}