import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Peace extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Peace({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H48V48H0V0ZM23 6.02731C13.524 6.54619 6 14.3944 6 24C6 28.6107 7.73359 32.8166 10.5845 36.0013L10.7929 35.7929L23 23.5858V6.02731ZM23 41.9727C18.7825 41.7417 14.9516 40.0589 11.9987 37.4155L12.2071 37.2071L23 26.4142V41.9727ZM37.4155 36.0013C40.2664 32.8166 42 28.6107 42 24C42 14.3944 34.476 6.54619 25 6.02731V23.5858L37.4155 36.0013ZM36.0013 37.4155C33.0484 40.0589 29.2175 41.7417 25 41.9727V26.4142L36.0013 37.4155ZM4 24C4 12.9543 12.9543 4 24 4C35.0457 4 44 12.9543 44 24C44 35.0457 35.0457 44 24 44C12.9543 44 4 35.0457 4 24Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}