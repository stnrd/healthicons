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
<path fill-rule="evenodd" clip-rule="evenodd" d="M26 14C28.2091 14 30 15.7909 30 18C30 19.1845 29.4877 20.2467 28.6662 20.9819C28.6472 20.9989 28.6286 21.0163 28.6103 21.034L14.6103 34.5617C14.024 35.1282 13.8403 35.9937 14.1457 36.7495C14.4512 37.5053 15.1848 38 16 38H32C33.1046 38 34 37.1046 34 36C34 34.8954 33.1046 34 32 34H20.948L31.3642 23.9351C32.9801 22.474 34 20.3548 34 18C34 13.5817 30.4183 10 26 10H22C18.5136 10 15.553 12.229 14.4557 15.3335C14.0876 16.3749 14.6335 17.5176 15.6749 17.8857C16.7164 18.2538 17.859 17.7079 18.2271 16.6665C18.7772 15.1102 20.2615 14 22 14H26Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}