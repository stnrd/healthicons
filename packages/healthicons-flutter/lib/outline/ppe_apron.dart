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
<path fill-rule="evenodd" clip-rule="evenodd" d="M20.0499 5.9635L20.3418 6.62104C20.9649 8.02442 22.3696 8.99996 24 8.99996C25.6304 8.99996 27.0351 8.02442 27.6582 6.62104L27.9501 5.9635L28.6663 6.03125C32.2203 6.36744 35 9.35845 35 12.9999V24.9999C35 26.6567 33.6569 27.9999 32 27.9999H31V39.7207L27.4785 40.8945C25.2206 41.6472 22.7794 41.6472 20.5215 40.8945L17 39.7207V27.9999H16C14.3431 27.9999 13 26.6567 13 24.9999V12.9999C13 9.35845 15.7797 6.36744 19.3337 6.03125L20.0499 5.9635ZM33 24.9999C33 25.5522 32.5523 25.9999 32 25.9999H31V15H29V22H19V15H17V25.9999H16C15.4477 25.9999 15 25.5522 15 24.9999V12.9999C15 10.6244 16.6572 8.63504 18.878 8.12609C19.9313 9.84843 21.8303 11 24 11C26.1697 11 28.0686 9.84843 29.122 8.12609C31.3428 8.63504 33 10.6244 33 12.9999V24.9999ZM26.8461 38.9972L29 38.2792V24H19V38.2792L21.1539 38.9972C23.0014 39.613 24.9986 39.613 26.8461 38.9972Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}