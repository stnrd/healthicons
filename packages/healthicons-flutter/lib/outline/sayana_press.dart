import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class SayanaPress extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const SayanaPress({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M25 4L23 6V11H22C21.4477 11 21 11.4477 21 12V17H19V19H16C13.7909 19 12 20.7909 12 23V40C12 42.2091 13.7909 44 16 44H32C34.2091 44 36 42.2091 36 40V23C36 20.7909 34.2091 19 32 19H29V17H27V12C27 11.4477 26.5523 11 26 11H25V4ZM25 11H23V19H25V11ZM14 23C14 21.8954 14.8954 21 16 21H22C22 21.5523 22.4477 22 23 22V25.083C20.1623 25.559 18 28.027 18 31C18 33.973 20.1623 36.441 23 36.917V39H25V36.917C27.8377 36.441 30 33.973 30 31C30 28.027 27.8377 25.559 25 25.083V22C25.5523 22 26 21.5523 26 21H32C33.1046 21 34 21.8954 34 23V40C34 41.1046 33.1046 42 32 42H16C14.8954 42 14 41.1046 14 40V23ZM28 31C28 33.2091 26.2091 35 24 35C21.7909 35 20 33.2091 20 31C20 28.7909 21.7909 27 24 27C26.2091 27 28 28.7909 28 31Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}