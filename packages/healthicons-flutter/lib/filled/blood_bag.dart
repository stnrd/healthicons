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
<path fill-rule="evenodd" clip-rule="evenodd" d="M38 34.2618V10.3761C38 8.16691 36.2091 6.37605 34 6.37605H28L26.868 5.21169C25.2973 3.5961 22.7027 3.5961 21.132 5.21169L20 6.37605H14C11.7909 6.37605 10 8.16691 10 10.376V34.2618C10 36.4709 11.7909 38.2618 14 38.2618H18V40.2617H23V44.2617H25V40.2617H30V38.2618H34C36.2091 38.2618 38 36.4709 38 34.2618ZM26.566 7.77021C26.9426 8.15753 27.4598 8.37605 28 8.37605H34C35.1046 8.37605 36 9.27148 36 10.3761V27.8006C35.7222 27.5852 35.4135 27.3722 35.0748 27.1751C33.2501 26.1132 30.6105 25.5605 27.4918 27.4005C24.924 28.9155 22.5089 29.3254 19.8818 29.3813C18.711 29.4062 17.5141 29.3609 16.2308 29.3123C16.0558 29.3057 15.8789 29.299 15.7005 29.2924C14.5325 29.2493 13.3017 29.2116 12 29.2328V10.376C12 9.27148 12.8954 8.37605 14 8.37605H20C20.5402 8.37605 21.0574 8.15753 21.434 7.77021L22.566 6.60584C23.3514 5.79805 24.6486 5.79805 25.434 6.60584L26.566 7.77021Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}