import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class StarMedium extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const StarMedium({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.4508 18.7768L24 11.512L27.5492 18.7768L28.4477 18.3378L27.5492 18.7768C27.8376 19.3672 28.3979 19.7812 29.0517 19.8771L36.9977 21.0435C36.9979 21.044 36.9981 21.0445 36.9982 21.0451C36.9993 21.0483 36.9998 21.0513 36.9999 21.0535C36.9992 21.0544 36.9981 21.0555 36.9968 21.0569L31.2441 26.7216C30.7754 27.1831 30.5639 27.8449 30.6737 28.4913L32.0317 36.49C32.0319 36.4913 32.0321 36.4924 32.0322 36.4935L24.9321 32.7226C24.3489 32.4129 23.6511 32.4129 23.0679 32.7226L15.9678 36.4935C15.9679 36.4924 15.9681 36.4913 15.9683 36.49L17.3263 28.4913C17.4361 27.8449 17.2246 27.1831 16.7559 26.7216L11.0032 21.0569C11.0019 21.0555 11.0008 21.0544 11.0001 21.0535C11.0002 21.0513 11.0007 21.0483 11.0018 21.0451C11.0019 21.0445 11.0021 21.044 11.0023 21.0435L18.9483 19.8771C19.6021 19.7812 20.1624 19.3672 20.4508 18.7768Z" fill="#333333" stroke="#333333" stroke-width="2"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}