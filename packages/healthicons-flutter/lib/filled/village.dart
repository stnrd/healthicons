import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Village extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Village({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.4453 6.16795C16.7812 5.94402 17.2188 5.94402 17.5547 6.16795L23.5547 10.1679C23.8329 10.3534 24 10.6656 24 11V19C24 19.5523 23.5523 20 23 20H19V13H15V20H11C10.4477 20 10 19.5523 10 19V11C10 10.6656 10.1671 10.3534 10.4453 10.1679L16.4453 6.16795Z" fill="#333333"/>
<path d="M33.5039 12.1318C33.8113 11.9561 34.1887 11.9561 34.4961 12.1318L41.4961 16.1318C41.8077 16.3098 42 16.6411 42 17V27C42 27.5523 41.5523 28 41 28H36V20H32V28H27C26.4477 28 26 27.5523 26 27V17C26 16.6411 26.1923 16.3098 26.5039 16.1318L33.5039 12.1318Z" fill="#333333"/>
<path d="M6.55279 28.1056L14.5528 24.1056C14.8343 23.9648 15.1657 23.9648 15.4472 24.1056L23.4472 28.1056C23.786 28.275 24 28.6212 24 29V41C24 41.5523 23.5523 42 23 42H17V33H13V42H7C6.44772 42 6 41.5523 6 41V29C6 28.6212 6.214 28.275 6.55279 28.1056Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}