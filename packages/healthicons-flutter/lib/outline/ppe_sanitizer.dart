import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class PpeSanitizer extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const PpeSanitizer({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M25 29H30V31H25V36H23V31H18V29H23V24H25V29Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.9274 9.04805C13.2238 9.69614 12.6598 10.4858 12.3682 10.9961L10.6317 10.0039C11.0068 9.3475 11.6928 8.38719 12.5725 7.57695C13.4296 6.78748 14.6239 6 16 6H33V8H25V14H29C30.1046 14 31 14.8954 31 16V18H32C35.3137 18 38 20.6863 38 24V39C38 40.6569 36.6569 42 35 42H13C11.3431 42 10 40.6569 10 39V24C10 20.6863 12.6863 18 16 18H17V16C17 14.8954 17.8954 14 19 14H23V8H16C15.376 8 14.6536 8.37919 13.9274 9.04805ZM12 24C12 21.7909 13.7909 20 16 20H32C34.2091 20 36 21.7909 36 24V39C36 39.5523 35.5523 40 35 40H13C12.4477 40 12 39.5523 12 39V24ZM29 16V18H19V16H29Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}