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
<path fill-rule="evenodd" clip-rule="evenodd" d="M48 0H0V48H48V0ZM29 14V6H40.1333C41.1642 6 42 6.89543 42 8V23L29 23V16L41.9999 16V14L29 14ZM42 25L29 25V32H41.9999V34H29V42H40.1333C41.1642 42 42 41.1046 42 40V25ZM27 42V34H14V40C14 41.1046 14.8357 42 15.8666 42H27ZM14 14V8C14 6.89543 14.8357 6 15.8666 6H27V14L14 14ZM23.0525 23V16H27V23H23.0525ZM23.0525 32V25H27V32H23.0525ZM7 16C6.44772 16 6 16.4477 6 17V31C6 31.5523 6.44772 32 7 32H20C20.5523 32 21 31.5523 21 31V17C21 16.4477 20.5523 16 20 16H7ZM11.867 19H9.60654L12.3653 23.982L9.34033 29H11.6007L13.5912 25.07L15.5901 29H17.8174L14.8417 24L17.7511 19H15.6394L13.7011 22.754L11.867 19Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}