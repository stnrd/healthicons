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
<path fill-rule="evenodd" clip-rule="evenodd" d="M13 9C12.4477 9 12 9.44772 12 10V41C12 41.5523 12.4477 42 13 42H35C35.5523 42 36 41.5523 36 41V10C36 9.44772 35.5523 9 35 9H29.4167V7H35C36.6569 7 38 8.34314 38 10V41C38 42.6569 36.6569 44 35 44H13C11.3431 44 10 42.6569 10 41V10C10 8.34315 11.3431 7 13 7H18.5833V9H13Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M17 7C17 5.34315 18.3431 4 20 4H28C29.6569 4 31 5.34315 31 7V9C31 10.6569 29.6569 12 28 12H20C18.3431 12 17 10.6569 17 9V7ZM20 6C19.4477 6 19 6.44772 19 7V9C19 9.55228 19.4477 10 20 10H28C28.5523 10 29 9.55228 29 9V7C29 6.44772 28.5523 6 28 6H20Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15 21C15 20.4477 15.4477 20 16 20H23C23.5523 20 24 20.4477 24 21C24 21.5523 23.5523 22 23 22H16C15.4477 22 15 21.5523 15 21Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15 16C15 15.4477 15.4477 15 16 15H31.5C32.0523 15 32.5 15.4477 32.5 16C32.5 16.5523 32.0523 17 31.5 17H16C15.4477 17 15 16.5523 15 16Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M17 29V31H19V29H17ZM16 27C15.4477 27 15 27.4477 15 28V32C15 32.5523 15.4477 33 16 33H20C20.5523 33 21 32.5523 21 32V28C21 27.4477 20.5523 27 20 27H16Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M28 29C28.5529 29 29 28.5529 29 28C29 27.4471 28.5529 27 28 27C27.4471 27 27 27.4471 27 28C27 28.5529 27.4471 29 28 29ZM28 31C29.6575 31 31 29.6575 31 28C31 26.3425 29.6575 25 28 25C26.3425 25 25 26.3425 25 28C25 29.6575 26.3425 31 28 31Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M24 35.2793C24.0127 35.2645 24.0305 35.2451 24.0549 35.2212C24.2186 35.061 24.5353 34.8488 25.0312 34.6382C26.0311 34.2133 27.2648 34 28 34C28.7352 34 29.9689 34.2133 30.9688 34.6382C31.4647 34.8488 31.7814 35.061 31.9451 35.2212C31.9695 35.2451 31.9873 35.2645 32 35.2793V37H24V35.2793ZM28 32C25.9975 32 22 33.0659 22 35.1818V39H34V35.1818C34 33.0659 30.0025 32 28 32Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}