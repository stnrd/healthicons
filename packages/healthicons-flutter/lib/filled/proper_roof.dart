import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class ProperRoof extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const ProperRoof({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M25.381 6.57309C24.6205 5.80897 23.3795 5.80897 22.619 6.57309L7.33556 21.9307C6.85399 22.4146 6.8733 23.0933 7.50716 23.3503C8.07813 23.5818 8.96342 23.8525 10.3254 24.1068L22 10L13.5467 24.5584C15.2868 24.739 17.4512 24.8818 20.1414 24.9522L24 10L24 25C34.634 25 38.8556 24.0141 40.4928 23.3503C41.1267 23.0933 41.146 22.4146 40.6644 21.9307L25.381 6.57309Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.0002 26.2192C14.6306 26.5851 18.454 26.8629 24 26.8629C29.5462 26.8629 33.3697 26.585 36.0002 26.2191V40.5658C36.0002 42 28.0002 42 28.0002 42V36C28.0002 34.0877 26.3079 32 24.0002 32C21.6925 32 20.0002 34.0877 20.0002 36V42C20.0002 42 12.0002 42 12.0002 40.5658V26.2192Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}