import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class ChartLine extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const ChartLine({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8 40V7H6V41C6 41.5523 6.44772 42 7 42H42V40H8Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.2849 26.1196L7.78488 35.6196L6.21512 34.3804L13.7151 24.8804L15.2849 26.1196Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M27.6838 28.9487L15.6838 24.9487L16.3162 23.0513L28.3162 27.0513L27.6838 28.9487Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M38.7682 16.6402L28.7682 28.6402L27.2318 27.3598L37.2318 15.3598L38.7682 16.6402Z" fill="#333333"/>
<path d="M19 24C19 25.6569 17.6569 27 16 27C14.3431 27 13 25.6569 13 24C13 22.3431 14.3431 21 16 21C17.6569 21 19 22.3431 19 24Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16 25C16.5523 25 17 24.5523 17 24C17 23.4477 16.5523 23 16 23C15.4477 23 15 23.4477 15 24C15 24.5523 15.4477 25 16 25ZM16 27C17.6569 27 19 25.6569 19 24C19 22.3431 17.6569 21 16 21C14.3431 21 13 22.3431 13 24C13 25.6569 14.3431 27 16 27Z" fill="#333333"/>
<path d="M31 28C31 29.6569 29.6569 31 28 31C26.3431 31 25 29.6569 25 28C25 26.3431 26.3431 25 28 25C29.6569 25 31 26.3431 31 28Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M28 29C28.5523 29 29 28.5523 29 28C29 27.4477 28.5523 27 28 27C27.4477 27 27 27.4477 27 28C27 28.5523 27.4477 29 28 29ZM28 31C29.6569 31 31 29.6569 31 28C31 26.3431 29.6569 25 28 25C26.3431 25 25 26.3431 25 28C25 29.6569 26.3431 31 28 31Z" fill="#333333"/>
<path d="M41 16C41 17.6569 39.6569 19 38 19C36.3431 19 35 17.6569 35 16C35 14.3431 36.3431 13 38 13C39.6569 13 41 14.3431 41 16Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M38 17C38.5523 17 39 16.5523 39 16C39 15.4477 38.5523 15 38 15C37.4477 15 37 15.4477 37 16C37 16.5523 37.4477 17 38 17ZM38 19C39.6569 19 41 17.6569 41 16C41 14.3431 39.6569 13 38 13C36.3431 13 35 14.3431 35 16C35 17.6569 36.3431 19 38 19Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}