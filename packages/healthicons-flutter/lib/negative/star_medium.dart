import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class StarMedium extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const StarMedium({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M48 0H0V48H48V0ZM24.8923 11.0604C24.5273 10.3132 23.4727 10.3132 23.1077 11.0604L19.5523 18.3378C19.4074 18.6345 19.1272 18.8402 18.8031 18.8877L10.8531 20.0547C10.0369 20.1745 9.71099 21.1878 10.3016 21.7694L16.0543 27.4341C16.2888 27.665 16.3958 27.9978 16.3404 28.3239L14.9824 36.3226C14.843 37.1438 15.6962 37.77 16.4263 37.3823L23.5369 33.6058C23.8268 33.4519 24.1732 33.4519 24.4631 33.6058L31.5737 37.3823C32.3038 37.77 33.157 37.1438 33.0176 36.3226L31.6596 28.3239C31.6042 27.9978 31.7112 27.665 31.9457 27.4341L37.6984 21.7694C38.289 21.1878 37.9631 20.1745 37.1469 20.0547L29.1969 18.8877C28.8728 18.8402 28.5926 18.6345 28.4477 18.3378L24.8923 11.0604Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}