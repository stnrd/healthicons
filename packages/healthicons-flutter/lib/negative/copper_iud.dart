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
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H48V48H0V0ZM18.868 6L23 6V15.257L25 16.257V6H29.132L28.132 4H25C24.4477 4 24 4.44772 24 5C24 4.44772 23.5523 4 23 4H19.868L18.868 6ZM17.632 4H15.868L14.868 6H16.632L17.632 4ZM11 4H13.632L12.632 6H11C10.4477 6 10 5.55229 10 5C10 4.44772 10.4477 4 11 4ZM25 18.493V20.257L23 19.257L23 17.493L25 18.493ZM23 21.493V23.257L25 24.257V22.493L23 21.493ZM23 36.126V25.493L25 26.493V36.126C26.7252 36.5701 28 38.1362 28 40C28 42.2091 26.2091 44 24 44C21.7909 44 20 42.2091 20 40C20 38.1362 21.2748 36.5701 23 36.126ZM24 38C22.8954 38 22 38.8954 22 40C22 41.1046 22.8954 42 24 42C25.1046 42 26 41.1046 26 40C26 38.8954 25.1046 38 24 38ZM30.368 4H32.132L33.132 6H31.368L30.368 4ZM37 4H34.368L35.368 6H37C37.5523 6 38 5.55229 38 5C38 4.44772 37.5523 4 37 4Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}