import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class PalmBranchesRoof extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const PalmBranchesRoof({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M48 0H0V48H48V0ZM24.7455 9.13961C24.8499 9.18041 24.9513 9.23017 25.0483 9.28886L26.0001 7.18734C26.1771 6.79647 26.7057 6.67876 27.145 6.93239C27.5843 7.18602 27.7467 7.70265 27.4967 8.0514L26.003 10.1351L40.6644 24.0922C41.146 24.5506 41.1267 25.1936 40.4928 25.4371C38.8556 26.066 34.634 27 24 27C13.366 27 9.14442 26.066 7.50716 25.4371C6.8733 25.1936 6.85399 24.5506 7.33556 24.0922L22.0938 10.0429L20.6704 8.05505C20.4193 7.70434 20.5807 7.18602 21.02 6.93239C21.4593 6.67876 21.9888 6.79815 22.167 7.19099L23.085 9.21515C23.1404 9.18725 23.197 9.16207 23.2545 9.13961L23.0035 6.83045C22.9549 6.38341 23.415 6 24 6C24.585 6 25.0451 6.38341 24.9965 6.83045L24.7455 9.13961ZM12 29.4071C14.6019 29.7427 18.4173 30.0001 24 30.0001C29.5827 30.0001 33.3981 29.7427 36 29.4071V40.5658C36 42 28 42 28 42V37C28 35.0877 26.3077 33 24 33C21.6923 33 20 35.0877 20 37V42C20 42 12 42 12 40.5658V29.4071Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}