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
<path fill-rule="evenodd" clip-rule="evenodd" d="M16 5H29L38 14V37C38 38.1046 37.1046 39 36 39H16C14.8954 39 14 38.1046 14 37V7C14 5.89543 14.8954 5 16 5ZM35 14L29 8V13C29 13.5523 29.4477 14 30 14H35ZM21.2929 20.2929C21.6834 19.9024 22.3166 19.9024 22.7071 20.2929L26 23.5858L29.2929 20.2929C29.6834 19.9024 30.3166 19.9024 30.7071 20.2929C31.0976 20.6834 31.0976 21.3166 30.7071 21.7071L27.4142 25L30.7071 28.2929C31.0976 28.6834 31.0976 29.3166 30.7071 29.7071C30.3166 30.0976 29.6834 30.0976 29.2929 29.7071L26 26.4142L22.7071 29.7071C22.3166 30.0976 21.6834 30.0976 21.2929 29.7071C20.9024 29.3166 20.9024 28.6834 21.2929 28.2929L24.5858 25L21.2929 21.7071C20.9024 21.3166 20.9024 20.6834 21.2929 20.2929Z" fill="#333333"/>
<path d="M12 11H10V38C10 40.7614 12.2386 43 15 43H34V41H15C13.3431 41 12 39.6569 12 38V11Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}