import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class UiZoomIn extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const UiZoomIn({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M31.9999 22H21.9999V20H31.9999V22Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M27.9999 16V26H25.9999V16H27.9999Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M18.207 31.2071L14.207 35.2071L12.7928 33.7929L16.7928 29.7929L18.207 31.2071Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.58569 39.1716L11.1095 32.6479L14.2284 32.7873L15.2952 33.8541L15.3 36.9426L8.82833 43.4143L4.58569 39.1716ZM7.41412 39.1716L8.82833 40.5858L13.2987 36.1155L13.2966 34.7477L11.9005 34.6852L7.41412 39.1716Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M27.0001 34C34.1798 34 40.0001 28.1797 40.0001 21C40.0001 13.8203 34.1798 8 27.0001 8C19.8204 8 14.0001 13.8203 14.0001 21C14.0001 28.1797 19.8204 34 27.0001 34ZM27.0001 36C35.2843 36 42.0001 29.2843 42.0001 21C42.0001 12.7157 35.2843 6 27.0001 6C18.7158 6 12.0001 12.7157 12.0001 21C12.0001 29.2843 18.7158 36 27.0001 36Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}