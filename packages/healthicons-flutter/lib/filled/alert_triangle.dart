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
<path fill-rule="evenodd" clip-rule="evenodd" d="M23.1009 6.84867C23.4658 6.09862 24.5345 6.09862 24.8994 6.84867L41.3008 40.5628C41.6239 41.227 41.1402 42.0002 40.4016 42.0002H7.59866C6.86002 42.0002 6.3763 41.227 6.69943 40.5628L23.1009 6.84867ZM22 20C22 18.8954 22.8954 18 24 18C25.1046 18 26 18.8954 26 20V30C26 31.1046 25.1046 32 24 32C22.8954 32 22 31.1046 22 30V20ZM23.9665 34C22.8806 34 22.0002 34.8803 22.0002 35.9663C22.0002 37.0523 22.8806 37.9326 23.9665 37.9326H24.0339C25.1199 37.9326 26.0002 37.0523 26.0002 35.9663C26.0002 34.8803 25.1199 34 24.0339 34H23.9665Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}