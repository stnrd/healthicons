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
<path d="M20 6C19.4477 6 19 6.44772 19 7V9C19 9.55228 19.4477 10 20 10H28C28.5523 10 29 9.55228 29 9V7C29 6.44772 28.5523 6 28 6H20Z" fill="#333333"/>
<path d="M16 20C15.4477 20 15 20.4477 15 21C15 21.5523 15.4477 22 16 22H23C23.5523 22 24 21.5523 24 21C24 20.4477 23.5523 20 23 20H16Z" fill="#333333"/>
<path d="M15 16C15 15.4477 15.4477 15 16 15H31.5C32.0523 15 32.5 15.4477 32.5 16C32.5 16.5523 32.0523 17 31.5 17H16C15.4477 17 15 16.5523 15 16Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15 28C15 27.4477 15.4477 27 16 27H20C20.5523 27 21 27.4477 21 28V32C21 32.5523 20.5523 33 20 33H16C15.4477 33 15 32.5523 15 32V28ZM17 31V29H19V31H17Z" fill="#333333"/>
<path d="M28 32C29.6575 32 31 30.6575 31 29C31 27.3425 29.6575 26 28 26C26.3425 26 25 27.3425 25 29C25 30.6575 26.3425 32 28 32Z" fill="#333333"/>
<path d="M22 36.5001C22 34.3842 25.9975 33.3182 28 33.3182C30.0025 33.3182 34 34.3842 34 36.5001V38.9999H22V36.5001Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H48V48H0V0ZM17 7C17 5.34315 18.3431 4 20 4H28C29.6569 4 31 5.34315 31 7H35C36.6569 7 38 8.34315 38 10V41C38 42.6569 36.6569 44 35 44H13C11.3431 44 10 42.6569 10 41V10C10 8.34315 11.3431 7 13 7H17Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}