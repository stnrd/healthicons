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
<path fill-rule="evenodd" clip-rule="evenodd" d="M8 9V35C8 36.6569 9.34315 38 11 38H22.8321C22.2969 36.7751 22 35.4222 22 34C22 28.4772 26.4772 24 32 24C32.6849 24 33.3538 24.0689 34 24.2V9C34 7.34315 32.6569 6 31 6H11C9.34315 6 8 7.34315 8 9ZM13 13C12.4477 13 12 13.4477 12 14C12 14.5523 12.4477 15 13 15H29C29.5523 15 30 14.5523 30 14C30 13.4477 29.5523 13 29 13H13ZM13 18C12.4477 18 12 18.4477 12 19C12 19.5523 12.4477 20 13 20H29C29.5523 20 30 19.5523 30 19C30 18.4477 29.5523 18 29 18H13ZM12 24C12 23.4477 12.4477 23 13 23H21C21.5523 23 22 23.4477 22 24C22 24.5523 21.5523 25 21 25H13C12.4477 25 12 24.5523 12 24ZM13 28C12.4477 28 12 28.4477 12 29C12 29.5523 12.4477 30 13 30H18C18.5523 30 19 29.5523 19 29C19 28.4477 18.5523 28 18 28H13Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M32 42C36.4183 42 40 38.4183 40 34C40 29.5817 36.4183 26 32 26C27.5817 26 24 29.5817 24 34C24 38.4183 27.5817 42 32 42ZM34.567 30.2929C34.9575 29.9024 35.5906 29.9024 35.9812 30.2929C36.3717 30.6834 36.3717 31.3166 35.9812 31.7071L35.1902 32.498L33.776 31.0838L34.567 30.2929ZM28 36.8597L33.0689 31.7909L34.4831 33.2052L29.4143 38.274H28.0001L28 36.8597Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}