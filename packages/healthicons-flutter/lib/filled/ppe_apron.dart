import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class PpeApron extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const PpeApron({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M20.3418 6.62104L20.0499 5.9635L19.3337 6.03125C15.7797 6.36744 13 9.35845 13 12.9999V24.9999C13 26.6567 14.3431 27.9999 16 27.9999H17V39.7207L20.5215 40.8945C22.7794 41.6472 25.2206 41.6472 27.4785 40.8945L31 39.7207V27.9999H32C33.6569 27.9999 35 26.6567 35 24.9999V12.9999C35 9.35845 32.2203 6.36744 28.6663 6.03125L27.9501 5.9635L27.6582 6.62104C27.0351 8.02442 25.6304 8.99996 24 8.99996C22.3696 8.99996 20.9649 8.02442 20.3418 6.62104ZM19 23V25H29V23H19Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}