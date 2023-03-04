import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class UiFolderFamily extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const UiFolderFamily({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M35.5 24C35.5 25.6569 34.1569 27 32.5 27C30.8431 27 29.5 25.6569 29.5 24C29.5 22.3431 30.8431 21 32.5 21C34.1569 21 35.5 22.3431 35.5 24Z" fill="#333333"/>
<path d="M28 32C28 30.3431 29.3431 29 31 29H34C35.6569 29 37 30.3431 37 32V34H28V32Z" fill="#333333"/>
<path d="M18.5 24C18.5 25.6569 17.1569 27 15.5 27C13.8431 27 12.5 25.6569 12.5 24C12.5 22.3431 13.8431 21 15.5 21C17.1569 21 18.5 22.3431 18.5 24Z" fill="#333333"/>
<path d="M11 32C11 30.3431 12.3431 29 14 29H17C18.6569 29 20 30.3431 20 32V34H11V32Z" fill="#333333"/>
<path d="M26 26.5C26 27.6046 25.1046 28.5 24 28.5C22.8954 28.5 22 27.6046 22 26.5C22 25.3954 22.8954 24.5 24 24.5C25.1046 24.5 26 25.3954 26 26.5Z" fill="#333333"/>
<path d="M21 33C21 31.3431 22.3431 30 24 30C25.6569 30 27 31.3431 27 33V34H21V33Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M25.9707 17H39C39.5523 17 40 17.4477 40 18V36C40 36.5523 39.5523 37 39 37H9C8.44772 37 8 36.5523 8 36V12C8 11.4477 8.44772 11 9 11H22.0825C22.4473 11 22.7832 11.1987 22.9589 11.5184L24.7117 10.5554C24.1847 9.59609 23.177 9 22.0825 9H9C7.34315 9 6 10.3431 6 12V36C6 37.6569 7.34315 39 9 39H39C40.6569 39 42 37.6569 42 36V18C42 16.3431 40.6569 15 39 15H27.1538L24.7117 10.5554L22.9589 11.5184L25.9707 17Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8 15H27.5V17H8V15Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}