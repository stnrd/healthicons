import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class ClinicalA extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const ClinicalA({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M48 0H0V48H48V0ZM18 5C18 4.44772 18.4477 4 19 4H29C29.5523 4 30 4.44772 30 5V8C30 8.55228 29.5523 9 29 9H28V11.2729C28.5826 11.4788 29 12.0344 29 12.6875V39C29 41.7614 26.7614 44 24 44C21.2386 44 19 41.7614 19 39V12.6875C19 12.0344 19.4174 11.4788 20 11.2729V9H19C18.4477 9 18 8.55228 18 8V5ZM22 9V11.6875C22 12.3406 21.5826 12.8962 21 13.1021V18H27V13.1021C26.4174 12.8962 26 12.3406 26 11.6875V9H22Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}