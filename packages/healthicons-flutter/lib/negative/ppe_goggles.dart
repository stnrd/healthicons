import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class PpeGoggles extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const PpeGoggles({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M48 0H0V48H48V0ZM4 22C4 14.8203 9.8203 9 17 9H31C38.1797 9 44 14.8203 44 22C44 24.419 42.2822 26.4367 40 26.9V29C40 33.4183 36.4183 37 32 37C28.3931 37 25.3462 34.6138 24.3468 31.3362C24.312 31.2222 24.247 31.13 24.177 31.072C24.1108 31.0172 24.0508 31 24 31C23.9492 31 23.8892 31.0172 23.823 31.072C23.753 31.13 23.688 31.2222 23.6532 31.3362C22.6538 34.6138 19.6069 37 16 37C11.5817 37 8 33.4183 8 29V26.9C5.71776 26.4367 4 24.419 4 22ZM42 22C42 23.3535 41.1036 24.4977 39.8721 24.8713C39.3603 22.6535 37.3733 21 35 21H13C10.6267 21 8.63966 22.6535 8.12793 24.8713C6.8964 24.4977 6 23.3535 6 22C6 15.9249 10.9249 11 17 11H31C37.0751 11 42 15.9249 42 22ZM10 26C10 24.3431 11.3431 23 13 23H35C36.6569 23 38 24.3431 38 26V29C38 32.3137 35.3137 35 32 35C29.2975 35 27.0098 33.2125 26.2598 30.7529C25.9795 29.8335 25.1411 29 24 29C22.8589 29 22.0205 29.8335 21.7402 30.7529C20.9902 33.2125 18.7025 35 16 35C12.6863 35 10 32.3137 10 29V26ZM13 24.5C12.1716 24.5 11.5 25.1716 11.5 26V29C11.5 31.4853 13.5147 33.5 16 33.5C18.0247 33.5 19.7426 32.161 20.3054 30.3154C20.7359 28.9034 22.0647 27.5 24 27.5C25.9353 27.5 27.2641 28.9034 27.6946 30.3154C28.2574 32.161 29.9753 33.5 32 33.5C34.4853 33.5 36.5 31.4853 36.5 29V26C36.5 25.1716 35.8284 24.5 35 24.5H13Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}