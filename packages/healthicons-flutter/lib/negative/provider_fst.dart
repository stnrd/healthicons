import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class ProviderFst extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const ProviderFst({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M48 0H0V48H48V0ZM7 6C6.44772 6 6 6.44771 6 7V16C6 16.5523 6.44771 17 7 17H16C16.5523 17 17 16.5523 17 16V7C17 6.44772 16.5523 6 16 6H7ZM32 31C31.4477 31 31 31.4477 31 32V41C31 41.5523 31.4477 42 32 42H41C41.5523 42 42 41.5523 42 41V32C42 31.4477 41.5523 31 41 31H32ZM27.2071 25.7929L30.3913 28.9771L28.9771 30.3913L25.7929 27.2071L27.2071 25.7929ZM25.6545 24.2403L21.6774 20.2632H25.8947V18.2632H19.2632H18.2632V19.2632V25.8947H20.2632V21.6774L24.2403 25.6545L25.6545 24.2403Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}