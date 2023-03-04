import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Question extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Question({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M25.8009 27.8689C25.3349 27.9636 25.0001 28.3734 25.0001 28.8489V31C25.0001 31.8284 24.3285 32.5 23.5001 32.5C22.6716 32.5 22.0001 31.8284 22.0001 31V26.678C22.0001 25.8901 22.6096 25.2365 23.3955 25.1816C25.1729 25.0575 27.788 24.4528 29.9098 23.0988C31.981 21.7771 33.5 19.8137 33.5 16.8449C33.5 13.9845 32.4389 12.0021 30.8982 10.6874C29.3195 9.34027 27.1237 8.60246 24.7663 8.51005C19.8846 8.31868 15.3351 10.8198 14.4639 14.7139C14.283 15.5223 13.481 16.0311 12.6726 15.8502C11.8641 15.6693 11.3554 14.8673 11.5362 14.0589C12.2017 11.0847 14.1232 8.90776 16.6096 7.4827C19.1092 6.05004 22.1414 5.40484 24.8838 5.51235C27.7523 5.6248 30.6436 6.52636 32.8456 8.40537C35.0858 10.317 36.5 13.1488 36.5 16.8449C36.5 21.083 34.2294 23.9011 31.5236 25.6278C29.6922 26.7965 27.6236 27.4985 25.8009 27.8689ZM21 40C21 38.3432 22.3432 37 24 37C25.6569 37 27 38.3432 27 40C27 41.6569 25.6569 43 24 43C22.3432 43 21 41.6569 21 40Z" fill="#333333" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}