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
<path fill-rule="evenodd" clip-rule="evenodd" d="M48 0H0V48H48V0ZM40 24C40 32.8366 32.8366 40 24 40C15.1634 40 8 32.8366 8 24C8 15.1634 15.1634 8 24 8C32.8366 8 40 15.1634 40 24ZM22.7574 28.2426C25.1005 30.5858 28.8995 30.5858 31.2427 28.2426L32.6569 29.6569C29.5327 32.781 24.4674 32.7811 21.3432 29.6569C18.219 26.5327 18.219 21.4673 21.3432 18.3431C24.4674 15.219 29.5327 15.219 32.6569 18.3431L31.2427 19.7574C28.8995 17.4142 25.1005 17.4142 22.7574 19.7574C20.4142 22.1005 20.4142 25.8995 22.7574 28.2426ZM15 31V21H17V31H15ZM16 20C16.8284 20 17.5 19.3284 17.5 18.5C17.5 17.6716 16.8284 17 16 17C15.1716 17 14.5 17.6716 14.5 18.5C14.5 19.3284 15.1716 20 16 20Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}