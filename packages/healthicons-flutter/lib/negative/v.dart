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
<path fill-rule="evenodd" clip-rule="evenodd" d="M48 0H0V48H48V0ZM25.8462 36.7692C25.5356 37.5145 24.8074 38 24 38C23.1926 38 22.4644 37.5145 22.1539 36.7692L12.1539 12.7692C11.729 11.7496 12.2112 10.5787 13.2308 10.1538C14.2504 9.72901 15.4214 10.2112 15.8462 11.2308L24 30.8L32.1539 11.2308C32.5787 10.2112 33.7497 9.72901 34.7693 10.1538C35.7889 10.5787 36.271 11.7496 35.8462 12.7692L25.8462 36.7692Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}