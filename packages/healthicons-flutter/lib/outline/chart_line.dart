import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class ChartLine extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const ChartLine({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8 40V7H6V41C6 41.5523 6.44772 42 7 42H41V40H8Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.7719 27.1357L7.77193 35.6357L6.22807 34.3643L13.2281 25.8643L14.7719 27.1357Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M24.6154 28.4231L18.6154 25.9231L19.3846 24.0769L25.3846 26.5769L24.6154 28.4231Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M36.7809 19.1247L30.7809 26.6247L29.2191 25.3753L35.2191 17.8753L36.7809 19.1247Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16 26C17.1046 26 18 25.1046 18 24C18 22.8954 17.1046 22 16 22C14.8954 22 14 22.8954 14 24C14 25.1046 14.8954 26 16 26ZM16 28C18.2091 28 20 26.2091 20 24C20 21.7909 18.2091 20 16 20C13.7909 20 12 21.7909 12 24C12 26.2091 13.7909 28 16 28Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M28 30C29.1046 30 30 29.1046 30 28C30 26.8954 29.1046 26 28 26C26.8954 26 26 26.8954 26 28C26 29.1046 26.8954 30 28 30ZM28 32C30.2091 32 32 30.2091 32 28C32 25.7909 30.2091 24 28 24C25.7909 24 24 25.7909 24 28C24 30.2091 25.7909 32 28 32Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M38 18C39.1046 18 40 17.1046 40 16C40 14.8954 39.1046 14 38 14C36.8954 14 36 14.8954 36 16C36 17.1046 36.8954 18 38 18ZM38 20C40.2091 20 42 18.2091 42 16C42 13.7909 40.2091 12 38 12C35.7909 12 34 13.7909 34 16C34 18.2091 35.7909 20 38 20Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}