import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Body extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Body({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M48 0H0V48H48V0ZM24 14C26.7614 14 29 11.7614 29 9C29 6.23858 26.7614 4 24 4C21.2386 4 19 6.23858 19 9C19 11.7614 21.2386 14 24 14ZM37.5196 17.9313C38.5862 17.6444 39.2183 16.5471 38.9313 15.4804C38.6444 14.4138 37.5471 13.7817 36.4804 14.0687C31.5023 15.4079 27.7288 16.0151 24.008 15.9997C20.2808 15.9843 16.4994 15.344 11.4962 14.0625C10.4262 13.7885 9.3366 14.4337 9.06254 15.5038C8.78847 16.5738 9.43372 17.6634 10.5038 17.9375C13.2332 18.6366 15.6792 19.1689 18 19.5176L18 31V42C18 43.0693 18.8411 43.9495 19.9094 43.9979C20.9776 44.0464 21.895 43.246 21.9918 42.1811L22.9918 31.1811C22.9973 31.1206 23 31.0602 23 31H25C25 31.0602 25.0027 31.1206 25.0082 31.1811L26.0082 42.1811C26.105 43.246 27.0224 44.0464 28.0906 43.9979C29.1589 43.9495 30 43.0693 30 42V31L30 30.9944V19.5535C32.3254 19.21 34.7786 18.6687 37.5196 17.9313Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}