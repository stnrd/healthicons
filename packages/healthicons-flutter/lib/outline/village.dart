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
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.4453 6.16795C16.7812 5.94402 17.2188 5.94402 17.5547 6.16795L23.5547 10.1679C23.8329 10.3534 24 10.6656 24 11V19C24 19.5523 23.5523 20 23 20H11C10.4477 20 10 19.5523 10 19V11C10 10.6656 10.1671 10.3534 10.4453 10.1679L16.4453 6.16795ZM16 18H18V14H16V18ZM20 18V13C20 12.4477 19.5523 12 19 12H15C14.4477 12 14 12.4477 14 13V18H12V11.5352L17 8.20185L22 11.5352V18H20Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M34.4961 12.1318C34.1887 11.9561 33.8113 11.9561 33.5039 12.1318L26.5039 16.1318C26.1923 16.3098 26 16.6411 26 17V27C26 27.5523 26.4477 28 27 28H41C41.5523 28 42 27.5523 42 27V17C42 16.6411 41.8077 16.3098 41.4961 16.1318L34.4961 12.1318ZM37 26H40V17.5803L34 14.1518L28 17.5803V26H31V20C31 19.4477 31.4477 19 32 19H36C36.5523 19 37 19.4477 37 20V26ZM35 26V21H33V26H35Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M23.4472 28.1056L15.4472 24.1056C15.1657 23.9648 14.8343 23.9648 14.5528 24.1056L6.55279 28.1056C6.214 28.275 6 28.6212 6 29V41C6 41.5523 6.44772 42 7 42H23C23.5523 42 24 41.5523 24 41V29C24 28.6212 23.786 28.275 23.4472 28.1056ZM16 34V40H14V34H16ZM18 33V40H22V29.618L15 26.118L8 29.618V40H12V33C12 32.4477 12.4477 32 13 32H17C17.5523 32 18 32.4477 18 33Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}