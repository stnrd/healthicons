import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class SocialWork extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const SocialWork({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M48 0H0V48H48V0ZM6 9C6 7.34315 7.34315 6 9 6H39C40.6569 6 42 7.34315 42 9V39C42 40.6569 40.6569 42 39 42H33V39C33 38.4477 32.5523 38 32 38H28C27.4477 38 27 38.4477 27 39V42H20V39C20 38.4477 19.5523 38 19 38H15C14.4477 38 14 38.4477 14 39V42H9C7.34315 42 6 40.6569 6 39V9ZM35.6002 32.6852C35.0903 33.5198 34.5373 34.0802 33.9899 34.6349C33.5741 35.0562 33.1615 35.4743 32.7735 36.0068V37H27V36.0068C27.0519 35.5969 27.2166 35.0128 27.3622 34.4967C27.4911 34.0397 27.6049 33.6361 27.612 33.4543C27.6329 32.9098 28.3979 31.9175 28.3979 31.9175L30.7456 29.0888C30.7456 29.0888 31.4103 28.4184 31.7905 27.6748C32.1708 26.9312 32.9801 27.8675 33.0877 28.5365C33.1952 29.2056 32.9906 29.5582 32.9906 29.5582L31.6491 32.1046C31.6491 32.1046 33.2044 30.0703 33.6872 29.2521C33.9317 28.8377 34.0002 27.9602 34.0766 26.9795C34.1511 26.0243 34.2332 24.971 34.4932 24.152C35.0202 22.4924 36.5455 22.9079 36.8099 23.6494C37.0744 24.3909 37.0145 29.2905 36.9185 30.1074C36.8434 30.7471 36.4398 31.3727 35.9845 32.0784C35.8584 32.2739 35.7283 32.4755 35.6002 32.6852ZM12.9569 34.6349C13.3741 35.0562 13.788 35.4743 14.1773 36.0068V37H20V36.0068C19.9019 35.2339 19.7299 33.8414 19.715 33.4543C19.6939 32.9098 18.9264 31.9175 18.9264 31.9175L16.5708 29.0888C16.5708 29.0888 15.904 28.4184 15.5224 27.6748C15.1409 26.9312 14.3289 27.8675 14.2209 28.5365C14.113 29.2056 14.3183 29.5582 14.3183 29.5582L15.6643 32.1046C15.6643 32.1046 14.1039 30.0703 13.6194 29.2521C13.3741 28.8377 13.3054 27.9602 13.2287 26.9795C13.154 26.0243 13.0716 24.971 12.8107 24.152C12.282 22.4924 10.7516 22.9079 10.4863 23.6494C10.2209 24.3909 9.92219 29.2905 10.0185 30.1074C10.0938 30.7471 10.4988 31.3727 10.9556 32.0784C11.0821 32.2739 11.2126 32.4755 11.3412 32.6852C11.8528 33.5198 12.4077 34.0802 12.9569 34.6349ZM15 17.2069C15 13.9864 17.018 11 19.7812 11C21.6988 11 23.1217 12.3399 24 14.2406C24.8782 12.34 26.3011 11 28.2188 11C30.9823 11 33 13.9869 33 17.2069C33 24.1 24 29 24 29C24 29 15 24.3965 15 17.2069Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}