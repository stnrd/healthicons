import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Home extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Home({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H48V48H0V0ZM4 37C4 36.4477 4.44772 36 5 36H10V22L24 14L38 22V36H41C41.5523 36 42 36.4477 42 37C42 37.5523 41.5523 38 41 38H5C4.44772 38 4 37.5523 4 37ZM34 36V25H28V36H34ZM14 25H25V31H14V25ZM31 13.9575V11H36V16.8986L41.507 20.1381L42.369 20.6451L41.3549 22.369L40.493 21.8619L24 12.1602L7.50702 21.8619L6.64509 22.369L5.63105 20.6451L6.49298 20.1381L23.493 10.1381C23.8059 9.95398 24.1941 9.95398 24.507 10.1381L31 13.9575Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}