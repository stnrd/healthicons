import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class HospitalSymbol extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const HospitalSymbol({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M24 42C14.0589 42 6 33.9411 6 24C6 14.0589 14.0589 6 24 6C33.9411 6 42 14.0589 42 24C42 33.9411 33.9411 42 24 42ZM4 24C4 12.9543 12.9543 4 24 4C35.0457 4 44 12.9543 44 24C44 35.0457 35.0457 44 24 44C12.9543 44 4 35.0457 4 24ZM19.9915 33.0479V26.0478L27.9915 26.0478V33.0479H31.9915V15.0479H27.9915V22.0478L19.9915 22.0478V15.0479H15.9915V33.0479H19.9915Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}