import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class PpeSuit extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const PpeSuit({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M48 0H0V48H48V0ZM22 4C19.7909 4 18 5.79086 18 8V14.4167H17C14.7909 14.4167 13 16.2075 13 18.4167V28V29V31C13 32.6569 14.3431 34 16 34C16.7684 34 17.4692 33.7111 18 33.2361V40.5C18 41.8807 19.1193 43 20.5 43C21.8807 43 23 41.8807 23 40.5V29H25V40.5C25 41.8807 26.1193 43 27.5 43C28.8807 43 30 41.8807 30 40.5V33.2361C30.5308 33.7111 31.2316 34 32 34C33.6569 34 35 32.6569 35 31V29V28V18.4167C35 16.2075 33.2091 14.4167 31 14.4167H30V8C30 5.79086 28.2091 4 26 4H22ZM22.8999 23.7917H17.4001V25.875H30.6001V23.7917H25.0999V14.4167H22.8999V23.7917ZM20 7H28V9C28 10.1046 27.1046 11 26 11H22C20.8954 11 20 10.1046 20 9V7ZM15 30V31C15 31.5523 15.4477 32 16 32C16.5523 32 17 31.5523 17 31V30H15ZM31 31V30H33V31C33 31.5523 32.5523 32 32 32C31.4477 32 31 31.5523 31 31Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}