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
<path d="M24.8718 15L22.9589 11.5184C22.7832 11.1987 22.4473 11 22.0825 11H9C8.44772 11 8 11.4477 8 12V15H24.8718Z" fill="#333333"/>
<path d="M12.5 25C12.5 23.3431 13.8431 22 15.5 22C17.1569 22 18.5 23.3431 18.5 25C18.5 26.6569 17.1569 28 15.5 28C13.8431 28 12.5 26.6569 12.5 25Z" fill="#333333"/>
<path d="M32.5 28C34.1569 28 35.5 26.6569 35.5 25C35.5 23.3431 34.1569 22 32.5 22C30.8431 22 29.5 23.3431 29.5 25C29.5 26.6569 30.8431 28 32.5 28Z" fill="#333333"/>
<path d="M28 33C28 31.3431 29.3431 30 31 30H34C35.6569 30 37 31.3431 37 33V35H28V33Z" fill="#333333"/>
<path d="M11 33C11 31.3431 12.3431 30 14 30H17C18.6569 30 20 31.3431 20 33V35H11V33Z" fill="#333333"/>
<path d="M24 29.5C25.1046 29.5 26 28.6046 26 27.5C26 26.3954 25.1046 25.5 24 25.5C22.8954 25.5 22 26.3954 22 27.5C22 28.6046 22.8954 29.5 24 29.5Z" fill="#333333"/>
<path d="M21 34C21 32.3431 22.3431 31 24 31C25.6569 31 27 32.3431 27 34V35H21V34Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M48 0H0V48H48V0ZM39 15C40.6569 15 42 16.3431 42 18V36C42 37.6569 40.6569 39 39 39H9C7.34315 39 6 37.6569 6 36V12C6 10.3431 7.34315 9 9 9H22.0825C23.177 9 24.1847 9.59609 24.7117 10.5554L27.1538 15H39Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}