import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Question extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Question({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M48 0H0V48H48V0ZM33.4947 7.64468C35.9682 9.75541 37.5 12.8705 37.5 16.8449C37.5 21.5072 34.9776 24.6099 32.0615 26.4707C30.1018 27.7213 27.9105 28.4606 26 28.8489V30.9999C26 32.3807 24.8807 33.4999 23.5 33.4999C22.1193 33.4999 21 32.3807 21 30.9999V26.6779C21 25.3648 22.0159 24.2755 23.3258 24.184C24.9841 24.0682 27.4261 23.4975 29.3718 22.2558C31.228 21.0713 32.5 19.394 32.5 16.8449C32.5 14.2635 31.5568 12.5641 30.2491 11.4481C28.8777 10.2779 26.9135 9.59498 24.7271 9.50927C20.0993 9.32786 16.1624 11.7019 15.4397 14.9322C15.1382 16.2796 13.8016 17.1275 12.4542 16.826C11.1068 16.5246 10.2589 15.1879 10.5603 13.8405C12.0376 7.2375 19.1007 4.28487 24.9229 4.51311C27.9615 4.63222 31.0848 5.58822 33.4947 7.64468ZM20 40C20 37.7909 21.7909 36 24 36C26.2091 36 28 37.7909 28 40C28 42.2091 26.2091 44 24 44C21.7909 44 20 42.2091 20 40Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}