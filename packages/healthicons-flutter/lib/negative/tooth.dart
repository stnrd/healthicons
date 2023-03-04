import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Tooth extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Tooth({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M48 0H0V48H48V0ZM9.58534 11.8657C12.8298 7.92666 16.7437 6.80449 21.1655 9.40009L27.3451 14.7557C27.7624 15.1174 28.394 15.0723 28.7557 14.6549C29.1174 14.2376 29.0723 13.606 28.6549 13.2443L25.0566 10.1257C27.7373 8.53788 33.4534 6.08711 37.5808 10.8727C40.6004 14.3739 40.3444 18.0063 39.2239 21.5635L35.2816 32.8565C34.1289 36.783 33.307 37.9951 31.2874 39.701C30.0886 40.7135 28.7366 38.9646 27.3138 37.1239C26.0812 35.5293 24.7954 33.8658 23.5098 33.8697C22.203 33.8737 20.8965 35.5398 19.6465 37.1338C18.2048 38.9724 16.8383 40.715 15.6331 39.701C13.1996 37.6532 12.1324 34.8237 11.0169 30.2829C10.8022 29.4087 10.4755 28.3602 10.1153 27.204L10.1153 27.2039C8.60445 22.3544 6.50278 15.6083 9.58534 11.8657Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}