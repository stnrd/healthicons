import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class SurgicalSterilization extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const SurgicalSterilization({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M48 0H0V48H48V0ZM24 36C24.8063 36 25.5568 36.2385 26.1849 36.6489L28.0015 4L29 4.05555L29.9985 4L31.8151 36.6489C32.4432 36.2385 33.1937 36 34 36C36.2091 36 38 37.7909 38 40C38 42.2091 36.2091 44 34 44C31.8009 44 30.0163 42.2254 30.0001 40.0302L29.7765 36.0122L28.2235 36.0122L27.9999 40.0302C27.9836 42.2254 26.1991 44 24 44C21.7909 44 20 42.2091 20 40C20 37.7909 21.7909 36 24 36ZM29 22.0558L29.6653 34.0122H28.3347L29 22.0558ZM29 19.0348C29.5523 19.0348 30 18.5877 30 18.0362C30 17.4847 29.5523 17.0376 29 17.0376C28.4477 17.0376 28 17.4847 28 18.0362C28 18.5877 28.4477 19.0348 29 19.0348ZM24 38C22.8954 38 22 38.8954 22 40C22 41.1046 22.8954 42 24 42C25.1046 42 26 41.1046 26 40C26 38.8954 25.1046 38 24 38ZM32 40C32 38.8954 32.8954 38 34 38C35.1046 38 36 38.8954 36 40C36 41.1046 35.1046 42 34 42C32.8954 42 32 41.1046 32 40ZM15 15V4C15 4 11.522 6.26067 11.0523 14.998C10.993 16.101 11.8954 17 13 17C14.1046 17 15 16.1046 15 15ZM13.5 19C12.6716 19 12 19.6716 12 20.5V23.5858L15 20.5858V20.5C15 19.6716 14.3284 19 13.5 19ZM12 28.0858V26.4142L15 23.4142V25.0858L12 28.0858ZM12 30.9142V32.5858L15 29.5858V27.9142L12 30.9142ZM12 42.5V35.4142L15 32.4142V42.5C15 43.3284 14.3284 44 13.5 44C12.6716 44 12 43.3284 12 42.5Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}