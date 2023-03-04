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
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H48V48H0V0ZM25.381 6.57309C24.6205 5.80897 23.3795 5.80897 22.619 6.57309L7.33556 21.9307C6.85399 22.4146 6.8733 23.0933 7.50716 23.3503C8.07813 23.5818 8.96342 23.8525 10.3254 24.1068L22 10L13.5467 24.5584C15.2868 24.739 17.4512 24.8818 20.1414 24.9522L24 10L24 25C34.634 25 38.8556 24.0141 40.4928 23.3503C41.1267 23.0933 41.146 22.4146 40.6644 21.9307L25.381 6.57309ZM24 26.8629C18.4539 26.8629 14.6305 26.5851 12 26.2192V40.5658C12 42.0001 20 42.0001 20 42.0001V36.0001C20 34.0877 21.6923 32.0001 24 32.0001C26.3077 32.0001 28 34.0877 28 36.0001V42.0001C28 42.0001 36 42.0001 36 40.5658V26.2192C33.3695 26.5851 29.5461 26.8629 24 26.8629Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}