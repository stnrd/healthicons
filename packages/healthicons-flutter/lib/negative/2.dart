import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Svg2 extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Svg2({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M48 0H0V48H48V0ZM30 18C30 15.7909 28.2091 14 26 14H22C20.2615 14 18.7772 15.1102 18.2271 16.6665C17.859 17.7079 16.7164 18.2538 15.6749 17.8857C14.6335 17.5176 14.0876 16.3749 14.4557 15.3335C15.553 12.229 18.5136 10 22 10H26C30.4183 10 34 13.5817 34 18C34 20.3548 32.9801 22.474 31.3642 23.9351L20.948 34H32C33.1046 34 34 34.8954 34 36C34 37.1046 33.1046 38 32 38H16C15.1848 38 14.4512 37.5053 14.1457 36.7495C13.8403 35.9937 14.024 35.1282 14.6103 34.5617L28.6103 21.034C28.6286 21.0163 28.6472 20.9989 28.6662 20.9819C29.4877 20.2467 30 19.1845 30 18Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}