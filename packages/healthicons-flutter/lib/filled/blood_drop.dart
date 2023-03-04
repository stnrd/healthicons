import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class BloodDrop extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const BloodDrop({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M38 30.2626C38 37.8496 31.732 44 24 44C16.268 44 10 37.8496 10 30.2626C10 18.2424 24 4 24 4C24 4 38 18.2424 38 30.2626Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M24 42C30.6633 42 36 36.7095 36 30.2626C36 24.9058 32.8223 18.7771 29.3548 13.761C27.6552 11.3023 25.9518 9.20336 24.6725 7.71881C24.432 7.4398 24.2069 7.18289 24 6.9498C23.7931 7.18289 23.568 7.4398 23.3275 7.71881C22.0482 9.20336 20.3448 11.3023 18.6452 13.761C15.1777 18.7771 12 24.9058 12 30.2626C12 36.7095 17.3367 42 24 42ZM22.6397 5.47002C19.1224 9.40884 10 20.5597 10 30.2626C10 37.8496 16.268 44 24 44C31.732 44 38 37.8496 38 30.2626C38 20.5597 28.8776 9.40884 25.3603 5.47002C24.5203 4.52933 24 4 24 4C24 4 23.4797 4.52933 22.6397 5.47002Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}