import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Pill1 extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Pill1({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M44 24C44 35.0457 35.0457 44 24 44C12.9543 44 4 35.0457 4 24C4 12.9543 12.9543 4 24 4C35.0457 4 44 12.9543 44 24ZM34.2071 14.2929C34.5976 14.6834 34.5976 15.3166 34.2071 15.7071L15.7071 34.2071C15.3166 34.5976 14.6834 34.5976 14.2929 34.2071C13.9024 33.8166 13.9024 33.1834 14.2929 32.7929L32.7929 14.2929C33.1834 13.9024 33.8166 13.9024 34.2071 14.2929Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}