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
<path fill-rule="evenodd" clip-rule="evenodd" d="M9 6C7.34315 6 6 7.34315 6 9V39C6 40.6569 7.34315 42 9 42H39C40.6569 42 42 40.6569 42 39V9C42 7.34315 40.6569 6 39 6H9ZM18.7796 12C14.9707 12 12.1892 15.9818 12.1892 20.2759C12.1892 21.273 12.3235 22.2329 12.564 23.1525H15.8506L19.3698 17L21.5688 24.5686L24.2597 21.1663H29.9613C30.535 21.1663 31 21.6236 31 22.1878C31 22.7519 30.535 23.2092 29.9613 23.2092H25.2758L20.6958 29L18.7399 22.2682L17.0656 25.1954H13.2924C16.3303 31.9109 24.5946 36 24.5946 36C24.5946 36 37 29.4666 37 20.2759C37 15.9825 34.2189 12 30.4096 12C27.7664 12 25.8052 13.7867 24.5946 16.3208C23.384 13.7865 21.4227 12 18.7796 12ZM10 23.1526L12.5541 23.1523L13.2847 25.1955H10V23.1526Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}