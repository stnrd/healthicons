import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class InformationCampaign extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const InformationCampaign({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M24 40C32.8366 40 40 32.8366 40 24C40 15.1634 32.8366 8 24 8C15.1634 8 8 15.1634 8 24C8 32.8366 15.1634 40 24 40ZM31.2427 28.2426C28.8995 30.5858 25.1005 30.5858 22.7574 28.2426C20.4142 25.8995 20.4142 22.1005 22.7574 19.7574C25.1005 17.4142 28.8995 17.4142 31.2427 19.7574L32.6569 18.3431C29.5327 15.219 24.4674 15.219 21.3432 18.3431C18.219 21.4673 18.219 26.5327 21.3432 29.6569C24.4674 32.781 29.5327 32.781 32.6569 29.6569L31.2427 28.2426ZM15 21L15 31H17V21H15ZM17.5 18.5C17.5 19.3284 16.8284 20 16 20C15.1716 20 14.5 19.3284 14.5 18.5C14.5 17.6716 15.1716 17 16 17C16.8284 17 17.5 17.6716 17.5 18.5Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}