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
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 7V37C10 38.6569 11.3431 40 13 40H26V36.4649C24.8044 35.7733 24 34.4806 24 33C24 30.7909 25.7909 29 28 29C30.2091 29 32 30.7909 32 33C32 34.4806 31.1956 35.7733 30 36.4649V40H35C36.6569 40 38 38.6569 38 37V7C38 5.34315 36.6569 4 35 4H13C11.3431 4 10 5.34315 10 7ZM28 35C29.1046 35 30 34.1046 30 33C30 31.8954 29.1046 31 28 31C26.8954 31 26 31.8954 26 33C26 34.1046 26.8954 35 28 35ZM18 11C18 10.4477 18.4477 10 19 10L29 10C29.5523 10 30 10.4477 30 11C30 11.5523 29.5523 12 29 12L19 12C18.4477 12 18 11.5523 18 11ZM15 16C14.4477 16 14 16.4477 14 17C14 17.5523 14.4477 18 15 18H33C33.5523 18 34 17.5523 34 17C34 16.4477 33.5523 16 33 16H15ZM14 21C14 20.4477 14.4477 20 15 20H33C33.5523 20 34 20.4477 34 21C34 21.5523 33.5523 22 33 22H15C14.4477 22 14 21.5523 14 21ZM15 24C14.4477 24 14 24.4477 14 25C14 25.5523 14.4477 26 15 26H33C33.5523 26 34 25.5523 34 25C34 24.4477 33.5523 24 33 24H15Z" fill="#333333"/>
<path d="M26 44V40H30V44L28 42.5L26 44Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}