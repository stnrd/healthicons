import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class IDocumentsAccepted extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const IDocumentsAccepted({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H48V48H0V0ZM29 5H16C14.8954 5 14 5.89543 14 7V37C14 38.1046 14.8954 39 16 39H36C37.1046 39 38 38.1046 38 37V14L29 5ZM29 8L35 14H30C29.4477 14 29 13.5523 29 13V8ZM32.7071 22.7071C33.0976 22.3166 33.0976 21.6834 32.7071 21.2929C32.3166 20.9024 31.6834 20.9024 31.2929 21.2929L24 28.5858L20.7071 25.2929C20.3166 24.9024 19.6834 24.9024 19.2929 25.2929C18.9024 25.6834 18.9024 26.3166 19.2929 26.7071L24 31.4142L32.7071 22.7071ZM12 11H10V38C10 40.7614 12.2386 43 15 43H34V41H15C13.3431 41 12 39.6569 12 38V11Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}