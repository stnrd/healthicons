import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class BlisterPillsRoundX1 extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const BlisterPillsRoundX1({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19 24C19 24.5523 18.5523 25 18 25C17.4477 25 17 24.5523 17 24C17 23.4477 17.4477 23 18 23C18.5523 23 19 23.4477 19 24Z" fill="#333333"/>
<path d="M22 25C22.5523 25 23 24.5523 23 24C23 23.4477 22.5523 23 22 23C21.4477 23 21 23.4477 21 24C21 24.5523 21.4477 25 22 25Z" fill="#333333"/>
<path d="M27 24C27 24.5523 26.5523 25 26 25C25.4477 25 25 24.5523 25 24C25 23.4477 25.4477 23 26 23C26.5523 23 27 23.4477 27 24Z" fill="#333333"/>
<path d="M30 25C30.5523 25 31 24.5523 31 24C31 23.4477 30.5523 23 30 23C29.4477 23 29 23.4477 29 24C29 24.5523 29.4477 25 30 25Z" fill="#333333"/>
<path d="M24 17C25.6569 17 27 15.6569 27 14C27 12.3431 25.6569 11 24 11C22.3431 11 21 12.3431 21 14C21 15.6569 22.3431 17 24 17Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 8C12 5.79086 13.7909 4 16 4H32C34.2091 4 36 5.79086 36 8V40C36 42.2091 34.2091 44 32 44H16C13.7909 44 12 42.2091 12 40V8ZM32 6C33.1046 6 34 6.89543 34 8V23C33.4477 23 33 23.4477 33 24C33 24.5523 33.4477 25 34 25V40C34 41.1046 33.1046 42 32 42H16C14.8954 42 14 41.1046 14 40V25C14.5523 25 15 24.5523 15 24C15 23.4477 14.5523 23 14 23V8C14 6.89543 14.8954 6 16 6H32Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}