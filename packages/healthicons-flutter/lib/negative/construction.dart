import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Construction extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Construction({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M48 0H0V48H48V0ZM17.9524 4C14.1083 4.02561 11 7.14989 11 11H13C13 8.25447 15.2129 6.02578 17.9524 6.00022V9C17.9524 10.1046 18.8478 11 19.9524 11H21.7143V20.2525L20.5238 21.4429V41.2857C20.5238 42.9426 21.867 44.2857 23.5238 44.2857H25.4762C27.133 44.2857 28.4762 42.9426 28.4762 41.2857V21.4429L27.2857 20.2525V11H29.9524C30.5047 11 30.9524 10.5523 30.9524 10V9H32V11H36V4H32V5H30.9524C30.9524 4.44772 30.5047 4 29.9524 4H17.9524ZM25.2857 11H23.7143V21.0809L22.5238 22.2714V41.2857C22.5238 41.838 22.9715 42.2857 23.5238 42.2857H25.4762C26.0285 42.2857 26.4762 41.838 26.4762 41.2857V22.2714L25.2857 21.0809V11Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}