import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Tongue extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Tongue({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M40 24C40 30.8399 35.7081 36.6773 29.6705 38.9661C29.884 38.3502 30 37.6886 30 37V35.7281C31.1578 35.0734 32.4287 33.3495 33.3994 31.8107C34.1926 30.5533 33.2507 29 31.7639 29H16.2361C14.7493 29 13.8074 30.5533 14.6006 31.8107C15.5713 33.3495 16.8422 35.0734 18 35.7281V37C18 37.6886 18.116 38.3502 18.3296 38.9661C12.2919 36.6773 8 30.8399 8 24C8 15.1634 15.1634 8 24 8C32.8366 8 40 15.1634 40 24ZM30.5 26C31.8807 26 33 24.2091 33 22C33 19.7909 31.8807 18 30.5 18C29.1193 18 28 19.7909 28 22C28 24.2091 29.1193 26 30.5 26ZM20 22C20 24.2091 18.8807 26 17.5 26C16.1193 26 15 24.2091 15 22C15 19.7909 16.1193 18 17.5 18C18.8807 18 20 19.7909 20 22Z" fill="#333333"/>
<path d="M20 31V37C20 39.2091 21.7909 41 24 41C26.2091 41 28 39.2091 28 37V31H25V35C25 35.5523 24.5523 36 24 36C23.4477 36 23 35.5523 23 35V31H20Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M48 0H0V48H48V0ZM42 24C42 32.6113 35.953 39.8102 27.8737 41.5821C26.8284 42.4667 25.4765 43 24 43C22.5235 43 21.1716 42.4667 20.1263 41.5821C12.047 39.8102 6 32.6113 6 24C6 14.0589 14.0589 6 24 6C33.9411 6 42 14.0589 42 24Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}