import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class AlertTriangle extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const AlertTriangle({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M24 18C22.8954 18 22 18.8954 22 20V30C22 31.1046 22.8954 32 24 32C25.1046 32 26 31.1046 26 30V20C26 18.8954 25.1046 18 24 18Z" fill="#333333"/>
<path d="M22.0002 35.9663C22.0002 34.8803 22.8806 34 23.9665 34H24.0339C25.1199 34 26.0002 34.8803 26.0002 35.9663C26.0002 37.0522 25.1199 37.9326 24.0339 37.9326H23.9665C22.8806 37.9326 22.0002 37.0522 22.0002 35.9663Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M48 0H0V48H48V0ZM24.8994 6.84867C24.5345 6.09862 23.4658 6.09862 23.1009 6.84867L6.69943 40.5628C6.3763 41.227 6.86002 42.0002 7.59866 42.0002H40.4016C41.1402 42.0002 41.6239 41.227 41.3008 40.5628L24.8994 6.84867Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}