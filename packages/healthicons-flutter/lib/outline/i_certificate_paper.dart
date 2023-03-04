import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class ICertificatePaper extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const ICertificatePaper({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M14 6C12.8954 6 12 6.89543 12 8V36C12 37.1046 12.8954 38 14 38H25V40H14C11.7909 40 10 38.2091 10 36V8C10 5.79086 11.7909 4 14 4H34C36.2091 4 38 5.79086 38 8V36C38 38.2091 36.2091 40 34 40H31V38H34C35.1046 38 36 37.1046 36 36V8C36 6.89543 35.1046 6 34 6H14Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M18 11C18 10.4477 18.4477 10 19 10L29 10C29.5523 10 30 10.4477 30 11C30 11.5523 29.5523 12 29 12L19 12C18.4477 12 18 11.5523 18 11Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14 17C14 16.4477 14.4477 16 15 16H33C33.5523 16 34 16.4477 34 17C34 17.5523 33.5523 18 33 18H15C14.4477 18 14 17.5523 14 17Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14 21C14 20.4477 14.4477 20 15 20H33C33.5523 20 34 20.4477 34 21C34 21.5523 33.5523 22 33 22H15C14.4477 22 14 21.5523 14 21Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14 25C14 24.4477 14.4477 24 15 24H33C33.5523 24 34 24.4477 34 25C34 25.5523 33.5523 26 33 26H15C14.4477 26 14 25.5523 14 25Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M28 35C29.1046 35 30 34.1046 30 33C30 31.8954 29.1046 31 28 31C26.8954 31 26 31.8954 26 33C26 34.1046 26.8954 35 28 35ZM28 37C30.2091 37 32 35.2091 32 33C32 30.7909 30.2091 29 28 29C25.7909 29 24 30.7909 24 33C24 35.2091 25.7909 37 28 37Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M27 35H25V44L28 42.5L31 44V35H29V40.7639L28 40.2639L27 40.7639V35Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}