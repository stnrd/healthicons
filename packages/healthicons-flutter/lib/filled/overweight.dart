import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Overweight extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Overweight({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M24 13C26.4853 13 28.5 10.9853 28.5 8.5C28.5 6.01472 26.4853 4 24 4C21.5147 4 19.5 6.01472 19.5 8.5C19.5 10.9853 21.5147 13 24 13ZM36.5596 17.0799C37.6201 17.3889 38.2292 18.4992 37.9201 19.5596C37.6111 20.6201 36.5009 21.2292 35.4404 20.9201C34.3489 20.602 33.3213 20.3256 32.3433 20.0894L32.3912 20.2384C33.6992 24.3151 35.0282 28.4572 32.8172 32.0289L30.4503 42.4432C30.2246 43.4362 29.2889 44.1011 28.277 43.9875C27.2651 43.874 26.5 43.0183 26.5 42V35.9302C25.7042 36 24.8762 36 24 36C23.3058 36 22.6417 36 22 35.9653V42C22 43.0183 21.2349 43.874 20.223 43.9875C19.2111 44.1011 18.2754 43.4362 18.0497 42.4432L15.9101 33.0287C12.7197 29.2431 14.1769 24.7016 15.6089 20.2384L15.6458 20.1234C14.6639 20.355 13.6318 20.6228 12.5348 20.9272C11.4704 21.2225 10.3682 20.5991 10.0728 19.5347C9.7775 18.4704 10.4009 17.3681 11.4653 17.0728C16.2296 15.7508 20.0803 15.0178 23.9908 15.0003C27.9083 14.9828 31.768 15.6834 36.5596 17.0799Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}