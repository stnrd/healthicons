import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class S extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const S({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M48 0H0V48H48V0ZM18 18C18 15.7909 19.7909 14 22 14H26C27.7385 14 29.2228 15.1102 29.7729 16.6665C30.141 17.7079 31.2836 18.2538 32.3251 17.8857C33.3665 17.5176 33.9124 16.3749 33.5443 15.3335C32.447 12.229 29.4864 10 26 10H22C17.5817 10 14 13.5817 14 18C14 22.4183 17.5817 26 22 26H26C28.2091 26 30 27.7909 30 30C30 32.2091 28.2091 34 26 34H22C20.2615 34 18.7772 32.8898 18.2271 31.3335C17.859 30.2921 16.7164 29.7462 15.6749 30.1143C14.6335 30.4824 14.0876 31.6251 14.4557 32.6665C15.553 35.771 18.5136 38 22 38H26C30.4183 38 34 34.4183 34 30C34 25.5817 30.4183 22 26 22H22C19.7909 22 18 20.2091 18 18Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}