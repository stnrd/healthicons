import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class PpeSanitizer extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const PpeSanitizer({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.3683 10.9961C12.6599 10.4858 13.2238 9.69614 13.9275 9.04805C14.6537 8.37919 15.3761 8 16 8H23.0001V14H19.0001C17.8955 14 17.0001 14.8954 17.0001 16V19H16.0001C13.2386 19 11.0001 21.2386 11.0001 24V40C11.0001 41.1046 11.8955 42 13.0001 42H35.0001C36.1046 42 37.0001 41.1046 37.0001 40V24C37.0001 21.2386 34.7615 19 32.0001 19H31.0001V16C31.0001 14.8954 30.1046 14 29.0001 14H25.0001V8H33V6H16C14.624 6 13.4297 6.78748 12.5725 7.57695C11.6929 8.38719 11.0068 9.3475 10.6318 10.0039L12.3683 10.9961ZM18.0001 29H23.0001V24H25.0001V29H30.0001V31H25.0001V36H23.0001V31H18.0001V29Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}