import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class ExcelLogo extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const ExcelLogo({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M29 6V14L41.9999 14V16L29 16V23L42 23V8C42 6.89543 41.1642 6 40.1333 6H29ZM29 25L42 25V32H29V25ZM29 34H42V40C42 41.1046 41.1642 42 40.1333 42L29 42V34ZM27 34V42L15.8666 42C14.8357 42 14 41.1046 14 40V34H27ZM27 14L14 14V8C14 6.89543 14.8357 6 15.8666 6H27V14ZM23.0525 16V23H27V16H23.0525ZM23.0525 25V32H27V25H23.0525ZM6 17C6 16.4477 6.44772 16 7 16H20.1579C20.7102 16 21.1579 16.4477 21.1579 17V31C21.1579 31.5523 20.7102 32 20.1579 32H7C6.44772 32 6 31.5523 6 31V17ZM9.60654 19H11.867L13.7011 22.754L15.6394 19H17.7511L14.8417 24L17.8174 29H15.5901L13.5912 25.07L11.6007 29H9.34033L12.3653 23.982L9.60654 19Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}