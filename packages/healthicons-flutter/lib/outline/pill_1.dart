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
<path d="M34.2071 15.7071C34.5976 15.3166 34.5976 14.6834 34.2071 14.2929C33.8166 13.9024 33.1834 13.9024 32.7929 14.2929L14.2929 32.7929C13.9024 33.1834 13.9024 33.8166 14.2929 34.2071C14.6834 34.5976 15.3166 34.5976 15.7071 34.2071L34.2071 15.7071Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M44 24C44 35.0457 35.0457 44 24 44C12.9543 44 4 35.0457 4 24C4 12.9543 12.9543 4 24 4C35.0457 4 44 12.9543 44 24ZM42 24C42 33.9411 33.9411 42 24 42C14.0589 42 6 33.9411 6 24C6 14.0589 14.0589 6 24 6C33.9411 6 42 14.0589 42 24Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}