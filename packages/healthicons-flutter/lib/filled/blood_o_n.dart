import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class BloodON extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const BloodON({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M20 12C16.6863 12 14 14.6863 14 18C14 21.3137 16.6863 24 20 24C23.3137 24 26 21.3137 26 18C26 14.6863 23.3137 12 20 12ZM16 18C16 15.7909 17.7909 14 20 14C22.2091 14 24 15.7909 24 18C24 20.2091 22.2091 22 20 22C17.7909 22 16 20.2091 16 18Z" fill="#333333"/>
<path d="M27 18C27 17.4477 27.4477 17 28 17H33C33.5523 17 34 17.4477 34 18C34 18.5523 33.5523 19 33 19H28C27.4477 19 27 18.5523 27 18Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M38 34.0306C38 36.2228 36.2091 38 34 38H30V40H25V44H23V40H18V38H14C11.7909 38 10 36.2228 10 34.0306V10.3273C10 8.13507 11.7909 6.3579 14 6.3579H20L21.132 5.20243C22.7027 3.59919 25.2973 3.59919 26.868 5.20243L28 6.3579H34C36.2091 6.3579 38 8.13508 38 10.3273V34.0306ZM26.5714 7.75754C26.9475 8.14152 27.4625 8.3579 28 8.3579H34C35.1191 8.3579 36 9.25408 36 10.3273V27.5388C35.7222 27.3234 35.4135 27.1104 35.0748 26.9133C33.2501 25.8514 30.6105 25.2987 27.4919 27.1387C24.924 28.6538 22.5089 29.0636 19.8818 29.1195C18.711 29.1444 17.5143 29.0991 16.2309 29.0505C16.0559 29.0439 15.8789 29.0372 15.7005 29.0306C14.5326 28.9875 13.3017 28.9498 12 28.971V10.3273C12 9.25408 12.8809 8.3579 14 8.3579H20C20.5375 8.3579 21.0525 8.14151 21.4286 7.75754L22.5607 6.60207C23.3471 5.79931 24.6529 5.79931 25.4393 6.60207L26.5714 7.75754Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}