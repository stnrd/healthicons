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
<path fill-rule="evenodd" clip-rule="evenodd" d="M24 6C24.3788 6 24.725 6.214 24.8944 6.55279L41.8944 40.5528C42.0494 40.8628 42.0329 41.2309 41.8507 41.5257C41.6684 41.8205 41.3466 42 41 42H7C6.65342 42 6.33156 41.8205 6.14935 41.5257C5.96714 41.2309 5.95058 40.8628 6.10557 40.5528L23.1056 6.55279C23.275 6.214 23.6212 6 24 6ZM8.61803 40H39.382L24 9.23607L8.61803 40Z" fill="#333333"/>
<path d="M22 20C22 18.8954 22.8954 18 24 18C25.1046 18 26 18.8954 26 20V30C26 31.1046 25.1046 32 24 32C22.8954 32 22 31.1046 22 30V20Z" fill="#333333"/>
<path d="M22.0002 35.9663C22.0002 34.8803 22.8806 34 23.9665 34H24.0339C25.1199 34 26.0002 34.8803 26.0002 35.9663C26.0002 37.0522 25.1199 37.9326 24.0339 37.9326H23.9665C22.8806 37.9326 22.0002 37.0522 22.0002 35.9663Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}