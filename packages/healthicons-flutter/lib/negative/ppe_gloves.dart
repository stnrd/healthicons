import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class PpeGloves extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const PpeGloves({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M48 0H0V48H48V0ZM25.5 5C24.6716 5 24 5.67157 24 6.5V19H23V8.5C23 7.67157 22.3284 7 21.5 7C20.6716 7 20 7.67157 20 8.5V19H19V10.5C19 9.67157 18.3284 9 17.5 9C16.6716 9 16 9.67157 16 10.5V19V27C16 29.1814 17.1641 31.0908 18.9049 32.1411L18 43H30L29.0908 32.0898C30.5346 31.3913 31.7907 30.314 32.7073 28.9391L36.9566 22.5651C37.5329 21.7007 37.2993 20.5329 36.4349 19.9566C35.6231 19.4154 34.5322 19.5848 33.9227 20.3466L31 24V19V8.5C31 7.67157 30.3284 7 29.5 7C28.6716 7 28 7.67157 28 8.5V19H27V6.5C27 5.67157 26.3284 5 25.5 5ZM14 12H12V28C12 30.286 13.1808 32.6467 14.9431 33.9885L14.205 41H16.2161L17.0611 32.9723L16.5166 32.6438C15.0919 31.7842 14 29.8502 14 28V12Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}