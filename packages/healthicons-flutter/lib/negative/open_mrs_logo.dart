import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class OpenMrsLogo extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const OpenMrsLogo({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M48 0H0V48H48V0ZM15.7684 15.7675C17.8772 13.6587 20.792 12.3538 24.0117 12.3538C27.2228 12.3538 30.1304 13.6524 32.238 15.7517L32.2463 7.98895C29.7788 6.71777 26.9781 6 24.0117 6C21.0437 6 18.228 6.80848 15.7593 8.08049L15.7684 15.7675ZM32.2372 32.2327C30.1284 34.3419 27.2149 35.6463 23.9955 35.6463C20.7841 35.6463 17.8764 34.3481 15.7676 32.2485L15.7593 40.0112C18.228 41.2824 21.0275 42.0001 23.9955 42.0001C26.9635 42.0001 29.7639 41.2824 32.2313 40.0108L32.2372 32.2327ZM12.3534 23.9917C12.3534 27.2114 13.6583 30.1245 15.7671 32.2333L7.98936 32.2283C6.71777 29.76 6 26.9593 6 23.9917C6 21.0237 6.71777 18.2241 7.98853 15.7559L15.7517 15.7638C13.652 17.873 12.3534 20.7802 12.3534 23.9917ZM32.2329 15.7559C34.3421 17.8646 35.6466 20.7794 35.6466 23.9992C35.6466 27.2102 34.3484 30.1183 32.2483 32.2254L40.0114 32.2337C41.2826 29.7663 42.0004 26.9655 42.0004 23.9992C42.0004 21.0311 41.2826 18.2304 40.011 15.7617L32.2329 15.7559Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}