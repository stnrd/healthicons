import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class BloodAbP extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const BloodAbP({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H48V48H0V0ZM27.6121 5.53462C25.6433 3.48846 22.3567 3.48846 20.3879 5.53462L19.8602 6.0831H15C12.2448 6.0831 10 8.30376 10 11.0569V33.0262C10 35.7794 12.2448 38 15 38H18V40H23V44H25V40H30V38H33C35.7552 38 38 35.7794 38 33.0262V23H36V27.5388C35.7222 27.3234 35.4135 27.1103 35.0748 26.9132C33.2501 25.8513 30.6105 25.2987 27.4919 27.1387C24.924 28.6537 22.5089 29.0636 19.8818 29.1195C18.7111 29.1444 17.5144 29.0991 16.2311 29.0505C16.056 29.0438 15.8789 29.0371 15.7005 29.0306C14.5326 28.9875 13.3017 28.9498 12 28.9709V11.0569C12 9.4207 13.3369 8.0831 15 8.0831H20.2857C20.5576 8.0831 20.8178 7.97238 21.0063 7.77645L21.8291 6.92133C23.0111 5.69289 24.9889 5.69289 26.1709 6.92133L26.9937 7.77645C27.1822 7.97238 27.4424 8.0831 27.7143 8.0831H33.3302C34.8109 8.0831 36 9.27385 36 10.7289V15H38V10.7289C38 8.1569 35.903 6.0831 33.3302 6.0831H28.1398L27.6121 5.53462ZM19.4162 14.5991C19.2569 14.2351 18.8973 14 18.5 14C18.1027 14 17.7431 14.2351 17.5838 14.5991L14.9676 20.5791C14.9613 20.5926 14.9553 20.6063 14.9496 20.6201L14.0838 22.5991C13.8625 23.1051 14.0932 23.6947 14.5992 23.9161C15.1052 24.1375 15.6948 23.9067 15.9162 23.4008L16.529 22H20.471L21.0838 23.4008C21.3052 23.9067 21.8948 24.1375 22.4008 23.9161C22.9068 23.6947 23.1375 23.1051 22.9162 22.5991L22.0504 20.6201C22.0447 20.6063 22.0387 20.5926 22.0324 20.5791L19.4162 14.5991ZM18.5 17.4948L19.596 20H17.404L18.5 17.4948ZM24 15C24 14.4477 24.4477 14 25 14H28.125C29.7726 14 31 15.4049 31 17C31 17.7511 30.7278 18.46 30.2678 19C30.7278 19.5399 31 20.2488 31 21C31 22.595 29.7726 24 28.125 24H25C24.7348 24 24.4804 23.8946 24.2929 23.7071C24.1054 23.5195 24 23.2652 24 23V15ZM28.125 18C28.5484 18 29 17.614 29 17C29 16.3859 28.5484 16 28.125 16H26V18H28.125ZM26 20H28.125C28.5484 20 29 20.3859 29 21C29 21.614 28.5484 22 28.125 22H26V20ZM33 18C32.4477 18 32 18.4477 32 19C32 19.5522 32.4477 20 33 20H34V21C34 21.5522 34.4477 22 35 22C35.5523 22 36 21.5522 36 21V20H37C37.5523 20 38 19.5522 38 19C38 18.4477 37.5523 18 37 18H36V17C36 16.4477 35.5523 16 35 16C34.4477 16 34 16.4477 34 17V18H33Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}