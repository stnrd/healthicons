import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class B extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const B({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M13 12C13 10.3431 14.3431 9 16 9L26 9C30.9706 9 35 13.0294 35 18C35 20.3051 34.1325 22.4085 32.7083 24C34.1325 25.5915 35 27.6949 35 30C35 34.9706 30.9706 39 26 39H16C15.2043 39 14.4413 38.6839 13.8787 38.1213C13.3161 37.5587 13 36.7957 13 36L13 12ZM16 11C15.4477 11 15 11.4477 15 12L15 36C15 36.2652 15.1054 36.5196 15.2929 36.7071C15.4804 36.8946 15.7348 37 16 37H26C29.866 37 33 33.866 33 30C33 27.9094 32.0848 26.0339 30.6299 24.7497C30.4148 24.5599 30.2916 24.2869 30.2916 24C30.2916 23.7131 30.4148 23.4401 30.6299 23.2503C32.0848 21.9661 33 20.0906 33 18C33 14.134 29.866 11 26 11L16 11ZM17 14C17 13.4477 17.4477 13 18 13L26 13C28.7614 13 31 15.2386 31 18C31 20.7614 28.7614 23 26 23L18 23C17.4477 23 17 22.5523 17 22L17 14ZM19 15L19 21L26 21C27.6569 21 29 19.6569 29 18C29 16.3431 27.6569 15 26 15L19 15ZM17 26C17 25.4477 17.4477 25 18 25L26 25C28.7614 25 31 27.2386 31 30C31 32.7614 28.7614 35 26 35H18C17.4477 35 17 34.5523 17 34L17 26ZM19 27L19 33H26C27.6569 33 29 31.6569 29 30C29 28.3431 27.6569 27 26 27L19 27Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}