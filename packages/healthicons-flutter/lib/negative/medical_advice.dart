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
<path fill-rule="evenodd" clip-rule="evenodd" d="M48 0H0V48H48V0ZM34 4C28.4772 4 24 8.47715 24 14V23C24 23.5523 24.4477 24 25 24H34C39.5228 24 44 19.5228 44 14C44 8.47715 39.5228 4 34 4ZM5 11.7778C5 10.2477 6.24771 9 7.77778 9H14C15.5301 9 16.7778 10.2477 16.7778 11.7778C16.7778 13.8927 17.1161 15.9202 17.7406 17.8108L17.7429 17.8177L17.7451 17.8246C18.0474 18.7865 17.8265 19.8721 17.0538 20.6449L13.6638 24.0349C16.0291 28.3731 19.6228 31.9543 23.9665 34.3349L27.3551 30.9462C28.1027 30.1986 29.2107 29.9442 30.1939 30.2787C32.0827 30.9021 34.1263 31.24 36.2222 31.24C37.7523 31.24 39 32.4877 39 34.0178V40.2222C39 41.7523 37.7523 43 36.2222 43C18.9766 43 5 29.0234 5 11.7778ZM33 15V19H35V15L39 15V13L35 13V9H33V13H29V15H33Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}