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
<path fill-rule="evenodd" clip-rule="evenodd" d="M28.9355 27.3841C30.8475 25.1207 32 22.1949 32 19C32 11.8203 26.1797 6 19 6C11.8203 6 6 11.8203 6 19C6 26.1797 11.8203 32 19 32C22.1949 32 25.1207 30.8475 27.3841 28.9355L27 31.1442L34.5137 38.6579L38.6579 34.5137L31.1442 27L28.9355 27.3841ZM19 29C24.5228 29 29 24.5228 29 19C29 13.4772 24.5228 9 19 9C13.4772 9 9 13.4772 9 19C9 24.5228 13.4772 29 19 29Z" fill="#333333"/>
<path d="M35.9279 40.0721L40.0721 35.9279L41.4278 37.2837C42.1907 38.0466 42.1907 39.2835 41.4278 40.0464L40.0464 41.4278C39.2835 42.1907 38.0466 42.1907 37.2837 41.4278L35.9279 40.0721Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}