import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class QuestionMark extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const QuestionMark({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M24 14.0001C26.222 14.0173 28 15.8114 28 18C28 20.1991 26.2048 22 23.9679 22C22.8633 22 21.9679 22.8954 21.9679 24V30C21.9679 31.1046 22.8633 32 23.9679 32C25.0725 32 25.9679 31.1046 25.9679 30V25.7498C29.4308 24.8653 32 21.7378 32 18C32 13.6144 28.4631 10.069 24.0959 10.001C24.0747 10.0003 24.0535 10 24.0321 10H23.9679C23.9466 10 23.9253 10.0003 23.9042 10.001C19.5369 10.069 16 13.6144 16 18C16 19.1046 16.8955 20 18 20C19.1046 20 20 19.1046 20 18C20 15.8114 21.778 14.0173 24 14.0001Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M24 38C25.1046 38 26 37.1046 26 36C26 34.8954 25.1046 34 24 34C22.8954 34 22 34.8954 22 36C22 37.1046 22.8954 38 24 38Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}