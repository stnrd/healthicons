import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class IDocumentsDenied extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const IDocumentsDenied({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M29 8L35 14H30C29.4477 14 29 13.5523 29 13V8Z" fill="#333333"/>
<path d="M22.7071 20.2929C22.3166 19.9024 21.6834 19.9024 21.2929 20.2929C20.9024 20.6834 20.9024 21.3166 21.2929 21.7071L24.5858 25L21.2929 28.2929C20.9024 28.6834 20.9024 29.3166 21.2929 29.7071C21.6834 30.0976 22.3166 30.0976 22.7071 29.7071L26 26.4142L29.2929 29.7071C29.6834 30.0976 30.3166 30.0976 30.7071 29.7071C31.0976 29.3166 31.0976 28.6834 30.7071 28.2929L27.4142 25L30.7071 21.7071C31.0976 21.3166 31.0976 20.6834 30.7071 20.2929C30.3166 19.9024 29.6834 19.9024 29.2929 20.2929L26 23.5858L22.7071 20.2929Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H48V48H0V0ZM29 5H16C14.8954 5 14 5.89543 14 7V37C14 38.1046 14.8954 39 16 39H36C37.1046 39 38 38.1046 38 37V14L29 5ZM12 11H10V38C10 40.7614 12.2386 43 15 43H34V41H15C13.3431 41 12 39.6569 12 38V11Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}