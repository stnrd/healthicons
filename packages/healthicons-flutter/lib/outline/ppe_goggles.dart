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
<path fill-rule="evenodd" clip-rule="evenodd" d="M17 9C9.8203 9 4 14.8203 4 22C4 24.419 5.71776 26.4367 8 26.9V29C8 33.4183 11.5817 37 16 37C19.6069 37 22.6538 34.6138 23.6532 31.3362C23.688 31.2222 23.753 31.13 23.823 31.072C23.8892 31.0172 23.9492 31 24 31C24.0508 31 24.1108 31.0172 24.177 31.072C24.247 31.13 24.312 31.2222 24.3468 31.3362C25.3462 34.6138 28.3931 37 32 37C36.4183 37 40 33.4183 40 29V26.9C42.2822 26.4367 44 24.419 44 22C44 14.8203 38.1797 9 31 9H17ZM39.8721 24.8713C41.1036 24.4977 42 23.3535 42 22C42 15.9249 37.0751 11 31 11H17C10.9249 11 6 15.9249 6 22C6 23.3535 6.8964 24.4977 8.12793 24.8713C8.63966 22.6535 10.6267 21 13 21H35C37.3733 21 39.3603 22.6535 39.8721 24.8713ZM10 26C10 24.3431 11.3431 23 13 23H35C36.6569 23 38 24.3431 38 26V29C38 32.3137 35.3137 35 32 35C29.2975 35 27.0098 33.2125 26.2598 30.7529C25.9795 29.8335 25.1411 29 24 29C22.8589 29 22.0205 29.8335 21.7402 30.7529C20.9902 33.2125 18.7025 35 16 35C12.6863 35 10 32.3137 10 29V26Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}