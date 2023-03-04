import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Home extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Home({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M4 37C4 36.4477 4.44772 36 5 36H41C41.5523 36 42 36.4477 42 37C42 37.5523 41.5523 38 41 38H5C4.44772 38 4 37.5523 4 37Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 23.1606V36H36V23.1606L24 16.3035L12 23.1606ZM10 22V38H38V22L24 14L10 22Z" fill="#333333"/>
<path d="M28 25H34V36H28V25Z" fill="#333333"/>
<path d="M14 25H25V31H14V25Z" fill="#333333"/>
<path d="M32 14.8182V12H35V17L32 14.8182Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M31 12C31 11.4477 31.4477 11 32 11H35C35.5523 11 36 11.4477 36 12V17C36 17.3761 35.7889 17.7204 35.4538 17.8911C35.1186 18.0618 34.716 18.03 34.4118 17.8087L31.4118 15.6269C31.1531 15.4387 31 15.1381 31 14.8182V12ZM33 13V14.309L34 15.0362V13H33Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M23.493 10.1381C23.8059 9.95398 24.1941 9.95398 24.507 10.1381L42.369 20.6451L41.3549 22.369L24 12.1602L6.64509 22.369L5.63105 20.6451L23.493 10.1381Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}