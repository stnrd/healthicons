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
<path d="M18.7479 12.8156C17.0072 12.8833 15.4353 13.5043 14.5944 14.3454C14.2039 14.736 13.5707 14.736 13.1802 14.3455C12.7896 13.9551 12.7895 13.3219 13.18 12.9313C14.4774 11.6337 16.5888 10.8981 18.6701 10.8171C20.765 10.7356 23.0521 11.3092 24.6538 12.9112C25.0442 13.3017 25.0442 13.9349 24.6536 14.3254C24.2631 14.7159 23.6299 14.7158 23.2394 14.3253C22.1484 13.234 20.4749 12.7484 18.7479 12.8156Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M27.3841 28.9355C25.1207 30.8475 22.1949 32 19 32C11.8203 32 6 26.1797 6 19C6 11.8203 11.8203 6 19 6C26.1797 6 32 11.8203 32 19C32 22.1949 30.8475 25.1207 28.9355 27.3841L31.1442 27L41.4278 37.2837C42.1907 38.0466 42.1907 39.2835 41.4278 40.0464L40.0464 41.4278C39.2835 42.1907 38.0466 42.1907 37.2837 41.4278L27 31.1442L27.3841 28.9355ZM30 19C30 25.0751 25.0751 30 19 30C12.9249 30 8 25.0751 8 19C8 12.9249 12.9249 8 19 8C25.0751 8 30 12.9249 30 19ZM37.2487 35.933L30.464 29.1483L29.3432 29.3432L29.1483 30.464L35.953 37.2687L37.2487 35.933ZM37.3674 38.6831L38.665 39.9808L39.9808 38.665L38.6631 37.3474L37.3674 38.6831Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}