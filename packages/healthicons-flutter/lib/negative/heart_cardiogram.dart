import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class HeartCardiogram extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const HeartCardiogram({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H48V48H0V0ZM16.0312 8C10.8117 8 7 13.3091 7 19.0345C7 20.5731 7.24636 22.0452 7.67977 23.4443H4V25.4443H8.44308C8.14855 24.7956 7.89176 24.1286 7.67977 23.4443L7.78253 23.4444H17.4152L20.8032 17.4212L22.9203 24.8308L25.5109 21.5H32V23.5H26.4891L22.0797 29.1692L20.1968 22.5788L18.5848 25.4444L8.44308 25.4443C12.5487 34.4871 24 40 24 40C24 40 41 31.2888 41 19.0345C41 13.31 37.1889 8 31.9688 8C28.3466 8 25.6589 10.3822 24 13.7611C22.341 10.382 19.6533 8 16.0312 8Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}