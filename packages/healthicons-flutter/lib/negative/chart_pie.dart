import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class ChartPie extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const ChartPie({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M48 0H0V48H48V0ZM24 6L24 22.845L39.066 14.1466C35.8508 9.24051 30.3038 6 24 6ZM8.93368 33.8529L40.0676 15.8777C41.3036 18.3179 42 21.0776 42 24C42 33.9411 33.9411 42 24 42C17.696 42 12.1488 38.7593 8.93368 33.8529ZM24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}