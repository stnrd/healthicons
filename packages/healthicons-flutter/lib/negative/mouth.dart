import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Mouth extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Mouth({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M48 0H0V48H48V0ZM24 14.1818C15.2 10.2545 7 18.5453 4 24C7 28.3636 15.2 36 24 36C32.8 36 41 28.3636 44 24C41 18.5454 33 9.81822 24 14.1818ZM24 21C18.1843 21 12.4149 22.4731 9.30929 23.5229C8.86462 23.6732 8.88033 24.2845 9.32775 24.4265C12.3174 25.3748 17.9208 27 24 27C29.9805 27 35.5004 25.3398 38.5245 24.4302L38.55 24.4225C39.0113 24.2838 39.0367 23.6384 38.5799 23.4856C35.4492 22.4386 29.7472 21 24 21Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}