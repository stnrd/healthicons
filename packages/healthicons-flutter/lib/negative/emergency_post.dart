import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class EmergencyPost extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const EmergencyPost({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.7575 31.9704C19.2217 31.8364 18.8959 31.2935 19.0299 30.7577L19.7193 28H17C16.4477 28 16 27.5523 16 27C16 26.4477 16.4477 26 17 26H20.2193L21.0299 22.7577C21.1638 22.2219 21.7067 21.8961 22.2425 22.0301C22.7783 22.164 23.1041 22.707 22.9701 23.2428L22.2808 26H25C25.5523 26 26 26.4477 26 27C26 27.5523 25.5523 28 25 28H21.7808L20.9701 31.2428C20.8362 31.7786 20.2933 32.1043 19.7575 31.9704Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H48V48H0V0ZM43.293 32.9522C43.3086 32.9473 43.3241 32.942 43.3395 32.9363C43.8657 32.7424 44.1322 32.166 43.9349 31.6489L38 17.9623V9H29V15H36V17H11.9381C10.5901 17 9.40179 17.869 9.01446 19.138L4.13073 33.138C3.54321 35.0628 5.00969 37 7.05433 37H29.2589C30.6069 37 31.7952 36.131 32.1825 34.862L36.9848 21.1289L41.592 31.3776L34.5 33.5L33.5 36L43.2941 32.9557L43.293 32.9522Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}