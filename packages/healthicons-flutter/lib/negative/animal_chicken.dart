import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class AnimalChicken extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const AnimalChicken({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H48V48H0V0ZM19 42H24V39.9988C18.6012 39.9316 13.8603 37.1625 11.0953 32.9952C9.2104 30.1544 9.46292 26.5353 10.3448 23.2421L11.1058 20.4C11.3161 19.6147 11.4084 18.806 11.3825 18H7.91421C6.1324 18 5.24007 15.8457 6.5 14.5858L15.0858 6C16.3457 4.74007 18.5 5.6324 18.5 7.41421V9H19.8698C21.7088 9 22.573 11.273 21.1985 12.4948L19.1786 14.2903L22.4989 20.3571C23.5184 22.2198 25.6033 23.2354 27.6985 22.8899L40.8133 20.7273C41.6013 20.5973 42.1436 21.4964 41.6612 22.1328C40.497 23.6687 39.9517 25.5614 39.5829 27.453C39.3475 28.6605 38.9704 29.818 38.4696 30.908C38.3896 30.958 38.3155 31.0203 38.2499 31.0947C36.1477 33.4791 33.003 35 29.4782 35C23.1018 35 18 30.0387 18 24C18 23.4477 17.5523 23 17 23C16.4477 23 16 23.4477 16 24C16 31.2162 22.0716 37 29.4782 37C31.3406 37 33.1167 36.6353 34.7327 35.9749C32.3682 38.1005 29.3441 39.5206 26 39.8989V42H28.5V44H19V42ZM18.1933 12.4902L19.8698 11H18.5C17.3954 11 16.5 10.1046 16.5 9V7.41421L13.8564 10.0578C14.0747 10.0199 14.3001 10 14.5312 10C15.9489 10 17.2537 10.7733 17.9343 12.0169L18.1933 12.4902ZM10.708 13.2062L7.91421 16H11.0728L10.7755 14.8516C10.6303 14.2907 10.615 13.733 10.708 13.2062ZM14 14C14.5523 14 15 13.5523 15 13C15 12.4477 14.5523 12 14 12C13.4478 12 13 12.4477 13 13C13 13.5523 13.4478 14 14 14Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}