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
<path fill-rule="evenodd" clip-rule="evenodd" d="M48 0H0V48H48V0ZM17.5547 6.16795C17.2188 5.94402 16.7812 5.94402 16.4453 6.16795L10.4453 10.168C10.1671 10.3534 10 10.6656 10 11V19C10 19.5523 10.4477 20 11 20H15V13H19V20H23C23.5523 20 24 19.5523 24 19V11C24 10.6656 23.8329 10.3534 23.5547 10.168L17.5547 6.16795ZM34.4961 12.1318C34.1887 11.9561 33.8113 11.9561 33.5039 12.1318L26.5039 16.1318C26.1923 16.3098 26 16.6411 26 17V27C26 27.5523 26.4477 28 27 28H32V20H36V28H41C41.5523 28 42 27.5523 42 27V17C42 16.6411 41.8077 16.3098 41.4961 16.1318L34.4961 12.1318ZM14.5528 24.1056L6.55279 28.1056C6.214 28.275 6 28.6212 6 29V41C6 41.5523 6.44772 42 7 42H13V33H17V42H23C23.5523 42 24 41.5523 24 41V29C24 28.6212 23.786 28.275 23.4472 28.1056L15.4472 24.1056C15.1657 23.9648 14.8343 23.9648 14.5528 24.1056Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}