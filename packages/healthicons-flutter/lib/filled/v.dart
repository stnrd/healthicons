import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class V extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const V({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M24 38C24.8074 38 25.5356 37.5145 25.8462 36.7692L35.8462 12.7692C36.271 11.7496 35.7889 10.5787 34.7693 10.1538C33.7497 9.72901 32.5787 10.2112 32.1539 11.2308L24 30.8L15.8462 11.2308C15.4214 10.2112 14.2504 9.72901 13.2308 10.1538C12.2112 10.5787 11.729 11.7496 12.1539 12.7692L22.1539 36.7692C22.4644 37.5145 23.1926 38 24 38Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}