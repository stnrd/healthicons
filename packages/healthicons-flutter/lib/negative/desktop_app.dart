import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class DesktopApp extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const DesktopApp({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M48 0H0V48H48V0ZM6 11.7143C6 9.93908 7.42215 8.5 9.17647 8.5H38.8235C40.5778 8.5 42 9.93909 42 11.7143V31C42 32.7752 40.5778 34.2143 38.8235 34.2143H28.2353V36.3571H32.4705V38.5H15.5293V36.3571H19.7646V34.2143H9.17647C7.42215 34.2143 6 32.7752 6 31V11.7143ZM21.8823 34.2143V36.3571H26.1177V34.2143H21.8823ZM15.5294 12.7857H13.4118V14.9285H11.294V17.0714H13.4118V19.2143H15.5294V17.0714H17.647V14.9285H15.5294V12.7857ZM12.353 22.4285C11.7682 22.4285 11.2942 22.9082 11.2942 23.4999V27.7857C11.2942 28.3774 11.7682 28.8571 12.353 28.8571H16.5883C17.1731 28.8571 17.6471 28.3774 17.6471 27.7857V23.4999C17.6471 22.9082 17.1731 22.4285 16.5883 22.4285H12.353ZM21.8824 12.7857C21.2976 12.7857 20.8235 13.2654 20.8235 13.8571V18.1429C20.8235 18.7346 21.2976 19.2143 21.8824 19.2143H26.1176C26.7024 19.2143 27.1765 18.7346 27.1765 18.1429V13.8571C27.1765 13.2654 26.7024 12.7857 26.1176 12.7857H21.8824ZM21.8823 22.4285C21.2975 22.4285 20.8235 22.9082 20.8235 23.4999V27.7857C20.8235 28.3774 21.2975 28.8571 21.8823 28.8571H26.1176C26.7024 28.8571 27.1764 28.3774 27.1764 27.7857V23.4999C27.1764 22.9082 26.7024 22.4285 26.1176 22.4285H21.8823ZM31.4118 12.7857C30.827 12.7857 30.3529 13.2654 30.3529 13.8571V18.1429C30.3529 18.7346 30.827 19.2143 31.4118 19.2143H35.6471C36.2318 19.2143 36.7059 18.7346 36.7059 18.1429V13.8571C36.7059 13.2654 36.2318 12.7857 35.6471 12.7857H31.4118Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}