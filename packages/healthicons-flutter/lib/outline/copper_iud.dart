import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class CopperIud extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const CopperIud({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M23 6L18.868 6L19.868 4H23C23.5523 4 24 4.44772 24 5C24 4.44772 24.4477 4 25 4H28.132L29.132 6L25 6V16.257L23 15.257V6Z" fill="#333333"/>
<path d="M10 5C10 5.55228 10.4477 6 11 6H12.632L13.632 4H11C10.4477 4 10 4.44772 10 5Z" fill="#333333"/>
<path d="M14.868 6L15.868 4H17.632L16.632 6H14.868Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M20 40C20 38.1362 21.2748 36.5701 23 36.126V25.493L25 26.493V36.126C26.7252 36.5701 28 38.1362 28 40C28 42.2091 26.2091 44 24 44C21.7909 44 20 42.2091 20 40ZM24 38C22.8954 38 22 38.8954 22 40C22 41.1046 22.8954 42 24 42C25.1046 42 26 41.1046 26 40C26 38.8954 25.1046 38 24 38Z" fill="#333333"/>
<path d="M25 20.257L23 19.257V17.493L25 18.493V20.257Z" fill="#333333"/>
<path d="M25 22.493L23 21.493V23.257L25 24.257V22.493Z" fill="#333333"/>
<path d="M38 5C38 4.44772 37.5523 4 37 4H34.368L35.368 6H37C37.5523 6 38 5.55228 38 5Z" fill="#333333"/>
<path d="M31.368 6L30.368 4H32.132L33.132 6H31.368Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}