import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class CallCentre extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const CallCentre({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M21.407 15.0924C23.9122 15.5612 25.8082 17.7592 25.8082 20.4C25.8082 21.5193 25.4675 22.5591 24.8843 23.4214L38.7179 34.1598C39.0277 33.999 39.3796 33.9082 39.7528 33.9082C40.9954 33.9082 42.0028 34.9156 42.0028 36.1582C42.0028 37.4008 40.9954 38.4082 39.7528 38.4082C38.5102 38.4082 37.5028 37.4008 37.5028 36.1582C37.5028 36.0272 37.514 35.8988 37.5355 35.7739L23.4652 24.8516C22.5957 25.4498 21.5423 25.8 20.407 25.8C17.424 25.8 15.0059 23.3823 15.0059 20.4C15.0059 17.7593 16.9018 15.5613 19.407 15.0924L19.407 6H21.407L21.407 15.0924ZM22.2058 20.4C22.2058 21.3941 21.3999 22.2 20.4058 22.2C19.4117 22.2 18.6058 21.3941 18.6058 20.4C18.6058 19.4059 19.4117 18.6 20.4058 18.6C21.3999 18.6 22.2058 19.4059 22.2058 20.4Z" fill="#333333"/>
<path d="M27.6302 20.3838C27.6302 17.4693 25.8982 14.9593 23.407 13.8265L23.407 6.10596C27.6959 6.48295 29.9242 7.83422 31.9185 9.68342C32.0193 9.77691 32.1181 9.86765 32.2147 9.95633L32.2157 9.95727C33.0654 10.7376 33.7414 11.3583 34.0904 12.288C35.3931 15.7583 37.2059 20.5837 38.3244 23.5604C38.8157 24.8682 37.8481 26.2613 36.4511 26.2613H34.8187V28.5989L27.2439 22.7165C27.4943 21.9849 27.6302 21.2002 27.6302 20.3838Z" fill="#333333"/>
<path d="M17.407 13.8463L17.407 6.24136C8.41785 7.59417 6.00386 14.3005 6.00391 17.9747C6.00398 23.7418 9.68703 28.2157 11.4133 30.008V41.9996H28.5258V35.4877H32.8187C33.1213 35.4877 33.4083 35.4205 33.6654 35.3001L23.0804 27.08C22.2597 27.4051 21.3651 27.5838 20.4287 27.5838C16.4514 27.5838 13.2271 24.3602 13.2271 20.3838C13.2271 17.4862 14.9392 14.9884 17.407 13.8463Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}