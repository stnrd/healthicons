import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class MagnifyingGlass extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const MagnifyingGlass({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M48 0H0V48H48V0ZM29 19C29 24.5228 24.5228 29 19 29C13.4772 29 9 24.5228 9 19C9 13.4772 13.4772 9 19 9C24.5228 9 29 13.4772 29 19ZM27.3841 28.9355C25.1207 30.8475 22.1949 32 19 32C11.8203 32 6 26.1797 6 19C6 11.8203 11.8203 6 19 6C26.1797 6 32 11.8203 32 19C32 22.1949 30.8475 25.1207 28.9355 27.3841L31.1442 27L38.6579 34.5137L34.5137 38.6579L27 31.1442L27.3841 28.9355ZM18.748 12.8156C17.0074 12.8833 15.4354 13.5044 14.5945 14.3455C14.204 14.736 13.5709 14.7361 13.1803 14.3456C12.7897 13.9551 12.7897 13.3219 13.1802 12.9314C14.4775 11.6338 16.5889 10.8981 18.6702 10.8171C20.7652 10.7356 23.0522 11.3093 24.6539 12.9112C25.0444 13.3018 25.0443 13.935 24.6537 14.3254C24.2632 14.7159 23.63 14.7159 23.2395 14.3253C22.1485 13.2341 20.475 12.7484 18.748 12.8156ZM35.9279 40.0721L40.0721 35.9279L41.4278 37.2837C42.1907 38.0466 42.1907 39.2835 41.4278 40.0464L40.0464 41.4278C39.2835 42.1907 38.0466 42.1907 37.2837 41.4278L35.9279 40.0721Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}