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
<path fill-rule="evenodd" clip-rule="evenodd" d="M4 24C7 18.5453 15.2 10.2545 24 14.1818C33 9.81822 41 18.5454 44 24C41 28.3636 32.8 36 24 36C15.2 36 7 28.3636 4 24ZM9.30929 23.5229C12.4149 22.4731 18.1843 21 24 21C29.7472 21 35.4492 22.4386 38.5799 23.4856C39.0367 23.6384 39.0113 24.2838 38.55 24.4225L38.5245 24.4302C35.5004 25.3398 29.9805 27 24 27C17.9208 27 12.3174 25.3748 9.32775 24.4265C8.88033 24.2845 8.86462 23.6732 9.30929 23.5229Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}