import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class HealthWorkerForm extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const HealthWorkerForm({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M17 7C17 5.34315 18.3431 4 20 4H28C29.6569 4 31 5.34315 31 7V9C31 10.6569 29.6569 12 28 12H20C18.3431 12 17 10.6569 17 9V7ZM20 6C19.4477 6 19 6.44772 19 7V9C19 9.55228 19.4477 10 20 10H28C28.5523 10 29 9.55228 29 9V7C29 6.44772 28.5523 6 28 6H20Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M18 7H13C11.3431 7 10 8.34315 10 10V41C10 42.6569 11.3431 44 13 44H35C36.6569 44 38 42.6569 38 41V10C38 8.34315 36.6569 7 35 7H30V9C30 10.1046 29.1046 11 28 11H20C18.8954 11 18 10.1046 18 9V7ZM15 21C15 20.4477 15.4477 20 16 20H23C23.5523 20 24 20.4477 24 21C24 21.5523 23.5523 22 23 22H16C15.4477 22 15 21.5523 15 21ZM16 15C15.4477 15 15 15.4477 15 16C15 16.5523 15.4477 17 16 17H31.5C32.0523 17 32.5 16.5523 32.5 16C32.5 15.4477 32.0523 15 31.5 15H16ZM17 29V31H19V29H17ZM16 27C15.4477 27 15 27.4477 15 28V32C15 32.5523 15.4477 33 16 33H20C20.5523 33 21 32.5523 21 32V28C21 27.4477 20.5523 27 20 27H16ZM31 29C31 30.6575 29.6575 32 28 32C26.3425 32 25 30.6575 25 29C25 27.3425 26.3425 26 28 26C29.6575 26 31 27.3425 31 29ZM28 33.3182C25.9975 33.3182 22 34.3842 22 36.5001V38.9999H34V36.5001C34 34.3842 30.0025 33.3182 28 33.3182Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}