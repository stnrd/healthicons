import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class No extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const No({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M48 0H0V48H48V0ZM24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44ZM16.2218 30.364C15.8313 30.7546 15.8313 31.3877 16.2218 31.7782C16.6124 32.1688 17.2455 32.1688 17.6361 31.7782L24 25.4143L30.364 31.7782C30.7545 32.1687 31.3876 32.1687 31.7782 31.7782C32.1687 31.3877 32.1687 30.7545 31.7782 30.364L25.4142 24.0001L31.7782 17.6361C32.1687 17.2456 32.1687 16.6124 31.7782 16.2219C31.3877 15.8314 30.7545 15.8314 30.364 16.2219L24 22.5858L17.636 16.2218C17.2455 15.8313 16.6123 15.8313 16.2218 16.2218C15.8313 16.6124 15.8313 17.2455 16.2218 17.6361L22.5858 24.0001L16.2218 30.364Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}