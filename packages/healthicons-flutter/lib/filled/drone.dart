import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Drone extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Drone({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M13 40C15.7614 40 18 37.7614 18 35C18 32.2386 15.7614 30 13 30C10.2386 30 8 32.2386 8 35C8 37.7614 10.2386 40 13 40ZM13 42C16.866 42 20 38.866 20 35C20 31.134 16.866 28 13 28C9.13401 28 6 31.134 6 35C6 38.866 9.13401 42 13 42Z" fill="#333333"/>
<path d="M14.75 35C14.75 35.9665 13.9665 36.75 13 36.75C12.0335 36.75 11.25 35.9665 11.25 35C11.25 34.0335 12.0335 33.25 13 33.25C13.9665 33.25 14.75 34.0335 14.75 35Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M35 40C37.7614 40 40 37.7614 40 35C40 32.2386 37.7614 30 35 30C32.2386 30 30 32.2386 30 35C30 37.7614 32.2386 40 35 40ZM35 42C38.866 42 42 38.866 42 35C42 31.134 38.866 28 35 28C31.134 28 28 31.134 28 35C28 38.866 31.134 42 35 42Z" fill="#333333"/>
<path d="M36.75 35C36.75 35.9665 35.9665 36.75 35 36.75C34.0335 36.75 33.25 35.9665 33.25 35C33.25 34.0335 34.0335 33.25 35 33.25C35.9665 33.25 36.75 34.0335 36.75 35Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M35 18C37.7614 18 40 15.7614 40 13C40 10.2386 37.7614 8 35 8C32.2386 8 30 10.2386 30 13C30 15.7614 32.2386 18 35 18ZM35 20C38.866 20 42 16.866 42 13C42 9.13401 38.866 6 35 6C31.134 6 28 9.13401 28 13C28 16.866 31.134 20 35 20Z" fill="#333333"/>
<path d="M36.75 13C36.75 13.9665 35.9665 14.75 35 14.75C34.0335 14.75 33.25 13.9665 33.25 13C33.25 12.0335 34.0335 11.25 35 11.25C35.9665 11.25 36.75 12.0335 36.75 13Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13 18C15.7614 18 18 15.7614 18 13C18 10.2386 15.7614 8 13 8C10.2386 8 8 10.2386 8 13C8 15.7614 10.2386 18 13 18ZM13 20C16.866 20 20 16.866 20 13C20 9.13401 16.866 6 13 6C9.13401 6 6 9.13401 6 13C6 16.866 9.13401 20 13 20Z" fill="#333333"/>
<path d="M14.75 13C14.75 13.9665 13.9665 14.75 13 14.75C12.0335 14.75 11.25 13.9665 11.25 13C11.25 12.0335 12.0335 11.25 13 11.25C13.9665 11.25 14.75 12.0335 14.75 13Z" fill="#333333"/>
<path d="M13 35L18.72 23.7755L13.44 13L24 18.3878L34.56 13L29.28 23.7755L35 35L24 29.1633L13 35Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}