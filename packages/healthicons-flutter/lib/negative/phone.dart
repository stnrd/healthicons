import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Phone extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Phone({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M48 0H0V48H48V0ZM26.42 34.76C20.76 31.86 16.12 27.24 13.24 21.58L17.64 17.18C18.2 16.62 18.36 15.84 18.14 15.14C17.4 12.9 17 10.5 17 8C17 6.9 16.1 6 15 6H8C6.9 6 6 6.9 6 8C6 26.78 21.22 42 40 42C41.1 42 42 41.1 42 40V33.02C42 31.92 41.1 31.02 40 31.02C37.52 31.02 35.1 30.62 32.86 29.88C32.16 29.64 31.36 29.82 30.82 30.36L26.42 34.76Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}