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
<path fill-rule="evenodd" clip-rule="evenodd" d="M48 0H0V48H48V0ZM24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44ZM42 24C42 33.9411 33.9411 42 24 42C14.0589 42 6 33.9411 6 24C6 14.0589 14.0589 6 24 6C33.9411 6 42 14.0589 42 24ZM34.2071 14.2929C34.5976 14.6834 34.5976 15.3166 34.2071 15.7071L15.7071 34.2071C15.3166 34.5976 14.6834 34.5976 14.2929 34.2071C13.9024 33.8166 13.9024 33.1834 14.2929 32.7929L32.7929 14.2929C33.1834 13.9024 33.8166 13.9024 34.2071 14.2929Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}