import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class BloodBP extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const BloodBP({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M48 0H0V48H48V0ZM28 8.3579C27.4625 8.3579 26.9475 8.14152 26.5714 7.75754L25.4393 6.60207C24.6529 5.79931 23.3471 5.79931 22.5607 6.60207L21.4286 7.75754C21.0525 8.14151 20.5375 8.3579 20 8.3579H14C12.8809 8.3579 12 9.25408 12 10.3273V28.971C13.3017 28.9498 14.5326 28.9875 15.7005 29.0306C15.8789 29.0372 16.0556 29.0439 16.2306 29.0505C17.514 29.0991 18.711 29.1444 19.8818 29.1195C22.5089 29.0636 24.924 28.6538 27.4919 27.1387C30.6105 25.2987 33.2501 25.8514 35.0748 26.9133C35.4135 27.1104 35.7222 27.3234 36 27.5388V10.3273C36 9.25408 35.1191 8.3579 34 8.3579H28ZM14 38H18V40H23V44H25V40H30V38H34C36.2091 38 38 36.2228 38 34.0306V10.3273C38 8.13507 36.2091 6.3579 34 6.3579H28L26.868 5.20243C25.2973 3.59919 22.7027 3.59919 21.132 5.20243L20 6.3579H14C11.7909 6.3579 10 8.13507 10 10.3273V34.0306C10 36.2228 11.7909 38 14 38ZM16 11C15.4477 11 15 11.4477 15 12V24C15 24.2652 15.1054 24.5196 15.2929 24.7071C15.4804 24.8946 15.7348 25 16 25H21C23.2091 25 25 23.2091 25 21C25 19.8053 24.4762 18.7329 23.6458 18C24.4762 17.2671 25 16.1947 25 15C25 12.7909 23.2091 11 21 11H16ZM23 15C23 16.1046 22.1046 17 21 17H17V13H21C22.1046 13 23 13.8954 23 15ZM21 19H17V23H21C22.1046 23 23 22.1046 23 21C23 19.8954 22.1046 19 21 19ZM30.5 17H32C32.5523 17 33 17.4477 33 18C33 18.5523 32.5523 19 32 19H30.5V20.5C30.5 21.0523 30.0523 21.5 29.5 21.5C28.9477 21.5 28.5 21.0523 28.5 20.5V19H27C26.4477 19 26 18.5523 26 18C26 17.4477 26.4477 17 27 17H28.5V15.5C28.5 14.9477 28.9477 14.5 29.5 14.5C30.0523 14.5 30.5 14.9477 30.5 15.5V17Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}