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
<path fill-rule="evenodd" clip-rule="evenodd" d="M44 24C44 35.0457 35.0457 44 24 44C12.9543 44 4 35.0457 4 24C4 12.9543 12.9543 4 24 4C35.0457 4 44 12.9543 44 24ZM16.2218 31.7782C15.8313 31.3877 15.8313 30.7546 16.2218 30.364L22.5858 24.0001L16.2218 17.6361C15.8313 17.2455 15.8313 16.6124 16.2218 16.2218C16.6123 15.8313 17.2455 15.8313 17.636 16.2218L24 22.5858L30.364 16.2219C30.7545 15.8314 31.3877 15.8314 31.7782 16.2219C32.1687 16.6124 32.1687 17.2456 31.7782 17.6361L25.4142 24.0001L31.7782 30.364C32.1687 30.7545 32.1687 31.3877 31.7782 31.7782C31.3876 32.1687 30.7545 32.1687 30.364 31.7782L24 25.4143L17.6361 31.7782C17.2455 32.1688 16.6124 32.1688 16.2218 31.7782Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}