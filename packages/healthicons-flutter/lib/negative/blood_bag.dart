import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class BloodBag extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const BloodBag({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H48V48H0V0ZM38 10.3761V34.2617C38 36.4709 36.2092 38.2617 34 38.2617H30V40.2617H25V44.2617H23V40.2617H18V38.2617H14C11.7908 38.2617 10 36.4709 10 34.2617V10.3761C10 8.16687 11.7908 6.3761 14 6.3761H20L21.132 5.21167C22.7027 3.59607 25.2973 3.59607 26.868 5.21167L28 6.3761H34C36.2092 6.3761 38 8.16687 38 10.3761ZM26.566 7.77026C26.9426 8.15747 27.4598 8.3761 28 8.3761H34C35.1046 8.3761 36 9.27148 36 10.3761V27.8007C35.7222 27.5852 35.4135 27.3722 35.0748 27.175L27.4918 27.4005C24.924 28.9155 22.5089 29.3254 19.8818 29.3813C18.7111 29.4062 17.5142 29.361 16.2308 29.3123L15.7004 29.2924C14.5325 29.2493 13.3017 29.2117 12 29.2328V10.3761C12 9.27148 12.8954 8.3761 14 8.3761H20C20.5402 8.3761 21.0574 8.15747 21.434 7.77026L22.566 6.60583C23.3514 5.7981 24.6486 5.7981 25.434 6.60583L26.566 7.77026Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}