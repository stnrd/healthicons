import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class IScheduleSchoolDateTime extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const IScheduleSchoolDateTime({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M35 40C37.7614 40 40 37.7614 40 35C40 32.2386 37.7614 30 35 30C32.2386 30 30 32.2386 30 35C30 37.7614 32.2386 40 35 40ZM35 42C38.866 42 42 38.866 42 35C42 31.134 38.866 28 35 28C31.134 28 28 31.134 28 35C28 38.866 31.134 42 35 42Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M35 31.5C35.5523 31.5 36 31.9477 36 32.5V34.5858L36.7071 35.2929C37.0976 35.6834 37.0976 36.3166 36.7071 36.7071C36.3166 37.0976 35.6834 37.0976 35.2929 36.7071L34 35.4142V32.5C34 31.9477 34.4477 31.5 35 31.5Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14 23H12V25H14V23ZM12 21C10.8954 21 10 21.8954 10 23V25C10 26.1046 10.8954 27 12 27H14C15.1046 27 16 26.1046 16 25V23C16 21.8954 15.1046 21 14 21H12Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M22 23H20V25H22V23ZM20 21C18.8954 21 18 21.8954 18 23V25C18 26.1046 18.8954 27 20 27H22C23.1046 27 24 26.1046 24 25V23C24 21.8954 23.1046 21 22 21H20Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M30 23H28V25H30V23ZM28 21C26.8954 21 26 21.8954 26 23V25C26 26.1046 26.8954 27 28 27H30C31.1046 27 32 26.1046 32 25V23C32 21.8954 31.1046 21 30 21H28Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14 31H12V33H14V31ZM12 29C10.8954 29 10 29.8954 10 31V33C10 34.1046 10.8954 35 12 35H14C15.1046 35 16 34.1046 16 33V31C16 29.8954 15.1046 29 14 29H12Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M22 31H20V33H22V31ZM20 29C18.8954 29 18 29.8954 18 31V33C18 34.1046 18.8954 35 20 35H22C23.1046 35 24 34.1046 24 33V31C24 29.8954 23.1046 29 22 29H20Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8 12C8 11.4477 8.44772 11 9 11H14V9H9C7.34315 9 6 10.3431 6 12V36C6 37.6569 7.34315 39 9 39H29.2547C28.8334 38.396 28.5049 37.7224 28.2899 37H9C8.44772 37 8 36.5523 8 36V12ZM34 28.0709C34.3266 28.0242 34.6605 28 35 28C35.3395 28 35.6734 28.0242 36 28.0709V12C36 10.3432 34.6569 9 33 9H30V11H33C33.5523 11 34 11.4477 34 12V28.0709ZM16 11H26.5625V9H16V11Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M36 18H8V16H36V18Z" fill="#333333"/>
<path d="M12 7C12 6.44772 12.4477 6 13 6C13.5523 6 14 6.44772 14 7V12C14 12.5523 13.5523 13 13 13C12.4477 13 12 12.5523 12 12V7Z" fill="#333333"/>
<path d="M26 7C26 6.44772 26.4477 6 27 6C27.5523 6 28 6.44772 28 7V12C28 12.5523 27.5523 13 27 13C26.4477 13 26 12.5523 26 12V7Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}