import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class UiZoom extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const UiZoom({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.707 31.7071L14.207 35.2071L12.7928 33.7929L16.2928 30.2929L17.707 31.7071Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.58569 39.1716L11.1095 32.6479L14.2284 32.7873L15.2952 33.8541L15.3 36.9426L8.82833 43.4143L4.58569 39.1716ZM7.41412 39.1716L8.82833 40.5858L13.2987 36.1155L13.2966 34.7477L11.9005 34.6852L7.41412 39.1716Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M26.9999 34C34.1796 34 39.9999 28.1797 39.9999 21C39.9999 13.8203 34.1796 8 26.9999 8C19.8202 8 13.9999 13.8203 13.9999 21C13.9999 28.1797 19.8202 34 26.9999 34ZM26.9999 36C35.2842 36 41.9999 29.2843 41.9999 21C41.9999 12.7157 35.2842 6 26.9999 6C18.7156 6 11.9999 12.7157 11.9999 21C11.9999 29.2843 18.7156 36 26.9999 36Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}