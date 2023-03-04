import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Boy0105Y extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Boy0105Y({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M24 17C26.2091 17 28 15.2091 28 13C28 10.7909 26.2091 9 24 9C21.7908 9 20 10.7909 20 13C20 15.2091 21.7908 17 24 17ZM35.4354 18.9836C35.7138 20.0525 35.0729 21.1447 34.004 21.423C32.1997 21.8928 30.5594 22.2523 28.9999 22.4992V28.8749L29.9845 36.7519C30.1157 37.8014 29.407 38.7717 28.3672 38.9659C27.3274 39.1601 26.3162 38.5112 26.0597 37.485L24.0597 29.485C24.0196 29.3247 23.9999 29.1619 23.9999 29C23.9999 29.1619 23.9803 29.3248 23.9402 29.4851L21.9402 37.4851C21.6836 38.5112 20.6724 39.1602 19.6327 38.966C18.5929 38.7718 17.8841 37.8015 18.0153 36.7519L18.9999 28.8755V22.4727C17.4454 22.2248 15.8122 21.8734 14.0187 21.4288C12.9466 21.163 12.293 20.0784 12.5587 19.0063C12.8245 17.9342 13.9091 17.2805 14.9812 17.5463C18.6192 18.4482 21.3397 18.8913 24.0078 18.902C26.6698 18.9126 29.3825 18.493 32.996 17.5521C34.0649 17.2738 35.1571 17.9147 35.4354 18.9836Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}