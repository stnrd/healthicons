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
<path fill-rule="evenodd" clip-rule="evenodd" d="M6 7C6 6.44771 6.44772 6 7 6H16C16.5523 6 17 6.44772 17 7V16C17 16.5523 16.5523 17 16 17H7C6.44771 17 6 16.5523 6 16V7ZM31 32C31 31.4477 31.4477 31 32 31H41C41.5523 31 42 31.4477 42 32V41C42 41.5523 41.5523 42 41 42H32C31.4477 42 31 41.5523 31 41V32ZM30.3913 28.9771L27.2071 25.7929L25.7929 27.2071L28.9771 30.3913L30.3913 28.9771ZM21.6774 20.2632L25.6545 24.2403L24.2403 25.6545L20.2632 21.6774V25.8947H18.2632V18.2632H25.8947V20.2632H21.6774Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}