import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class MedicalAdvice extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const MedicalAdvice({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M24 14C24 8.47715 28.4772 4 34 4C39.5228 4 44 8.47715 44 14C44 19.5228 39.5228 24 34 24H25C24.4477 24 24 23.5523 24 23V14ZM7.77778 9C6.24772 9 5 10.2477 5 11.7778C5 29.0234 18.9766 43 36.2222 43C37.7523 43 39 41.7523 39 40.2222V34.0178C39 32.4877 37.7523 31.24 36.2222 31.24C34.1263 31.24 32.0827 30.9021 30.1939 30.2787C29.2107 29.9442 28.1027 30.1986 27.3551 30.9462L23.9665 34.3349C19.6228 31.9543 16.0291 28.3731 13.6638 24.0349L17.0538 20.6449C17.8265 19.8721 18.0474 18.7865 17.7451 17.8246L17.7429 17.8177L17.7406 17.8108C17.1161 15.9202 16.7778 13.8927 16.7778 11.7778C16.7778 10.2477 15.5301 9 14 9H7.77778ZM33 19V15H29V13H33V9H35V13L39 13V15L35 15V19H33Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}