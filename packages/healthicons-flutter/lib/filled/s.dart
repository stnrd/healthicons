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
<path fill-rule="evenodd" clip-rule="evenodd" d="M22 14C19.7909 14 18 15.7909 18 18C18 20.2091 19.7909 22 22 22H26C30.4183 22 34 25.5817 34 30C34 34.4183 30.4183 38 26 38H22C18.5136 38 15.553 35.771 14.4557 32.6665C14.0876 31.6251 14.6335 30.4824 15.6749 30.1143C16.7164 29.7462 17.859 30.2921 18.2271 31.3335C18.7772 32.8898 20.2615 34 22 34H26C28.2091 34 30 32.2091 30 30C30 27.7909 28.2091 26 26 26H22C17.5817 26 14 22.4183 14 18C14 13.5817 17.5817 10 22 10H26C29.4864 10 32.447 12.229 33.5443 15.3335C33.9124 16.3749 33.3665 17.5176 32.3251 17.8857C31.2836 18.2538 30.141 17.7079 29.7729 16.6665C29.2228 15.1102 27.7385 14 26 14H22Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}