import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Default extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Default({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 10C10 8.89543 10.8954 8 12 8H30C31.1046 8 32 8.89543 32 10V24.0549C32.6935 24.1316 33.3632 24.287 34 24.5121V10C34 7.79086 32.2091 6 30 6H12C9.79086 6 8 7.79086 8 10V34C8 36.2091 9.79086 38 12 38H23.5155C23.1025 37.383 22.7638 36.7121 22.5121 36H12C10.8954 36 10 35.1046 10 34V10Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 14C12 13.4477 12.4477 13 13 13H29C29.5523 13 30 13.4477 30 14C30 14.5523 29.5523 15 29 15H13C12.4477 15 12 14.5523 12 14ZM12 19C12 18.4477 12.4477 18 13 18H29C29.5523 18 30 18.4477 30 19C30 19.5523 29.5523 20 29 20H13C12.4477 20 12 19.5523 12 19ZM13 23C12.4477 23 12 23.4477 12 24C12 24.5523 12.4477 25 13 25H21C21.5523 25 22 24.5523 22 24C22 23.4477 21.5523 23 21 23H13ZM12 29C12 28.4477 12.4477 28 13 28H18C18.5523 28 19 28.4477 19 29C19 29.5523 18.5523 30 18 30H13C12.4477 30 12 29.5523 12 29Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M31 40C34.866 40 38 36.866 38 33C38 29.134 34.866 26 31 26C27.134 26 24 29.134 24 33C24 36.866 27.134 40 31 40ZM31 42C35.9706 42 40 37.9706 40 33C40 28.0294 35.9706 24 31 24C26.0294 24 22 28.0294 22 33C22 37.9706 26.0294 42 31 42Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M34.9973 29.0278C34.6068 28.6372 33.9736 28.6372 33.5831 29.0278L32.7921 29.8187L34.2063 31.2329L34.9973 30.442C35.3878 30.0515 35.3878 29.4183 34.9973 29.0278ZM33.4992 31.94L32.085 30.5258L27.0161 35.5946L27.0162 37.0089H28.4304L33.4992 31.94Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}