import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class People extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const People({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M48 0H0V48H48V0ZM24 17C24 20.8675 20.8675 24 17 24C13.1325 24 10 20.8675 10 17C10 13.1325 13.1325 10 17 10C20.8675 10 24 13.1325 24 17ZM33.5 26C36.5387 26 39 23.5387 39 20.5C39 17.4613 36.5387 15 33.5 15C30.4613 15 28 17.4613 28 20.5C28 23.5387 30.4613 26 33.5 26ZM17 26C19.7336 26 24.183 26.8511 27.1011 28.5452C28.293 29.7585 29 31.0814 29 32.4V38H28.0411H4V32.4C4 28.144 12.6612 26 17 26ZM44 38H31V32.4C31 30.9837 30.4886 29.6801 29.6764 28.5166C31.2173 28.1725 32.7343 28 33.8927 28C37.6211 28 44 29.7867 44 33.3333V38Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}