import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class CoronaryCareUnit extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const CoronaryCareUnit({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M39 8H9C8.44771 8 8 8.44772 8 9V39C8 39.5523 8.44772 40 9 40H39C39.5523 40 40 39.5523 40 39V9C40 8.44771 39.5523 8 39 8ZM9 6C7.34315 6 6 7.34315 6 9V39C6 40.6569 7.34315 42 9 42H39C40.6569 42 42 40.6569 42 39V9C42 7.34315 40.6569 6 39 6H9Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.1892 20.2759C12.1892 15.9818 14.9707 12 18.7796 12C21.4227 12 23.384 13.7865 24.5946 16.3208C25.8052 13.7867 27.7664 12 30.4096 12C34.2189 12 37 15.9825 37 20.2759C37 29.4666 24.5946 36 24.5946 36C24.5946 36 16.3303 31.9109 13.2924 25.1954H17.0656L18.7399 22.2682L20.6958 29L25.2758 23.2092H29.9613C30.535 23.2092 31 22.7519 31 22.1878C31 21.6236 30.535 21.1663 29.9613 21.1663H24.2597L21.5688 24.5686L19.3698 17L15.8506 23.1525H12.564C12.3235 22.2329 12.1892 21.273 12.1892 20.2759ZM12.5541 23.1523L8 23.1526V25.1955H13.2847L12.5541 23.1523Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}