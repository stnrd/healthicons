import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Sling extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Sling({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M24 22C28.4183 22 32 18.4183 32 14C32 9.58172 28.4183 6 24 6C19.5817 6 16 9.58172 16 14C16 18.4183 19.5817 22 24 22ZM24 20C27.3137 20 30 17.3137 30 14C30 10.6863 27.3137 8 24 8C20.6863 8 18 10.6863 18 14C18 17.3137 20.6863 20 24 20Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M41 33C41 28.0294 36.9706 24 32 24H16C11.0294 24 7 28.0294 7 33C7 37.9706 11.0294 42 16 42H24C26.2091 42 28 40.2091 28 38C28 36.0944 26.6675 34.5 24.8834 34.0979L28.1731 26H32C35.866 26 39 29.134 39 33C39 36.866 35.866 40 32 40V36C33.6569 36 35 34.6569 35 33C35 31.3431 33.6569 30 32 30H30V42H32C36.9706 42 41 37.9706 41 33ZM16 26C12.134 26 9 29.134 9 33C9 34.811 9.68775 36.4614 10.8163 37.7043L13.5153 34.6814C13.1904 34.2022 13 33.6235 13 33C13 31.3431 14.3431 30 16 30H17.6951L21.2665 26H16ZM24.1094 36.0029L22.4856 40H24C25.1046 40 26 39.1046 26 38C26 36.9321 25.1631 36.0598 24.1094 36.0029ZM20.3269 40L26.0144 26H23.9477L12.3588 38.9796C13.4197 39.627 14.6663 40 16 40H20.3269ZM33 33C33 33.5523 32.5523 34 32 34V32C32.5523 32 33 32.4477 33 33ZM15.9055 32.0044C15.3975 32.052 15 32.4796 15 33L15.0002 33.0183L15.9055 32.0044Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}