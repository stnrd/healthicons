import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class BlisterPillsOvalX1 extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const BlisterPillsOvalX1({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M27.0711 11.4142C26.29 10.6332 25.0237 10.6332 24.2426 11.4142L21.4142 14.2426C20.6332 15.0237 20.6332 16.29 21.4142 17.0711C22.1953 17.8521 23.4616 17.8521 24.2426 17.0711L27.0711 14.2426C27.8521 13.4616 27.8521 12.1953 27.0711 11.4142Z" fill="#333333"/>
<path d="M18 25C18.5523 25 19 24.5523 19 24C19 23.4477 18.5523 23 18 23C17.4477 23 17 23.4477 17 24C17 24.5523 17.4477 25 18 25Z" fill="#333333"/>
<path d="M23 24C23 24.5523 22.5523 25 22 25C21.4477 25 21 24.5523 21 24C21 23.4477 21.4477 23 22 23C22.5523 23 23 23.4477 23 24Z" fill="#333333"/>
<path d="M26 25C26.5523 25 27 24.5523 27 24C27 23.4477 26.5523 23 26 23C25.4477 23 25 23.4477 25 24C25 24.5523 25.4477 25 26 25Z" fill="#333333"/>
<path d="M31 24C31 24.5523 30.5523 25 30 25C29.4477 25 29 24.5523 29 24C29 23.4477 29.4477 23 30 23C30.5523 23 31 23.4477 31 24Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 8C12 5.79086 13.7909 4 16 4H32C34.2091 4 36 5.79086 36 8V40C36 42.2091 34.2091 44 32 44H16C13.7909 44 12 42.2091 12 40V8ZM14 8C14 6.89543 14.8954 6 16 6H32C33.1046 6 34 6.89543 34 8V23C33.4477 23 33 23.4477 33 24C33 24.5523 33.4477 25 34 25V40C34 41.1046 33.1046 42 32 42H16C14.8954 42 14 41.1046 14 40V25C14.5523 25 15 24.5523 15 24C15 23.4477 14.5523 23 14 23V8Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}