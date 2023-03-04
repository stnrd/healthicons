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
<path fill-rule="evenodd" clip-rule="evenodd" d="M42 18C42 16.3431 40.6569 15 39 15H9C7.34315 15 6 16.3431 6 18V36C6 37.6569 7.34315 39 9 39H39C40.6569 39 42 37.6569 42 36V18ZM35.5 25C35.5 26.6569 34.1569 28 32.5 28C30.8431 28 29.5 26.6569 29.5 25C29.5 23.3431 30.8431 22 32.5 22C34.1569 22 35.5 23.3431 35.5 25ZM31 30C29.3431 30 28 31.3431 28 33V35H37V33C37 31.3431 35.6569 30 34 30H31ZM18.5 25C18.5 26.6569 17.1569 28 15.5 28C13.8431 28 12.5 26.6569 12.5 25C12.5 23.3431 13.8431 22 15.5 22C17.1569 22 18.5 23.3431 18.5 25ZM14 30C12.3431 30 11 31.3431 11 33V35H20V33C20 31.3431 18.6569 30 17 30H14ZM26 27.5C26 28.6046 25.1046 29.5 24 29.5C22.8954 29.5 22 28.6046 22 27.5C22 26.3954 22.8954 25.5 24 25.5C25.1046 25.5 26 26.3954 26 27.5ZM24 31C22.3431 31 21 32.3431 21 34V35H27V34C27 32.3431 25.6569 31 24 31Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.99997 11H22.0824C22.4473 11 22.7832 11.1987 22.9589 11.5184L26.805 18.5185C27.1712 19.1849 26.689 20 25.9286 20H8.99996C8.44768 20 7.99996 19.5523 7.99996 19V12C7.99996 11.4477 8.44768 11 8.99997 11ZM22.0824 9C23.177 9 24.1846 9.59609 24.7117 10.5554L28.5578 17.5554C29.6564 19.5547 28.2098 22 25.9286 22H8.99996C7.34311 22 5.99996 20.6569 5.99996 19V12C5.99996 10.3431 7.34311 9 8.99997 9H22.0824Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8 15H27.5V17H8V15Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}