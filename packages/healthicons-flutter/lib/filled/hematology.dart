import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Hematology extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Hematology({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9 6C7.34315 6 6 7.34315 6 9V39C6 40.6569 7.34315 42 9 42H39C40.6569 42 42 40.6569 42 39V9C42 7.34315 40.6569 6 39 6H9ZM24.018 34.9934C28.498 34.9898 32.0152 31.5297 32.0116 27.1297C32.0082 23.044 24 12.9934 24 12.9934C24 12.9934 16.008 22.7429 16.0116 27.1429C16.0152 31.5429 19.538 34.9971 24.018 34.9934Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}