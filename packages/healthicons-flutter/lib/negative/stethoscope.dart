import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Stethoscope extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Stethoscope({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H48V48H0V0ZM27 19C27.5523 19 28.0047 19.4487 27.9546 19.9987C27.7221 22.5499 26.6043 24.952 24.7782 26.7782C23.439 28.1173 21.7902 29.0755 20 29.583V32C20 33.306 19.1655 34.4171 18.0006 34.8291C18.0429 37.6921 20.3769 40 23.25 40C26.1495 40 28.5 37.6495 28.5 34.75V30.75C28.5 27.5744 31.0744 25 34.25 25C37.4256 25 40 27.5744 40 30.75V33.1707C41.1652 33.5825 42 34.6938 42 36C42 37.6569 40.6569 39 39 39C37.3431 39 36 37.6569 36 36C36 34.6938 36.8348 33.5825 38 33.1707V30.75C38 28.6789 36.3211 27 34.25 27C32.1789 27 30.5 28.6789 30.5 30.75V34.75C30.5 38.7541 27.2541 42 23.25 42C19.2724 42 16.043 38.7969 16.0004 34.8294C14.835 34.4177 14 33.3064 14 32V29.583C12.2098 29.0755 10.561 28.1173 9.22183 26.7782C7.39566 24.952 6.27789 22.5499 6.0454 19.9987C5.99528 19.4487 6.44772 19 7 19V10C7 8.34315 8.34315 7 10 7H10.2676C10.6134 6.4022 11.2597 6 12 6C13.1046 6 14 6.89543 14 8C14 9.10457 13.1046 10 12 10C11.2597 10 10.6134 9.5978 10.2676 9H10C9.44772 9 9 9.44772 9 10V19H8.79055C9.34283 19 9.78341 19.4499 9.85977 19.9969C10.0753 21.5406 10.7873 22.983 11.9021 24.0979C13.2542 25.4499 15.0879 26.2095 17 26.2095C18.9121 26.2095 20.7458 25.4499 22.0979 24.0979C23.2127 22.983 23.9247 21.5406 24.1402 19.9969C24.2166 19.4499 24.6572 19 25.2095 19H25V10C25 9.44772 24.5523 9 24 9H23.7324C23.3866 9.5978 22.7403 10 22 10C20.8954 10 20 9.10457 20 8C20 6.89543 20.8954 6 22 6C22.7403 6 23.3866 6.4022 23.7324 7H24C25.6569 7 27 8.34315 27 10V19Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}